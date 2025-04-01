<template>
<div>
    <!-- 顶部 -->
    <div class="header">
        <div class="open">
            <span v-if="!isCollapse" class="iconfont icon-right-indent" @click="changeMenu"></span>
            <span v-else class="iconfont icon-left-indent" @click="changeMenu"></span>
        </div>
    </div>
    <!-- 内容 -->
    <div class="wrapper">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
    props: ['isCollapse'],
    methods: {
        changeMenu() {
            this.$emit('changeShow')
        }
    }
}
</script>

<style lang="less" scoped  >

.header {
    background-color: #1e78bf;
    height: 50px;
    color: #fff;
    line-height: 50px;
    .open {
        .iconfont { // 左侧导航 开关
            font-size: 22px;
            cursor: pointer;
        }
    }
}
.wrapper {
    padding: 20px;
}
</style>