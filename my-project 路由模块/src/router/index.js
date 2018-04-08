import Vue from 'vue'
import Router from 'vue-router'
//定义要路由模块
import Hello from '@/components/guidePage/Hello'
import World from '@/components/mainContent/World'
import Footer from '@/components/footer/Footer'
import MainContentChild from '@/components/mainContent/MainContentChild'
Vue.use(Router)

export default new Router({
    //设置mode：history将会导致地址栏的hash值消失
    //mode:'history',
    routes: [{
        path: '/',
        //重定向
        redirect:'hello'
    }, {
        path: '/hello',
        name: 'Hello',
        component: Hello
    }, {
        path: '/world',
        name: 'world',
        component: World,
        children: [{
            path: 'mainContentChild',
            component: MainContentChild
        }]
    },{
        path: '/footer/:color/detail/:type',
        name:'footer',
        component: Footer
    }]
})
