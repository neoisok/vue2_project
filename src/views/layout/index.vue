<template>
    <div class="layout">
        <!-- 左侧导航 -->
        <div class="menu">
            <Menu :isCollapse="isCollapse"></Menu>
        </div>
        <!-- 右侧内容 -->
         <div class="content" :class="{small: isCollapse}">
            <Content @changeShow="changeShow" :isCollapse="isCollapse"></Content>
         </div>
    </div>

</template>

<script>
import Menu from './menu/index.vue'
import Content from './content/index.vue'
export default {
    components: {
        Menu,
        Content
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        changeShow() {
            this.isCollapse = !this.isCollapse
        }
    }
}
</script>
<style lang="less" scoped>
.layout {
    // display: flex;
    .menu {
        // width: 200px; 注释掉由内容自己去撑开
        background-color: #112f50;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;

    }
    .content {
        // flex: 1;
        padding-left: 200px;
    }
    .small {
        padding-left: 64px;
    }
}

</style>