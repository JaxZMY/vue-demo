<!--  -->
<template>
  <div>
    <VuexAdd />
    <div>------------------------</div>
    <subscribe />
  </div>
</template>

<script>
import VuexAdd from "../components/vuexAdd";
import subscribe from "../components/subtraction";

import { mapState } from "vuex";
export default {
  components: {
    VuexAdd,
    subscribe
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  computed: {
    ...mapState(["count"])
  },
  methods: {}
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>