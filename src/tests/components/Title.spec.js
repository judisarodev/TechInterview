/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify';
import Title from './../../components/Title.vue'; 
import { mount } from '@vue/test-utils'

// Vuetify set up
Vue.use(Vuetify);
const vuetify = new Vuetify();

describe('Testing Title component', () => {

    const mockText = 'This is my custom text';

    it('Should render component with mocked text', () => {
        const wrapper = mount(Title, { 
            vuetify,
            propsData: {
                text: mockText,
            }
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.title').exists()).toBe(true);
        expect(wrapper.find('.text').text()).toBe(mockText);
    });

});