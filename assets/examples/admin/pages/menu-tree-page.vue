<template>
  <lay-container fluid="true" class="page-shell">
    <lay-card>
      <lay-form style="margin-top: 10px">
        <lay-row>
          <lay-col :md="5">
            <lay-form-item label="菜单名称" label-width="80">
              <lay-input v-model="query.name" size="sm" />
            </lay-form-item>
          </lay-col>
          <lay-col :md="5">
            <lay-form-item label="菜单地址" label-width="80">
              <lay-input v-model="query.path" size="sm" />
            </lay-form-item>
          </lay-col>
          <lay-col :md="5">
            <lay-form-item label="权限标识" label-width="80">
              <lay-input v-model="query.permission" size="sm" />
            </lay-form-item>
          </lay-col>
          <lay-col :md="5">
            <lay-form-item label-width="20">
              <lay-button type="normal" size="sm">查询</lay-button>
              <lay-button size="sm">重置</lay-button>
            </lay-form-item>
          </lay-col>
        </lay-row>
      </lay-form>
    </lay-card>

    <div class="table-box">
      <lay-table
        :columns="columns"
        :data-source="rows"
        children-column-name="children"
        :default-expand-all="false"
        :default-toolbar="true"
      >
        <template #toolbar>
          <lay-button type="primary" size="sm">新建</lay-button>
          <lay-button size="sm">展开全部</lay-button>
          <lay-button size="sm">折叠全部</lay-button>
        </template>
        <template #name="{ row }">
          <lay-icon :type="row.icon"></lay-icon>
          {{ row.name }}
        </template>
        <template #type="{ row }">
          <lay-tag v-if="row.type === '目录'" color="#165DFF" variant="light">目录</lay-tag>
          <lay-tag v-else-if="row.type === '菜单'" color="#2dc570" variant="light">菜单</lay-tag>
          <lay-tag v-else color="#F5319D" variant="light">外链</lay-tag>
        </template>
        <template #option>
          <lay-button size="xs" border="blue" border-style="dashed">添加</lay-button>
          <lay-button size="xs" border="green" border-style="dashed">修改</lay-button>
          <lay-button size="xs" border="red" border-style="dashed">删除</lay-button>
        </template>
      </lay-table>
    </div>
  </lay-container>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const query = reactive({
  name: "",
  path: "",
  permission: "",
});

const columns = [
  { title: "复选", type: "checkbox", fixed: "left" },
  { title: "菜单名称", key: "name", customSlot: "name" },
  { title: "路由地址", key: "routePath" },
  { title: "组件路径", key: "componentPath" },
  { title: "排序", width: "100px", key: "sort" },
  { title: "可见", key: "visible" },
  { title: "类型", key: "type", customSlot: "type" },
  { title: "操作", key: "option", customSlot: "option" },
];

const rows = [
  {
    id: "M1001",
    name: "工作空间",
    type: "目录",
    icon: "layui-icon-home",
    routePath: "/workspace",
    componentPath: "",
    sort: 1,
    visible: "是",
    children: [
      {
        id: "M1101",
        name: "工作台",
        type: "菜单",
        icon: "layui-icon-util",
        routePath: "/workspace/workbench",
        componentPath: "/workspace/workbench",
        sort: 1,
        visible: "是",
      },
    ],
  },
  {
    id: "M2001",
    name: "系统管理",
    type: "目录",
    icon: "layui-icon-set",
    routePath: "/system",
    componentPath: "",
    sort: 2,
    visible: "是",
    children: [
      {
        id: "M2101",
        name: "用户管理",
        type: "菜单",
        icon: "layui-icon-username",
        routePath: "/system/user",
        componentPath: "/system/user",
        sort: 1,
        visible: "是",
      },
      {
        id: "M2102",
        name: "菜单管理",
        type: "菜单",
        icon: "layui-icon-app",
        routePath: "/system/menu",
        componentPath: "/system/menu",
        sort: 2,
        visible: "是",
      },
    ],
  },
];
</script>

<style scoped>
.page-shell {
  height: calc(100vh - 110px);
  margin-top: 10px;
  overflow: hidden;
}

.table-box {
  margin-top: 10px;
  padding: 10px;
  height: 700px;
  background: #fff;
}
</style>
