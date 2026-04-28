import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    tab: true,
    logo: true,
    level: true,
    inverted: false,
    routerAlive: true,
    collapse: false,
    locale: "zh_CN",
    theme: "light",
    breadcrumb: true,
    sideTheme: "dark",
    greyMode: false,
    tagsTheme: "concise",
    themeVariable: {
      "--global-checked-color": "#5fb878",
      "--global-primary-color": "#009688",
      "--global-normal-color": "#1e9fff",
      "--global-danger-color": "#ff5722",
      "--global-warm-color": "#ffb800",
      "--global-border-radius": "4px"
    } as Record<string, string>,
    quickTabs: [
      { title: "工作台", path: "/workspace/workbench", closable: false },
      { title: "用户管理", path: "/system/user", closable: true }
    ]
  }),
  persist: {
    storage: localStorage,
    paths: ["collapse", "sideTheme", "themeVariable", "tagsTheme"]
  },
  actions: {
    toggleCollapse() {
      this.collapse = !this.collapse;
    },
    refreshPage() {
      this.routerAlive = false;
      window.setTimeout(() => {
        this.routerAlive = true;
      }, 250);
    }
  }
});
