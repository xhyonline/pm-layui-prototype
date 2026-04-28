<template>
  <div class="page-stack">
    <PageHero
      eyebrow="SEARCH PAGE"
      title="搜索页应当是非后台原型中的一级公民"
      description="很多普通业务页面不是首页，而是带筛选、列表、状态标签和详情跳转的查询页。这一页用于承接这类高频场景。"
    >
      <template #actions>
        <lay-button type="primary">执行搜索</lay-button>
        <lay-button>重置条件</lay-button>
      </template>
    </PageHero>

    <SectionCard title="筛选条件" description="默认提供关键词、分类、状态三类最常见的过滤入口。">
      <lay-form class="filter-form" :model="filters" inline>
        <lay-form-item label="关键词">
          <lay-input v-model="filters.keyword" placeholder="请输入标题或关键词" />
        </lay-form-item>
        <lay-form-item label="分类">
          <lay-select v-model="filters.category" placeholder="请选择">
            <lay-select-option value="" label="全部分类" />
            <lay-select-option value="guide" label="指南说明" />
            <lay-select-option value="service" label="服务入口" />
            <lay-select-option value="activity" label="活动专题" />
          </lay-select>
        </lay-form-item>
        <lay-form-item label="状态">
          <lay-select v-model="filters.status" placeholder="请选择">
            <lay-select-option value="" label="全部状态" />
            <lay-select-option value="published" label="已发布" />
            <lay-select-option value="maintain" label="维护中" />
          </lay-select>
        </lay-form-item>
        <lay-form-item>
          <lay-button type="primary">查询</lay-button>
          <lay-button>重置</lay-button>
        </lay-form-item>
      </lay-form>
    </SectionCard>

    <SectionCard title="搜索结果" description="表格足以承接绝大多数原型期的列表需求。">
      <template #extra>
        <div class="section-actions">
          <lay-button size="sm">导出列表</lay-button>
          <lay-button size="sm" type="primary">新增条目</lay-button>
        </div>
      </template>

      <lay-table :columns="columns" :data-source="searchRows">
        <template #status="{ row }">
          <lay-tag
            :color="row.status === '已发布' ? '#16baaa' : '#ffb800'"
            variant="light"
          >
            {{ row.status }}
          </lay-tag>
        </template>
        <template #operator>
          <lay-button size="xs" type="primary">查看</lay-button>
          <lay-button size="xs">编辑</lay-button>
        </template>
      </lay-table>
    </SectionCard>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import PageHero from "../../components/common/PageHero.vue";
import SectionCard from "../../components/common/SectionCard.vue";
import { searchRows } from "../../mock/site";

const filters = reactive({
  keyword: "",
  category: "",
  status: ""
});

const columns = [
  { title: "编号", key: "id", width: "110px" },
  { title: "标题", key: "name" },
  { title: "分类", key: "category", width: "120px" },
  { title: "状态", key: "status", width: "100px", customSlot: "status" },
  { title: "归属", key: "owner", width: "140px" },
  { title: "更新时间", key: "updatedAt", width: "170px" },
  { title: "操作", key: "operator", width: "120px", customSlot: "operator" }
];
</script>

<style scoped>
.filter-form {
  margin-bottom: -12px;
}
</style>

