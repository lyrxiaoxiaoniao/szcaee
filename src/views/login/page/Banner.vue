<template>
  <div id="banner">
    <div class="container">
      <el-carousel :interval="4000" height="350px">
        <el-carousel-item v-for="item in 6" :key="item">
          <img src="../../../assets/banner.jpg" alt="文交所">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
// import $http from '@/api';
import {Carousel, CarouselItem} from 'element-ui';
export default {
  name: 'p-banner',
  components: {
    [Carousel.name]: Carousel,
    [CarouselItem.name]: CarouselItem
  },
  methods: {
    // async getData() {
    //   try {
    //     const app = $http.GET('/health')
    //     console.log(app);
    //   } catch (error) {}
    // }
  }
};
</script>

<style  lang="scss" scoped>
// @import '@scss/common.scss';
#banner {
  @extend .w100;
  height: 350px;
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
