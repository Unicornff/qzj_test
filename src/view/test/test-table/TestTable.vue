<template>
    <div class="main-container">
        <el-table :data="table.tableData" border height="500" class="table-class">
            <el-table-column v-for="col in table.columnData" :prop="col.value" :key="col.value" :label="col.label" />
        </el-table>
    </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { tableData, columnData } from './table'

const table: any = ref({
    tableData: [],
    columnData: []
})

onMounted(() => {
    table.value.tableData = [...tableData]
    table.value.columnData = [...columnData]
})

</script>

<style scoped lang='scss'>
.table-class {
    margin-top: 100px;
}
</style>