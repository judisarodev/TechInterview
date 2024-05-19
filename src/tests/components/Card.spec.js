/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify';
import Card from './../../components/Card.vue'; 
import { mount } from '@vue/test-utils'

// Vuetify set up
Vue.use(Vuetify);
const vuetify = new Vuetify();

describe('Testing Card', () => {

    const mockCard = {
        text: "vuetify",
        href: "https://github.com/",
        icon: 'mdi-vuetify'
    };

    it('Should render component with mocked card', () => {
        const wrapper = mount(Card, { 
            vuetify,
            propsData: {
                title: mockCard.text,
                link: mockCard.href,
                icon: mockCard.icon
            }
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.card').exists()).toBe(true);
        expect(wrapper.find('.title').text()).toBe(mockCard.text)
    });

});