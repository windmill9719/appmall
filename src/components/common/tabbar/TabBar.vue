<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 -2px 1px rgba(200,200,200,.2);
  }

</style>