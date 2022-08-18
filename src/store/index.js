import {createStore} from 'vuex'
// import Vue from 'vue'

// Vue.use(Vuex)

// export default new Vuex.Store({
export default new createStore({
    state: {
        name: '',
        email: '',
        password: '',
        isAdmin: false,
        products: [],
        cart: [],
        },
    mutations: {

    },
    actions: {
    },
})

