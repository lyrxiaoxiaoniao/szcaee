<template>
  <div class="hovercard">
    <div class="hovercard-item default">
      {{cardData.title}}
    </div>
    <div class="hovercard-item active">
      {{cardData.content}}
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

<style lang="scss" scoped>
.hovercard {
  display: inline-block;
  margin: 0 10px;
  position: relative;
  width: 100%;
  min-width: 130px;
  height: 150px;
  line-height: 150px;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  overflow: hidden;
  &-item {
    width: 100%;
    height: 100%;
  }
  .default{
    text-align: center;
    font-size: 22px;
    color: #333;
    position: absolute;
    top: 0;
    transition: all .3s;
  }
  .active{
    position: absolute;
    text-indent: 2em;
    color: #fff;
    top: 150px;
    z-index: 100;
    font-size: 14px;
    line-height: 1.5;
    background-color: #de4f07;
    opacity: .5;
    transition: all .3s;
  }
}
.hovercard:hover {
  // border-color: #de4f07;
  .active{
    top: 50px;
    left: 0;
    opacity: .6;
    transition: top .5s;
  }
  .default{
    top: -50px;
    transition: top .5s ease;
  }
}
</style>
