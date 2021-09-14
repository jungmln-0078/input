import Vuex from 'vuex';

const store = new Vuex.Store({
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