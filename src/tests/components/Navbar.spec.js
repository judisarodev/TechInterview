/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify';
import Navbar from './../../components/Navbar.vue'; 
import { mount } from '@vue/test-utils'

// Vuetify set up
Vue.use(Vuetify);
const vuetify = new Vuetify();

describe('Testing Navbar', () => {

    const mockItems = [
        { name: 'Home', route: 'home' },
        { name: 'About us', route: 'about' },
        { name: 'Contact', route: 'contact' },
    ];

    it('Should render an empty navbar', () => {
        const wrapper = mount(Navbar, {
            vuetify
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.findAll('.item')).toHaveLength(0);
    });

    it('Should render component with mocked items', () => {
        const wrapper = mount(Navbar, { 
            vuetify,
            propsData: {
                items: mockItems
            }
        });
        expect(wrapper.findAll('.item')).toHaveLength(mockItems.length); 
    });

});