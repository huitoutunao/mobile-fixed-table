<template>
    <div class="page">
        <ul class="home-list">
            <router-link to="/fixed-table-demo" tag="li" class="item">1、table固定表头和首列</router-link>
            <router-link to="/fixed-table-demo" tag="li" class="item">2、table固定表头和首列</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style lang="scss" scoped>
    .home-list {
        padding: 15px;
        .item {
            line-height: 30px;
            font-size: 16px;
        }
    }
</style>
