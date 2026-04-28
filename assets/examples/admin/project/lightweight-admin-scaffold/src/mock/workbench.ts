export const statCards = [
  { title: "待审核事项", value: "28", hint: "较昨日 +5" },
  { title: "今日活跃用户", value: "1,284", hint: "峰值 10:30" },
  { title: "异常工单", value: "6", hint: "需运营跟进" },
  { title: "版本变更", value: "3", hint: "本周已上线" }
];

export const quickLinks = [
  { title: "新增用户", desc: "创建后台账号" },
  { title: "角色分配", desc: "调整权限范围" },
  { title: "菜单配置", desc: "维护导航结构" },
  { title: "导出报表", desc: "下载运营数据" }
];

export const userRows = [
  {
    id: "U1001",
    account: "admin",
    name: "系统管理员",
    phone: "13800000001",
    role: "超级管理员",
    status: true,
    createdAt: "2026-04-28 09:10"
  },
  {
    id: "U1002",
    account: "ops_chen",
    name: "陈运营",
    phone: "13800000002",
    role: "运营经理",
    status: true,
    createdAt: "2026-04-27 14:30"
  },
  {
    id: "U1003",
    account: "finance_li",
    name: "李财务",
    phone: "13800000003",
    role: "财务专员",
    status: false,
    createdAt: "2026-04-27 11:05"
  }
];
