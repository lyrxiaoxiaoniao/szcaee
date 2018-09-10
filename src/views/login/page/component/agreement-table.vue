<template>
  <el-table
    :data="tableData3"
    border
    highlight-current-row
    tooltip-effect="light"
    size="mini">
    <el-table-column prop="name" header-align="center" label="托管方名称"></el-table-column>
    <el-table-column prop="name1" header-align="center" label="媒体名称"></el-table-column>
    <el-table-column prop="name2" header-align="center" :show-overflow-tooltip="true" label="资产包名称"></el-table-column>
    <el-table-column prop="date" header-align="center" label="上架时间"></el-table-column>
    <el-table-column prop="mouth" header-align="center" label="托管周期"></el-table-column>
    <el-table-column prop="day" header-align="center" label="托管周期(天)"></el-table-column>
    <el-table-column prop="hours" header-align="center" :show-overflow-tooltip="true" label="广告时段"></el-table-column>
    <el-table-column prop="sa" header-align="center" label="资产包单位(秒)"></el-table-column>
    <el-table-column prop="yen" header-align="center" label="资产包总价值(元)"></el-table-column>
    <el-table-column prop="num" header-align="center" label="资产包数量"></el-table-column>
    <el-table-column prop="num1" header-align="center" label="已挂牌数量"></el-table-column>
    <el-table-column prop="num2" header-align="center" label="挂牌价"></el-table-column>
    <el-table-column prop="num3" header-align="center" label="交易价"></el-table-column>
    <el-table-column prop="num4" header-align="center" label="摘牌价"></el-table-column>
  </el-table>
</template>

<script>
import { Table, TableColumn } from 'element-ui';
export default {
  name: 'p-table',
  components: { [Table.name]: Table, [TableColumn.name]: TableColumn },
  data() {
    return {
      tableData3: [
        {
          date: '2016-05-03',
          name: '承销商A',
          name1: '山东卫视',
          name2: '山东卫视夜间时段',
          mouth: '12月',
          day: '300',
          hours: '每天0:00-6:00',
          sa: '600',
          yen: '￥24,000.0',
          num: '200',
          num1: '50',
          num2: '￥100.0',
          num3: '￥200.0',
          num4: '￥120.0'
        },
        {
          date: '2016-05-03',
          name: '承销商A',
          name1: '山东卫视',
          name2: '山东卫视夜间时段',
          mouth: '12月',
          day: '300',
          hours: '每天0:00-6:00',
          sa: '600',
          yen: '￥24,000.0',
          num: '200',
          num1: '50',
          num2: '￥100.0',
          num3: '￥200.0',
          num4: '￥120.0'
        },
        {
          date: '2016-05-03',
          name: '承销商A',
          name1: '山东卫视',
          name2: '山东卫视夜间时段',
          mouth: '12月',
          day: '300',
          hours: '每天0:00-6:00',
          sa: '600',
          yen: '￥24,000.0',
          num: '200',
          num1: '50',
          num2: '￥100.0',
          num3: '￥200.0',
          num4: '￥120.0'
        },
        {
          date: '2016-05-03',
          name: '承销商A',
          name1: '山东卫视',
          name2: '山东卫视夜间时段',
          mouth: '12月',
          day: '300',
          hours: '每天0:00-6:00',
          sa: '600',
          yen: '￥24,000.0',
          num: '200',
          num1: '50',
          num2: '￥100.0',
          num3: '￥200.0',
          num4: '￥120.0'
        },
        {
          date: '2016-05-03',
          name: '承销商A',
          name1: '山东卫视',
          name2: '山东卫视夜间时段',
          mouth: '12月',
          day: '300',
          hours: '每天0:00-6:00',
          sa: '600',
          yen: '￥24,000.0',
          num: '200',
          num1: '50',
          num2: '￥100.0',
          num3: '￥200.0',
          num4: '￥120.0'
        },
        {
          date: '2016-05-03',
          name: '承销商A',
          name1: '山东卫视',
          name2: '山东卫视夜间时段',
          mouth: '12月',
          day: '300',
          hours: '每天0:00-6:00',
          sa: '600',
          yen: '￥24,000.0',
          num: '200',
          num1: '50',
          num2: '￥100.0',
          num3: '￥200.0',
          num4: '￥120.0'
        },
        {
          date: '2016-05-03',
          name: '承销商A',
          name1: '山东卫视',
          name2: '山东卫视夜间时段',
          mouth: '12月',
          day: '300',
          hours: '每天0:00-6:00',
          sa: '600',
          yen: '￥24,000.0',
          num: '200',
          num1: '50',
          num2: '￥100.0',
          num3: '￥200.0',
          num4: '￥120.0'
        },
        {
          date: '2016-05-03',
          name: '承销商A',
          name1: '山东卫视',
          name2: '山东卫视夜间时段',
          mouth: '12月',
          day: '300',
          hours: '每天0:00-6:00',
          sa: '600',
          yen: '￥24,000.0',
          num: '200',
          num1: '50',
          num2: '￥100.0',
          num3: '￥200.0',
          num4: '￥120.0'
        },
        {
          date: '2016-05-03',
          name: '承销商A',
          name1: '山东卫视',
          name2: '山东卫视夜间时段',
          mouth: '12月',
          day: '300',
          hours: '每天0:00-6:00',
          sa: '600',
          yen: '￥24,000.0',
          num: '200',
          num1: '50',
          num2: '￥100.0',
          num3: '￥200.0',
          num4: '￥120.0'
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
</style>
