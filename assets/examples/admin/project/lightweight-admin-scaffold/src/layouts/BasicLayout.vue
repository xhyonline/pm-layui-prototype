<template>
  <lay-config-provider
    :theme="appStore.theme"
    :themeVariable="appStore.themeVariable"
  >
    <lay-layout
      :class="[
        'pm-admin-layout',
        appStore.tab ? 'has-tab' : '',
        appStore.collapse ? 'collapse' : '',
        appStore.greyMode ? 'grey-mode' : ''
      ]"
    >
      <div
        v-if="!appStore.collapse"
        class="layui-layer-shade hidden-sm-and-up"
        @click="appStore.toggleCollapse()"
      ></div>

      <lay-side
        :width="sideWidth"
        :class="appStore.sideTheme === 'dark' ? 'dark changeBgc' : 'light'"
      >
        <div v-if="appStore.logo" class="layui-logo">
          <span v-if="!appStore.collapse">后台原型</span>
          <span v-else>P</span>
        </div>
        <div class="side-menu-wrapper">
          <lay-menu
            :tree="true"
            :collapse="appStore.collapse"
            :level="appStore.level"
            :inverted="appStore.inverted"
            :theme="appStore.sideTheme"
            v-model:selected-key="selectedKey"
            v-model:open-keys="openKeys"
          >
            <lay-sub-menu
              v-for="group in menuGroups"
              :key="group.id"
              :id="group.id"
            >
              <template #title>{{ group.title }}</template>
              <lay-menu-item
                v-for="item in group.children"
                :key="item.path"
                :id="item.path"
              >
                <router-link :to="item.path">{{ item.title }}</router-link>
              </lay-menu-item>
            </lay-sub-menu>
          </lay-menu>
        </div>
      </lay-side>

      <lay-layout class="pm-shell-main" style="width: 0">
        <lay-header class="pm-shell-header" style="display: flex">
          <lay-menu class="layui-layout-left">
            <lay-menu-item @click="appStore.toggleCollapse()">
              <lay-icon
                v-if="appStore.collapse"
                type="layui-icon-spread-left"
              ></lay-icon>
              <lay-icon v-else type="layui-icon-shrink-right"></lay-icon>
            </lay-menu-item>
            <lay-menu-item class="hidden-xs-only" @click="appStore.refreshPage()">
              <lay-icon type="layui-icon-refresh-one"></lay-icon>
            </lay-menu-item>
            <lay-menu-item
              v-if="appStore.breadcrumb"
              class="hidden-xs-only"
              style="padding: 0 15px"
            >
              <lay-breadcrumb>
                <lay-breadcrumb-item>{{ currentGroup }}</lay-breadcrumb-item>
                <lay-breadcrumb-item>{{ currentTitle }}</lay-breadcrumb-item>
              </lay-breadcrumb>
            </lay-menu-item>
          </lay-menu>

          <lay-menu class="layui-layout-right">
            <lay-menu-item>
              <lay-icon type="layui-icon-notice"></lay-icon>
            </lay-menu-item>
            <lay-menu-item>
              <lay-icon type="layui-icon-username"></lay-icon>
            </lay-menu-item>
            <lay-menu-item>
              <lay-icon type="layui-icon-more-vertical"></lay-icon>
            </lay-menu-item>
          </lay-menu>
        </lay-header>

        <lay-body class="pm-shell-body">
          <div v-if="appStore.tab" class="global-tab pm-shell-tabbar">
            <lay-tab
              :modelValue="route.path"
              :allowClose="true"
              @change="go"
            >
              <lay-tab-item
                v-for="tab in appStore.quickTabs"
                :id="tab.path"
                :key="tab.path"
                :title="tab.title"
                :closable="tab.closable"
              >
                <template #title>
                  <span class="dot"></span>
                  {{ tab.title }}
                </template>
              </lay-tab-item>
            </lay-tab>
            <lay-icon type="layui-icon-down"></lay-icon>
          </div>

          <div
            class="global-content pm-shell-content"
            :class="{ 'has-tab': appStore.tab }"
          >
            <router-view v-slot="{ Component }" v-if="appStore.routerAlive">
              <component :is="Component" />
            </router-view>
          </div>
        </lay-body>
      </lay-layout>
    </lay-layout>
  </lay-config-provider>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { menuGroups } from "../router/module/base-routes";
import { useAppStore } from "../store";

const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

const sideWidth = computed(() => (appStore.collapse ? "60px" : "220px"));
const selectedKey = ref(route.path);
const openKeys = ref<string[]>([String(route.meta.openKey ?? "workspace")]);

watch(
  () => route.path,
  () => {
    selectedKey.value = String(route.meta.menuKey ?? route.path);
    openKeys.value = [String(route.meta.openKey ?? "workspace")];
  },
  { immediate: true }
);

const currentGroup = computed(() => String(route.meta.group ?? "工作空间"));
const currentTitle = computed(() => String(route.meta.title ?? "工作台"));

const go = (path: string) => {
  void router.push(path);
};
</script>

<style lang="less">
@media screen and (max-width: 767px) {
  .layui-side {
    position: absolute;
    height: 100vh;
  }
}

.layui-header .layui-nav-item .layui-icon:hover {
  background: whitesmoke !important;
}

.layui-header .layui-nav-item .layui-breadcrumb a {
  color: #999 !important;
}

.layui-header .layui-nav-item .layui-breadcrumb a:nth-last-child(2) {
  color: #666 !important;
}

.layui-header .layui-nav-item .layui-icon {
  color: #666;
}

.layui-header .layui-nav-item > a {
  padding: 0 !important;
}

.layui-header .layui-nav-item .layui-icon {
  height: 50px;
  padding: 20px;
}

.layui-header .layui-nav-item .layui-icon:hover {
  color: var(--global-primary-color) !important;
}

.grey-mode {
  filter: grayscale(1);
}

.side-menu-wrapper {
  width: 100%;
  overflow-y: auto;
  height: calc(100% - 50px);
}

.side-menu-wrapper::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.side-menu-wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(40, 51, 62);
}

.light .side-menu-wrapper::-webkit-scrollbar-thumb {
  background-color: #e2e2e2;
}

.changeBgc {
  background-color: #171717 !important;
}

.global-tab {
  display: flex;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  border-top: 1px solid whitesmoke;
  z-index: 999;
}

.global-tab .layui-tab {
  flex-grow: 1;
  width: calc(100% - 40px);
  margin: 0;
}

.global-tab > i {
  width: 40px;
  background: white;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-left: 1px solid whitesmoke;
}

.global-tab .dot {
  display: inline-block;
  background-color: whitesmoke;
  margin-right: 8px;
  border-radius: 50px;
  height: 8px;
  width: 8px;
}

.global-tab .layui-tab .layui-this .dot {
  background-color: var(--global-primary-color);
}

.global-content {
  height: 100%;
  overflow: auto;
}

.global-content.has-tab {
  height: calc(100% - 40px);
}

.global-content::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.global-content::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #e2e2e2;
}

.layui-nav-tree * {
  font-size: 14px;
}

.layui-nav-tree .layui-nav-item > a,
.layui-nav-tree.inverted .layui-nav-item > a {
  padding: 3px 22px;
}

.layui-nav-tree.inverted .layui-this > a {
  padding: 3px 16px;
}

.layui-nav-tree .layui-nav-item > a > span {
  padding-left: 10px;
}

.layui-nav-tree .layui-nav-item > a .layui-nav-more {
  font-size: 12px !important;
  padding: 3px 0;
}
</style>
