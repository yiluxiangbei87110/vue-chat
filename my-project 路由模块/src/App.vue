<template>
  <div id="app">
  <transition name="fade">
    <keep-alive>
      <router-view></router-view>
      
    </keep-alive>
  </transition>
    <router-link :to="{path:'/footer'}">footer</router-link>
    <router-link :to="{path:'/hello'}">hello</router-link>
    <router-link :to="{path:'/world'}">world</router-link>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
