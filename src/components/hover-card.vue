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
  .default {
    text-align: center;
    font-size: 22px;
    color: #333;
    position: absolute;
    top: 0;
    transition: all 0.3s;
  }
  .active {
    position: absolute;
    text-indent: 2em;
    color: #fff;
    top: 150px;
    z-index: 100;
    font-size: 14px;
    line-height: 1.5;
    background-color: #ff8038;
    transition: all 0.3s;
  }
}
.hovercard:hover {
  .active {
    top: 50px;
    left: 0;
    transition: top 0.5s;
  }
  .default {
    top: -50px;
    transition: top 0.5s ease;
  }
}
</style>
