<!-- 父子组件通讯 -->
<template>
  <div>
    <childTest />
  </div>
</template>

<script>
import childTest from "../components/child-test/index";
export default {
  components: {
    childTest
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>