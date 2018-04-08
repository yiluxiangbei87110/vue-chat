<template>
  <div class="miancontentchild">
    <h1>{{ msg }}</h1>
    <h2>这个是子模块</h2>
  </div>
</template>

<script>
export default{
  name:'miancontentchild',
  data(){
    return {
      msg:'子模块!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
