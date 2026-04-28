<template>
  <div class="page-container">
    <lay-card>
      <template #header>Entity List</template>

      <lay-form class="filter-form" :model="filters" inline>
        <lay-form-item label="Keyword">
          <lay-input v-model="filters.keyword" placeholder="Search" />
        </lay-form-item>
        <lay-form-item label="Status">
          <lay-select v-model="filters.status" placeholder="Select status">
            <lay-select-option value="">All</lay-select-option>
            <lay-select-option value="enabled">Enabled</lay-select-option>
            <lay-select-option value="disabled">Disabled</lay-select-option>
          </lay-select>
        </lay-form-item>
        <lay-form-item>
          <lay-button type="primary">Search</lay-button>
          <lay-button>Reset</lay-button>
        </lay-form-item>
      </lay-form>

      <div class="table-toolbar">
        <lay-button type="primary">New</lay-button>
        <lay-button>Export</lay-button>
      </div>

      <lay-table :columns="columns" :data-source="tableData" />

      <div class="table-pagination">
        <lay-page v-model="page.current" :total="page.total" :limit="page.limit" />
      </div>
    </lay-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const filters = reactive({
  keyword: "",
  status: "",
});

const page = reactive({
  current: 1,
  limit: 10,
  total: 0,
});

const columns = ref([
  { title: "ID", key: "id" },
  { title: "Name", key: "name" },
  { title: "Status", key: "status" },
  { title: "Updated At", key: "updatedAt" },
  { title: "Actions", key: "actions" },
]);

const tableData = ref([
  {
    id: 1,
    name: "Sample",
    status: "enabled",
    updatedAt: "2026-04-28 10:00:00",
  },
]);
</script>

<style scoped>
.page-container {
  padding: 16px;
}

.filter-form {
  margin-bottom: 12px;
}

.table-toolbar {
  margin-bottom: 12px;
}

.table-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
}
</style>
