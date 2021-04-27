import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/fixed-table-demo',
    name: 'fixed.table.demo',
    component: () => import(/* webpackChunkName: "about" */ '../views/FixedTableDemo.vue')
}]

const router = new VueRouter({
    routes
})

export default router
