const threeRouter =
{
    path: '/threejs',
    name: 'threejs',
    children: [
        {
            path: 'threejs-learn',
            name: 'threejsLearn',
            component: () => import('@/view/threejs/index.vue')
        },
        {
            path: 'earth-moon',
            name: 'earthMoon',
            component: () => import('@/view/threejs/earthMoon/index.vue')
        },
    ]
}


export default threeRouter