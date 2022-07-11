<template>
  <div
    class="admin-tab__icon"
    :style="{ color: isActive ? activeColor : defaultColor }"
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <transition name="admin-tab__icon-fade">
      <svg-close-circle v-if="isHover" key="hover" class="admin-tab__icon-svg" />
      <svg-close v-else key="unhover" class="admin-tab__icon-svg" />
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { CssRender } from 'css-render';
import { useBoolean } from '@/hooks';
import SvgClose from './SvgClose.vue';
import SvgCloseCircle from './SvgCloseCircle.vue';

defineOptions({ name: 'IconClose' });

interface Props {
  /** 激活状态 */
  isActive?: boolean;
  /** 默认颜色 */
  defaultColor?: string;
  /** 激活时的颜色 */
  activeColor?: string;
}

withDefaults(defineProps<Props>(), {
  isPrimary: false,
  defaultColor: '#9ca3af',
  activeColor: '#1890ff'
});

const { bool: isHover, setTrue, setFalse } = useBoolean();

const { c } = CssRender();
const style = c(
  '.admin-tab__icon',
  {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '18px',
    height: '18px',
    fontSize: '14px'
  },
  [
    c('&-fade', {}, [
      c('&-enter-active, &-leave-active', { transition: 'opacity 0.3s ease-in-out' }),
      c('&-enter-from, &-leave-to', { opacity: 0 })
    ]),
    c('&-svg', { position: 'absolute', width: '16px', height: '16px' })
  ]
);
style.render();
style.mount();
</script>
<style scoped></style>
