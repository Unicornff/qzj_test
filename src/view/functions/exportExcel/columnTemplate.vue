<template>
    <el-table-column v-if="!column.children" :label="column.label" :prop="column.value" />
    <el-table-column v-else :label="column.label">
        <template v-for="(child, childIndex) in column.children" :key="childIndex">
            <column-template :column="child" />
        </template>
    </el-table-column>
</template>

<script setup lang='ts'>
defineOptions({
    name: 'ColumnTemplate'
});
const props = defineProps({
    column: {
        type: Object,
        default() {
            return {};
        }
    },
});
import { ref } from 'vue';
</script>

<style scoped lang='scss'></style>