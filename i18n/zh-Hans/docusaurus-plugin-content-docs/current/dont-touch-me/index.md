---
sidebar_label: 莫挨老子
---

# 莫挨老子 v1.0 使用说明 {ignore}

## 扩展简介

该扩展使用 [Non-Destructive Modular Framework](https://github.com/bdunderscore/ndmf) 和 [Modular Avatar](https://github.com/bdunderscore/modular-avatar) **非破坏性**地实现了使 Avatar 头部在其他玩家的双手靠近时进行躲闪，并在躲闪时播放通过工具定义的表情的功能。

该扩展具体通过在 Avatar 的头骨中插入一个带有 PhysBone 的头骨代理，从而实现其他玩家的手部靠近时躲闪的功能。

### 注意事项

- 该扩展只在 VRCSDK3，Unity 2022.3.22f1 环境下进行过测试。
- 该扩展只支持人型（Humanoid）并且存在头骨的 Avatar。
- 由于该扩展需要修改 Avatar 的骨骼层级，可能会与其他扩展冲突（比如可拆卸的头的扩展等等）。
- **除了菜单项的名称之外，请勿修改、删除预制件的内容。**

<sub>扩展简介结束</sub>

---

## 导入教程

### 导入前的准备

该扩展依赖以下 Unity 插件，请在导入前确保已经安装：

- Modular Avatar (1.11.0或以上): https://modular-avatar.nadena.dev/

---

### 资源包导入

将 `Don't Touch Me.unitypackage` 拖入 Unity 的 `Project` 窗口中，点击提示窗中的 `Import`，将资源包导入到 Avatar 项目中：

![Import](./Assets/Import.webp)

---

### 安装扩展

#### 1. 添加 Prefab

将 `Assets/LuiStudio/Don't Touch Me/Dont't Touch Me.prefab` 从 Project 窗口中拖拽到 Hierarchy 中您的 Avatar 下：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. 配置扩展

在添加 Prefab 后，Avatar 的头部会出现一个白色球形线框：

![Head_Collider_Indicator](./Assets/Head_Collider_Indicator.webp)

:::warning

如果没有出现白色球形线框，请确保当前窗口是场景窗口，并且已在场景窗口右上角开启了 Gismos。

当您的 Avatar 不存在 `VRC Avatar Descriptor` 组件、不存在 `Animator` 组件或者 `Animator` 组件中没有人型 Avatar 时，头部碰撞会在坐标 `(0, 0, 0)` 处。但由于 Avatar 不符合要求，将无法编辑头部碰撞。

:::

##### 1. 调整头部碰撞的位置和大小

在 Hierarchy 中选中 `Don't Touch Me`<sup>[1]</sup>，在 Inspector 中找到 `Don't Touch Me Setup Tool` 组件<sup>[2]</sup>，点击组件中的 `编辑头部碰撞` 按钮<sup>[3]</sup>：

![Edit_Head_Collider](./Assets/Edit_Head_Collider.webp)

在点击 `编辑头部碰撞` 后，白色球形线框中间会出现一个变换工具。通过 `移动` 和 `缩放` 工具<sup>[1]</sup> 调整其位置和大小：

![Edit_Head_Collider_1](./Assets/Edit_Head_Collider_1.webp)

调整完成后，选择任意游戏对象，或者点击 Inspector 中 `DTM Head Transformer` 组件的 `应用`<sup>[1]</sup> 结束调整：

![Edit_Head_Collider_Finish](./Assets/Edit_Head_Collider_Finish.webp)

##### 2. 启用更平滑的躲闪（可选）

更平滑的躲闪指的是在扩展生成 PhysBone 组件时，是否使用 Stiffness 实现更平滑的头部移动。

在 `Don't Touch Me Setup Tool` 组件中，勾选 `更平滑的躲闪`<sup>[1]</sup> 以启用该功能：

![Smoothing_Toggle](./Assets/Smoothing_Toggle.webp)

:::warning

启用更平滑的躲闪后会导致头部在移动时（特别是移动方向变换时）偶尔遭受惯性影响而旋转（特别是PC平台）。

:::

##### 3. 添加躲闪表情（可选）

躲闪表情指的是在进行躲闪的时候播放的表情，表情是通过 `形态键` 动画实现的。我们可以添加多个表情，并且选择让他们在每次躲闪时 `按顺序播放`、`随机播放` 或者 `锁定其中一个播放`。

###### 1. 表情注意事项

根据表情的数量，菜单和同步参数占用有以下不同：

|表情数量|菜单内容|同步参数占用|
|-|-|-|
|0|一个总开关，用于开关躲避功能|1 bit|
|1|一个子菜单，包含总开关和表情开关|2 bits|
|2|一个子菜单，包含总开关、表情开关和锁定表情子菜单|11 bits|
|>2|一个子菜单，包含总开关、表情开关、随机表情开关和锁定表情子菜单|19 bits|

设定的表情列表中，缺少形态键的表情会被清除。

###### 2. 添加表情

在 `Don't Touch Me Setup Tool` 组件中，点击表情列表右下角的 `+`<sup>[1]</sup> 添加一个新表情：

![Add_Emote](./Assets/Add_Emote.webp)

###### 3. 添加表情的形态键

在添加的表情的 BlendShape 列表的右下角点击 `+`<sup>[1]</sup> 添加一个新的表情 BlendShape：

![Add_Blendshape](./Assets/Add_Blendshape.webp)

<span id="Add_Blendshape_Finish"></span>

添加了新的表情 BlendShape 后，列表如下（图中的标号在下文解释）：

![Add_Blendshape_Finish](./Assets/Add_BlendShape_Finish.webp)

在新添加的条目中：

- `网格`<sup>[1]</sup> 是需要播放的 BlendShape 所在的 `带蒙皮网格渲染器`；
- `形态键`<sup>[2]</sup> 是需要播放的 BlendShape 名称；
- `权重`<sup>[3]</sup> 是该 BlendShape 播放时的权重。

将带有 BlendShape 的带蒙皮的网格渲染器所在的游戏对象拖入 `网格`<sup>[1]</sup> 中，在 `形态键`<sup>[2]</sup> 处选择需要播放的形态键，并调整 `权重`<sup>[3]</sup>。

在调整权重时，Unity 会自动进入动画模式，可以实时看到当前表情的效果：

![Emote_Preview](./Assets/Emote_Preview.webp)

取消勾选 `预览`<sup>[[4]](#Add_Blendshape_Finish)</sup> 或者选择其他游戏对象可以取消表情的预览状态。

##### 4. 其他配置

###### 1. 修改子菜单或者开关在圆盘菜单中的位置（可选）

该扩展的子菜单入口默认在根菜单下，这对拥有许多功能的 Avatar 来说很不友好。我们可以通过修改 `MA Menu Installer` 组件修改子菜单的位置：

- 在 Hierarchy 中选中 `Don't Touch Me`
- 在 Inspector 中，找到 `MA Menu Installer` 组件，点击其中的 `Select Menu` 按钮
- 选择想要将子菜单或者开关放入的菜单

:::note

当没有添加表情时，扩展会将原本的子菜单替换为开关，具体内容可以通过 [表情注意事项](#1-表情注意事项) 了解。

:::

<sub>导入教程结束</sub>

---

## 使用方法

您已经安装了“莫挨老子”，接下来我将讲解如何在 VRChat 中使用这个扩展。

### 启用和禁用躲避功能

|表情数量|方法|
|-|-|
|0|开启圆盘菜单，找到 `Don't Touch Me` 开关，通过切换该开关启用/禁用躲避功能|
|>0|开启圆盘菜单，找到并进入 `Don't Touch Me` 子菜单，子菜单中的 `Don't Touch Me` 开关用于启用/禁用躲避功能|

### 启用和禁用躲避表情（仅当有躲避表情时）

开启圆盘菜单，找到并进入 `Don't Touch Me` 子菜单，子菜单中的 `Enable Emotes` 开关用于启用/禁用躲避表情的播放。

### 启用和禁用随机躲避表情（仅当躲避表情数量 >2 时）

默认情况下，在每次躲避时会按照列表中的顺序播放躲避表情，如果启用了随机表情，则会在列表中随机取一个表情进行播放。

开启圆盘菜单，找到并进入 `Don't Touch Me` 子菜单，子菜单中的 `Random Emote` 开关用于启用/禁用随机躲避表情。

### 锁定躲避表情（仅当躲避表情数量 >=2 时）

锁定躲避表情后，每一次躲避都会播放指定的躲避表情。

开启圆盘菜单，找到并进入 `Don't Touch Me/Lock Emote` 子菜单，子菜单中的 `Emote` 开关用于选择需要锁定的表情。

<sub>使用方法结束</sub>
