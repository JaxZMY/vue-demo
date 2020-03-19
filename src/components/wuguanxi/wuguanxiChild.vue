<!--  -->
<template>
  <div>
    <el-button type="primary" @click="none">组件二消失</el-button>
    <el-button type="primary" @click="show">组件二显示</el-button>
  </div>
</template>

<script>
import event from './event'
export default {
  name:'wuguanxichild',
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    none() {
      this.$message("消失");
        event.$emit('none')
    },
    show() {
      this.$message("显示");
       event.$emit('show')
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>