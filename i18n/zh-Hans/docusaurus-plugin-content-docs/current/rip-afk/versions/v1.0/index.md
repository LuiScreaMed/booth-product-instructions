---
sidebar_label: v1.0.*
---

# RIP AFK v1.0.* 使用说明 {ignore}

## 扩展简介

该扩展使用 [Non-Destructive Modular Framework](https://github.com/bdunderscore/ndmf) 和 [Modular Avatar](https://github.com/bdunderscore/modular-avatar) **非破坏性**地实现了 Avatar 在 AFK 时变成石碑的功能。

该扩展在 Avatar 编译时实现以下内容：

- 禁用 Action 层和 FX 层中任何包含 AFK 为 `true` 的条件的动画过渡。
- 查找 Avatar 中所有包含 PhysBone、Contact Receiver、Renderer、Particle System 或者 Light 的对象。
- 根据除了用户排除的对象之外的上述对象生成 AFK 动画。

### 注意事项

- 该扩展只在 VRCSDK3，Unity 2022.3.22f1 环境下进行过测试。

### 已知问题

- 在空中进入 AFK 状态时，石碑先于 Avatar 落地的情况下，Avatar 视角会缓慢下沉并旋转，直到到达地面。
- 在玩家过多的实例中时，本地玩家可能会在切换 AFK 状态时没有播放 AFK 动画，但其他玩家可以正常播放。

<sub>扩展简介结束</sub>

---

## 导入教程

### 导入前的准备

该扩展依赖以下 Unity 插件，请在导入前确保已经安装：

- Modular Avatar (1.13.0或以上): https://modular-avatar.nadena.dev/
- lilToon (1.8.3或以上): https://lilxyzw.github.io/lilToon/#/

---

### 资源包导入

将 `RIP AFK.unitypackage` 拖入 Unity 的 `Project` 窗口中，点击提示窗中的 `Import`，将资源包导入到 Avatar 项目中：

![Import](./Assets/Import.webp)

---

### 安装扩展

#### 1. 添加 Prefab

将 `Assets/LuiStudio/AFKs/RIP/RIP AFK.prefab` 从 Project 窗口中拖拽到 Hierarchy 中您的 Avatar 下：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. 配置扩展

##### 1. 添加排除项（可选）

该扩展生成的 AFK 动画会禁用模型中的所有 Mesh、Physbone、Contact Receiver、Particle System 和 Light。

如果您需要让某些对象在 AFK 动画播放时不被影响，可以将这些对象添加到 `排除项` 数组<sup>[1]</sup>中：

![Exclusions](./Assets/Exclusions.webp)

:::warning

添加到 '排除项' 的对象及其子项都会被排除。

:::

##### 2. 修改石碑（可选）

石碑默认处于隐藏状态，如果需要修改石碑，请在 Hierarchy 中选中 `RIP AFK/Stone`<sup>[1]</sup>，并在 Inspector 中勾选左上角的 `勾选框`<sup>[2]</sup>：

![Enable_Stone](./Assets/Enable_Stone.webp)

###### 更改位置和大小（可选）

选中 `RIP AFK`<sup>[1]</sup>，使用 `移动`、`旋转` 和 `缩放` 工具<sup>[2]</sup> 调整石碑的位置和大小：

![Adjust_Position](./Assets/Adjust_Position.webp)

###### 为石碑添加内容（可选）

如果您想为 AFK 添加 Audio Source、在石碑上添加您自己的 id 等，将您需要添加的内容放入 `Stone` 对象中，并保持开启即可。

:::note

我尝试过在 NDMF 构建时通过 Text 生成文字网格和通过 Camera 渲染文字贴图，但是都失败了。如果您有实现在构建时生成自定义石碑文字的方法，请联系本店！

:::

###### 替换石碑模型（可选）

选中 `RIP AFK/Stone`<sup>[1]</sup> 对象，在 Inspector 中找到 `Mesh Filter` 和 `Mesh Renderer` 组件。

将 `Mesh Filter` 组件的网格<sup>[2]</sup>替换成您想替换的模型的网格，将 `Mesh Renderer` 组件中的材质<sup>[3]</sup>替换成您想替换的模型的材质：

![Replace_Stone_Model](./Assets/Replace_Stone_Model.webp)

找到 `Box Collider` 组件，调整其边界，使其贴合新的模型。

:::warning

请不要直接替换 `Stone` 对象，如果您一定要直接替换：

- 请确保新的对象的组件与原 `Stone` 对象保持一致。
- 请将 Inspector 切换为 Debug 视图，选中 `RIP AFK`，将新的对象拖动到 `RIP AFK Setup Tool` 的 `Stone Transform` 字段中。

:::

<sub>导入教程结束</sub>

---

## 测试

在安装完毕后，可以通过进入 Play Mode 对其进行测试。

首先我们需要 `Gesture Manager`，在 `Vrchat Creator Companion` 中可以安装。

确保安装了 `Gesture Manager` 后，点击 Unity 窗口中的 `Tools/Gesture Manager Emulator`：

![Add_Gesture_Manager_Emulator](./Assets/Add_Gesture_Manager_Emulator.webp)

点击后，场景中会新增一个名为 `GestureManager`<sup>[1]</sup> 的游戏对象，选中它，转到 Inspector，点击 `Gesture Manager` 组件中的 `Enter Play-Mode`<sup>[2]</sup> 进入 Play Mode：

![Enter_Play_Mode_With_Gesture_Manager](./Assets/Enter_Play_Mode_With_Gesture_Manager.webp)

在进入 Play Mode 后，Gesture Manager 组件中会出现一个圆盘菜单<sup>[1]</sup>，点击 `Options -> States -> AFK`<sup>[2]</sup> 切换 AFK 状态：

![Gesture_Manager_AFK](./Assets/Gesture_Manager_AFK.webp)

在切换到 AFK 状态后，如果 Avatar 消失，并且出现一个往下坠落的石碑，则表示该扩展正常运行。

<sub>测试结束</sub>

---

## 使用方法

确保 Avatar 的 AFK 状态检测已经处于开启状态：

- 处于 PC 模式时，使用键盘的 End 键切换 AFK 状态。
- 处于 VR 模式时，开启 SteamVR 界面进入 AFK 状态。

在进入 AFK 状态时，Avatar 即可变为石碑。

<sub>使用方法结束</sub>
