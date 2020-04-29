import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: 'zmy',
        count: 1
    },
    mutations: {
        add(state, step) {
            console.log(Number(step))
            state.count += Number(step)
        },
        vuexSub(state, step) {
            state.count -= Number(step)
        }
    },
    actions: {}
})
export default store