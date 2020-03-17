<template>
  <div class="hello">
    <br />

    <el-row :gutter="12">
      <el-col :span="8">
        <router-link to="/fuzizujian">
          <el-card shadow="hover">父子组件通讯</el-card>
        </router-link>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" @click.native="asyncCom">异步事件</el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">无关系组件通讯</el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">无关系组件通讯</el-card>
      </el-col>
    </el-row>
    <formDemo v-if="showForm"></formDemo>
  </div>
</template>

<script>
export default {
  name: "hello",
  components: {
    formDemo: () => import("../components/async.vue")
  },
  props: {
    msg: String
  },
  data() {
    return {
      showForm: false
    };
  },
  methods: {
    asyncCom() {
      console.log(111);
      this.showForm = true;
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
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
