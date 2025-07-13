---
sidebar_label: 探照灯
---

# 探照灯 v1.0 使用说明 {ignore}

## 导入教程

### 导入前的准备

该扩展依赖以下Unity插件 / Shader，请在导入前确保已经安装：

- Modular Avatar (1.9.13或以上): https://modular-avatar.nadena.dev/
- lilToon (1.7.3或以上): https://lilxyzw.github.io/lilToon/#/

<sub>导入前的准备结束</sub>

---

### 资源包导入

将 `Search Light.unitypackage` 拖入 Unity 的 `Project` 窗口中，点击提示窗中的 `Import`，将资源包导入到 Avatar 项目中：

![Import](./assets/Import.webp)

<sub>资源包导入结束</sub>

---

### 导入探照灯

#### 1. 导入Prefab

> :warning: **注意**
>
>因为 Modular Avatar 的限制，通过 MA Bone Proxy 绑定的对象为空时会报错，而虽然大部分 Avatar 都包含左右眼骨骼，我依然保留了只绑定头部而不绑定眼球的 Prefab，从而防止报错。

首先确定 Avatar 中是否存在眼睛骨骼（左右眼），并根据下方的说明，选择对应的 Prefab 导入：

- 存在眼睛骨骼：`Search Light (eyes).prefab`
- 不存在眼睛骨骼，或者存在眼睛骨骼但是不想要探照灯跟随视线：`Search Light (head).prefab`

将 `Assets/LuiStudio/Search Light` 中的对应 Prefab 拖入 Avatar 中，拖入后 Prefab 与 Avatar 的关系如下（以 Search Light (eyes) 为例）：

![Prefab](./assets/Prefab.webp)

#### 2. 调整位置

Prefab 中包含了一个青色的位置指示模型，这个模型在编译上传后会自动删除。

##### 1. 调整整体位置

在 Hierarchy 中，选中 Prefab 中的 `Armature_Search_Light`<sup>[1]</sup>，使用 Unity 的 `移动、旋转` 工具<sup>[2]</sup>，调整探照灯的整体位置：

![Adjust_Position](./assets/Adjust_Position.webp)

调整到眼睛正前方，如下图：

![Adjust_Position_Finished](./assets/Adjust_Position_Finished.webp)

##### 2. 调整双眼位置

在粗略调整了整体位置后，我们需要将两个探照灯对准眼球，在这个说明中我们将先为左眼调整位置，然后根据左眼的坐标使右眼的探照灯对称。

###### 1. 调整左眼位置

在 Hierarchy 中，选中 `Armature_Search_Light` 中的 `Search_Light_L`<sup>[1]</sup>，使用 Unity 的 `移动、旋转` <sup>[2]</sup>工具将光柱对准左眼的正前方<sup>[3]</sup>：

![Adjust_Position_L](./assets/Adjust_Position_L.webp)

###### 2. 调整右眼位置

保持 `Search_Light_L` 的选中状态<sup>[1]</sup>，转到 Inspector，右键 Transform 中的 Position，点击复制<sup>[2]</sup>：

![Copy_Position_L](./assets/Copy_Position_L.webp)

选中 `Search_Light_R`<sup>[1]</sup>，转到 Inspector，右键 Transform 中的 Position，点击粘贴<sup>[2]</sup>：

![Paste_Position_R](./assets/Paste_Position_R.webp)

将 Position 中的 X 轴的数值取反：

![Position_R_X_Opposite](./assets/Position_R_X_Opposite.webp)

##### 3. 隐藏位置指示模型（可选）

选中 `Position (Auto_Remove_After_Upload)`，在 Inspector 中将其取消勾选：

![Hide_Position_Indicator](./assets/Hide_Position_Indicator.webp)

#### 导入完成

探照灯导入完成，接下来请查看 [使用方法](#使用方法)

<sub>导入结束</sub>

---

## 使用方法

你已经完成了导入，接下来将讲解探照灯在 VRChat 中的使用方法。

- 开启圆盘菜单，找到 Search Light 开关以显示/隐藏探照灯

<sub>使用方法结束</sub>

---

## 杂项

### 修改光柱的大小和长度

每个光柱都有起点和终点两个骨骼，可以修改他们的缩放和位置对光柱的大小和长度进行修改。

### 修改开关在菜单中的位置

探照灯的开关默认在菜单的起始层，这对拥有许多功能的 Avatar 来说很不友好，使用 Modular Avatar 可以修改开关的位置

- 选中 Prefab 中的 `Menu/Search Light`
- 在 Inspector 中，点击 `MA Menu Installer` 组件中的 `Select Menu` 按钮
- 选择想要将开关放入的子菜单

<sub>杂项结束</sub>