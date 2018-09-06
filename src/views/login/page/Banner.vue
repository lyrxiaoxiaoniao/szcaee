<template>
  <div id="banner">
    <div @click="getData" class="container">
      <img src="../../../assets/banner.jpg" alt="">
    </div>
  </div>
</template>

<script>
import $http from '@/api';
export default {
  name: 'p-banner',
  methods: {
    async getData() {
      try {
        const app = $http.GET('/health')
        console.log(app);
      } catch (error) {}
    }
  }
};
</script>

<style  lang="scss" scoped>
// @import '@scss/common.scss';
#banner {
  @extend .w100;
  height: 390px;
  .container {
    @extend .w;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
