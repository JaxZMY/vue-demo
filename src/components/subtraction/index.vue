<template>
  <div>
    <p>减法组件</p>
    <div class="subtraction">{{count}}</div>
    <el-button type="primary" @click="sub">减法</el-button>
  </div>
</template>

<style>
</style>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Subtraction",
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
    ...mapMutations(['vuexSub']),
    sub() {
      this.vuexSub(2)
    }
  },
  mounted() {}
};
</script>
