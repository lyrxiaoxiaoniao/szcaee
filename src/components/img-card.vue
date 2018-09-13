<template>
  <div class="imgcard clearfix">
    <div class="imgcard-left">
      <img src="../assets/beautiful.png" alt="">
    </div>
    <div class="imgcard-right">
      <h3>美丽联合集团</h3>
      <div class="content">
        美丽联合集团是中国最大的女性媒体与时尚消费集团，拥有超过2亿的注册用户，日均活跃用户数量超过1500万。又拍云作为美丽联合集团企业级的云服务商，自建 CDN 体系很好的帮助解决了美联旗下产品打开速度的问题。特别是双十一大促期间，又拍云帮助美联稳定地扛住了超大流量涌入，以可靠的技术支持为数百万笔订单提供了安全支付保障。
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.imgcard {
  width: 380px;
  display: inline-block;
  margin: 10px;
  &-left {
    width: 380px;
    img {
      display: block;
      width: 130px;
      margin: 10px auto;
    }
  }
  &-right {
    overflow: hidden;
    h3 {
      text-align: center;
      line-height: 2;
      font-size: 20px;
      color: #333;
    }
    .content {
      font-size: 14px;
      color: #808286;
      text-indent: 2em;
      line-height: 1.8;
    }
  }
}
</style>
