<!--
 * @Author: QHGG
 * @Date: 2021-12-04 21:52:40
 * @LastEditTime: 2021-12-07 19:39:04
 * @LastEditors: QHGG
 * @Description: 
 * @FilePath: /ii/src/components/Info.vue
-->
<template>
    <div>
        {{infoid}}
        <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
        hhhhhhhhhh
    </div>
</template>

<script>
export default {
    name: 'Info',
    methods: {

    },
    data() {
        return {
            'infoid': 123 
        }
    },
    beforeMount() {
        console.log(this.$route.params.id)
        this.infoid = this.$route.params.id
    }
}
</script>