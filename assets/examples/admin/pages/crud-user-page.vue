<template>
  <lay-container fluid="true" class="page-shell">
    <lay-card>
      <lay-form style="margin-top: 10px">
        <lay-row>
          <lay-col :md="5">
            <lay-form-item label="用户账号" label-width="80">
              <lay-input v-model="query.userAccount" placeholder="请输入" size="sm" />
            </lay-form-item>
          </lay-col>
          <lay-col :md="5">
            <lay-form-item label="用户名" label-width="80">
              <lay-input v-model="query.userName" placeholder="请输入" size="sm" />
            </lay-form-item>
          </lay-col>
          <lay-col :md="5">
            <lay-form-item label="性别" label-width="80">
              <lay-select v-model="query.sex" size="sm" placeholder="请选择">
                <lay-select-option value="male" label="男" />
                <lay-select-option value="female" label="女" />
              </lay-select>
            </lay-form-item>
          </lay-col>
          <lay-col :md="5">
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
        :data-source="rows"
        :default-toolbar="true"
      >
        <template #toolbar>
          <lay-button size="sm" type="primary">新增</lay-button>
          <lay-button size="sm">批量删除</lay-button>
          <lay-button size="sm">导入</lay-button>
        </template>
        <template #status="{ row }">
          <lay-switch :model-value="row.status" />
        </template>
        <template #operator>
          <lay-button size="xs" type="primary">编辑</lay-button>
          <lay-button size="xs" border="red" border-style="dashed">删除</lay-button>
        </template>
      </lay-table>
    </div>

    <lay-layer v-model="visible" title="新增用户" :area="['500px', '520px']">
      <div class="dialog-body">
        <lay-form :model="formModel">
          <lay-form-item label="姓名">
            <lay-input v-model="formModel.name" />
          </lay-form-item>
          <lay-form-item label="性别">
            <lay-select v-model="formModel.sex">
              <lay-select-option value="男" label="男" />
              <lay-select-option value="女" label="女" />
            </lay-select>
          </lay-form-item>
          <lay-form-item label="邮箱">
            <lay-input v-model="formModel.email" />
          </lay-form-item>
          <lay-form-item label="备注">
            <lay-textarea v-model="formModel.remark" />
          </lay-form-item>
        </lay-form>
        <div class="dialog-actions">
          <lay-button size="sm" type="primary">保存</lay-button>
          <lay-button size="sm">取消</lay-button>
        </div>
      </div>
    </lay-layer>
  </lay-container>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const visible = ref(true);

const query = reactive({
  userAccount: "",
  userName: "",
  sex: "",
});

const page = reactive({ current: 1, limit: 10, total: 100 });

const columns = [
  { title: "选项", width: "60px", type: "checkbox", fixed: "left" },
  { title: "编号", width: "80px", key: "id", fixed: "left" },
  { title: "姓名", width: "100px", key: "name" },
  { title: "状态", width: "90px", key: "status", customSlot: "status" },
  { title: "邮箱", width: "180px", key: "email" },
  { title: "性别", width: "80px", key: "sex" },
  { title: "部门", width: "140px", key: "department" },
  { title: "创建时间", width: "180px", key: "createdAt" },
  { title: "操作", width: "130px", key: "operator", fixed: "right", customSlot: "operator" },
];

const rows = [
  {
    id: "U1001",
    name: "张三",
    status: true,
    email: "zhangsan@example.com",
    sex: "男",
    department: "供应链中心",
    createdAt: "2026-04-28 10:00:00",
  },
  {
    id: "U1002",
    name: "李四",
    status: false,
    email: "lisi@example.com",
    sex: "女",
    department: "财务中心",
    createdAt: "2026-04-27 09:30:00",
  },
];

const formModel = reactive({
  name: "",
  sex: "男",
  email: "",
  remark: "",
});
</script>

<style scoped>
.page-shell {
  height: calc(100vh - 110px);
  margin-top: 10px;
  overflow: hidden;
}

.table-box {
  margin-top: 10px;
  padding: 10px;
  height: 700px;
  border-radius: 4px;
  background: #fff;
}

.dialog-body {
  padding: 20px;
}

.dialog-actions {
  text-align: center;
}
</style>
