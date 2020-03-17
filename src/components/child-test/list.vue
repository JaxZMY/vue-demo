<!-- 列表 -->
<template>
  <div>
    <div>
      <el-card class="box-card" shadow="hover">
        <div v-for="item in list" :key="item.id" class="text item">
          <el-link type="primary" class="title1">{{item.title}}</el-link>
          <el-button type="primary" @click="deleteItem(item)">删除</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import event from './event'
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    deleteItem(item) {
      console.log(item+'List');
      this.$emit('delet1',item)
      event.$emit('zidingyi',item.title)
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.title1{
   width: 200px;
   padding: 20px 0;
}
</style>