import Vue from 'vue'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import Home from '@/views/pages/Home'
import Recipes from '@/views/pages/Recipes'
import Games from '@/views/pages/Games'
import Rules from '@/views/pages/Rules'

Vue.use(Router)
Vue.use(Vuetify, {
  theme: {
    primary: '#ff8f00',
    secondary: '#ffc046',
    accent: '#c56000',
    error: '#FF1744'
  }
})

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
      path: '/rules',
      name: 'Rules',
      component: Rules
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
    }
  ]
})
