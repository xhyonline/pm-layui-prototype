<template>
  <div class="dashboard-page">
    <lay-row space="16">
      <lay-col :md="6" :sm="12" :xs="24" v-for="card in metrics" :key="card.title">
        <lay-card>
          <div class="metric-title">{{ card.title }}</div>
          <div class="metric-value">{{ card.value }}</div>
          <div class="metric-desc">{{ card.desc }}</div>
        </lay-card>
      </lay-col>
    </lay-row>

    <lay-row space="16" class="dashboard-section">
      <lay-col :md="16" :sm="24" :xs="24">
        <lay-card>
          <template #header>Trend</template>
          <div class="chart-placeholder">Chart placeholder</div>
        </lay-card>
      </lay-col>
      <lay-col :md="8" :sm="24" :xs="24">
        <lay-card>
          <template #header>Pending Items</template>
          <ul class="todo-list">
            <li v-for="item in todoList" :key="item.id">{{ item.name }}</li>
          </ul>
        </lay-card>
      </lay-col>
    </lay-row>
  </div>
</template>

<script setup lang="ts">
const metrics = [
  { title: "Total Orders", value: "1,280", desc: "This month" },
  { title: "Pending Review", value: "36", desc: "Requires follow-up" },
  { title: "Conversion Rate", value: "18.4%", desc: "Weekly average" },
  { title: "Abnormal Alerts", value: "4", desc: "Need action" },
];

const todoList = [
  { id: 1, name: "Review refund requests" },
  { id: 2, name: "Approve supplier onboarding" },
  { id: 3, name: "Check overdue invoices" },
];
</script>

<style scoped>
.dashboard-page {
  padding: 16px;
}

.dashboard-section {
  margin-top: 16px;
}

.metric-title {
  color: #666;
  font-size: 14px;
}

.metric-value {
  margin-top: 8px;
  font-size: 28px;
  font-weight: 600;
}

.metric-desc {
  margin-top: 8px;
  color: #999;
  font-size: 12px;
}

.chart-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  background: #f6f7f9;
  color: #999;
}

.todo-list {
  margin: 0;
  padding-left: 18px;
}
</style>
