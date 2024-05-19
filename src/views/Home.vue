<template>
  <div>
    <!-- Hero banner section -->
    <Welcome :title="welcome.title" :subtitle="welcome.subtitle" :image="welcome.image"/>

    <v-container>
      <!-- Section title -->
      <Title :text="titles.ecosystem"/>

      <!-- Ecosystem cards section -->
      <v-row >
        <v-col cols="12" lg="4" v-for="(card, index) in ecosystem" :key="card.text">
          <Card :title="card.text" :link="card.href" :icon="card.icon"/>
        </v-col>
      </v-row>

      <!-- Section title -->
      <Title :text="titles.whereToStart "/>
      
      <!-- Where to start big cards section -->
      <v-row>
        <v-col  cols="12" md="6" lg="4" v-for="(bigCard, index) in whatsNext" :key="bigCard.text">
            <BigCard
            :icon="bigCard.icon"
            :alt= "bigCard.alt"
            :title= "bigCard.text"
            :description= "bigCard.description"
            :url="bigCard.href" 
            />
        </v-col>
      </v-row>

  </v-container>
</div>
</template>

<script>
import Button from 'primevue/button';
import Welcome from './../components/Welcome.vue'
import Card from './../components/Card.vue';
import BigCard from './../components/BigCard.vue';
import Title from './../components/Title.vue';

export default {
  // Name of the component
  name: "Home",

  // Register the components used in this template
  components: {
    Button,
    Card,
    Welcome,
    BigCard,
    Title
  },

  // Define the reactive data for this component
  data: () => ({
    // Data for the Welcome component
    welcome: {
      title: ['Discover ', 'Vuetify ', 'now'],
      subtitle: 'Design and more', 
      image: 'http://www.talentos-unicos.com/wp-content/uploads/2017/01/mano-y-lapices-de-colores.jpg',
    },

    // Titles for different sections
    titles: {
      ecosystem: 'An ecosystem for you',
      whereToStart: 'Where to start',
    },

    // Data for the ecosystem cards
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
        icon: 'mdi-vuetify'
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
        icon: 'mdi-github'
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
        icon: 'mdi-pencil-ruler'
      },
    ],

    // Data for the big cards in the "Where to start" section
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin, massa vel convallis porttitor, augue nisi pretium ex, in luctus mi justo quis nisi. Nam orci ex, pellentesque at tellus et, rhoncus molestie diam. Nunc molestie nulla a quam commodo, eget vehicula purus accumsan. Fusce et maximus nunc. Nullam pharetra.`,
        icon: 'mdi-video-input-component',
        alt: 'Explore components image',
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nunc nibh. Quisque malesuada, lorem in tempor malesuada, mauris nisl maximus dui, at ultrices nunc diam tempus massa. Ut posuere magna in sollicitudin porta. Donec in diam id turpis cursus egestas dictum rutrum metus. Curabitur ut massa ex. Maecenas placerat.`,
        icon: 'mdi-page-layout-header-footer',
        alt: 'Select a layout image',
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at est enim. Duis sit amet nunc non est sollicitudin placerat ut vel sapien. Aliquam pulvinar porta lectus ut posuere. Proin at tempor elit. Vestibulum pharetra enim sapien, dictum dictum quam facilisis ut. Suspendisse dapibus enim volutpat, accumsan risus sed, ultricies.`,
        icon: 'mdi-frequently-asked-questions',
        alt: 'FAQ Image',
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
@import './../styles/_variables.scss';
.bigcard-container{
  display: flex;
}
</style>