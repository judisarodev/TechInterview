<template>
  <div class="about">
    <!-- Hero banner -->
    <Welcome :title="welcome.title" :subtitle="welcome.subtitle" :image="welcome.image"/>

    <!-- About page content -->
    <v-container class="text-container d-flex flex-column align-center">
      <Title :text="title"/>
      <p v-for="(text) in paragraphs" :key="text.id">{{ text.content }}</p>
    </v-container>
  </div>
</template>

<script>
import Welcome from './../components/Welcome.vue';
import Title from './../components/Title.vue'
export default {
  // Name of the component
  name: 'About',
  
  // Define the reactive data for this component
  data: () => ({
    // Title of the about page
    title: 'Lets talk about this project',

    // List of paragraphs to be displayed on the about page
    paragraphs: [ 
      {
        id: 1,
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in eleifend nulla. Morbi posuere, ligula id vulputate mollis, enim ex aliquam risus, et sagittis ipsum quam nec magna. Mauris lacinia fringilla turpis, sit amet interdum lacus ultricies in. Nulla volutpat porta ultrices. Aenean elementum sem malesuada, scelerisque justo eget, tempus lorem. Vestibulum convallis et mi vel vulputate. Aenean suscipit laoreet eros, ut blandit nisi volutpat et. Pellentesque ac purus nisi. Ut eget commodo sapien. Phasellus et orci venenatis, malesuada turpis ac, pellentesque justo. Morbi eget enim porta, feugiat elit placerat, bibendum felis.'
      },
      {
        id: 2,
        content: 'Donec lorem quam, ultricies ut augue nec, cursus posuere diam. Nam sed lacus ac erat vehicula consequat non mattis ante. Pellentesque ex urna, efficitur sit amet justo et, scelerisque lobortis nibh. Mauris hendrerit mauris elit, sit amet mollis quam mattis vel. Maecenas et sodales ante. Vivamus eget sapien odio. Donec egestas felis eu turpis tristique rutrum. Quisque dapibus nibh erat, vel accumsan lacus fringilla quis. Suspendisse dictum, est eget bibendum tincidunt, ex magna tristique ligula, ut hendrerit ligula lacus non urna. Sed semper felis a magna luctus, id eleifend enim mollis. Ut tristique, libero id posuere mattis, lacus elit mattis magna, eu bibendum lectus ante id est. Maecenas vehicula arcu risus, sed pulvinar sem iaculis ac. Nam vulputate, sem at vulputate tempor, magna massa dapibus tellus, non imperdiet ante sapien non ipsum.'
      },
      {
        id: 3,
        content: 'Vivamus sit amet enim vitae libero tincidunt mollis. Maecenas aliquet tortor in erat blandit placerat. Cras at mauris at libero volutpat cursus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc mauris libero, vestibulum ut rhoncus ut, rhoncus at ligula. Fusce accumsan est id elementum rhoncus. Sed ut eleifend nisi, at tempor justo. Pellentesque molestie, mauris quis cursus faucibus, arcu massa dignissim purus, a interdum turpis augue sit amet nisl. Nam at nisl eget ante dictum cursus. Pellentesque dignissim enim vel tempus fringilla. Quisque luctus aliquam ligula, a pharetra risus convallis at.'
      },
      {
        id: 4,
        content: 'Ut sollicitudin metus turpis, feugiat molestie arcu dictum eget. Nunc vel luctus dolor. Suspendisse arcu orci, tincidunt eu erat et, suscipit placerat tortor. Nam accumsan augue vel rutrum placerat. Maecenas orci metus, eleifend in posuere placerat, facilisis sed ligula. Vivamus iaculis ante ut velit sollicitudin, vel sodales neque ultrices. Sed nec diam ac libero tincidunt gravida et at mi. Vestibulum eleifend lectus eget erat rhoncus venenatis.'
      }
    ],
    
    // Props needed by Welcome component
    welcome: { 
      title: ['Get ', 'to know', ' us'],
      subtitle: 'About vuetify',
      image: 'https://production-next-images-cdn.thumbtack.com/i/302056602570350772/width/640.jpeg'
    }
  }),
  components: {
    Welcome,
    Title
  }
}
</script>

<style scoped>
/* Styling for text container */
.text-container > p{
  width: 60%;
  text-align: justify;
  @media (max-width: 600px) {
    width: 100%;
  }
}
</style>