<template>
    <!-- Card container -->
    <v-card class="card">
        <!-- Card title section with icon and title text -->
        <v-card-title class="d-flex">
            <v-icon class="mr-2" color="#3874CB" medium>{{ icon }}</v-icon>
            <span class="title">{{ title }}</span>
        </v-card-title>

        <!-- Card description section -->
        <v-card-text>
            <p class="description">{{ description }}</p>
        </v-card-text>

        <!-- Card actions section with a button to open the URL -->
        <v-card-actions>
            <v-btn @click="openWindow(url)">Go</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    // Name of the component
    name: 'BigCard',

    // Props: Define the properties that can be passed to this component
    props: {
        icon: String,
        title: String,
        description: String,
        url: String
    }, 

    // Methods: Define functions that can be used within the template
    methods: {
        /**
         * Opens a new browser window with the given URL
         * @param {String} url - The URL to open
         */
        openWindow(url){
            window.open(url); 
        }
    }
}
</script>