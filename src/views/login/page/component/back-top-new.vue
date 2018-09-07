<template>
  <transition name="fade">
    <div v-if="backTop" :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <i class="el-icon-caret-top"></i>
            </div>
        </slot>
    </div>
  </transition>
</template>
<script>
import { scrollTop } from '../../../../utils';
import { on, off } from '../../../../utils/dom';
const prefixCls = 'ivu-back-top';
export default {
  props: {
    height: {
      type: Number,
      default: 400
    },
    bottom: {
      type: Number,
      default: 30
    },
    right: {
      type: Number,
      default: 30
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      backTop: false
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
  computed: {
    classes() {
      return `${prefixCls}`;
    },
    styles() {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`
      };
    },
    innerClasses() {
      return `${prefixCls}-inner`;
    }
  },
  methods: {
    handleScroll() {
      this.backTop = window.pageYOffset >= this.height;
    },
    back() {
      const sTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrollTop(window, sTop, 0, this.duration);
      this.$emit('on-click');
    }
  }
};
</script>
<style lang='scss' scoped>
.ivu-back-top {
  position: fixed;
  z-index: 10;
  cursor: pointer;
}
.ivu-back-top-inner {
  padding: 10px;
  background: rgba(153, 51, 0, 1);
  color: #fff;
  text-align: center;
  border-radius: 2px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
