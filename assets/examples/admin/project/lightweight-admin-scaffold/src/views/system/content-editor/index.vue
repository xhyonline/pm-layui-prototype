<template>
  <lay-container fluid="true" class="page-shell">
    <lay-row :space="15">
      <lay-col :md="16">
        <lay-card title="内容发布">
          <div class="notice-box">
            当前 `layui-vue 2.23.3` 未提供可直接使用的 `layedit` Vue 组件导出。
            这个页面使用“工具栏 + 文本域 + 实时预览”作为原型期替代，方便表达富文本录入场景。
          </div>

          <lay-form :model="formModel" class="editor-form">
            <lay-form-item label="文章标题">
              <lay-input v-model="formModel.title" placeholder="请输入标题" />
            </lay-form-item>
            <lay-form-item label="内容栏目">
              <lay-select v-model="formModel.channel">
                <lay-select-option value="news" label="新闻公告" />
                <lay-select-option value="activity" label="活动专题" />
                <lay-select-option value="guide" label="帮助指南" />
              </lay-select>
            </lay-form-item>
            <lay-form-item label="编辑工具">
              <div class="toolbar-list">
                <lay-button size="sm" @click="appendSnippet('<h2>小标题</h2>')">标题</lay-button>
                <lay-button size="sm" @click="appendSnippet('<p>这里补充正文段落。</p>')">段落</lay-button>
                <lay-button size="sm" @click="appendSnippet('<strong>重点信息</strong>')">加粗</lay-button>
                <lay-button size="sm" @click="appendSnippet('<ul><li>要点一</li><li>要点二</li></ul>')">列表</lay-button>
                <lay-button size="sm" @click="appendSnippet('<blockquote>引用说明</blockquote>')">引用</lay-button>
                <lay-button size="sm" @click="appendSnippet('<a href=&quot;#&quot;>相关链接</a>')">链接</lay-button>
              </div>
            </lay-form-item>
            <lay-form-item label="正文内容">
              <lay-textarea
                v-model="formModel.content"
                placeholder="请输入 HTML 片段或原型文字内容"
                :rows="14"
              />
            </lay-form-item>
            <lay-form-item label="发布设置">
              <lay-row :space="10" class="publish-row">
                <lay-col :md="8">
                  <lay-switch v-model="formModel.publishNow" title="立即发布" />
                </lay-col>
                <lay-col :md="8">
                  <lay-switch v-model="formModel.allowComment" title="允许评论" />
                </lay-col>
              </lay-row>
            </lay-form-item>
            <lay-form-item>
              <lay-button type="primary">保存草稿</lay-button>
              <lay-button>预览页面</lay-button>
            </lay-form-item>
          </lay-form>
        </lay-card>
      </lay-col>

      <lay-col :md="8">
        <lay-card title="实时预览">
          <div class="preview-meta">
            <strong>{{ formModel.title || "未命名文章" }}</strong>
            <span>{{ channelLabelMap[formModel.channel] }}</span>
          </div>
          <div class="preview-body" v-html="formModel.content"></div>
        </lay-card>

        <lay-card title="适用说明" class="helper-card">
          <ul class="helper-list">
            <li>用于表达“富文本录入页”的页面结构与交互。</li>
            <li>适合 PRD 评审、字段确认、内容运营流程确认。</li>
            <li>如果后续必须接入真实富文本，再替换为实际编辑器实现。</li>
          </ul>
        </lay-card>
      </lay-col>
    </lay-row>
  </lay-container>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const channelLabelMap: Record<string, string> = {
  news: "新闻公告",
  activity: "活动专题",
  guide: "帮助指南"
};

const formModel = reactive({
  title: "Layedit 占位示例",
  channel: "news",
  publishNow: true,
  allowComment: false,
  content:
    "<h2>示例标题</h2><p>这里展示富文本内容的原型效果，用于替代当前版本中缺失的 layedit 组件。</p><ul><li>支持原型期内容录入说明</li><li>支持右侧实时预览</li></ul>"
});

const appendSnippet = (snippet: string) => {
  formModel.content = `${formModel.content}\n${snippet}`;
};
</script>

<style scoped>
.page-shell {
  padding: 15px;
}

.notice-box {
  margin-bottom: 15px;
  padding: 12px 14px;
  border: 1px solid #e8f3ff;
  border-radius: 4px;
  line-height: 1.7;
  color: #666;
  background: #f4f9ff;
}

.editor-form {
  margin-top: 10px;
}

.toolbar-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.publish-row {
  width: 100%;
}

.preview-meta {
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
}

.preview-meta strong,
.preview-meta span {
  display: block;
}

.preview-meta strong {
  margin-bottom: 6px;
  font-size: 18px;
}

.preview-meta span {
  color: #999;
}

.preview-body {
  line-height: 1.8;
  color: #444;
}

.preview-body :deep(h2) {
  margin: 0 0 12px;
  font-size: 20px;
}

.preview-body :deep(p) {
  margin: 0 0 12px;
}

.preview-body :deep(blockquote) {
  margin: 0 0 12px;
  padding: 10px 14px;
  border-left: 4px solid var(--global-primary-color);
  background: #f8f8f8;
}

.preview-body :deep(ul) {
  padding-left: 18px;
}

.helper-card {
  margin-top: 15px;
}

.helper-list {
  margin: 0;
  padding-left: 18px;
  line-height: 1.9;
  color: #666;
}
</style>
