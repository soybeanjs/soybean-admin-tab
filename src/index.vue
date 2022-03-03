<template>
  <div></div>
</template>

<script setup lang="ts">
import { computed } from 'vue-demi';
import { useCssRender } from './hooks';

interface Props {
  /** 布局模式 */
  mode?: 'vertical' | 'horizontal';
  /** 最小宽度 */
  minWidth?: number;
  /** 头部可见 */
  headerVisible?: boolean;
  /** 头部高度 */
  headerHeight?: number;
  /** 标签可见 */
  tabVisible?: boolean;
  /** 标签页高度 */
  tabHeight?: number;
  /** 固定头部和标签 */
  fixedHeaderAndTab?: boolean;
  /** 底部可见 */
  footerVisible?: boolean;
  /** 底部高度 */
  footerHeight?: number;
  /** 固定底部 */
  fixedFooter?: boolean;
  /** 侧边可见 */
  siderVisible?: boolean;
  /** 侧边栏高度 */
  siderWidth?: number;
  /** 侧边栏折叠状态的高度 */
  siderCollapsedWidth?: number;
  /** 侧边栏折叠状态 */
  siderCollapse?: boolean;
  /** 动画过渡时间 */
  transitionDuration?: number;
  /** 动画过渡速度曲线 */
  transitionTimingFunction?: string;
}

const props = withDefaults(defineProps<Props>(), {
  mode: 'vertical',
  minWidth: 1200,
  headerVisible: true,
  headerHeight: 56,
  tabVisible: true,
  tabHeight: 44,
  fixedHeaderAndTab: true,
  footerVisible: true,
  footerHeight: 48,
  fixedFooter: true,
  siderVisible: true,
  siderWidth: 200,
  siderCollapsedWidth: 64,
  siderCollapse: false,
  transitionDuration: 300,
  transitionTimingFunction: 'ease-in-out'
});

const { cssRender } = useCssRender();

// css
cssRender('.soybean-admin-layout', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%'
});
</script>
<style></style>
