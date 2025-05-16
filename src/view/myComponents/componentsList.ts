import { defineAsyncComponent, Component } from 'vue'

export type ComponentList = {
    name: string,
    text: string,
    component: Component
}

const componentsList: Array<ComponentList> = [
    {
        name: 'textOverflow',
        text: '文本溢出',
        component: defineAsyncComponent(() => import('@/view/myComponents/textOverflow/index.vue'))
    },
    {
        name: 'paginatedTable',
        text: '分页表格',
        component: defineAsyncComponent(() => import('@/view/myComponents/paginatedTable/index.vue'))
    },
    {
        name: 'virtualList',
        text: '虚拟列表(子项定高)',
        component: defineAsyncComponent(() => import('@/view/myComponents/virtualList/index.vue'))
    },
    {
        name: 'scrollLoadTable',
        text: '滚动加载表格',
        component: defineAsyncComponent(() => import('@/view/myComponents/scrollLoadTable/index.vue'))
    },
];

export { componentsList };