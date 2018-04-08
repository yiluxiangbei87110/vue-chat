<template>
  <div class="world">
    <h1>{{ msg }}</h1>
    <h2>这个是world的模块</h2>
    <ul>
      <li><a href="#">这个是world的模块这个是world的模块这个是world的模块这个是world的模块这个是world的模块这个是world的模块这个是world的模块这个是world的模块</a></li>
    </ul>
    <!-- 注意将router-view放在div的下面也会报错 -->
  <router-view></router-view>
  </div>
</template>

<script>
export default{
  name:'world',
  data(){
    return {
      msg:'World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.world{
  background-color: lightgreen;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
