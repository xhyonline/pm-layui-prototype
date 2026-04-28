import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      component: () => import("../layouts/PublicLayout.vue"),
      children: [
        {
          path: "",
          name: "PublicHome",
          component: () => import("../views/home/index.vue"),
          meta: { title: "场景首页" }
        },
        {
          path: "search",
          name: "PublicSearch",
          component: () => import("../views/search/index.vue"),
          meta: { title: "搜索列表" }
        },
        {
          path: "detail",
          name: "PublicDetail",
          component: () => import("../views/detail/index.vue"),
          meta: { title: "详情展示" }
        },
        {
          path: "form",
          name: "PublicForm",
          component: () => import("../views/form/index.vue"),
          meta: { title: "信息提交" }
        },
        {
          path: "result",
          name: "PublicResult",
          component: () => import("../views/result/index.vue"),
          meta: { title: "结果反馈" }
        }
      ]
    }
  ]
});

router.afterEach((to) => {
  const title = typeof to.meta.title === "string" ? to.meta.title : "Public Prototype";
  document.title = `${title} - layui-vue`;
});

export default router;

