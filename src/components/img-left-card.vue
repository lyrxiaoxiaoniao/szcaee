<template>
  <div class="imgcard clearfix">
    <div class="imgcard-left">
      <img :src="cardData.imgSrc" alt="">
    </div>
    <div class="imgcard-right">
      <h3>{{cardData.title}}</h3>
      <div class="content">
        {{cardData.content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style lang='scss' scoped>
.imgcard {
  width: 100%;
  min-width: 130px;
  display: inline-block;
  margin: 10px;
  &-left {
    width: 130px;
    // float: left;
    float: right;
    img {
      width: 130px;
    }
  }
  &-right {
    // overflow: hidden;
    h3 {
      text-align: center;
      line-height: 2;
      font-size: 20px;
      color: #333;
    }
    .content {
      font-size: 14px;
      color: #808286;
      // text-indent: 2em;
      line-height: 1.8;
    }
  }
}
</style>
