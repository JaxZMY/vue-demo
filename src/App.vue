<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!-- <HelloWorld/> -->
    <el-row class="a1 routerView" type="flex">
      <el-col :span="4">
        <router-link to="/">
          <el-card shadow="hover">首页</el-card>
        </router-link>
      </el-col>
    </el-row>
    <router-view ></router-view>
  </div>
</template>

<script>
// import HelloWorld from './views/HelloWorld'

export default {
  name: "app"
  // components: {
  //   HelloWorld
  // }
};
</script>

<style>
@import url("./stylus/common.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.a1 {
  justify-content: center;
}
.routerView {
  margin-bottom: 20px;
}
</style>
