<template>
  <v-app>
    <!--Main Navbar-->
    <nav>
      <Navbar :items="menuItems" :title="menuTitle" />
    </nav>

    <!--Web page container-->
    <v-main>
      <router-view />
    </v-main>

    <!--Footer-->
    <Footer :data="importantLinks"/>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    menuItems: [ // Menu options for the Navbar
      { name: 'Home', route: 'Home' },
      { name: 'About us', route: 'About' },
      { name: 'Data', route: 'Data' },
    ],

    importantLinks: [ // Important links for the Footer
      {
          text: "Documentation",
          href: "https://vuetifyjs.com",
          icon: 'mdi-file-document-edit-outline'
      },
      {
          text: "Chat",
          href: "https://community.vuetifyjs.com",
          icon: 'mdi-message'
      },
      {
          text: "Made with Vuetify",
          href: "https://madewithvuejs.com/vuetify",
          icon: 'mdi-vuetify'
      },
      {
          text: "Twitter",
          href: "https://twitter.com/vuetifyjs",
          icon: 'mdi-alpha-x-circle'
      },
      {
          text: "Articles",
          href: "https://medium.com/vuetify",
          icon: 'mdi-information'
      },
      {
          text: "Linkeding",
          href: "https://www.linkedin.com/company/vuetify-llc/?originalSubdomain=co",
          icon: 'mdi-linkedin'
      },
    ],
  }),
};
</script>
