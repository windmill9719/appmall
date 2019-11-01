<template>
  <tab-bar>
    <tab-bar-item link="/home" activeColor="#2aa4f9">
      <img src="@/assets/img/tabbar/019-home.svg" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/019-home-active.svg" alt="" slot="item-img-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category" activeColor="#2aa4f9">
      <img src="@/assets/img/tabbar/002-category.svg" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/002-category-active.svg" alt="" slot="item-img-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart" activeColor="#2aa4f9">
      <img src="@/assets/img/tabbar/001-cart.svg" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/001-cart-active.svg" alt="" slot="item-img-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/user" activeColor="#2aa4f9">
      <img src="@/assets/img/tabbar/033-user.svg" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/033-user-active.svg" alt="" slot="item-img-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabbar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>