<!--
 * @Author: QHGG
 * @Date: 2021-12-04 21:35:00
 * @LastEditTime: 2021-12-16 22:11:07
 * @LastEditors: QHGG
 * @Description: rima
 * @FilePath: /ii/src/components/Login.vue
-->
<template>
<div>
    <el-button type="primary" @click="open">login</el-button>
</div>
</template>
<style>
</style>
<script>
  // import TokenInfo from "../utils/token";
import { StoicIdentity } from "ic-stoic-identity";
import { HttpAgent } from '@dfinity/agent';
  export default {
    data() {
      return {
        agent: null
      };
    },
    methods: {
      async open(){
        let identity = await StoicIdentity.load()
        if (identity === false) {
            identity = await StoicIdentity.connect();
        }
        this.agent = new HttpAgent({ identity }) 
        console.log(this.agent)
        // https://www.stoicwallet.com/?authorizeApp
      }
    }
  }
</script>