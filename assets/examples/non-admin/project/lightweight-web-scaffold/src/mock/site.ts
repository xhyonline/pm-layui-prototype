export type NavItem = {
  title: string;
  path: string;
};

export const navItems: NavItem[] = [
  { title: "场景首页", path: "/" },
  { title: "搜索列表", path: "/search" },
  { title: "详情展示", path: "/detail" },
  { title: "信息提交", path: "/form" },
  { title: "结果反馈", path: "/result" }
];

export const overviewMetrics = [
  { title: "入口模块", value: "5", hint: "适合非后台高频页面" },
  { title: "可复用区块", value: "8", hint: "卡片、筛选、详情、结果" },
  { title: "默认端口", value: "5173", hint: "已启用 strictPort" },
  { title: "组件基线", value: "Layui", hint: "不引入其他 UI 库" }
];

export const sceneCards = [
  {
    title: "搜索与查询",
    desc: "适合商品检索、知识库、资源查询、活动浏览等普通列表页。"
  },
  {
    title: "详情与说明",
    desc: "适合文章详情、业务说明、服务介绍、事件记录等信息展示页。"
  },
  {
    title: "表单与收集",
    desc: "适合报名、预约、申请、咨询、资料收集等单路径提交场景。"
  },
  {
    title: "结果与反馈",
    desc: "适合提交成功、审核状态、下一步指引、任务完成提示等反馈页。"
  }
];

export const searchRows = [
  {
    id: "R-1001",
    name: "学生借阅须知",
    category: "指南说明",
    status: "已发布",
    updatedAt: "2026-04-28 09:15",
    owner: "教务服务中心"
  },
  {
    id: "R-1002",
    name: "图书馆馆藏检索入口",
    category: "服务入口",
    status: "维护中",
    updatedAt: "2026-04-27 16:40",
    owner: "数字资源组"
  },
  {
    id: "R-1003",
    name: "校园活动报名说明",
    category: "活动专题",
    status: "已发布",
    updatedAt: "2026-04-26 11:20",
    owner: "学生事务中心"
  }
];

export const activityTimeline = [
  {
    title: "需求收集",
    content: "先确认这是搜索页、详情页、表单页，还是多页组合场景。"
  },
  {
    title: "骨架搭建",
    content: "先保证 `pnpm dev` 可运行，再决定是否补充更多页面。"
  },
  {
    title: "页面替换",
    content: "替换现有 mock 文案和卡片区块，快速形成业务原型。"
  }
];

export const nextStepList = [
  "替换顶部品牌区与页面标题",
  "替换首页卡片与搜索表格文案",
  "把详情页改成自己的信息层级",
  "把表单页字段替换成真实业务字段"
];

