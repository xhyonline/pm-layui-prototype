<template>
  <div class="page-stack">
    <PageHero
      eyebrow="DETAIL PAGE"
      title="详情页需要稳定的信息分层，而不是堆砌说明文字"
      description="详情展示页通常需要基础信息、摘要说明、进度记录和下一步动作。这一页提供了一个比较中性的默认分层。"
    >
      <template #actions>
        <lay-button type="primary">主要操作</lay-button>
        <lay-button>返回列表</lay-button>
      </template>
    </PageHero>

    <lay-row space="16">
      <lay-col :md="16" :sm="24" :xs="24">
        <SectionCard title="基础信息" description="优先把最常被查看的信息放在第一屏。">
          <div class="info-grid">
            <div v-for="item in baseInfo" :key="item.label" class="info-item">
              <div class="info-item__label">{{ item.label }}</div>
              <div class="info-item__value">{{ item.value }}</div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="详细说明" description="这一块适合放场景描述、使用说明、业务约束或注意事项。">
          <div class="rich-copy">
            <p>
              当前骨架默认采用“说明卡片 + 结构化字段 + 时间线”的组合方式，不依赖复杂组件，也不强行做成营销页。
            </p>
            <p>
              当 AI 接到内容页、服务说明页、专题详情页时，可以直接替换这里的文字、标签和侧边摘要，而无需先搭后台壳层。
            </p>
          </div>
        </SectionCard>
      </lay-col>

      <lay-col :md="8" :sm="24" :xs="24">
        <SectionCard title="当前状态" description="侧边区适合放概览、标签与提醒。">
          <div class="status-panel">
            <lay-tag color="#009688" variant="light">公开展示</lay-tag>
            <lay-tag color="#1e9fff" variant="light">桌面优先</lay-tag>
            <lay-tag color="#ffb800" variant="light">原型阶段</lay-tag>
          </div>
          <ul class="status-list">
            <li>建议保留主行动按钮和返回路径。</li>
            <li>如果内容很长，优先按卡片拆段，而不是一整块长文。</li>
            <li>如果需要辅助信息，可继续扩展 FAQ、附件、备注区。</li>
          </ul>
        </SectionCard>

        <SectionCard title="进度记录" description="时间线是详情页里最通用的结构之一。">
          <lay-timeline>
            <lay-timeline-item title="2026-04-28 10:30">
              已形成第一版公共页信息层级。
            </lay-timeline-item>
            <lay-timeline-item title="2026-04-28 11:10">
              补充搜索、表单、结果页的共享路径。
            </lay-timeline-item>
            <lay-timeline-item title="2026-04-28 11:45">
              等待按具体业务替换字段和描述。
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

const baseInfo = [
  { label: "页面定位", value: "普通桌面 Web 详情展示页" },
  { label: "适用类型", value: "文章、活动、资源、服务、说明、专题详情" },
  { label: "默认策略", value: "优先结构化信息，再补充说明性文本" },
  { label: "替换重点", value: "标题、摘要、状态标签、时间线、下一步动作" }
];
</script>

<style scoped>
.rich-copy {
  line-height: 1.9;
  color: #556171;
}

.status-panel {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.status-list {
  margin: 16px 0 0;
  padding-left: 18px;
  line-height: 1.9;
  color: #5f6b7a;
}
</style>

