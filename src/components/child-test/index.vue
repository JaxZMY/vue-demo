<!-- 子组件 -->
<template>
  <div>
    <Input @add="addTitle" />
    <List v-if="list.length > 0" :list="list" @delet1="deleteHandle" />
  </div>
</template>

<script>
// import event from './event'
import Input from "./input";
import List from "./list";
export default {
  name: "childTest",
  components: {
    Input,
    List
  },
  data() {
    return {
      list: [
        {
          id: `id${Date.now()}`,
          title: "标题1"
        },
        {
          id: `id${Date.now() + 1}`,
          title: "标题2"
        }
      ]
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    addTitle(item) {
      console.log(item);
      this.list.push({
        id: `${Date.now()}`,
        title: item
      });
    },
    deleteHandle(childItem) {
      console.log(1231231)
     this.list = this.list.filter(item => item.id !== childItem.id)
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>