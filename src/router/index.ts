import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Create from '../views/Create.vue'
import Edit from '../views/Edit.vue'
import Detail from '../views/Detail.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/resource/:uriKey',
        name: 'ResourceIndex',
        component: Index
    },
    {
        path: '/resource/detail/:uriKey/:key',
        name: 'ResourceDetail',
        component: Detail
    },

    {
        path: '/resource/create/:uriKey',
        name: 'ResourceCreate',
        component: Create
    },
    {
        path: '/resource/update/:uriKey/:key',
        name: 'ResourceEdit',
        component: Edit
    }
]

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
