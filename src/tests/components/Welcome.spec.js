/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify';
import Welcome from './../../components/Welcome.vue'; 
import { mount } from '@vue/test-utils'

// Vuetify set up
Vue.use(Vuetify);
const vuetify = new Vuetify();

describe('Testing Welcome component', () => {

    const mockWelcome = {
        title: ['My ', 'custom', ' title'],
        subtitle: 'Custom subtitle',
        image: 'https://www.careerguide.com/career/wp-content/uploads/2021/06/2.45.2.jpg'
    };

    it('Should render component with mocked text', () => {
        const wrapper = mount(Welcome, { 
            vuetify,
            propsData: {
                title: mockWelcome.title,
                subtitle: mockWelcome.subtitle,
                image: mockWelcome.image,
            }
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.card').exists()).toBe(true);
        expect(wrapper.find('.card__title').text()).toBe(mockWelcome.title.join(''));
    });

});