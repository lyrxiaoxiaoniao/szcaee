<template>
  <div class="platform">
    <back-top :height='150' :bottom="200"></back-top>
    <p-header class="p-header"></p-header>
    <p-banner></p-banner>
    <p-container></p-container>
    <p-footer></p-footer>
  </div>
</template>
<script>
import PHeader from '@/dash/Header';
import PFooter from '@/dash/Footer';
import PContainer from './Container';
import PBanner from '@/dash/Banner';
import BackTop from '@c/back-top-new';
export default {
  components: {
    PHeader,
    PFooter,
    PContainer,
    PBanner,
    BackTop
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.platform {
  position: relative;
  padding-top: 105px;
  .p-header {
    position: fixed;
    top: 0;
    z-index: 99;
    border-bottom: 1px solid #f5f5f5;
  }
}
</style>
