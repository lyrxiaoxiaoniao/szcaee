<template>
  <header class="w100">
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
          @select="handleSelect"
          text-color="#000"
          active-text-color="#930">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">菜单1</el-menu-item>
          <el-menu-item index="3">菜单2</el-menu-item>
          <el-menu-item index="4">菜单3</el-menu-item>
        </el-menu>
      </div>
      <div class="container-search">
        <el-input placeholder="请输入内容" v-model="input4">
          <template slot="append">搜索</template>
        </el-input>
      </div>
    </div>
  </header>
</template>

<script>
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
      input4: ''
    };
  },
  methods: {
    handleSelect() {}
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
    padding: 0 250px 0 300px;
    text-align: center;
    &-logo {
      @include paw(300px);
      left: 0;
      a {
        display: block;
        height: 100%;
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
      @include paw(250px);
      height: 100%;
      right: 0;
    }
  }
}
</style>
<style lang="scss" scoped>
.el-menu--horizontal {
  border-right: none;
  border-bottom: none;
}
</style>
