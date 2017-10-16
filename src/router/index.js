import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../pages/hello.vue'
import CtoF from '../pages/CtoF.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/c2f',
      name: 'c2f',
      component: CtoF
    },
    // router 轉址
    { path: '/*', redirect: '/hello' }
  ]
})
