<template>
  <div class="myVmodel">
    <el-input @input.native="myVmodel($event)" :value="text1" placeholder></el-input>
    <!-- <input type="text" /> -->
  </div>
</template>

<style  scoped>
/* @import './index.scss' */
</style>

<script>
export default {
  name: "MyVmodel",
  props: {
    text1: {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {};
  },
  model: {
    prop: "text1", // 对应 props text1
    event: "change1"
  },
  methods: {
    myVmodel(event) {
      console.log(event);

      this.text1 += event.data;
      this.$emit("change111", event.target.value);
      console.log(this.text1);
    }
  },
  mounted() {}
};
</script>
