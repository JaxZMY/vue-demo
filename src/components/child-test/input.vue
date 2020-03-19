<!--  -->
<template>
  <div>
    <el-form
      :inline="true"
      ref="ruleForm"
      :model="formInline"
      :rules="ruls"
      class="demo-form-inline"
    >
      <el-form-item label="请输入标题" prop="title">
        <el-input v-model="formInline.title" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">新增</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import event from "./event";
export default {
  name: "Input",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      formInline: {
        title: ""
      },
      ruls: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }]
      }
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    event.$on("zidingyi", this.gege);
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid, error) => {
        if (valid) {
          this.$emit("add", this.formInline.title);
        }else{
          console.log(error)
        }
      });
    },
    gege(title) {
      console.log(title + "自定义事件");
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>