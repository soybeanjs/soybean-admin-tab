<template>
  <div
    class="admin-tab__button-tab"
    :class="{ 'admin-tab__button-tab--unclosable': !closable }"
    :style="buttonStyle"
    @mouseenter="setTrue"
    @mouseleave="setFalse"
  >
    <span class="admin-tab__button-tab__preffix">
      <slot></slot>
    </span>
    <div v-if="closable" class="admin-tab__button-tab__icon">
      <icon-close :is-active="isIconActive" :active-color="primaryColor" @click="handleClose" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { IconClose } from '@/components';
import { useCssRender, useBoolean } from '@/hooks';
import { addColorAlpha } from '@/utils';

defineOptions({ name: 'ButtonTab' });

interface Props {
  /** 暗黑模式 */
  darkMode?: boolean;
  /** 激活状态 */
  isActive?: boolean;
  /** 主题颜色 */
  primaryColor?: string;
  /** 边框颜色 */
  borderColor?: string;
  /** 暗黑模式的边框颜色 */
  darkBorderColor?: string;
  /** 是否显示关闭图标 */
  closable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  darkMode: false,
  isActive: false,
  primaryColor: '#1890ff',
  borderColor: '#e5e7eb',
  darkBorderColor: '#ffffff3d',
  closable: true
});

interface Emits {
  /** 点击关闭图标 */
  (e: 'close'): void;
}

const emit = defineEmits<Emits>();

const { cssRender, c } = useCssRender();

const { bool: isHover, setTrue, setFalse } = useBoolean();

const isIconActive = computed(() => props.isActive || isHover.value);

const buttonStyle = computed(() => {
  const style: Record<string, string> = {};
  style.borderColor = props.darkMode ? props.darkBorderColor : props.borderColor;
  if (isIconActive.value) {
    style.color = props.primaryColor;
    style.borderColor = addColorAlpha(props.primaryColor, 0.3);
    if (props.isActive) {
      const alpha = props.darkMode ? 0.15 : 0.1;
      style.backgroundColor = addColorAlpha(props.primaryColor, alpha);
    }
  }
  return style;
});

function handleClose(e: MouseEvent) {
  e.stopPropagation();
  emit('close');
}

cssRender(
  '.admin-tab__button-tab',
  {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30px',
    paddingLeft: '14px',
    paddingRight: '6px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '2px',
    cursor: 'pointer'
  },
  [
    c('&--unclosable', { paddingRight: '14px !important' }),
    c('&__preffix', { whiteSpace: 'nowrap' }),
    c('&__icon', { paddingLeft: '10px' })
  ]
);
</script>
<style scoped></style>
