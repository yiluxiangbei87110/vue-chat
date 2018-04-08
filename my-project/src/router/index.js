import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Header from '@/components/Header'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})
