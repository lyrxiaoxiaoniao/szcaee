<template>
  <div id="app">
    <page></page>
  </div>
</template>
<script>
import page from "./page";
import $http from "@/api";
export default {
  components: { page },
  methods: {},
  mounted() {
    $http.GET("/getdata").then(res => {
      console.log(res);
    });
  }
};
</script>
<style lang="scss">
</style>
