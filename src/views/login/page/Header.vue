<template>
  <header class="w100" :class="{'scollto': isShow}">
    <div class="container clearfix">
      <div class="container-logo">
        <a href="javascript:;">
          <img src="../../../assets/logo.png" alt="">
        </a>
      </div>
      <div class="container-topbar">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          active-text-color="#930"
          @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">新闻</el-menu-item>
          <el-menu-item index="3">公告</el-menu-item>
          <el-submenu index="4">
            <template slot="title">国有资产托管</template>
            <el-menu-item index="4-1">产权转让</el-menu-item>
            <el-menu-item index="4-2">企业增资</el-menu-item>
            <el-menu-item index="4-3">资产转让</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">非国有资产托管</template>
            <el-menu-item index="5-1">项目</el-menu-item>
            <el-submenu index="5-2">
              <template slot="title">资产</template>
              <el-menu-item index="5-2-1">无形资产</el-menu-item>
              <el-menu-item index="5-2-2">有形资产</el-menu-item>
            </el-submenu>
            <el-menu-item index="5-3">艺术资产</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">资产托管平台</template>
            <el-menu-item index="6-1">媒体资产托管平台</el-menu-item>
            <el-menu-item index="6-2">音乐资产托管平台</el-menu-item>
          </el-submenu>
          <el-menu-item index="7">关于</el-menu-item>
        </el-menu>
      </div>
      <div class="container-search">
        <el-input
          placeholder="请输入内容"
          suffix-icon="el-icon-search"
          v-model="input4">
        </el-input>
      </div>
    </div>
  </header>
</template>

<script>
import { scrollTop } from '@utils';
import { on, off } from '@utils/dom';
import { Menu, MenuItem, Submenu, Input } from 'element-ui';
export default {
  name: 'p-header',
  components: {
    [Menu.name]: Menu,
    [MenuItem.name]: MenuItem,
    [Submenu.name]: Submenu,
    [Input.name]: Input
  },
  data() {
    return {
      activeIndex2: '1',
      input4: '',
      isShow: false
    };
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll, false);
    // window.addEventListener('resize', this.handleScroll, false);
    on(window, 'scroll', this.handleScroll);
    on(window, 'resize', this.handleScroll);
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.handleScroll, false);
    // window.removeEventListener('resize', this.handleScroll, false);
    off(window, 'scroll', this.handleScroll);
    off(window, 'resize', this.handleScroll);
  },
  methods: {
    handleSelect() {},
    handleScroll() {
      this.isShow = window.pageYOffset > 0
    }
  }
};
</script>

<style lang="scss" scoped>
// @import '@scss/common.scss';
@import '@scss/mixin.scss';
header {
  display: block;
  width: 100%;
  padding: 30px 0 15px;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  .container {
    @extend .w;
    height: 60px;
    position: relative;
    font-size: 32px;
    line-height: 1.5;
    padding: 0 200px 0 280px;
    text-align: center;
    &-logo {
      @include paw(280px);
      left: 0;
      a {
        display: block;
        height: 60px;
        img {
          width: 100%;
          height: 60px;
        }
      }
    }
    &-topbar {
      width: 100%;
    }
    &-search {
      @include paw(200px);
      height: 100%;
      right: 0;
      .el-input .el-input__inner {
        border-radius: 5px !important;
      }
    }
  }
}
.scollto {
  box-shadow: 0 4px 12px 0 rgba(52, 63, 75, 0.06),
    0 10px 40px 0 rgba(52, 63, 75, 0.06), 0 0 0 1px rgba(52, 63, 75, 0.02);
}
</style>
<style lang="scss" scoped>
.el-menu--horizontal {
  border-right: none;
  border-bottom: none;
}
</style>
