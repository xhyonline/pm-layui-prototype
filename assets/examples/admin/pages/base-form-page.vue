<template>
  <div>
    <lay-card style="margin: 10px">
      <p class="title">基础表单</p>
      <p class="describe">
        表单页用于收集和校验信息，适合字段量适中、操作路径单一的后台录入场景。
      </p>
    </lay-card>

    <lay-container fluid="true" style="padding: 10px; padding-top: 0">
      <lay-card style="padding: 40px">
        <lay-row>
          <lay-col :md="10" :md-offset="7">
            <lay-form :model="model">
              <lay-form-item label="账户">
                <lay-input v-model="model.username"></lay-input>
              </lay-form-item>
              <lay-form-item label="密码">
                <lay-input v-model="model.password" type="password"></lay-input>
              </lay-form-item>
              <lay-form-item label="业务类型">
                <lay-select v-model="model.type">
                  <lay-select-option value="purchase" label="采购申请" />
                  <lay-select-option value="finance" label="费用报销" />
                  <lay-select-option value="contract" label="合同审批" />
                </lay-select>
              </lay-form-item>
              <lay-form-item label="优先级">
                <lay-radio v-model="model.priority" name="priority" value="P1">高</lay-radio>
                <lay-radio v-model="model.priority" name="priority" value="P2">中</lay-radio>
                <lay-radio v-model="model.priority" name="priority" value="P3">低</lay-radio>
              </lay-form-item>
              <lay-form-item label="描述">
                <lay-textarea v-model="model.desc"></lay-textarea>
              </lay-form-item>
              <lay-form-item label="预览数据">
                {{ model }}
              </lay-form-item>
              <lay-form-item>
                <lay-row :space="20">
                  <lay-col :md="12">
                    <lay-button :fluid="true" type="primary">提交</lay-button>
                  </lay-col>
                  <lay-col :md="12">
                    <lay-button :fluid="true">重置</lay-button>
                  </lay-col>
                </lay-row>
              </lay-form-item>
            </lay-form>
          </lay-col>
        </lay-row>
      </lay-card>
    </lay-container>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const model = reactive({
  username: "admin",
  password: "123456",
  type: "purchase",
  priority: "P2",
  desc: "这里通常放审批说明、申请背景、业务备注等文本。",
});
</script>

<style scoped>
.title {
  margin: 12px 0 20px;
  font-size: 20px;
  font-weight: 500;
}

.describe {
  margin-bottom: 12px;
  font-size: 14px;
}
</style>
