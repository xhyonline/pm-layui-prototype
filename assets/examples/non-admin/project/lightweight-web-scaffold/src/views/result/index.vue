<template>
  <div class="page-stack">
    <PageHero
      eyebrow="RESULT PAGE"
      title="结果页的目标不是庆祝，而是明确告诉用户下一步"
      description="在普通业务场景里，结果反馈页往往承担状态确认、后续动作指引和补充说明的职责。这一页给出一个较中性的默认结构。"
    >
      <template #actions>
        <lay-button type="primary">继续下一步</lay-button>
        <lay-button>返回首页</lay-button>
      </template>
    </PageHero>

    <lay-row space="16">
      <lay-col :md="14" :sm="24" :xs="24">
        <SectionCard title="提交结果" description="原型阶段无需依赖专门结果组件，也能表达清晰反馈。">
          <div class="result-panel">
            <div class="result-panel__icon">OK</div>
            <div class="result-panel__title">信息已成功提交</div>
            <div class="result-panel__desc">
              你的申请已进入处理队列，后续可以通过短信、邮件或站内通知继续跟进状态变化。
            </div>
            <div class="section-actions">
              <lay-button type="primary">查看进度</lay-button>
              <lay-button>再次提交</lay-button>
            </div>
          </div>
        </SectionCard>
      </lay-col>

      <lay-col :md="10" :sm="24" :xs="24">
        <SectionCard title="建议下一步" description="把结果页变成路径分流页，而不是终点页。">
          <ul class="tips-list">
            <li v-for="item in nextStepList" :key="item">{{ item }}</li>
          </ul>
        </SectionCard>
      </lay-col>
    </lay-row>

    <SectionCard title="处理记录" description="如果需要更强的反馈感，可以补充时间线或状态表。">
      <lay-timeline>
        <lay-timeline-item title="10:00">用户完成提交动作</lay-timeline-item>
        <lay-timeline-item title="10:01">系统生成受理编号 `A20260428001`</lay-timeline-item>
        <lay-timeline-item title="10:03">通知消息已进入发送队列</lay-timeline-item>
      </lay-timeline>
    </SectionCard>
  </div>
</template>

<script setup lang="ts">
import PageHero from "../../components/common/PageHero.vue";
import SectionCard from "../../components/common/SectionCard.vue";
import { nextStepList } from "../../mock/site";
</script>

<style scoped>
.result-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 18px 12px;
  text-align: center;
}

.result-panel__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  border-radius: 999px;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #16baaa 0%, #009688 100%);
}

.result-panel__title {
  margin-top: 18px;
  color: #163042;
  font-size: 26px;
  font-weight: 700;
}

.result-panel__desc {
  max-width: 520px;
  margin: 12px auto 18px;
  line-height: 1.9;
  color: #5f6b7a;
}

.tips-list {
  margin: 0;
  padding-left: 18px;
  line-height: 1.9;
  color: #5f6b7a;
}
</style>
