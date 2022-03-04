<template>
  <div class="p-24px text-14px">
    <h3 class="pb-24px text-24px font-bold">ButtonTab</h3>
    <div class="pl-16px">
      <button-tab>default</button-tab>
      <button-tab :is-active="true" class="ml-12px">active</button-tab>
      <button-tab :closable="false" class="ml-12px">no-close</button-tab>
    </div>
    <div class="pl-16px pt-16px">
      <button-tab primary-color="#5856D6">default</button-tab>
      <button-tab primary-color="#5856D6" :is-active="true" class="ml-12px">active</button-tab>
      <button-tab primary-color="#5856D6" :closable="false" class="ml-12px">no-close</button-tab>
    </div>
    <div class="pt-16px">
      <div class="inline-block p-16px bg-dark text-white rounded-4px">
        <button-tab :dark-mode="true">default</button-tab>
        <button-tab :dark-mode="true" :is-active="true" class="ml-12px">active</button-tab>
        <button-tab :dark-mode="true" :closable="false" class="ml-12px">no-close</button-tab>
      </div>
    </div>
    <h3 class="py-24px text-24px font-bold">ChromeTab</h3>
    <div class="pl-16px">
      <chrome-tab>default</chrome-tab>
      <chrome-tab :is-active="true">active</chrome-tab>
      <chrome-tab :closable="false">no-close</chrome-tab>
    </div>
    <div class="pl-16px pt-16px">
      <chrome-tab primary-color="#5856D6">default</chrome-tab>
      <chrome-tab primary-color="#5856D6" :is-active="true">active</chrome-tab>
      <chrome-tab primary-color="#5856D6" :closable="false">no-close</chrome-tab>
    </div>
    <div class="pt-16px">
      <div class="inline-block p-16px bg-dark text-white rounded-4px">
        <chrome-tab :dark-mode="true">default</chrome-tab>
        <chrome-tab :dark-mode="true" :is-active="true">active</chrome-tab>
        <chrome-tab :dark-mode="true" :closable="false">no-close</chrome-tab>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonTab from './ButtonTab.vue';
import ChromeTab from './ChromeTab.vue';
</script>

<style></style>
