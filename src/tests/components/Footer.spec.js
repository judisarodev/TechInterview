/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify';
import Footer from './../../components/Footer.vue'; 
import { mount } from '@vue/test-utils'

// Vuetify set up
Vue.use(Vuetify);
const vuetify = new Vuetify();

describe('Testing Footer', () => {

    const mockFooter = [
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
    ];

    it('Should render component with mocked footer', () => {
        const wrapper = mount(Footer, { 
            vuetify,
            propsData: {
                data: mockFooter,
            }
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('footer').exists()).toBe(true);
        expect(wrapper.findAll('.anchor')).toHaveLength(mockFooter.length); 
    });

});