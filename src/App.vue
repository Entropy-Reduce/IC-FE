<!--
 * @Author: QHGG
 * @Date: 2021-12-04 19:54:30
 * @LastEditTime: 2021-12-07 20:10:27
 * @LastEditors: QHGG
 * @Description: 
 * @FilePath: /ii/src/App.vue
-->
<template>
  <div id="app">
    <div class="wrapper">
      <div class="sider">
        <Index />
      </div>
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Index from './components/Index.vue'

export default {
  name: 'App',
  components: {
    Index
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin: 0 auto; */
  position: absolute;
  width: 100%;
  height: 100%;
}
.sider {
  position: absolute;
  left: 0;
  height: 100%;
  width: 15%;
}
.container {
  position: absolute;
  left: 20%;
  
  height: 100%;
  width: 80%;
}
.wrapper {
  width: 80%;
  margin: 0 auto;
  height: 100%;
  position: relative;
  background-color: #fff;
}
</style>
