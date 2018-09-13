<template>
  <div class="pcontainer">
    <!-- 竞拍转让展示列表 -->
    <div class="pcontainer-item">
      <div class="pcontainer-item_title">
        <i class="el-icon-tickets"></i> 竞拍转让展示列表
        <span class="look">查看更多>></span>
      </div>
      <bidders-table></bidders-table>
    </div>
    <!-- 协议转让展示列表 -->
    <div class="pcontainer-item">
      <div class="pcontainer-item_title">
        <i class="el-icon-document"></i> 协议转让展示列表
        <span class="look">查看更多>></span>
      </div>
      <agreement-table></agreement-table>
    </div>
    <!-- 项目展示（图片视频展示区） -->
    <div class="pcontainer-cards clearfix">
      <div class="pcontainer-cards_title">
        <i class="el-icon-picture-outline"></i> 项目展示（图片视频展示区）
        <span class="look">查看更多>></span>
      </div>
      <div v-for="i in 4" :key="i" class="pcontainer-cards-item">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img src="../../../assets/test.png" class="image">
          <div style="padding: 14px;">
            <span>签约仪式</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate | parseTime('{y}-{m}-{d} {h}:{i}:{s} {a}') }}</time>
            </div>
          </div>
        </el-card>
      </div>
    </div>
    <!-- 托管方介绍 -->
    <div class="pcontainer-item">
      <div class="pcontainer-item_title">
        <i class="el-icon-document"></i> 托管方介绍
        <span class="look">查看更多>></span>
      </div>
      <img-card></img-card>
      <img-card></img-card>
      <img-card></img-card>
    </div>
    <!-- 第三方合作运营机构介绍 -->
    <div class="pcontainer-trusteeship">
      <h2>第三方合作运营机构介绍</h2>
      <div>
        <img-left-card></img-left-card>
        <img-left-card></img-left-card>
        <img-left-card></img-left-card>
      </div>
    </div>
    <!-- 专委会介绍 -->
    <div class="pcontainer-trusteeship">
      <h2>专委会介绍</h2>
      <div>
        <hover-card></hover-card>
        <hover-card></hover-card>
        <hover-card></hover-card>
      </div>
    </div>
    <!-- 数据看板 -->
  </div>
</template>

<script>
import BiddersTable from './component/bidders-table';
import AgreementTable from './component/agreement-table';
import ImgCard from '@c/img-card';
import ImgLeftCard from '@c/img-left-card';
import HoverCard from '@c/hover-card';
import { Card, Button } from 'element-ui';

export default {
  name: 'p-container',
  components: {
    BiddersTable,
    AgreementTable,
    ImgCard,
    ImgLeftCard,
    HoverCard,
    [Card.name]: Card,
    [Button.name]: Button
  },
  data() {
    return {
      currentDate: new Date()
    };
  }
};
</script>

<style lang="scss" scoped>
.pcontainer {
  width: 1210px;
  margin: 0 auto;
  padding-bottom: 25px;
  &-item {
    margin-top: 15px;
    &_title {
      padding: 10px 0;
      font-size: 20px;
      border-bottom: 2px solid #930;
      .look {
        cursor: pointer;
        float: right;
        color: #930;
        font-size: 16px;
      }
    }
  }
  &-cards {
    margin-top: 15px;
    width: 100%;
    &_title {
      padding: 10px 0;
      font-size: 20px;
      border-bottom: 2px solid #930;
      .look {
        cursor: pointer;
        float: right;
        color: #930;
        font-size: 16px;
      }
    }
    &-item {
      float: left;
      cursor: pointer;
      & + & {
        margin-left: 10px;
      }
      width: 295px;
    }
    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }
    .image {
      width: 295px;
      height: 205px;
      display: block;
      object-fit: cover;
    }
  }
  &-trusteeship {
    width: 100%;
    padding-top: 15px;
    border-top: 1px solid #f7f7f7;
  }
}
</style>
