<!-- 自定义vmodel -->
<template>
  <div>
    <p>{{name}}</p>
    <MyVmodel v-model="name" @change111="change1" />
    <proGress :percent="percent" :start="startNum" :end="endNum" :middle="middleNum" style="width:200px"/>
  </div>
</template>

<script>
import MyVmodel from "../components/myVmodel/index1";
import proGress from "../components/progress-bar.vue";
export default {
  components: {
    MyVmodel,
    proGress
  },
  data() {
    return {
      showModel: false,
      name: "",
      percent: 0.01,
      startNum:0,
      middleNum:10,
      endNum:20
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
   
  },
  methods: {
    change1(name) {
      this.name = name;
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>