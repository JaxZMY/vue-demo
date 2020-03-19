<template>
  <div class="wuguanxi">
    <wuguanxiChild />
    <zujian2 style="margin-top:20px"/>
  </div>
</template>

<style lang="sass" scoped>

</style>

<script>
import wuguanxiChild from "../components/wuguanxi/wuguanxiChild";
import zujian2 from '../components/wuguanxi/zujian2'
export default {
  name: "Wuguanxi",
  components:{
      wuguanxiChild,
      zujian2
  },
  data() {
    return {};
  },

  methods: {},
  mounted() {}
};
</script>
