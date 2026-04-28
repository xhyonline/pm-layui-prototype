<template>
  <lay-container fluid="true" style="padding: 10px">
    <lay-row :space="10">
      <lay-col :md="18" :xs="24">
        <lay-card>
          <template #title>最近更新</template>
          <lay-row :space="10">
            <lay-col v-for="item in updates" :key="item.name" :md="8" :xs="24">
              <div class="project-grid">
                <div class="project-grid-title">
                  <lay-icon :type="item.icon" :color="item.color"></lay-icon>
                  <span>{{ item.name }}</span>
                </div>
                <p class="project-grid-center">{{ item.desc }}</p>
                <p class="project-grid-footer">
                  <a>{{ item.module }}</a>
                  <span>{{ item.time }}</span>
                </p>
              </div>
            </lay-col>
          </lay-row>
        </lay-card>

        <lay-card style="margin-top: 10px">
          <template #title>最近动态</template>
          <dl>
            <dd v-for="feed in feeds" :key="feed.id" class="dynamic">
              <lay-avatar :src="feed.avatar"></lay-avatar>
              <div>
                <p>{{ feed.text }}</p>
                <span>{{ feed.time }}</span>
              </div>
            </dd>
          </dl>
        </lay-card>
      </lay-col>

      <lay-col :md="6" :xs="24">
        <lay-card>
          <template #title>便捷导航</template>
          <div class="links">
            <a v-for="entry in quickLinks" :key="entry">{{ entry }}</a>
          </div>
        </lay-card>

        <lay-card style="margin-top: 10px">
          <template #title>产品动态</template>
          <a class="news">本周发布排期</a>
          <a class="news secondary">需求池评审</a>
        </lay-card>
      </lay-col>
    </lay-row>
  </lay-container>
</template>

<script setup lang="ts">
const updates = [
  {
    name: "上传组件",
    desc: "修复开启懒加载后，图片不存在时的异常提示。",
    module: "文件上传",
    time: "7天前",
    icon: "layui-icon-upload",
    color: "#16baaa",
  },
  {
    name: "权限设置",
    desc: "新增角色操作范围字段，支持按部门隔离。",
    module: "权限中心",
    time: "2天前",
    icon: "layui-icon-set",
    color: "#ff7a45",
  },
  {
    name: "看板提醒",
    desc: "补充待办、预警、审批统计卡片。",
    module: "工作台",
    time: "今天",
    icon: "layui-icon-chart-screen",
    color: "#165dff",
  },
];

const feeds = [
  {
    id: 1,
    text: "张三提交了“供应商准入”流程原型。",
    time: "5分钟前",
    avatar:
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.0fLeVmNXnV-6Eom3FEUNjgAAAA?w=196&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: 2,
    text: "李四更新了“预算审批”统计口径。",
    time: "30分钟前",
    avatar:
      "https://tse1-mm.cn.bing.net/th/id/OIP-C.0fLeVmNXnV-6Eom3FEUNjgAAAA?w=196&h=196&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
];

const quickLinks = ["新增用户", "菜单配置", "审批中心", "日志查询", "字典配置", "组织架构"];
</script>

<style scoped>
.project-grid {
  padding: 20px;
  border-radius: 4px;
  background: #f8f8f8;
}

.project-grid-title {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 10px;
}

.project-grid-center {
  min-height: 44px;
  line-height: 22px;
}

.project-grid-footer {
  position: relative;
  color: #777;
}

.project-grid-footer span {
  position: absolute;
  right: 0;
  color: #bbb;
}

.dynamic {
  display: flex;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid #eee;
}

.dynamic span {
  color: #999;
}

.links a {
  display: inline-block;
  width: 33%;
  margin: 8px 0;
  color: #666;
}

.news {
  display: block;
  margin-bottom: 10px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  background: #16baaa;
}

.secondary {
  background: #165dff;
}
</style>
