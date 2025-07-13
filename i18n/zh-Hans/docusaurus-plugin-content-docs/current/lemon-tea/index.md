---
sidebar_label: 柠檬茶
---

# 柠檬茶 v1.0 使用说明 {ignore}

## 导入教程

### 导入前的准备

该扩展依赖以下Unity插件 / Shader，请在导入前确保已经安装：

- Modular Avatar (1.9.13或以上): https://modular-avatar.nadena.dev/
- lilToon (1.7.3或以上): https://lilxyzw.github.io/lilToon/#/

<sub>导入前的准备结束</sub>

---

### 资源包导入

将 `Lemon Tea.unitypackage` 拖入 Unity 的 `Project` 窗口中，点击提示窗中的 `Import`，将资源包导入到 Avatar 项目中：

![Import](./Assets/Import.webp)

<sub>资源包导入结束</sub>

---

### 导入柠檬茶

#### 1. 导入Prefab

这个组件包含：

- **普通版本：**
  即通过菜单开关的版本
- **可以利用握拳挤压盒子的版本：**
  除了通过菜单开关外，握拳能够挤压饮料盒

以及各自的左手版本，总共4个版本。

各个版本的预制件名称为：

- 普通版本：`Lemon_Tea_MA.prefab`
- 握拳挤压盒子的版本 `Lemon_Tea_Squeeze_MA.prefab`
- 普通版本（左手）：`Lemon_Tea_Left_Handed_MA.prefab`
- 握拳挤压盒子的版本（左手）：`Lemon_Tea_Left_Handed_Squeeze_MA.prefab`

本教程将以握拳挤压盒子的版本为例。

将 `Assets/LuiStudio/Lemon Tea` 中的 `Lemon_Tea_Squeeze_MA.prefab`（或其他版本的预制件） 拖入 Avatar 中，拖入后 Prefab 与 Avatar 的关系如下：

![Prefab](./Assets/Prefab.webp)

#### 2. 调整位置

##### 1. 更换 Avatar 的 Animator Controller

> :warning: **注意**
>
> 这个步骤的作用是在后续的步骤中进入动画预览时，我们能够同时调整柠檬茶的位置和握持柠檬茶的手势。
>
> 这个步骤是**暂时**的，虽然 VRChat 在上传 Avatar 后会弃用 Animator 组件中的 Controller，但尽量在完成调整位置步骤后将 Animator 中的 Controller 还原。

不同版本所需要的 Animator Controller 名称如下：

- 普通版本：`LemonTeaAnimatorGesture`
- 握拳挤压盒子的版本 `LemonTeaSqueezeAnimatorGesture`
- 普通版本（左手）：`LemonTeaLeftHandedAnimatorGesture`
- 握拳挤压盒子的版本（左手）：`LemonTeaLeftHandedSqueezeAnimatorGesture`

在 Project 中，转到 `Assets/LuiStudio/Lemon Tea/Animations/Controllers`，将 `LemonTeaSqueezeAnimatorGesture`<sup>[1]</sup>（或其他版本的 Animator Controller） 拖入到 Avatar<sup>[2]</sup>（以 Sample_Avatar 为例） 的 Animator 的 Controller 中<sup>[3]</sup>，完成后如下图：

![Gesture_Controller_Drag](./Assets/Gesture_Controller_Drag.webp)

##### 2. 启用动画预览

在 Hierarchy 中选中 Avatar<sup>[1]</sup>（以 Sample_Avatar 为例），然后在 Animation 窗口中点击预览<sup>[2]</sup>，点击预览后场景如下<sup>[3]</sup>：

>:warning: **注意**
>
>如果找不到 Animation 窗口，请右键 Project 窗口标签 -> Add Tab -> Animation

![Animation_Preview](./Assets/Animation_Preview.webp)

##### 3. 调整柠檬茶的位置

在 Hierarchy 中，选中 Prefab 中的 `Model/Lemon_Tea`<sup>[1]</sup>，使用 Unity 的 `移动、旋转、缩放` 工具<sup>[2]</sup>，对柠檬茶在手上的位置进行调整：

![Adjust_Position](./Assets/Adjust_Position.webp)

调整到自己满意的位置，如下图：

![Adjust_Position_Finished](./Assets/Adjust_Position_Finished.webp)

##### 4. 调整握持柠檬茶的手势

在上一步骤的结果图片中可以看到，手指穿过了柠檬茶，看起来特别的廉价，为了让 Avatar 看起来能够好好握住柠檬茶，我们还需要对手势进行调整。
在 Animation 窗口中，选择第一帧<sup>[1]</sup>，调整每个手指<sup>[2]</sup>的角度，让手看起来好好握住了柠檬茶：

![Adjust_Gesture](./Assets/Adjust_Gesture.webp)

调整到自己满意的手势，如下图：

![Adjust_Gesture_Finished](./Assets/Adjust_Gesture_Finished.webp)

