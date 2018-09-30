import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Home from '@/views/pages/Home'
import Recipes from '@/views/pages/Recipes'
import Games from '@/views/pages/Games'
import Judging from '@/views/pages/Judging'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/recipes',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/judging',
      name: 'Judging',
      component: Judging
    }
  ]
})
