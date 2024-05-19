/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify';
import BigCard from './../../components/BigCard.vue'; 
import { mount } from '@vue/test-utils'

// Vuetify set up
Vue.use(Vuetify);
const vuetify = new Vuetify();

describe('Testing Big Card', () => {

    const mockBigCard = {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
        icon: 'mdi-video-input-component',
        alt: 'Explore components image',
    };

    it('Should render component with mocked big card', () => {
        const wrapper = mount(BigCard, { 
            vuetify,
            propsData: {
                icon: mockBigCard.icon,
                alt: mockBigCard.alt,
                title: mockBigCard.text,
                description: mockBigCard.description,
                url: mockBigCard.href,
            }
        });
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('.card').exists()).toBe(true);
        expect(wrapper.find('.title').text()).toBe(mockBigCard.text);
        expect(wrapper.find('.description').text()).toBe(mockBigCard.description);
    });

});