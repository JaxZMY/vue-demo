<template>
	<div>
		<input type="text" v-model="title">
		<button @click="addItem">新增</button>
	</div>
</template>

<script>
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
				//调用自定义事件
				this.$emit('')
			}
		},
		mounted(){
			this.$on('addTitile',this.title)
		}
	}
</script>

<style>
</style>
