---
sidebar_label: 袋装薯片(Avatar 版本)
---

# 袋装薯片(Avatar 版本) v1.0 使用说明 {ignore}

## 目录 {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [导入教程](#导入教程)
  - [导入前的准备](#导入前的准备)
  - [资源包导入](#资源包导入)
  - [将袋装薯片添加到 Avatar 上](#将袋装薯片添加到-avatar-上)
    - [1. 添加 Prefab](#1-添加-prefab)
    - [2. 配置袋装薯片](#2-配置袋装薯片)
      - [1. 调整袋装薯片的位置](#1-调整袋装薯片的位置)
      - [2. 进一步配置](#2-进一步配置)
        - [1. 修改子菜单在圆盘菜单中的位置（可选）](#1-修改子菜单在圆盘菜单中的位置可选)
        - [2. 在 VRChat 的 Avatar 预览中隐藏袋装薯片（可选）](#2-在-vrchat-的-avatar-预览中隐藏袋装薯片可选)
- [使用方法](#使用方法)
  - [显示和隐藏袋装薯片](#显示和隐藏袋装薯片)
  - [取用薯片](#取用薯片)
  - [倾倒薯片](#倾倒薯片)

<!-- /code_chunk_output -->

## 导入教程

### 导入前的准备

该扩展依赖以下 Unity 插件 / Shader，请在导入前确保已经安装：

- Modular Avatar (1.11.0或以上): https://modular-avatar.nadena.dev/
- lilToon (1.8.3或以上): https://lilxyzw.github.io/lilToon/#/

---

### 资源包导入

将 `Potato Chips (Avatar).unitypackage` 拖入 Unity 的 `Project` 窗口中，点击提示窗中的 `Import`，将资源包导入到 Avatar 项目中：

![Import](./Assets/Import.webp)

---

### 将袋装薯片添加到 Avatar 上

#### 1. 添加 Prefab

将 `Assets/LuiStudio/Potato Chips/Potato Chips.prefab` 从 Project 窗口中拖拽到 Hierarchy 中您的 Avatar 下。拖入完成后，Prefab 与 Avatar 的关系如下：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. 配置袋装薯片

在拖入 Prefab 后，场景中的袋装薯片会出现在 Avatar 左侧 1m 的高度：

![Default_Position](./Assets/Default_Position.webp)

##### 1. 调整袋装薯片的位置

在 Hierarchy 中，选中 `Potato Chips/Potato Chips`<sup>[1]</sup>，使用 `移动`、`旋转` 和 `缩放` 工具<sup>[2]</sup>调整其位置和大小：

![Adjust_Position](./Assets/Adjust_Position.webp)

将袋装薯片放置到左手手心：

![Position_Example](./Assets/Position_Example.webp)

如果您想将其放在`右手`，请将其移动到右手后，确保选中 `Potato Chips/Potato Chips`<sup>[1]</sup>，在 Inspector 中将 `MA Bone Proxy` 组件中的 `Advance` 折叠栏中的 `Bone Reference` 修改为 `Right Hand`<sup>[2]</sup>：

![Switch_Hand](./Assets/Switch_Hand.webp)

##### 2. 进一步配置

###### 1. 修改子菜单在圆盘菜单中的位置（可选）

袋装薯片的子菜单入口默认在根菜单下，这对拥有许多功能的 Avatar 来说很不友好。我们可以通过修改 `MA Menu Installer` 组件修改子菜单的位置：

- 在 Hierarchy 中选中 `Potato Chips`
- 在 Inspector 中，点击 `MA Menu Installer` 组件中的 `Select Menu` 按钮
- 选择想要将子菜单放入的菜单

###### 2. 在 VRChat 的 Avatar 预览中隐藏袋装薯片（可选）

VRChat 的 Avatar 预览展示的是 Unity 中 Avatar 最后的状态。也就是说，如果在 Unity 中没有禁用袋装薯片，在 VRChat 中预览 Avatar 时也会显示。可以通过以下步骤在 Unity 和 VRChat 预览中隐藏袋装薯片：

- 在 Hierarchy 中选中 `Potato Chips/Potato Chips`
- 取消勾选 Inspector 最上方的勾选框（禁用袋装薯片）

<sub>导入教程结束</sub>

---

## 使用方法

您已经完成了袋装薯片的导入，接下来我将讲解如何在 VRChat 中使用袋装薯片。

### 显示和隐藏袋装薯片

开启圆盘菜单，找到并进入 `Potato Chips` 子菜单，子菜单中的 `Potato Chips` 按钮用于显示/隐藏袋装薯片。

### 取用薯片

将手伸入薯片袋中抓取薯片，在放手或者将薯片放入自己或他人口中（头部）时，会发出嚼薯片的声音。

### 倾倒薯片

在 `Potato Chips` 子菜单有一个 `Pouring` 开关，当开启后，将薯片袋子倒置即可源源不断地倒出薯片。

<sub>使用方法结束</sub>
