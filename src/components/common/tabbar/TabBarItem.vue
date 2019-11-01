<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      link: String,
      activeColor:{
        style: String,
        default: 'red'
      }
    },
    data(){
      return{
        // isActive: false,
      }
    },
    computed:{
      isActive(){
        //   /home -> item(/home)  = true
        //   /home -> item(/category)  = false
        //   /home -> item(/cart)  = false
        //   /home -> item(/user)  = false
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods:{
      itemClick() {
        this.$router.push(this.link);
        // this.isActive = true
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    margin-top: 3px;
  }
  .active{
    font-weight: 550;
    color: #2aa4f9;
  }

</style>