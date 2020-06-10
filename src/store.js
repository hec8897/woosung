import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        login:false,
    },
    mutations:{
        loginFn (state,data) {
            state.login = true
        }

    }
})