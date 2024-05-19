<template>
    <!-- Footer section -->
    <footer >
        <v-row class="footer d-flex">
            
            <!-- Column for each anchor -->
            <v-col class="d-flex justify-center" cols="12" md="2" lg="2"  v-for="(anchor, i) in data" :key="anchor.text">

                <!-- Anchor element -->
                <a class="anchor" :href="anchor.href" target="_blank">
                    <!-- Icon -->
                    <span><v-icon color="white" small>{{ anchor.icon }}</v-icon></span>
                    <!-- Text -->
                    {{ anchor.text }}
                </a>
            </v-col>
        </v-row>
    </footer>
</template>

<script>
export default {
    // Name of the component
    name: "Footer",

    props: {
        data: Array
    }
}
</script>

<style scoped lang="scss">
@import './../styles/_variables.scss';

.logo{
    width: 30px;
    height: 35px;
    background-image: url('./../assets/logo.svg');
    padding: 10px;
}
.footer{
    min-height: 10vh;
    background-color: $primary-color;
    align-items: center;
    margin-top: 160px;
    padding-top: 30px;
    padding-bottom: 30px;
}
.anchor{
    color: $light-primary-color;
    text-decoration: none;
}
.anchor:hover{
    text-decoration: underline; 
}
</style>