<template>
  <footer>
    <div class="copyright">
      Copyright 2016 深圳文化产权交易所 | 粤ICP备：11099274号-4
    </div>
  </footer>
</template>

<script>
export default {
  name: 'p-footer'
};
</script>

<style lang="scss" scoped>
// @import '@scss/common.scss';
footer {
  padding: 20px;
  background-color: #930;
  .copyright {
    @extend .w;
    text-align: center;
  }
}
</style>
