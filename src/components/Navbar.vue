<template>
    <!-- App bar -->
    <v-app-bar app color="primary" dark>

        <!-- Vuetify Logo -->
        <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
        />
        
        <!-- Vuetify Name -->
        <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
        />
          
        <!-- Navigation Items -->
        <v-col>
            <!-- Desktop view navigation -->
            <v-toolbar-items class="list ml-auto hidden-sm-and-down">

                <!-- Navigation items as buttons -->
                <v-btn
                class="item"
                v-for="(item, i) in items"
                :key="i"
                text
                @click="goTo(item.route)"
                >
                {{ item.name }}
                </v-btn>
            </v-toolbar-items>
        </v-col>

        <!-- Mobile view menu -->
        <v-col cols="auto" class="hidden-md-and-up">

            <!-- Menu for mobile view -->
            <v-menu>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>

                <!-- List of navigation items -->
                <v-list>
                    <v-list-item
                    class=".list li"
                    v-for="(item, i) in items"
                    :key="i"
                    @click="goTo(item.route)"
                    >
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
                </v-list>
            </v-menu>
        </v-col>
    </v-app-bar>
</template>

<script>
export default {
    // Name of the component
    name: 'Navbar',

    props: {
        title: String,
        items: Array
    },
    methods: {
        /**
         * Goes to a new section of the web site using vue router
         * @param {string} route 
         */
        goTo(route){
            this.$router.push({ name: route });
        }
    }
}
</script>
