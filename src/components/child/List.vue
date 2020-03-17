<template>
	<div>
		<ul>
			<li v-for="item in list" :key="item.id">
				{{item.title}}
				<button @click = 'deleteItem(item)'>删除</button>
			</li>
		</ul>
	</div>
</template>

<script>
	import event from './event'
	export default{
		name:'List',
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods: {
			deleteItem(item){
				// console.log(item)
				this.$emit('delete',item.id)

				//调用自定义事件
				event.$emit('addTitile',item.title)
			}
		},
	}
</script>

<style>
</style>
