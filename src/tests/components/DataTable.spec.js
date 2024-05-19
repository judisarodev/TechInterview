/* eslint-disable */
import Vuex from 'vuex';
import Vue from 'vue';
import Vuetify from 'vuetify';
import DataTable from './../../components/DataTable.vue'; 
import { shallowMount, createLocalVue } from '@vue/test-utils';

// Vue and Vuetify set up
Vue.use(Vuex); 
Vue.use(Vuetify);
const localVue = createLocalVue();
localVue.use(Vuex);

describe('Should render Data Table and test it', () => {
  let actions;
  let state;
  let store;

  // Before each test case setup
  beforeEach(() => {
    // Defining state with sample data
    state = {
      data: [
        { first_name: 'John', last_name: 'Doe', city: 'New York', gender: 'Male', tech_skill: 'Vue.js', phone_number: '1234567890', job_title: 'Developer' },
        { first_name: 'Mary', last_name: 'Jones', city: 'Las Vegas', gender: 'Female', tech_skill: 'Node.js', phone_number: '138377282', job_title: 'QA' },
      ],
    };

    // Defining actions with a mock implementation
    actions = {
      fetchData: jest.fn().mockImplementation(({ commit }) => {
        commit('setData', state.data);
      }),
    };

    // Creating Vuex store instance
    store = new Vuex.Store({
      state,
      actions,
      mutations: {
        setData(state, data) {
          state.data = data;
        },
      },
    });
  });

  it('Filters employees based on search', async () => {

    // ShallowMount have same behavour than mount
    // The big difference is that ShallowMount does not render child components
    // So it makes it easier to test the parent component
    const wrapper = shallowMount(DataTable, { store, localVue });
    wrapper.setData({ search: 'John' });
    await wrapper.vm.$nextTick();
    await wrapper.vm.onChangeSearch();
    expect(wrapper.vm.employees).toEqual([state.data[0]]);
  });

  it('fetches data when component is mounted', () => {
    shallowMount(DataTable, { store, localVue });
    expect(actions.fetchData).toHaveBeenCalled();
  });
});
