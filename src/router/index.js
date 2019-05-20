import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import OptimizeVuex from '@/components/optimizeVuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/view/optimizeVuex',
      name: 'OptimizeVuex',
      component: OptimizeVuex
    }
  ]
})
