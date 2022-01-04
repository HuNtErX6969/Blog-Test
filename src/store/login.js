import VuexPersistence from 'vuex-persist'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})
const store = new Vuex.Store({
    state: {
        posts: [],
        user: {}
    },
    getters: {
        posts: (state) => {
            let posts = state.posts.filter((post) => post.userId == state.user.id);
            return posts && posts.length ? posts : [];
        },
        login: (state) => {
            return state.user
        }
    },
    mutations: {
        add: (state, post) => {
            state.posts.push(post);
        },
        login: (state, payload) => {
            state.user = payload;
        },
        signup: (state , payload) => {
            state.user = payload
        }
    },
    actions: {
        // Posts
        Add: ({ commit }, post) => {
            commit("add", post);
        },
    },
    plugins: [vuexLocal.plugin]
})

export default store;