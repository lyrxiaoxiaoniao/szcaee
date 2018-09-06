<template>
  <div class="about">
    <el-row>
      <el-button @click="abc">默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <el-row>
        <el-button
          plain
          @click="open3">
          成功
        </el-button>
        <el-button
          plain
          @click="open4">
          警告
        </el-button>
        <el-button
          plain
          @click="open5">
          消息
        </el-button>
        <el-button
          plain
          @click="open6">
          错误
        </el-button>
    </el-row>
  </div>
</template>
<script>
import { Row, Button } from 'element-ui';
export default {
  components: { [Button.name]: Button, [Row.name]: Row },
  data() {
    return {};
  },
  methods: {
    abc() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      });
    },
    open3() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      });
    },

    open4() {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      });
    },

    open5() {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      });
    },

    open6() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      });
    }
  }
};
</script>
