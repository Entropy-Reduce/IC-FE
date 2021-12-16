<template>
<el-menu
  :default-active="activeIndex"
  class="el-menu-demo"
  mode="vertical"
  @select="handleSelect"
  >
  <router-link to="/login">
  <el-menu-item index="0">
    login in
  </el-menu-item>
  </router-link>
    <router-link to="/dapps">
  
      <el-menu-item index="1">dapps</el-menu-item>
    </router-link>
  <router-link to="/mydapps">
  <el-menu-item index="2">
    my dapps
    
  </el-menu-item>
  </router-link>
  <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item> -->
  <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
</el-menu>
</template>
<style>
  .el-menu-demo{
    height: 100%
  }
</style>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>