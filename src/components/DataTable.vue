<template>
  <!-- Container for the data table -->
  <v-container>
    
    <v-row>
      <br>
      <v-col col="12">
        <v-card>
          <v-row>
            <!-- Column for the title -->
            <v-col>
              <v-card-title>{{ title }}</v-card-title>
            </v-col>

            <!-- Column for the search input -->
            <v-col class="d-flex justify-end mr-5">
              <v-form>
                <v-text-field
                v-model="search"
                label="Search"
                @input="onChangeSearch"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>

          <!-- Data table -->
          <v-data-table
          :headers="headers"
          :items="employees">
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  // Computed properties (those ones that change over time and get reactivelly updated on the view)
  computed: {
    ...mapState(['data']),
  },

  methods:{
    ...mapActions(['fetchData']),

    /**
     * Filter employees based on search input
     * @param {string} search - Search input value
     */
    filteredEmployees(search = this.search) {
      if(search){
        this.employees = this.employees.filter(employee => {
          return (
            employee.first_name.toLowerCase().includes(this.search.toLowerCase()) || 
            employee.last_name.toLowerCase().includes(this.search.toLowerCase()) || 
            employee.city.toLowerCase().includes(this.search.toLowerCase()) ||
            employee.phone_number.toLowerCase().includes(this.search.toLowerCase()) ||
            employee.tech_skill.toLowerCase().includes(this.search.toLowerCase()) ||
            employee.job_title.toLowerCase().includes(this.search.toLowerCase()) 
          );
        }); 
      }else {
        this.employees = this.data;
      }
    },

    // Method called when search input changes
    onChangeSearch() {
      this.filteredEmployees();
    }
  },

  props: {
    title: String
  },

  data: () => ({
    // Headers for the table 
    headers: [
        { text: 'First Name', value: 'first_name' },
        { text: 'Last Name', value: 'last_name' },
        { text: 'City', value: 'city' },
        { text: 'Gender', value: 'gender' },
        { text: 'Tech Skill', value: 'tech_skill' },
        { text: 'Phone Number', value: 'phone_number' },
        { text: 'Job Title', value: 'job_title' },
      ],

    // Array in which will be sotored fetch data from the randomo info API
    employees: [],

    // Tracks the search input information
    search: '',
  }),

  // Gets excecuted at the beggining, and sets up inicial data values
  async mounted() {
    await this.fetchData();
    this.employees = this.data; 
    this.filteredEmployees();
  }
};
</script>