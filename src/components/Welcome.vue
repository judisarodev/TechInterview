<template>
    <!-- Card container -->
    <v-card class="card" :style="{ backgroundImage: `url(${image})` }">

      <!-- Card title -->
      <v-card-title>
        
        <!-- Title with dynamic parts -->
        <h1 class="card__title">{{ title[0] }}<span>{{ title[1] }}</span>{{ title[2] }}</h1>
      </v-card-title>

      <!-- Card subtitle -->
      <v-card-text>
        <p class="card__text hidden-md-and-down">
          {{ subtitle }}
        </p>
      </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        title: Array,
        subtitle: String,
        image: String
    }
}
</script>

<style scoped lang="scss">
@import './../styles/_variables.scss';

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-size: cover;
}
.card__title{
  margin-top: 80px;
  color: $primary-color;
  animation: welcome-card-animation 2s;
  text-align: center;
  padding-top: 20px;
  background-color: $light-primary-color;
  padding: 10px;

  /* Break points to define font size depending on the screen width */

  @media (max-width: 960px){
    font-size: $font-xlarge;
  }
  @media (min-width: 1280){
    font-size: $font-xxlarge;
  }
}
.card__text{
  display: block;
  color: $light-primary-color;
  font-size: $font-medium;
  padding-left: 15%;
  padding-right: 15%;
  text-align: center;
  animation: welcome-card-animation 2.5s;
}
.card__title span{
  color: $secondary-color;
}

/* Amination for the title of the card */
@keyframes welcome-card-animation {
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
}
</style>