>:warning: **注意**
>
>如果对结果不太满意，可以重复 [第三步](#3-调整柠檬茶的位置) 和 [第四步](#4-调整握持柠檬茶的手势)，找到最合适的位置和手势。

##### 5. 调整挤压情况下的手势

>:warning: **注意**
>
>如果您选择了普通版本，请跳过该步骤，跟随 [关闭预览状态并恢复 Animator Controller](#6-关闭预览状态并恢复-animator-controller) 继续。

在 Hierarchy 中，选中 Prefab 中的 `Model/Lemon Tea/Lemon_Tea`<sup>[1]</sup>，将其 `Skinned Mesh Renderer -> BlendShapes -> Squeeze` 修改至 `100`<sup>[2]</sup>：

![Shape_Key_100](./Assets/Shape_Key_100.webp)

修改后，场景中的柠檬茶盒子将变成被略微挤压的样子：

![Squeezed_Lemon_Tea](./Assets/Squeezed_Lemon_Tea.webp)

将手势动画的第一帧复制到最后一帧，具体操作如下：
在 Hierarchy 中，选中 Avatar<sup>[1]</sup>，然后在 Animation 中选择动画的第一帧<sup>[2]</sup>，按下 `Ctrl + C` 复制关键帧，然后将时间轴修改到 `60`<sup>[3]</sup>并按下回车，点击动画的最后一帧<sup>[4]</sup>后按下 `Ctrl + V` 粘贴关键帧，调整每个手指<sup>[5]</sup>的角度，让手看起来捏住了柠檬茶：

![Adjust_Gesture_Squeeze](./Assets/Adjust_Gesture_Squeeze.webp)

调整到自己满意的手势，如下图：

![Adjust_Gesture_Squeeze_Finished](./Assets/Adjust_Gesture_Squeeze_Finished.webp)

在 Hierarchy 中，选中 Prefab 中的 `Model/Lemon Tea/Lemon_Tea`<sup>[1]</sup>，将其 `Skinned Mesh Renderer -> BlendShapes -> Squeeze` 改回 `0`<sup>[2]</sup>：

![Shape_Key_0](./Assets/Shape_Key_0.webp)

##### 6. 关闭预览状态并恢复 Animator Controller

选择 Avatar<sup>[1]</sup>，在 Animation 窗口中取消预览<sup>[2]</sup>：

![Animation_Cancel_Preview](./Assets/Animation_Cancel_Preview.webp)

（可选）选择 Avatar<sup>[1]</sup>，将 Animator Controller 恢复到先前的状态<sup>[2]</sup>：

![Gesture_Controller_Reset](./Assets/Gesture_Controller_Reset.webp)

##### 7.（可选）隐藏柠檬茶

如果不需要在 VRChat 中预览模型时显示柠檬茶，请跟随以下步骤：

在 Hierarchy 中，选中 Prefab 中的 `Model/Lemon Tea`<sup>[1]</sup>，在 Inspector 中将其关闭<sup>[2]</sup>：

![Hide_Lemon_Tea](./Assets/Hide_Lemon_Tea.webp)

##### 8. 调整嘴部接收器的位置

这个组件使用 `Contact Sender` 和 `Contact Receiver` 对吸管追踪嘴巴进行模拟（不会占用DPS、SPS等的开关），这一步是为了将 `Contact Receiver` 移动到嘴部。

在 Hierarchy 中，选中 Prefab 中的 `Receiver/Mouth`<sup>[1]</sup>，使用 Unity 的 `移动、旋转` 工具<sup>[2]</sup>，调整其位置：

![Adjust_Mouth_Position](./Assets/Adjust_Mouth_Position.webp)

将其移动到嘴部，如下图：

![Adjust_Mouth_Position_Result](./Assets/Adjust_Mouth_Position_Result.webp)

#### 导入完成

柠檬茶导入完成，接下来请查看 [使用方法](#使用方法)

<sub>导入结束</sub>

---

## 使用方法

你已经完成了导入，接下来将讲解柠檬茶在 VRChat 中的使用方法。

### 基本使用方法

- 开启圆盘菜单，找到 Lemon Tea 开关以显示/隐藏柠檬茶
- 将柠檬茶靠近脸，吸管会自动对准嘴部

### 如果使用了握拳挤压盒子的版本

- 握拳即可挤压柠檬茶盒子

<sub>使用方法结束</sub>

---

## 杂项

### 修改开关在菜单中的位置

柠檬茶的开关默认在菜单的起始层，这对拥有许多功能的 Avatar 来说很不友好，使用 Modular Avatar 可以修改开关的位置

- 选中 Prefab 中的 `Menu/Lemon Tea`
- 在 Inspector 中，点击 `MA Menu Installer` 组件中的 `Select Menu` 按钮
- 选择想要将开关放入的子菜单

<sub>杂项结束</sub>