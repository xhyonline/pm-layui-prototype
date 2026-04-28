import type { RouteRecordRaw } from "vue-router";

export type MenuGroup = {
  id: string;
  title: string;
  children: Array<{
    path: string;
    title: string;
  }>;
};

export const menuGroups: MenuGroup[] = [
  {
    id: "workspace",
    title: "工作空间",
    children: [{ path: "/workspace/workbench", title: "工作台" }]
  },
  {
    id: "system",
    title: "系统管理",
    children: [
      { path: "/system/user", title: "用户管理" },
      { path: "/system/content-editor", title: "内容发布" }
    ]
  }
];

export const baseRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/workspace/workbench"
  },
  {
    path: "/",
    component: () => import("../../layouts/BasicLayout.vue"),
    children: [
      {
        path: "workspace/workbench",
        name: "Workbench",
        component: () => import("../../views/workSpace/workbench/index.vue"),
        meta: {
          title: "工作台",
          group: "工作空间",
          menuKey: "/workspace/workbench",
          openKey: "workspace",
          requireAuth: true,
          affix: true,
          closable: false
        }
      },
      {
        path: "system/user",
        name: "SystemUser",
        component: () => import("../../views/system/user/index.vue"),
        meta: {
          title: "用户管理",
          group: "系统管理",
          menuKey: "/system/user",
          openKey: "system",
          requireAuth: true
        }
      },
      {
        path: "system/content-editor",
        name: "SystemContentEditor",
        component: () => import("../../views/system/content-editor/index.vue"),
        meta: {
          title: "内容发布",
          group: "系统管理",
          menuKey: "/system/content-editor",
          openKey: "system",
          requireAuth: true
        }
      }
    ]
  }
];
