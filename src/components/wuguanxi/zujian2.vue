<!-- 组件2 -->
<template>
  <div>
    <keep-alive>
      <el-card v-if="showval" class="box-card">
        <div slot="header" class="clearfix">
          <span>卡片名称</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
      </el-card>
    </keep-alive>
  </div>
</template>

<script>
import event from "./event";
export default {
  name: "zujian2",
  data() {
    return {
      showval: true
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    event.$on("none", this.none);
    event.$on("show", this.show);
  },
  methods: {
    none() {
      this.showval = false;
    },
    show() {
      this.showval = true;
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>