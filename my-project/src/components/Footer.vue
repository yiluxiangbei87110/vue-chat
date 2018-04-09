<template>
    <div class="footer">
        {{msg}}
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: "it's footer"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    display:flex;
    justify-content: center;
    height: 40px;
    line-height: 40px;
    background: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
</style>
