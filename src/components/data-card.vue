<template>
  <div class="datacard clearfix">
    <div class="datacard-nav fl">
      <div class="datacard-nav_item active">市场数据</div>
      <div class="datacard-nav_item">文化产业板</div>
      <div class="datacard-nav_item">掌柜文化金服</div>
    </div>
    <div class="datacard-content fl">
      <div class="datacard-content_item">
        <div class="title">
          养成板挂牌企业<i>/</i><span>家</span>
        </div>
        <div class="number">213</div>
      </div>
      <div class="datacard-content_item">
        <div class="title">
          天使板挂牌企业<i>/</i><span>家</span>
        </div>
        <div class="number">340</div>
      </div>
      <div class="datacard-content_item">
        <div class="title">
          登记托管企业<i>/</i><span>家</span>
        </div>
        <div class="number">544</div>
      </div>
      <div class="datacard-content_item">
        <div class="title">
          国有产权交易<i>/</i><span>亿</span>
        </div>
        <div class="number">4.95</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.datacard {
  width: 100%;
  min-width: 980px;
  &-nav {
    &_item {
      & + & {
        border-top: 1px solid #dd7033;
      }
      cursor: pointer;
      width: 230px;
      height: 100px;
      line-height: 100px;
      background-color: #ff8038;
      color: rgb(247, 244, 248);
      text-align: center;
    }
    .active {
      background-color: #f03c18;
    }
    :hover {
      background-color: #f03c18;
    }
  }
  &-content {
    position: relative;
    width: 980px;
    height: 280px;
    margin-top: 10px;
    padding: 34px 53px;
    background-color: #fff;
    border: 1px solid #ff803861;
    border: 1px solid #f5f5f5;
    &::before {
      position: absolute;
      left: 0;
      top: -10px;
      content: '';
      border-bottom: 10px solid rgba(164, 78, 30, 1);
      border-right: 10px solid transparent;
    }
    &::after {
      position: absolute;
      left: 0;
      bottom: -10px;
      content: '';
      border-top: 10px solid rgba(164, 78, 30, 1);
      border-right: 10px solid transparent;
    }
    &_item {
      float: left;
      width: 280px;
      height: 130px;
      // background-color: pink;
      .number {
        font-size: 28px;
        line-height: 40px;
        color: rgba(253, 37, 15, 1);
      }
      .title {
        line-height: 30px;
        font-size: 18px;
        color: rgba(51, 51, 51, 1);
        i {
          font-size: 18px;
          margin: 0 9px;
        }
        span {
          font-size: 16px;
          color: rgb(160, 160, 160);
        }
      }
    }
  }
}
</style>
