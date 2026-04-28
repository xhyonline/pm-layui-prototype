<template>
  <lay-container fluid="true" class="page-shell">
    <lay-row :space="15">
      <lay-col v-for="card in statCards" :key="card.title" :md="6">
        <lay-card>
          <div class="stat-card">
            <span>{{ card.title }}</span>
            <strong>{{ card.value }}</strong>
            <p>{{ card.hint }}</p>
          </div>
        </lay-card>
      </lay-col>
    </lay-row>

    <lay-row :space="15" class="panel-row">
      <lay-col :md="16">
        <lay-card title="版本节奏与待办">
          <div class="info-block">
            <div class="info-item">
              <strong>里程碑 01</strong>
              <p>先完成可运行骨架，再填具体业务页。</p>
            </div>
            <div class="info-item">
              <strong>里程碑 02</strong>
              <p>优先补一个代表性 CRUD 页，减少后续页面重写。</p>
            </div>
            <div class="info-item">
              <strong>里程碑 03</strong>
              <p>最后再补扩展页面、说明和可选依赖。</p>
            </div>
          </div>
        </lay-card>
      </lay-col>
      <lay-col :md="8">
        <lay-card title="快捷入口">
          <div class="link-grid">
            <button
              v-for="link in quickLinks"
              :key="link.title"
              type="button"
              class="link-card"
            >
              <strong>{{ link.title }}</strong>
              <span>{{ link.desc }}</span>
            </button>
          </div>
        </lay-card>
      </lay-col>
    </lay-row>
  </lay-container>
</template>

<script setup lang="ts">
import { quickLinks, statCards } from "../../../mock/workbench";
</script>

<style scoped>
.page-shell {
  padding: 15px;
}

.panel-row {
  margin-top: 15px;
}

.stat-card strong,
.link-card strong,
.info-item strong {
  display: block;
}

.stat-card strong {
  margin: 14px 0 6px;
  font-size: 28px;
  color: #333;
}

.stat-card span,
.stat-card p,
.link-card span {
  color: #666;
}

.stat-card p,
.info-item p {
  margin: 0;
}

.info-block,
.link-grid {
  display: grid;
  gap: 12px;
}

.info-item {
  padding: 14px;
  border-radius: 4px;
  background: #f8f8f8;
}

.link-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.link-card {
  padding: 14px;
  border: 1px solid whitesmoke;
  border-radius: 4px;
  background: #fff;
  text-align: left;
}

.link-card span {
  display: block;
  margin-top: 8px;
}
</style>
