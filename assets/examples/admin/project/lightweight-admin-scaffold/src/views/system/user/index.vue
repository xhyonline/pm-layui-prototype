<template>
  <lay-container fluid="true" class="page-shell">
    <lay-card>
      <lay-form style="margin-top: 10px">
        <lay-row :space="15">
          <lay-col :md="6">
            <lay-form-item label="账号" label-width="70">
              <lay-input v-model="query.account" placeholder="请输入账号" size="sm" />
            </lay-form-item>
          </lay-col>
          <lay-col :md="6">
            <lay-form-item label="姓名" label-width="70">
              <lay-input v-model="query.name" placeholder="请输入姓名" size="sm" />
            </lay-form-item>
          </lay-col>
          <lay-col :md="6">
            <lay-form-item label="状态" label-width="70">
              <lay-select v-model="query.status" placeholder="请选择" size="sm">
                <lay-select-option value="" label="全部" />
                <lay-select-option value="true" label="启用" />
                <lay-select-option value="false" label="停用" />
              </lay-select>
            </lay-form-item>
          </lay-col>
          <lay-col :md="6">
            <lay-form-item label-width="20">
              <lay-button type="primary" size="sm">查询</lay-button>
              <lay-button size="sm">重置</lay-button>
            </lay-form-item>
          </lay-col>
        </lay-row>
      </lay-form>
    </lay-card>

    <div class="table-box">
      <lay-table
        :page="page"
        :columns="columns"
        :data-source="userRows"
        :default-toolbar="true"
      >
        <template #toolbar>
          <lay-button size="sm" type="primary" @click="visible = true">新增</lay-button>
          <lay-button size="sm">批量删除</lay-button>
        </template>
        <template #status="{ row }">
          <lay-switch :model-value="row.status" />
        </template>
        <template #operator>
          <lay-button size="xs" type="primary">编辑</lay-button>
          <lay-button size="xs">详情</lay-button>
        </template>
      </lay-table>
    </div>

    <lay-layer v-model="visible" title="新增用户" :area="['500px', '460px']">
      <div class="dialog-body">
        <lay-form :model="formModel">
          <lay-form-item label="账号">
            <lay-input v-model="formModel.account" />
          </lay-form-item>
          <lay-form-item label="姓名">
            <lay-input v-model="formModel.name" />
          </lay-form-item>
          <lay-form-item label="手机号">
            <lay-input v-model="formModel.phone" />
          </lay-form-item>
          <lay-form-item label="角色">
            <lay-select v-model="formModel.role">
              <lay-select-option value="超级管理员" label="超级管理员" />
              <lay-select-option value="运营经理" label="运营经理" />
              <lay-select-option value="财务专员" label="财务专员" />
            </lay-select>
          </lay-form-item>
        </lay-form>
        <div class="dialog-actions">
          <lay-button type="primary" size="sm" @click="visible = false">保存</lay-button>
          <lay-button size="sm" @click="visible = false">取消</lay-button>
        </div>
      </div>
    </lay-layer>
  </lay-container>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { userRows } from "../../../mock/workbench";

const visible = ref(false);

const query = reactive({
  account: "",
  name: "",
  status: ""
});

const page = reactive({ current: 1, limit: 10, total: userRows.length });

const columns = [
  { title: "选项", width: "60px", type: "checkbox", fixed: "left" },
  { title: "编号", width: "90px", key: "id", fixed: "left" },
  { title: "账号", width: "120px", key: "account" },
  { title: "姓名", width: "100px", key: "name" },
  { title: "手机号", width: "140px", key: "phone" },
  { title: "角色", width: "140px", key: "role" },
  { title: "状态", width: "90px", key: "status", customSlot: "status" },
  { title: "创建时间", width: "160px", key: "createdAt" },
  { title: "操作", width: "140px", key: "operator", fixed: "right", customSlot: "operator" }
];

const formModel = reactive({
  account: "",
  name: "",
  phone: "",
  role: "超级管理员"
});
</script>

<style scoped>
.page-shell {
  padding: 15px;
}

.table-box {
  margin-top: 15px;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
}

.dialog-body {
  padding: 20px;
}

.dialog-actions {
  text-align: right;
}
</style>
