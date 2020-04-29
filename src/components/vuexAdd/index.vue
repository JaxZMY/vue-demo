<template>
  <div>
    <p>加法组件</p>
    <div class="vuexAdd">{{count}}</div>
    <el-input v-model="step" type="number" placeholder=""></el-input>
    
    
    <el-button type="primary" @click="add">加法</el-button>
    
  </div>
</template>

<style>
</style>

<script>
import { mapState } from "vuex";

export default {
  name: "VuexAdd",
  data() {
    return {
        step:1
    }
  },
  computed: {
    ...mapState(["count"])
  },
  methods: {
      add(){
          this.$store.commit('add',this.step)
      }
  },
  mounted() {}
};
</script>
