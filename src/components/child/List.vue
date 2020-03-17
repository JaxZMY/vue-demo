<template>
	<div>
		<ul>
			<li v-for="item in list" :key="item.id">
				{{item.title}}
				<button @click = 'deleteItem(item.id)'>删除</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'List',
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
</style>
