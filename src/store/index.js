import Vue from 'vue'
import Vuex from 'vuex'
// import lessonManage from "./modules/lessonManage";
import login from "./modules/login"
import stuPersonalInfo from "./modules/stuPersonalInfo"
import getters from "./getters";
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        stuPersonalInfo
    },
    state: {},
    mutations: {},
    actions: {},
    getters
});