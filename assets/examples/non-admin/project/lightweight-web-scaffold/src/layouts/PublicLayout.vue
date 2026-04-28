<template>
  <div class="public-shell">
    <header class="shell-header">
      <div class="shell-header__inner">
        <div class="shell-brand">
          <div class="shell-brand__mark">LV</div>
          <div>
            <div class="shell-brand__title">Lightweight Web Scaffold</div>
            <div class="shell-brand__desc">面向非后台原型的通用 layui-vue 骨架</div>
          </div>
        </div>

        <nav class="shell-nav">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="shell-nav__link"
            :class="{ 'is-active': isActive(item.path) }"
          >
            {{ item.title }}
          </RouterLink>
        </nav>

        <div class="shell-actions">
          <lay-button size="sm">查看结构</lay-button>
          <lay-button size="sm" type="primary">替换业务内容</lay-button>
        </div>
      </div>
    </header>

    <main class="shell-main">
      <div class="shell-main__inner">
        <RouterView />
      </div>
    </main>

    <footer class="shell-footer">
      <div class="shell-footer__inner">
        <span>当前骨架适合普通桌面 Web 原型，不默认使用后台壳层。</span>
        <span>固定端口：5173</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { navItems } from "../mock/site";

const route = useRoute();

const isActive = (path: string) => {
  if (path === "/") {
    return route.path === "/";
  }

  return route.path.startsWith(path);
};
</script>

<style scoped>
.public-shell {
  min-height: 100vh;
  background:
    radial-gradient(circle at top center, rgba(0, 150, 136, 0.12), transparent 26%),
    linear-gradient(180deg, #f8fbfb 0%, #f2f6f7 100%);
}

.shell-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.88);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.shell-header__inner,
.shell-main__inner,
.shell-footer__inner {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.shell-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px 0;
}

.shell-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.shell-brand__mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(135deg, #009688 0%, #31b5a8 100%);
}

.shell-brand__title {
  color: #163042;
  font-size: 18px;
  font-weight: 700;
}

.shell-brand__desc {
  margin-top: 4px;
  color: #6b7280;
  font-size: 12px;
}

.shell-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px;
  border-radius: 999px;
  background: rgba(238, 243, 244, 0.88);
}

.shell-nav__link {
  padding: 10px 16px;
  border-radius: 999px;
  color: #556171;
  text-decoration: none;
  transition: 0.2s ease;
}

.shell-nav__link:hover,
.shell-nav__link.is-active {
  color: #0f172a;
  background: #ffffff;
  box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
}

.shell-actions {
  display: flex;
  gap: 10px;
}

.shell-main {
  padding: 28px 0 36px;
}

.shell-footer {
  border-top: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.7);
}

.shell-footer__inner {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 0 26px;
  color: #6b7280;
  font-size: 13px;
}

@media (max-width: 960px) {
  .shell-header__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .shell-nav {
    width: 100%;
    overflow-x: auto;
  }

  .shell-actions {
    width: 100%;
    justify-content: flex-start;
  }

  .shell-footer__inner {
    flex-direction: column;
  }
}
</style>

