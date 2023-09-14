import { createStore as _createStore } from 'vuex';
import { useAxios } from "../plugins/vue-axios";
import { useCookie } from "../plugins/vue-cookie";
import {useUrls} from "../plugins/globals";

export function createStore() {
    return _createStore({
        state() {
            return {
                user: {},
                categoriesTree: [],
                store: {
                    slug: '',
                    categories: []
                },
                authModal: false
            };
        },
        mutations: {
            setUser(state, user) {
                state.user = user;
            },
            SET_CATEGORIES_TREE(state, tree) {
                state.categoriesTree = tree;
            },
            SET_STORE(state, store) {
                state.store = store;
            },
            SET_AUTH_MODAL(state, status) {
                state.authModal = status
            }
        },
        actions: {
            setUser({ commit }, value) {
                commit('setUser', value.user);
                if (value.token)
                    useAxios().setToken(value.token)
            },
            async fetchUser({ commit }, token) {
                const axios = useAxios()
                const cookie = useCookie()
                token = token || cookie.getItem('token')
                if (token) {
                    axios.setToken(token)
                    try {
                        const { data } = await axios.get(useUrls().authUser)
                        commit('setUser', data)
                    } catch (e) {
                        cookie.removeItem('token')
                        commit('setUser', {})
                    }
                }
            },
            resetUser({ commit }) {
                commit('setUser', {})
            },
            async fetchCategoriesTree({ commit, state }) {
                try {
                    if (state.categoriesTree.length === 0) {
                        const { data } = await useAxios().get(useUrls().categoriesTree)
                        commit('SET_CATEGORIES_TREE', data)
                    }
                } catch (e) {
                    commit('SET_CATEGORIES_TREE', [])
                }
            },
            async fetchStore({ commit, state }, slug) {
                try {
                    if (state.store.slug !== slug) {
                        const { data } = await useAxios().get(useUrls().storeShow.replace(':slug', slug))
                        commit('SET_STORE', data)
                        return data;
                    } else
                        return state.store
                } catch (e) {
                    commit('SET_STORE', {})
                    return {}
                }
            },

            setStore({ commit, state }, data) {
                commit('SET_STORE', data)
                return data
            },

            showAuthModal({ commit }) {
                commit('SET_AUTH_MODAL', true)
            },
            hideAuthModal({ commit }) {
                commit('SET_AUTH_MODAL', false)
            }
        },
        getters: {
            user: state => state.user,
            categoriesTree: state => state.categoriesTree,
            store: state => state.store,
            authModal: state => state.authModal
        }
    })
}