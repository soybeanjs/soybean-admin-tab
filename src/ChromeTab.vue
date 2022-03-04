<template>
  <div
    class="soybean-admin-tab__chrome-tab"
    :class="{ 'soybean-admin-tab__chrome-tab--active': isActive, 'soybean-admin-tab__chrome-tab--hover': isHover }"
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <div class="soybean-admin-tab__chrome-tab__bg">
      <svg-radius-bg
        :dark-mode="darkMode"
        :is-active="isActive"
        :is-hover="isHover"
        :primary-color="primaryColor"
        :bg-color="bgColor"
        :hover-bg-color="hoverBgColor"
        :mix-color="mixColor"
        :mix-ratio="mixRatio"
      />
    </div>
    <span class="soybean-admin-tab__chrome-tab__slot">
      <slot></slot>
    </span>
    <div v-if="closable" class="soybean-admin-tab__chrome-tab__icon">
      <icon-close :is-active="isActive" :active-color="primaryColor" @click="handleClose" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CssRender } from 'css-render';
import { IconClose, SvgRadiusBg } from '@/components';
import { useBoolean } from '@/hooks';

/** 填充颜色： [默认颜色, 暗黑主题颜色] */
type FillColor = [string, string];
/** 混合比例：[默认, 暗黑] */
type MixRatio = [number, number];

interface Props {
  /** 暗黑模式 */
  darkMode?: boolean;
  /** 激活状态 */
  isActive?: boolean;
  /** 主题颜色 */
  primaryColor?: string;
  /** 是否显示关闭图标 */
  closable?: boolean;
  /** 背景颜色 */
  bgColor?: FillColor;
  /** 悬浮时的背景颜色 */
  hoverBgColor?: FillColor;
  /** 激活状态时的混合颜色 */
  mixColor?: FillColor;
  /** 混合比例(主题颜色的占比) */
  mixRatio?: MixRatio;
}

interface Emits {
  /** 点击关闭图标 */
  (e: 'close'): void;
}

withDefaults(defineProps<Props>(), {
  darkMode: false,
  isActive: false,
  primaryColor: '#1890ff',
  closable: true,
  bgColor: () => ['#ffffff', '#18181c'],
  hoverBgColor: () => ['#dee1e6', '#3f3c37'],
  mixColor: () => ['#ffffff', '#000'],
  mixRatio: () => [0.2, 0.3]
});

const emit = defineEmits<Emits>();

const { bool: isHover, setTrue, setFalse } = useBoolean();

function handleClose(e: MouseEvent) {
  e.stopPropagation();
  emit('close');
}

// css
const { c } = CssRender();
const style = c(
  '.soybean-admin-tab__chrome-tab',
  {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    height: '34px',
    paddingLeft: '24px',
    paddingRight: '24px',
    marginRight: '-18px',
    cursor: 'pointer'
  },
  [
    c('&--active', {
      zIndex: 10
    }),
    c('&--hover', {
      zIndex: 9
    }),
    c('&__bg', {
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    }),
    c('&__slot', {
      position: 'relative',
      zIndex: 2,
      whiteSpace: 'nowrap'
    }),
    c('&__icon', {
      paddingLeft: '18px'
    })
  ]
);
style.render();
style.mount();
</script>
<style scoped></style>
