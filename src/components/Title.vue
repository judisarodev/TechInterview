<template>
    <!-- Title container -->
    <v-container class="title">
      <v-row class="text">
        <p>{{ text }}</p> 
      </v-row>

      <!-- Divider line -->
      <v-divider></v-divider>
    </v-container>
</template>

<script>
export default {
    props: {
        text: String
    }
}
</script>

<style scoped lang="scss">
@import './../styles/_variables.scss';
.title{
    margin-top: 60px;
    margin-bottom: 60px;
}
.text{ 
    display: flex;
    justify-content: center;
    text-align: center;
    font-weight: 500;
    font-size: $font-large;
}
</style>