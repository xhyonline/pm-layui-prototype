export default [
  {
    path: "/",
    redirect: "/workspace",
  },
  {
    path: "/workspace",
    meta: { title: "工作空间" },
    children: [
      {
        path: "/workspace/workbench",
        meta: {
          title: "工作台",
          requireAuth: true,
          affix: true,
          closable: false,
        },
      },
      {
        path: "/workspace/analysis",
        meta: { title: "分析页", requireAuth: true },
      },
    ],
  },
  {
    path: "/system",
    meta: { title: "系统管理" },
    children: [
      {
        path: "/system/user",
        meta: { title: "用户管理", requireAuth: true },
      },
      {
        path: "/system/role",
        meta: { title: "角色管理", requireAuth: true },
      },
      {
        path: "/system/menu",
        meta: { title: "菜单管理", requireAuth: true },
      },
    ],
  },
  {
    path: "/table",
    meta: { title: "列表页面" },
    children: [
      {
        path: "/table/base",
        meta: { title: "查询列表", requireAuth: true },
      },
      {
        path: "/table/card",
        meta: { title: "卡片列表", requireAuth: true },
      },
    ],
  },
  {
    path: "/form",
    meta: { title: "表单页面" },
    children: [
      {
        path: "/form/base",
        meta: { title: "基础表单", requireAuth: true },
      },
      {
        path: "/form/step",
        meta: { title: "分步表单", requireAuth: true },
      },
    ],
  },
];
