import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hi',
      component: Hi,
      children: [
        {path: '/hi/hi1', component: Hi1},
        {path: '/hi/hi2', component: Hi2}
      ]
    }
  ]
})
