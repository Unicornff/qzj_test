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
];

export { componentsList };