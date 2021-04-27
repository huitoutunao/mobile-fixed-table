<template>
    <div class="page">
        <div class="fixed-table-wrap">
            <fixed-table :is-show-col-shadow="true"></fixed-table>
        </div>
    </div>
</template>

<script>
    import FixedTable from '@/components/FixedTable'

    export default {
        name: 'FixedTableDemo',
        components: {
            FixedTable
        },
        data () {
            return {}
        },
    }
</script>

<style lang="scss" scoped>
    .fixed-table-wrap {
        margin: 15px;
        overflow: hidden;
    }
</style>
