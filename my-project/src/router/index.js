import Vue from 'vue'
import Router from 'vue-router'
//定义要路由模块
import Layout from '@/components/Layout'
import IndexPage from '@/components/pages/IndexPage'
Vue.use(Router)

export default new Router({
    //设置mode：history将会导致地址栏的hash值消失
    mode: 'history',
    routes: [{
        path: '/',
        name: 'indexpage',
        component: IndexPage
    }]
})
