<template>
  <div>
    <!-- Displays the title of the page -->
    <Title :text="title"/>

    <!-- Displays a table with employees, and its title -->
    <DataTable :title="dataTableTitle"/>
  </div>
</template>

<script>
import DataTable from "../components/DataTable.vue";
import Title from './../components/Title.vue';

export default {
  // Register the components used in this template
  components: {
    Title,
    DataTable
  },

  // Name of the component
  name: "Data",
  
  // Define the reactive data for this component
  data: () => ({
    title: 'Table of employees',
    dataTableTitle: 'Employees'
  }),
};
</script>