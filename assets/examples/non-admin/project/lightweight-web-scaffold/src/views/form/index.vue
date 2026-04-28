<template>
  <div class="page-stack">
    <PageHero
      eyebrow="FORM PAGE"
      title="表单页默认关注单一路径完成率"
      description="对于报名、预约、申请、咨询等普通业务页，原型阶段最重要的是字段分组、说明顺序和提交路径是否清晰。"
    >
      <template #actions>
        <lay-button type="primary">提交示例</lay-button>
        <lay-button>查看预览</lay-button>
      </template>
    </PageHero>

    <lay-row space="16">
      <lay-col :md="15" :sm="24" :xs="24">
        <SectionCard title="信息提交" description="默认保留基础字段、分组标题和说明文字。">
          <lay-form :model="formModel" label-width="96px">
            <lay-form-item label="申请主题">
              <lay-input v-model="formModel.title" placeholder="请输入主题" />
            </lay-form-item>
            <lay-form-item label="业务类型">
              <lay-select v-model="formModel.type" placeholder="请选择">
                <lay-select-option value="appointment" label="预约登记" />
                <lay-select-option value="apply" label="资料申请" />
                <lay-select-option value="consult" label="咨询反馈" />
              </lay-select>
            </lay-form-item>
            <lay-form-item label="优先级">
              <lay-radio v-model="formModel.priority" name="priority" value="P1">高</lay-radio>
              <lay-radio v-model="formModel.priority" name="priority" value="P2">中</lay-radio>
              <lay-radio v-model="formModel.priority" name="priority" value="P3">低</lay-radio>
            </lay-form-item>
            <lay-form-item label="联系人">
              <lay-input v-model="formModel.contact" placeholder="请输入联系人姓名" />
            </lay-form-item>
            <lay-form-item label="联系方式">
              <lay-input v-model="formModel.phone" placeholder="请输入手机号或邮箱" />
            </lay-form-item>
            <lay-form-item label="附加选项">
              <lay-switch v-model="formModel.needReply" title="需要回执" />
            </lay-form-item>
            <lay-form-item label="补充说明">
              <lay-textarea
                v-model="formModel.remark"
                placeholder="请输入背景说明、需求细节或注意事项"
                :rows="7"
              />
            </lay-form-item>
            <lay-form-item>
              <div class="section-actions">
                <lay-button type="primary">提交</lay-button>
                <lay-button>保存草稿</lay-button>
                <lay-button>取消</lay-button>
              </div>
            </lay-form-item>
          </lay-form>
        </SectionCard>
      </lay-col>

      <lay-col :md="9" :sm="24" :xs="24">
        <SectionCard title="实时预览" description="表单原型阶段，右侧预览有助于快速确认字段组织。">
          <div class="preview-box">
            <div class="preview-box__title">{{ formModel.title || "未填写主题" }}</div>
            <div class="preview-box__row">
              <span>业务类型</span>
              <strong>{{ typeMap[formModel.type] }}</strong>
            </div>
            <div class="preview-box__row">
              <span>优先级</span>
              <strong>{{ formModel.priority }}</strong>
            </div>
            <div class="preview-box__row">
              <span>联系人</span>
              <strong>{{ formModel.contact || "待填写" }}</strong>
            </div>
            <div class="preview-box__row">
              <span>需要回执</span>
              <strong>{{ formModel.needReply ? "是" : "否" }}</strong>
            </div>
            <div class="preview-box__remark">{{ formModel.remark || "这里显示补充说明内容。" }}</div>
          </div>
        </SectionCard>

        <SectionCard title="使用建议" description="这套结构适合字段量适中、流程较短的页面。">
          <ul class="tips-list">
            <li>首屏只保留关键字段，不要一次堆太多输入项。</li>
            <li>如果字段超过 10 个，优先拆分成多段卡片或分步流。</li>
            <li>原型阶段优先看字段层级，不要先陷入表单校验细节。</li>
          </ul>
        </SectionCard>
      </lay-col>
    </lay-row>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import PageHero from "../../components/common/PageHero.vue";
import SectionCard from "../../components/common/SectionCard.vue";

const typeMap: Record<string, string> = {
  appointment: "预约登记",
  apply: "资料申请",
  consult: "咨询反馈"
};

const formModel = reactive({
  title: "学生阅读活动报名",
  type: "appointment",
  priority: "P2",
  contact: "张同学",
  phone: "13800000000",
  needReply: true,
  remark: "请确认是否需要带学生证，活动地点是否支持临时报名。"
});
</script>

<style scoped>
.preview-box {
  padding: 18px;
  border-radius: 16px;
  background: #f7fbfb;
}

.preview-box__title {
  margin-bottom: 16px;
  color: #163042;
  font-size: 20px;
  font-weight: 700;
}

.preview-box__row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.preview-box__row span {
  color: #6b7280;
}

.preview-box__remark {
  margin-top: 14px;
  line-height: 1.9;
  color: #556171;
}

.tips-list {
  margin: 0;
  padding-left: 18px;
  line-height: 1.9;
  color: #5f6b7a;
}
</style>

