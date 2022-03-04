import ButtonTab from './ButtonTab.vue';
import ChromeTab from './ChromeTab.vue';

/** 填充颜色： [默认颜色, 暗黑主题颜色] */
export type FillColor = [string, string];

/** 混合比例：[默认, 暗黑] */
export type MixRatio = [number, number];

export interface ButtonTabProps {
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
export interface ChromeTabProps {
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

export { ButtonTab, ChromeTab };
