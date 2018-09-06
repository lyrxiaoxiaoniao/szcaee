<template>
  <div class="pcontainer">
    <p-table></p-table>
    <div class="pcontainer-cards clearfix">
      <div v-for="i in 4" :key="i" class="pcontainer-cards-item">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import PTable from './component/p-table';
import { Card, Button } from 'element-ui';
export default {
  name: 'p-container',
  components: { PTable, [Card.name]: Card, [Button.name]: Button }
};
</script>

<style  lang="scss" scoped>
.pcontainer {
  width: 1210px;
  margin: 0 auto;
  padding: 25px 0;
  &-cards {
    margin-top: 10px;
    width: 100%;
    &-item {
      float: left;
      &+&{
        margin-left: 10px;
      }
      width: 295px;
    }
  }
}
</style>
