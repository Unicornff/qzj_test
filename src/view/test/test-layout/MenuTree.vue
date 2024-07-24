<template>
    <div>
        <template v-for="item in menu">
            <el-sub-menu v-if="item.children" :index="item.id">
                <template #title>
                    <svg-icon :icon-class="item.icon"></svg-icon>
                    <span>{{ item.title }}</span>
                </template>
                <MenuTree :menu="item.children" :active="active" @routeClick="jumpRoute"></MenuTree>
            </el-sub-menu>
            <el-menu-item v-else :index="item.id" @click="jumpRoute(item)">
                <template #title>
                    <svg-icon :icon-class="item.icon"></svg-icon>
                    <span>{{ item.title }}</span>
                </template>
            </el-menu-item>
        </template>
    </div>
</template>

<script setup lang='ts'>
defineProps(['menu', 'active'])
const emit = defineEmits(['routeClick'])
import MenuTree from './MenuTree.vue'

const jumpRoute = (route: any) => {
    emit('routeClick', route);
}
</script>

<style scoped lang='scss'></style>