import Vue from 'vue'
import Router from 'vue-router'

import Recommend from 'components/recommend/index'
import Rank from 'components/rank/index'
import Search from 'components/search/index'
import Singer from 'components/singer/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
