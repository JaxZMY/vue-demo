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
		},
		{
			path: '/wuguanxizujian',
			component: () => import('../views/wuguanxi.vue')
		},
		{
			path: '/zidingyiVmodel',
			component: () => import('../views/zidingyiVmodel.vue')
		},
		{
			path: '/dongtai',
			component: () => import('../views/dongtai.vue')
		},
		{
			path: '/0323Demo',
			component: () => import('../views/0323Demo.vue')
		},
		{
			path: '/0429Demo',
			component: () => import('../views/0429Demo.vue')
		}

	]
})