---
sidebar_label: 拳击火箭筒
---

# 拳击火箭筒 v1.0 使用说明 {ignore}

## 导入教程

### 导入前的准备

该扩展依赖以下 Unity 插件 / Shader，请在导入前确保已经安装：

- Modular Avatar (1.11.0或以上): https://modular-avatar.nadena.dev/
- lilToon (1.8.3或以上): https://lilxyzw.github.io/lilToon/#/

---

### 资源包导入

将 `Rocket Puncher.unitypackage` 拖入 Unity 的 `Project` 窗口中，点击提示窗中的 `Import`，将资源包导入到 Avatar 项目中：

![Import](./Assets/Import.webp)

---

### 将拳击火箭筒添加到 Avatar 上

#### 1. 添加 Prefab

将 `Assets/LuiStudio/Rocket Puncher/Rocket Puncher.prefab` 从 Project 窗口中拖拽到 Hierarchy 中您的 Avatar 下。拖入完成后，Prefab 与 Avatar 的关系如下：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. 配置拳击火箭筒

在拖入 Prefab 后，场景中的拳击火箭筒会出现在 Avatar 右侧 1m 的高度：

![Rocket_Puncher_Default_Position](./Assets/Rocket_Puncher_Default_Position.webp)

##### 1. 调整拳击火箭筒的位置

在 Hierarchy 中，选中 `Rocket Puncher/Model`<sup>[1]</sup>，使用 `移动`、`旋转` 和 `缩放` 工具<sup>[2]</sup>调整其位置和大小：

![Adjust_Position](./Assets/Adjust_Position.webp)

将拳击火箭筒放置到右手手心：

![Position_Example](./Assets/Position_Example.webp)

##### 2. 进一步配置

###### 1. 修改子菜单在圆盘菜单中的位置（可选）

拳击火箭筒的子菜单入口默认在根菜单下，这对拥有许多功能的 Avatar 来说很不友好。我们可以通过修改 `MA Menu Installer` 组件修改子菜单的位置：

- 在 Hierarchy 中选中拳击火箭筒
- 在 Inspector 中，点击 `MA Menu Installer` 组件中的 `Select Menu` 按钮
- 选择想要将子菜单放入的菜单

###### 2. 在 VRChat 的 Avatar 预览中隐藏拳击火箭筒（可选）

VRChat 的 Avatar 预览展示的是 Unity 中 Avatar 最后的状态。也就是说，如果在 Unity 中没有禁用拳击火箭筒，在 VRChat 中预览 Avatar 时也会显示。可以通过以下步骤在 Unity 和 VRChat 预览中隐藏拳击火箭筒：

- 在 Hierarchy 中选中 `Rocket Puncher/Model` 和 `Rocket Puncher/PB`
- 取消勾选 Inspector 最上方的勾选框（禁用拳击火箭筒）

<sub>导入教程结束</sub>

---

## 使用方法

您已经完成了拳击火箭筒的导入，接下来我将讲解如何在 VRChat 中使用拳击火箭筒。

### 显示和隐藏拳击火箭筒

开启圆盘菜单，找到并进入 `Rocket Puncher` 子菜单，子菜单中的 `Rocket Puncher` 按钮用于显示/隐藏拳击火箭筒。

### 发射拳套

使用左手抓握拳击火箭筒的 `后握把`<sup>[1]</sup>，此时进入就绪状态，当 `右手` 的手势为握拳时弹出拳套，当 `右手` 的手势不为握拳时收回拳套。

![Rocket_Puncher_Grip](./Assets/Rocket_Puncher_Grip.webp)

### 更改拳击火箭筒的就绪模式

在 `Rocket Puncher` 子菜单中还有两个开关，他们的功能分别为：

- `Standby when gripped` - 控制前端的保护盖是否在抓握 `后握把` 时开启
- `Standby after punching` - 控制前端保护盖是否在每次 `收回` 拳套后保持开启

<sub>使用方法结束</sub>
