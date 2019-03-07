import Vue from 'vue'
import Router from 'vue-router'
import vuexCount from '../components/vuex-test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vuexCount',
      component: vuexCount
    }
  ]
})
