<template>
  <div id="app">
  <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
   name: 'App',
   components:{
     Header,
     Footer
  },
}
</script>

<style>

    body,a,ul{
      margin: 0;
      padding: 0;
    }
    html,body{
      height: 100%;
    }
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
      display: flex;
      flex-direction:column;
      height: 100%;
    }
    body{
      margin:0;
    }
    ul,li{
      list-style-type: none;
    }
    a:link{
      text-decoration: none;
    }



</style>
