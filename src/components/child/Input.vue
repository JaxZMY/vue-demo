<template>
	<div>
		<input type="text" v-model="title">
		<button @click="addItem">新增</button>
	</div>
</template>

<script>
	import event from './event'
	export default{
		name:'Input',
		data(){
			return{
				title:''
			}
		},
		methods:{
			addItem(){
				// 调用父组件事件
				this.$emit('add',this.title)
				
			},
			zidingyiTitle(item){
				console.log(`自定义title${item}`)
			}
		},
		mounted(){
			event.$on('addTitile',this.zidingyiTitle)
		}
	}
</script>

<style>
</style>
