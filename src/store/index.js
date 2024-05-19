import Vue from "vue";
import Vuex from "vuex";

// Register Vuex as a plugin with Vue
Vue.use(Vuex);

export default new Vuex.Store({
  // State: Defines the reactive data properties
  state: {
    // Holds the fetched data
    data: []
  },

  /**
   * Sets the state data with new data
   * @param {Object} state - The current state
   * @param {Array} newData - The new data to set
   */
  mutations: {
    setData(state, newData) {
      state.data = newData;
    },
  },

  // Actions: functions to perform operations and commit mutations
  actions: {
    /**
     * Fetches data from an API and commits a mutation to set the state data
     * @param {Function} commit - Vuex commit function
     */
    async fetchData({ commit }) {
      try {
        // Fetch data from the API
        const response = await fetch('https://random-data-api.com/api/v3/projects/d3748216-d0e1-4694-9cac-31a80cdacc41?api_key=PDbsDdw8ou5x_Z4El246hw', {
          headers: {
            'Authorization': 'Bearer PDbsDdw8ou5x_Z4El246hw'
          }
        });

        if (!response.ok) {
          throw new Error('It was not possible to fetch the information');
        }

        const json = await response.json();

        // Commit the setData mutation with the fetched data
        commit('setData', json.arr);
        
      } catch (error) {
        // Log the error and throw a new error with a custom message
        console.error(error.message);
        throw new Error({ error: error.message });
      }
    },
  }
});
