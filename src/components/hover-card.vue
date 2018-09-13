<template>
  <div class="hovercard">
    <div class="hovercard-item default">
      专家委员会1
    </div>
    <div class="hovercard-item active">
      专家委员会: 简介。。。。。。。。专家委员会专家委员会1专家委员会1专家委员会1专家委员会1专家委员会1专家委员会1专家委员会1专家委员会1专家委员会1
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hovercard {
  display: inline-block;
  margin: 0 10px;
  position: relative;
  width: 100%;
  width: 380px;
  height: 150px;
  line-height: 150px;
  border: 1px solid #f5f5f5;
  overflow: hidden;
  &-item {
    width: 100%;
    height: 100%;
  }
  .default{
    text-align: center;
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
    transition: all .3s;
  }
}
.hovercard:hover {
  // border-color: #de4f07;
  .active{
    top: 0;
    left: 0;
    transition: top .5s;
  }
  .default{
    top: -150px;
    transition: top .5s;
  }
}
</style>
