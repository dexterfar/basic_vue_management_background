// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import AppConfig from '@/resources/appConfig'
import { Notification, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI, {
    size: AppConfig.uiSize // 设置 element-ui 默认的大小
})

Vue.prototype.toaster = {
    info(t, d, duration = 2000) {
        //     Notification.info({
        //       title: t || '消息提示',
        //       message: d || '',
        //       duration:  duration
        //     })
        Message({
            message: t,
            type: 'info',
            duration: duration
        })
    },
    success(t, d, duration = 2000) {
        Message({
            message: t,
            type: 'success',
            duration: duration
        })
        //     Notification.success({
        //       title: t || '成功提示',
        //       message: d || '',
        //       duration:  duration
        //     })
    },
    warning(t, d, duration = 2000) {
        Message({
            message: t,
            type: 'warning',
            duration: duration
        })
        //     Notification.warning({
        //       title: t || '警告提示',
        //       message: d || '',
        //       duration:  duration
        //     })
    },
    error(t, d, duration = 2000) {
        Message({
            message: t,
            type: 'error',
            duration: duration
        })
        //     Notification.danger({
        //       title: t || '错误提示',
        //       message: d || '',
        //       duration:  duration
        //     })
    }
}


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `大圣&哪吒在线测评分析系统`;
    const role = sessionStorage.getItem('ms_user');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        next();
    }
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})



