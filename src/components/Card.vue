<template>
    <!-- Clickable card -->
    <v-card class="card" @click="openWindow(link)">
        <!-- Icon displayed in the card -->
        <v-icon class="icon" medium>{{ icon }}</v-icon>

        <!-- Title displayed in the card -->
        <v-card-title class="title">{{ title }}</v-card-title>
    </v-card>  
</template>

<script>
export default {
    // Name of the component
    name: 'Card',

    // Props: Define the properties that can be passed to this component
    props: {
        title: String,
        link: String,
        icon: String
    },

    // Methods: Define functions that can be used within the template
    methods:{
        /**
         * Opens a new browser window with the given URL
         * @param {String} url - The URL to open
         */
        openWindow: (url) => {
            window.open(url);
        },
    }
};
</script>
<style scoped>
.card{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.card:hover{
    cursor: pointer;
}
.icon{
    color: #42b983; 
}
</style>