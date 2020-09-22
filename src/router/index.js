import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/header'
import login from '@/components/login'
import home from '@/components/home'
import teacherAdmin from'@/components/teacherAdmin'
import userAdmin from'@/components/userAdmin'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            children:[
                {
                    path: '/teacherAdmin',
                    name: 'teacherAdmin',
                    component: teacherAdmin
                },
                {
                    path: '/userAdmin',
                    name: 'userAdmin',
                    component: userAdmin
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
})
