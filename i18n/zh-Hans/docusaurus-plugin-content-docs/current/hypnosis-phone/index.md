---
sidebar_label: 催眠手机
---

# 催眠手机 v1.0 使用说明 {ignore}

## 目录 {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [导入教程](#导入教程)
  - [导入前的准备](#导入前的准备)
  - [资源包导入](#资源包导入)
  - [导入催眠手机](#导入催眠手机)
    - [1. 导入 Prefab](#1-导入-prefab)
    - [2. 调整手机位置和握持手势](#2-调整手机位置和握持手势)
      - [1. （可选）复制手势动画和控制器](#1-可选复制手势动画和控制器)
      - [2. 更换 Avatar 的 Animator 动画控制器](#2-更换-avatar-的-animator-动画控制器)
      - [3. 调整手机位置和握持手势](#3-调整手机位置和握持手势)
        - [1. 预览动画](#1-预览动画)
        - [2. 调整手机位置和握持手势](#2-调整手机位置和握持手势-1)
        - [3. 结束动画预览](#3-结束动画预览)
      - [4. （可选）恢复 Avatar 的 Animator 动画控制器](#4-可选恢复-avatar-的-animator-动画控制器)
    - [导入完成](#导入完成)
- [使用方法](#使用方法)
- [杂项](#杂项)
  - [修改开关在圆盘菜单中的位置](#修改开关在圆盘菜单中的位置)
  - [只允许自己与手机交互](#只允许自己与手机交互)
  - [在 VRChat 的模型预览中隐藏手机](#在-vrchat-的模型预览中隐藏手机)

<!-- /code_chunk_output -->

## 导入教程

### 导入前的准备

该扩展依赖以下 Unity插件 / Shader，请在导入前确保已经安装：

- Modular Avatar (1.9.13或以上): https://modular-avatar.nadena.dev/
- lilToon (1.7.3或以上): https://lilxyzw.github.io/lilToon/#/
- Gesture Manager (3.9或以上): https://github.com/BlackStartx/VRC-Gesture-Manager

<sub>导入前的准备结束</sub>

---

### 资源包导入

将 `Hypnosis Phone.unitypackage` 拖入 Unity 的 `Project` 窗口中，点击提示窗中的 `Import`，将资源包导入到 Avatar 项目中：

![Import](./Assets/Import.webp)

<sub>资源包导入结束</sub>

---

### 导入催眠手机

#### 1. 导入 Prefab

在 Project 窗口中，转到 `Assets/LuiStudio/Hypnosis Phone`，根据需要握持手机的手选择以下两个中的其中一个 Prefab 进行之后的操作：

- 左手握持：`Hypnosis Phone (Left Handed).prefab`
- 右手握持：`Hypnosis Phone (Right Handed).prefab`

将选择的 Prefab（以右手为例） 拖入 Avatar 中，拖入后 Prefab 与 Avatar 的关系如下:

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. 调整手机位置和握持手势

在完成上一步后，我们可以看到场景中的手机固定到了相应的手上，如图：

![Phone_Startup_Position](./Assets/Phone_Startup_Position.webp)

##### 1. （可选）复制手势动画和控制器

如果您想在一个项目中的多个 Avatar 上使用这个组件，请为每一个 Avatar 复制一份手势动画和手势控制器防止冲突。
在 Project 窗口中转到 `Assets/LuiStudio/Hypnosis Phone/Animations`，根据握持手机的手选择以下其中一个文件夹进行之后的操作：

- 左手握持：`Gesture Left`
- 右手握持：`Gesture Right`

复制您选择的文件夹，并粘贴到 Assets 内您想要的位置，并重命名为您想要的名称。
完成操作后，进入复制出来的文件夹，**双击**其中的动画控制器（`HypnosisPhoneGesture*Controlller`）<sup>[1]</sup>，在弹出的 Animator 窗口中，点击 `On`<sup>[2]</sup> 状态，将 Project 窗口中的 `On`<sup>[3]</sup> 动画拖入并替换 Inspector 窗口中的 Motion<sup>[4]</sup>：

> :warning: **注意**
>
>如果点击 Animator 窗口中的 `On` 状态后，Inspector 不显示内容，请点击 Animator 窗口的任意空白处取消选中后重新点击 `On` 状态。

![Replace_Gesture_On_Animation](./Assets/Replace_Gesture_On_Animation.webp)

在 Hierarchy 中选中催眠手机 Prefab<sup>[1]</sup>，在 Inspector 中找到**第一个** `MA Merge Animator` 组件<sup>[2]</sup>，将 Project 窗口中的动画控制器（`HypnosisPhoneGesture*Controlller`）<sup>[3]</sup> 拖入这个组件的 `Animator to merge` 中替换原有的手势动画控制器<sup>[4]</sup>：

![Replace_Gesture_Controller](./Assets/Replace_Gesture_Controller.webp)

##### 2. 更换 Avatar 的 Animator 动画控制器

> :warning: **注意**
>
> 这个步骤的作用是在后续的步骤中进入动画预览时，我们能够同时调整柠檬茶的位置和握持柠檬茶的手势。
>
> 这个步骤是**暂时**的，虽然 VRChat 在上传 Avatar 后会弃用 `Animator` 组件中的 Controller，但尽量在完成调整位置步骤后将 Animator 中的 Controller 还原。

在 Hierarchy 中选中催眠手机 Prefab<sup>[1]</sup>，在 Inspector 中找到**第一个** `MA Merge Animator` 组件<sup>[2]</sup>，单击其中的 `Animator to merge` 一栏的动画控制器<sup>[3]</sup>，使 Project 窗口定位动画控制器：

![Locate_Gesture_Controller](./Assets/Locate_Gesture_Controller.webp)

在 Hierarchy 中选中您的 Avatar<sup>[1]</sup>，在 Inspector 中找到 `Animator` 组件<sup>[2]</sup>，在 Project 窗口中将上一步定位到的动画控制器<sup>[3]</sup>拖入 `Animator` 组件的 `Controller` 一栏中<sup>[4]</sup>：

![Replace_Avatar_Animator_Controller](./Assets/Replace_Avatar_Animator_Controller.webp)

##### 3. 调整手机位置和握持手势

###### 1. 预览动画

在 Hierarchy 中选中 `催眠手机 Prefab/Phone`<sup>[1]</sup>，然后在 Animation 窗口中将动画更换为 `On`<sup>[2]</sup>，点击 `Preview`<sup>[3]</sup> 进入动画预览模式（不要点击录制按钮），点击预览后场景如下<sup>[4]</sup>：

>:warning: **注意**
>
>如果找不到 Animation 窗口，请右键 Project 窗口标签后点击 `Add Tab -> Animation`。

![Preview_Gesture_Animation](./Assets/Preview_Gesture_Animation.webp)

###### 2. 调整手机位置和握持手势

在场景中，使用 `移动工具`、`旋转工具` 和 `缩放工具`<sup>[1]</sup> 对手机的位置进行调整；
在 Animation 窗口中，保持动画的时间轴光标处于第一帧<sup>[2]</sup>，在左侧的面板中调整每个手指<sup>[3]</sup>：

![Adjust_Phone_Pos_And_Gesture](./Assets/Adjust_Phone_Pos_And_Gesture.webp)

> :warning: **注意**
>
>在 Animation 窗口中，将鼠标指针移动到某一个属性的数值左侧，光标变为如下图所示时，可以通过上下或左右拖动更方便地调整手指：

![Adjuust_Gesture_Value_Hint](./Assets/Adjuust_Gesture_Value_Hint.webp)

手机位置和手势的参考：

![Phone_Pos_And_Gesture_Example](./Assets/Phone_Pos_And_Gesture_Example.webp)

###### 3. 结束动画预览

在 Animation 窗口中，点击 `Preview` 离开动画预览模式。

##### 4. （可选）恢复 Avatar 的 Animator 动画控制器

在 Hierarchy 中选中您的 Avatar，将原本的动画控制器拖动到 `Animator` 组件的 `Controller` 栏中。

#### 导入完成

催眠手机导入完成，接下来请查看 [使用方法](#使用方法)

<sub>导入教程结束</sub>

---

## 使用方法

你已经完成了导入，接下来将讲解催眠手机在 VRChat 中的使用方法。

- 开启圆盘菜单，找到 `Hypnosis Phone` 开关，该开关用于显示/隐藏手机。
- 使用另一只手的手指点击手机屏幕中间的 `Start` 按钮，启动催眠动画。
- 再次用另一只手的手点击摸手机屏幕中间，关闭催眠动画。

<sub>使用方法结束</sub>

---

## 杂项

### 修改开关在圆盘菜单中的位置

催眠手机的开关默认在菜单的起始层，这对拥有许多功能的 Avatar 来说很不友好，使用 Modular Avatar 可以修改开关的位置

- 在 Hierarchy 中选中 `催眠手机 Prefab/Menu/Hypnosis Phone`
- 在 Inspector 中，点击 `MA Menu Installer` 组件中的 `Select Menu` 按钮
- 选择想要将催眠手机开关放入的菜单

### 只允许自己与手机交互

在 Hierarchy 中选中 `催眠手机 Prefab/Phone/Button Contacts`，在 Inspector 中找到两个 `VRC Contact Receiver` 组件，取消勾选两个组件中的 `Filtering -> Allow Others`。

### 在 VRChat 的模型预览中隐藏手机

在 Hierarchy 中选中 `催眠手机 Prefab/Phone`，取消勾选 Inspector 最上方的勾选框。

<sub>杂项结束</sub>