import Vue from 'vue'
import Router from 'vue-router'
// Views
import Home from './views/Home.vue'
import Eligibility from './views/Eligibility.vue'
import ClaimsResults from './views/ClaimsResults.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/eligibility',
      name: 'eligibility',
      component: Eligibility
    },
    {
      path: '/claimsresults',
      name: 'claimsresults',
      component: ClaimsResults
    }
  ],
  mode: 'history'
})
