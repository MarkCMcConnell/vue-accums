// shallowMount only mounts the called component
// mount includes the child components

it('does not render when not passed visible prop', () => {
    const wrapper = mount(Modal)
    expect(wrapper.isEmpty()).toBe(true)
});

// Testing props
it('renders when passed visible prop as true', () => {
    const wrapper = mount(Modal, {
        propsData: {
            visible: true
        }
    });
    expect(wrapper.isEmpty()).toBe(false);
});

it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount('Home', {
        propsData: {
            msg
        }
    });
    expect(wrapper.text()).toMatch(msg);
});

// Testing a method
it('calls onClose when button is clicked', () => {
    const onClose = jest.fn();
    const wrapper = mount(Modal, {
        propsData: {
            visible: true,
            onClose
        }
    });
    wrapper.find('button').trigger('click');
    expect(onClose).toHaveBeenCalled();
});

it('increments the counter when button is pressed', () => {
    const wrapper = shallowMount('Home');
    expect(wrapper.vm.counter).toBe(0);
    wrapper.find('button').trigger('click');
    expect(wrapper.vm.counter).toBe(1);
});

it('check increment method', () => {
    const wrapper = shallowMount('Home');
    wrapper.vm.increment();
    expect(wrapper.vm.counter).toBe(1);
});

test('someMethod should add numbers together', () => {
    const wrapper = mount(CoolCard);
    expect(wrapper.vm.someMethod(1, 2)).toEqual(3);
});

// Testing a computed property
test('someComputedProperty should evaluate buzzwords correctly', () => {
    const wrapper = mount(CoolCard, {
        propsData: {
            wow: 'wow'
        }
    });
    wrapper.setData({
        buzzword: 'Big Data'
    });
    expect(wrapper.vm.someComputedProperty).toEqual('Big Data is very big');
});

// Snapshot test
it('renders correctly', () => {
    const wrapper = mount(Modal, {
        propsData: {
            visible: true
        }
    });
    // .html is the output of the test
    expect(wrapper.html()).toMatchSnapshot();
});

// Testing Vuex store
// -- storeFactory.js -- Store factory function
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default (getters, actions) =>
new Vuex.Store({
    modules: {
        basket: {
            namespaced: true,
            actions,
            getters: {
                projectId: () => getters.basket.currentTotal || null,
                currentTotal: () => getters.basket.currentTotal || null
            }
        }
    }
});

// -- The test
import {
    mount,
    createLocalVue
} from '@vue/test-utils';
import Vuex from 'vuex';
import CoolCard from '../components/CoolCard.vue';
import StoreFactory from './utils/StoreFactory';

const localVue = createLocalVue();
localVue.use(Vuex);

const actions = {
    incrementTotal: jest.fn()
};

describe('CoolCard', () => {
    let store;
    beforeEach(() => {
        store = StoreFactory({
                basket: {
                    currentTotal: 567
                }
            },
            actions
        );
    });
    test('card should show correct total', () => {
        const wrapper = mount(CoolCard, {
            store,
            localVue
        });
        expect(wrapper.vm.currentTotal).toEqual(567);
    });
});

// Route testing
const $route = {
    params: {
        id: 15,
    },
};

const wrapper = mount(ComplexComponent, {
    mocks: {
        $route
    },
});

// Slot testing
it('renders correctly', () => {
    const wrapper = mount(Modal, {
        slots: {
            default: '<p>some content</p>'
        },
        propsData: {
            visible: true
        }
    });
    expect(wrapper.html()).toMatchSnapshot();
})

// Testing async functions
// In a mocks folder
export default {
    get: jest.fn(() => Promise.resolve({
        data: {}
    }))
};

// In the test file - make the test async
import mockAxios from 'axios';
import unsplash from './unsplash';

it('calls axios and returns image', async () => {
    // Setup
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
        // Know what gets returned to set this
        data: {
            results: ['cute.jpg']
        }
    }));
    // Work
    const images = await unsplash('kittens');
    // Assertions
    expect(images).toEqual(['cute.jpg']);
    // -- Verify it was only called once
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    // -- Verify the correct params were passed to axios
    expect(mockAxios.get).toHaveBeenCalledWith('url', {
        params: {
            client_id: process.env.UNSPLASH_TOKEN,
            query: 'kittens'
        }
    });
});