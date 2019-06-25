import Vue from 'vue'
import Router from 'vue-router'
// Views
import Home from './components/views/Home'
import Eligibility from './components/views/Eligibility'
import Claims from './components/views/Claims'

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
            component: Claims
        }
    ],
    mode: 'history'
})
