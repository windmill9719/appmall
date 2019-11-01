<template>
  <Tabbar>
    <TabbarItem link="/home" activeColor="#2aa4f9">
      <img src="@/assets/img/tabbar/019-home.svg" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/019-home-active.svg" alt="" slot="item-img-active">
      <div slot="item-text">首页</div>
    </TabbarItem>
    <TabbarItem link="/category" activeColor="#2aa4f9">
      <img src="@/assets/img/tabbar/002-category.svg" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/002-category-active.svg" alt="" slot="item-img-active">
      <div slot="item-text">分类</div>
    </TabbarItem>
    <TabbarItem link="/cart" activeColor="#2aa4f9">
      <img src="@/assets/img/tabbar/001-cart.svg" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/001-cart-active.svg" alt="" slot="item-img-active">
      <div slot="item-text">购物车</div>
    </TabbarItem>
    <TabbarItem link="/user" activeColor="#2aa4f9">
      <img src="@/assets/img/tabbar/033-user.svg" alt="" slot="item-img">
      <img src="@/assets/img/tabbar/033-user-active.svg" alt="" slot="item-img-active">
      <div slot="item-text">我的</div>
    </TabbarItem>
  </Tabbar>
</template>

<script>
  import Tabbar from "@/components/common/tabbar/Tabbar";
  import TabbarItem from "@/components/common/tabbar/TabbarItem";

  export default {
    name: "MainTabbar",
    components:{
      Tabbar,
      TabbarItem
    }
  }
</script>

<style scoped>

</style>