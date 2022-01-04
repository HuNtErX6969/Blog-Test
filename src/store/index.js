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
        user: {
            id: null,
            email: null,
            password: null
        },
    },
    getters: {
        posts: (state) => {
            let posts = state.posts.filter((post) => post.userId == state.user.id);
            return posts && posts.length ? posts : [];
        },
        user: (state) => {
            return state.user ? state.user : {};
        },
    },
    mutations: {
        add: (state, post) => {
            state.posts.push(post);
        },
        setUser: (state, user) => {
            state.user.id = user[0].userId;
            state.user.email = user[0].email;
            state.user.password = user[0].password;
        },
        logout: (state) => {
            state.user.id = null;
            state.user.email = null;
            state.user.password = null;
            state.posts = []
        },
    },
    actions: {
        // Posts
        Add: ({ commit }, post) => {
            commit("add", post);
        },
        //signup

        Signup: ({ commit }, user) => {
            return new Promise((fulfill) => {
                commit("setUser", user);
                fulfill(true);
            });
        },
        //login
        Login: ({ commit }, user) => {
            return new Promise((fulfill) => {
                commit("setUser", user);
                fulfill(true);
            });
        },
        // Logout
        Logout: ({ commit }) => {
            commit("logout");
        },
    },
    plugins: [vuexLocal.plugin]
})

export default store;