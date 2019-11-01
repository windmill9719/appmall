<template>
  <div>
      <nav-bar class="home-nav"><div slot="center">首页</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/NavBar";
  export default {
    name: "Home",
    components:{
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: #2aa4f9;
    color: #fff;
  }

</style>