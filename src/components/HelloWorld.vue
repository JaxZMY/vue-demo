<template>
	<div class="hello">
		
		<formDemo v-if="showForm"></formDemo>
		<button @click="showForm = true">显示</button>
		<br/>
		<router-link to="/fuzizujian">父子组件通讯</router-link>
	</div>
</template>

<script>
export default {
	name: 'hello',
	components:{
		formDemo:()=>import('../components/async.vue')
	},
	props: {
		msg: String
	},
	data(){
		return{
			showForm:false
		}
	}
	
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
