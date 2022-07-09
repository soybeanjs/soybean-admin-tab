import { ref } from 'vue';
import { onUnmounted } from 'vue-demi';
import { CssRender } from 'css-render';
import type { CNode, CSelector, CProperties, CNodeChildren } from 'css-render';

/** 使用js渲染css */
export function useCssRender() {
  const { c } = CssRender();

  let style: CNode;

  function cssRender(selector: CSelector, props: CProperties, children: CNodeChildren = []) {
    style = c(selector, props, children);
    style.render();
    style.mount();
  }

  onUnmounted(() => {
    style?.unmount();
  });

  return {
    cssRender,
    c
  };
}

export function useBoolean(initValue = false) {
  const bool = ref(initValue);

  function setBool(value: boolean) {
    bool.value = value;
  }
  function setTrue() {
    setBool(true);
  }
  function setFalse() {
    setBool(false);
  }
  function toggle() {
    setBool(!bool.value);
  }

  return {
    bool,
    setBool,
    setTrue,
    setFalse,
    toggle
  };
}
