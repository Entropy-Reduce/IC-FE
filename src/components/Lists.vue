<!--
 * @Author: QHGG
 * @Date: 2021-12-04 20:07:53
 * @LastEditTime: 2021-12-04 22:34:45
 * @LastEditors: QHGG
 * @Description: ;
 * @FilePath: /ii/src/components/Lists.vue
-->
<template>
    
    <div class="index">
        <div class="content" v-for="item in contens" :key="item" @click="click(item)">
            <el-card shadow="hover" style="height: 100%" >
            <img src="#" alt="">
            dapp
            </el-card>
        </div>
    </div>
</template>

<style scoped>
    .index{
        position: relative;
        height: 100%;
        width: 100%;
    }
    .content{
        /* position: absolute; */
        width: 200px;
        height: 200px;
        margin: 10px;
        float: left;
    }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      contens: [1,2,3]
    };
  },
  methods:{
      click(n){
          this.$router.push('/info/' + n)
      }
  },
  name: 'Lists',
}
</script>