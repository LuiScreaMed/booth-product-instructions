---
sidebar_label: v1.0.*
---

# 强制 Write Defaults v1.0.* 使用说明 {ignore}

## 简介

一个非破坏性的 NDMF 插件，用于强制动画状态写入/不写入默认值。

### 注意事项

- 该插件只在 VRCSDK3，Unity 2022.3.22f1 环境下进行过测试。

<sub>简介结束</sub>

---

## 安装

### 依赖

该插件依赖以下 Unity 包，请在导入前确保已经安装：

- Non-Destructive Modular Framework (1.11.0或以上): https://github.com/bdunderscore/ndmf

---

### 安装资源包

1. 前往 [我们的 VPM 资源包清单页面](https://luistudio.github.io/VPM-Package-Listing/)。
1. 点击 `Add to VCC` 按钮，将仓库加入 VCC / ALCOM。
1. 在 VCC / ALCOM 中，前往项目的管理页安装 `Force Write Defaults`。

<sub>安装结束</sub>

---

## 使用方法

该插件支持使用 State Behaviour 和状态名标记两种方式对 Animator State 进行 Write Defaults 覆盖，其中使用 State Behaviour 的优先级更高。

### 使用 State Behaviour 覆盖动画状态的 Write Defaults

1. 在 Animator 中，选中需要覆盖 Write Defaults 的 State；
1. 在 Inspector 中点击 `Add Behaviour`；
1. 搜索 `Force Write Defaults` 并将其添加到 State 中；
1. 在添加的 `Force Write Defaults` 中勾选或取消勾选 `Write Defaults` 进行覆写。

### 使用状态名标记覆盖动画状态的 Write Defaults

1. 在 Animator 中，选中需要覆盖 Write Defaults 的 State；
1. 在 Inspector 中修改当前选中 State 的名称，在其末尾添加 `(WD On)` 或 `(WD Off)`（大小写不敏感）进行覆写。

### 完成

进入 Play Mode 或者构建 Avatar 查看结果。

<sub>使用方法结束</sub>

---

## 工作原理

该插件在 NDMF 的 Oprimizing 阶段运行。

### 执行内容

当该插件运行时，他执行以下步骤：

1. 获取 Avatar 中所有 Animator State 和 Animator State Machine；
1. 查询获取到的 State 或者 State Machine 中是否存在 `Force Write Defaults`；
1. 如果 State 中存在 `Force Write Defaults` 或者其名称末尾含有 `(WD On)`/`(WD Off)`，则覆盖其 Write Defaults；
1. 销毁 State 和 State Machine 中的 `Force Write Defaults`。

<sub>工作原理结束</sub>
