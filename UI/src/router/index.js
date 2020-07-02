import Vue from 'vue'
import VueRouter from 'vue-router'
import AppIndex from "../components/home/AppIndex"
import Login from "../components/Login"
import Home from "../components/Home"
import LibraryIndex from "../components/library/LibraryIndex"

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        // home页面并不需要被访问
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'AppIndex',
                component: AppIndex,
                // 区分页面是否需要拦截
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/library',
                name: 'Library',
                component: LibraryIndex,
                meta: {
                    requireAuth: true
                }
            },
        ]
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
