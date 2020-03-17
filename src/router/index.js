import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',

			component: () => import('../views/HelloWorld.vue')
		},
		{
			path: '/fuzizujian',

			component: () => import('../views/fuzizujiantongxun.vue')
		},
		{
			path: '/fuzi-test',
			component: () => import('../views/fuzi-test.vue')
		}

	]
})