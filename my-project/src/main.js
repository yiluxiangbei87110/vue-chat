// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import router from './router'
Vue.config.productionTip = false
    //使用vue-resource插件
import VueResource from 'vue-resource'
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<Layout/>',
    components: { Layout }
})
