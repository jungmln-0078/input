import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        inputValue: {
            id: "",
            password: "",
            check1: [],
            check2: [],
        }
    },
    mutations: {
        setValue(state, payload) {
            state.inputValue = payload
        }
    },
    actions: {
        
    }
});