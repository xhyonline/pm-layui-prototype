<template>
  <lay-layout class="pm-admin-layout">
    <lay-side width="220px" class="pm-admin-side">
      <lay-logo>后台系统</lay-logo>
      <lay-menu
        :collapse="false"
        :selected-key="selectedKey"
        :open-keys="openKeys"
      >
        <lay-sub-menu id="workspace">
          <template #title>工作空间</template>
          <lay-menu-item id="/workspace/workbench">工作台</lay-menu-item>
          <lay-menu-item id="/workspace/analysis">分析页</lay-menu-item>
        </lay-sub-menu>
        <lay-sub-menu id="system">
          <template #title>系统管理</template>
          <lay-menu-item id="/system/user">用户管理</lay-menu-item>
          <lay-menu-item id="/system/role">角色管理</lay-menu-item>
          <lay-menu-item id="/system/menu">菜单管理</lay-menu-item>
        </lay-sub-menu>
      </lay-menu>
    </lay-side>

    <lay-layout>
      <lay-header class="pm-admin-header">
        <lay-menu mode="horizontal" class="layui-layout-left">
          <lay-menu-item id="toggle">
            <lay-icon type="layui-icon-shrink-right"></lay-icon>
          </lay-menu-item>
          <lay-menu-item id="breadcrumb" style="padding: 0 15px">
            <lay-breadcrumb>
              <lay-breadcrumb-item>系统管理</lay-breadcrumb-item>
              <lay-breadcrumb-item>用户管理</lay-breadcrumb-item>
            </lay-breadcrumb>
          </lay-menu-item>
        </lay-menu>
        <lay-menu mode="horizontal" class="layui-layout-right">
          <lay-menu-item id="notice">
            <lay-icon type="layui-icon-notice"></lay-icon>
          </lay-menu-item>
          <lay-menu-item id="profile">
            <lay-dropdown>
              <lay-icon type="layui-icon-username"></lay-icon>
              <template #content>
                <lay-dropdown-menu>
                  <lay-dropdown-menu-item>用户信息</lay-dropdown-menu-item>
                  <lay-dropdown-menu-item>系统设置</lay-dropdown-menu-item>
                  <lay-dropdown-menu-item>退出登录</lay-dropdown-menu-item>
                </lay-dropdown-menu>
              </template>
            </lay-dropdown>
          </lay-menu-item>
        </lay-menu>
      </lay-header>

      <lay-body>
        <div class="pm-admin-tabbar">
          <lay-tab :model-value="selectedKey" allow-close>
            <lay-tab-item id="/system/user" title="用户管理" :closable="false" />
            <lay-tab-item id="/system/role" title="角色管理" />
          </lay-tab>
        </div>

        <div class="pm-admin-content">
          <lay-card>
            <template #title>页面内容区域</template>
            这里放具体的列表页、表单页、详情页或 dashboard。
          </lay-card>
        </div>
      </lay-body>
    </lay-layout>
  </lay-layout>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selectedKey = ref("/system/user");
const openKeys = ref(["system"]);
</script>

<style scoped>
.pm-admin-layout {
  min-height: 100vh;
}

.pm-admin-side {
  border-right: 1px solid #f0f0f0;
}

.pm-admin-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
}

.pm-admin-tabbar {
  border-top: 1px solid #f5f5f5;
  background: #fff;
}

.pm-admin-content {
  padding: 10px;
}
</style>
