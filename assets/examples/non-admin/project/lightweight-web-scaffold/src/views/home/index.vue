<template>
  <div class="page-stack">
    <PageHero
      eyebrow="NON-ADMIN LIGHTWEIGHT MODE"
      title="给非后台页面一个稳定、克制、可复制的原型起点"
      description="这套骨架故意不把页面做成后台，也不把它锁死成单一门户模板，而是优先覆盖搜索、详情、表单、结果这些在普通桌面 Web 中最常见的结构。"
    >
      <template #actions>
        <lay-button type="primary">查看可复用结构</lay-button>
        <lay-button>替换当前 mock</lay-button>
      </template>

      <div class="metric-grid">
        <div v-for="item in overviewMetrics" :key="item.title" class="metric-card">
          <div class="metric-card__title">{{ item.title }}</div>
          <div class="metric-card__value">{{ item.value }}</div>
          <div class="metric-card__hint">{{ item.hint }}</div>
        </div>
      </div>
    </PageHero>

    <SectionCard
      title="推荐承接的页面类型"
      description="这套 scaffold 更适合“页面原型集合”，而不是强绑定某个行业首页。"
    >
      <lay-row space="16">
        <lay-col
          v-for="item in sceneCards"
          :key="item.title"
          :md="12"
          :sm="24"
          :xs="24"
        >
          <div class="scene-card">
            <lay-tag color="#009688" variant="light">{{ item.title }}</lay-tag>
            <div class="scene-card__desc">{{ item.desc }}</div>
          </div>
        </lay-col>
      </lay-row>
    </SectionCard>

    <lay-row space="16">
      <lay-col :md="14" :sm="24" :xs="24">
        <SectionCard
          title="公共页默认结构"
          description="保留轻页头、内容容器、局部卡片和明确的操作路径。"
        >
          <div class="structure-list">
            <div class="structure-item">
              <strong>轻头部</strong>
              <span>品牌区、导航、主操作，不带后台导航心智。</span>
            </div>
            <div class="structure-item">
              <strong>页面 Hero</strong>
              <span>放页面目标、说明、状态摘要和主行动按钮。</span>
            </div>
            <div class="structure-item">
              <strong>区块卡片</strong>
              <span>用 `SectionCard` 承接筛选、详情、FAQ、结果说明等块状内容。</span>
            </div>
            <div class="structure-item">
              <strong>本地 mock</strong>
              <span>先让页面可评审，再决定是否接真实接口。</span>
            </div>
          </div>
        </SectionCard>
      </lay-col>

      <lay-col :md="10" :sm="24" :xs="24">
        <SectionCard
          title="建议生成顺序"
          description="先保证能跑，再扩展页面数量和共享结构。"
        >
          <lay-timeline>
            <lay-timeline-item
              v-for="item in activityTimeline"
              :key="item.title"
              :title="item.title"
            >
              {{ item.content }}
            </lay-timeline-item>
          </lay-timeline>
        </SectionCard>
      </lay-col>
    </lay-row>
  </div>
</template>

<script setup lang="ts">
import PageHero from "../../components/common/PageHero.vue";
import SectionCard from "../../components/common/SectionCard.vue";
import { activityTimeline, overviewMetrics, sceneCards } from "../../mock/site";
</script>

<style scoped>
.scene-card {
  height: 100%;
  padding: 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 16px;
  background: linear-gradient(180deg, #ffffff 0%, #f9fbfb 100%);
}

.scene-card__desc {
  margin-top: 14px;
  line-height: 1.8;
  color: #5f6b7a;
}

.structure-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.structure-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px 16px;
  border-radius: 14px;
  background: #f8fbfb;
}

.structure-item strong {
  color: #163042;
}

.structure-item span {
  color: #5f6b7a;
  line-height: 1.8;
}
</style>

