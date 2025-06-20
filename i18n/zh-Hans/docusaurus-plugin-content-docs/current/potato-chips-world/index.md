---
sidebar_label: 袋装薯片(World 版本)
---

# 袋装薯片(World 版本) v1.0 使用说明 {ignore}

## 目录 {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [导入教程](#导入教程)
  - [导入前的准备](#导入前的准备)
  - [将袋装薯片添加到场景中](#将袋装薯片添加到场景中)
- [功能说明](#功能说明)
  - [移动](#移动)
  - [开袋](#开袋)
  - [食用](#食用)
  - [倾倒](#倾倒)
- [配置说明](#配置说明)
  - [1. Potato Chips](#1-potato-chips)
    - [1. Potato Chips Udon 脚本](#1-potato-chips-udon-脚本)
      - [Is Unpacked](#is-unpacked)
      - [Easy Unpack Mode](#easy-unpack-mode)
      - [Easy Unpack Mode Use Text](#easy-unpack-mode-use-text)
      - [Enable Pouring](#enable-pouring)
      - [Pour Angle](#pour-angle)
      - [Potato Chips Bag](#potato-chips-bag)
      - [Use Gravity](#use-gravity)
      - [Is Kinematic](#is-kinematic)
  - [2. Potato Chips Bag](#2-potato-chips-bag)
    - [1. Potato Chips Bag Udon 脚本](#1-potato-chips-bag-udon-脚本)
      - [Potato Chips](#potato-chips)
      - [Unpack Controller](#unpack-controller)
  - [4. Unpack](#4-unpack)
    - [1. Unpack Controller Udon 脚本](#1-unpack-controller-udon-脚本)
      - [Unpack Transform VR](#unpack-transform-vr)
      - [Unpack Transform PC](#unpack-transform-pc)
      - [Potato Chips Bag](#potato-chips-bag-1)
  - [5. VR 及其子对象](#5-vr-及其子对象)
    - [Unpack_Grab_1 和 Unpack_Grab_2](#unpack_grab_1-和-unpack_grab_2)
      - [1. Unpack Grab Udon 脚本](#1-unpack-grab-udon-脚本)
        - [Unpack Controller](#unpack-controller-1)
        - [Drag Distance](#drag-distance)
  - [6. PC 及其子对象](#6-pc-及其子对象)
    - [1. Unpack PCUI Display Udon 脚本](#1-unpack-pcui-display-udon-脚本)
      - [Ui Canvas](#ui-canvas)
      - [Show Distance](#show-distance)
  - [10. Chips](#10-chips)
    - [Chip_1 等](#chip_1-等)
      - [1. Chip Udon 脚本](#1-chip-udon-脚本)
        - [Mesh Transform](#mesh-transform)
        - [Audio Source](#audio-source)
        - [Reset Duration](#reset-duration)

<!-- /code_chunk_output -->

## 导入教程

### 导入前的准备

该扩展依赖以下 Shader，请在导入前确保已经安装：

- lilToon (1.8.3或以上): https://lilxyzw.github.io/lilToon/#/

该扩展仅在 Unity 2022.3.22f1 和 VRChat SDK 3.8.0 中完成测试

---

### 将袋装薯片添加到场景中

将 `Potato Chips (World).unitypackage` 拖入 Unity 的 `Project` 窗口中，点击提示窗中的 `Import`，将资源包导入到 World 项目中：

![Import](./Assets/Import.webp)

导入后，将 `Assets/LuiStudio/Potato Chips (World)/Potato Chips.prefab` 从 Project 窗口拖拽到场景中。

<sub>导入教程结束</sub>

---

## 功能说明

该 Udon 商品实现了袋装薯片在 VRChat World 中的 移动 / 开袋 / 食用 和 倾倒：

### 移动

- 通过 `VRC Pickup` 组件，玩家能够将袋装薯片捡起/放下/投掷
- 通过 `VRC Object Sync` 组件，使袋装薯片在实例下同步

### 开袋

袋装薯片实现了 PC、VR 和通过 `VRC Pickup` 组件的 `使用` 功能实现的三种开袋方式。

其中使用 `VRC Pickup` 组件的开袋方式我们称之为 `简易开袋模式`。

- `PC开袋方式` - 在 PC 玩家视角中，袋装薯片上方会有一个箭头朝上的 `滑动条` UI：

  ![PC_Unpack](./Assets/PC_Unpack.webp)
  
  拖动朝上的箭头至滑动条的顶部即可开袋。
- `VR开袋方式` - 在 VR 玩家视角中，袋装薯片上方会有两个朝外的箭头：
  
  ![VR_Unpack](./Assets/VR_Unpack.webp)
  
  通过双手各抓握一个箭头，并朝外拉扯进行开袋，拉扯的激活距离可在 [Drag Distance](#drag-distance) 进行配置。
- `简易开袋模式` - 如果通过 [简易开袋模式](#easy-unpack-mode) 启用了简易开袋模式，则上述的两种 UI 都会被隐藏，取而代之的是在玩家手持薯片袋子时，通过 PC 的鼠标左键或者 VR 手柄的扳机触发 `VRC Pickup` 组件的 `使用` 功能进行开袋。

> 当玩家开启薯片袋子后，薯片袋子的碰撞盒会缩小为原来的 1/4 左右，避开袋子里薯片的 `VRC Pickup` 组件所在游戏对象的碰撞盒，这时将薯片袋子倒置并启用了[受重力影响](#use-gravity)后，薯片袋子会沉入地底，这是正常现象。

### 食用

袋装薯片中包含 12 片分别由 `Chip` 脚本驱动的薯片。
默认情况下这些薯片的网格处于隐藏状态，当袋装薯片处于开袋模式时，玩家可以从薯片袋子中取出薯片，在取出时薯片的网格才显示。
在玩家释放鼠标左键或者VR手柄的扳机后，薯片所处位置会播放一个咀嚼音效，同时薯片的网格隐藏，并在 3 秒内无法拾取，3 秒后薯片的位置重置，并恢复可拾取状态。
如果需要调整薯片恢复的时长，可以修改 [Reset Duration](#reset-duration)。

### 倾倒

袋装薯片根据 [启用倾倒模式](#enable-pouring) 选项以及袋子是否倒转来判断是否倾倒薯片。
当玩家持有薯片袋子，并且袋子口倒转到与地面方向的夹角小于 [倾倒所需角度](#pour-angle) 时，薯片会从袋子中倒出。

<sub>功能说明结束</sub>

---

## 配置说明

本节将对袋装薯片的 Udon 脚本配置进行说明。

袋装薯片的层级如下，我们将根据其层级对配置项逐个进行说明：

![Hierarchy](./Assets/Hierarchy.webp)

|id|快速跳转|简介|
|-|-|-|
|1|[Potato Chips](#1-potato-chips)|整个袋装薯片的父对象|
|2|[Potato Chips Bag](#2-potato-chips-bag)|薯片袋子父对象|
|3|Armature_Chips_Bag...|薯片袋子的模型|
|4|[Unpack](#4-unpack)|开袋逻辑父对象|
|5|[VR 及其子对象](#5-vr-及其子对象)|VR开袋模式的逻辑父对象|
|6|[PC 及其子对象](#6-pc-及其子对象)|PC开袋模式的逻辑父对象|
|7|Particles|倾倒薯片的粒子效果父对象|
|8|Audio|开袋音效的音频组件所在对象|
|9|Chips_Parent|Chips对象中Parent Constraint组件的源对象|
|10|[Chips](#10-chips)|薯片父对象|

---

### 1. Potato Chips

该游戏对象为整个袋装薯片的父对象，包含用于进行主要配置的 `Potato Chips` Udon 脚本组件以及驱动袋装薯片动画的 `Animator` 组件。

#### 1. Potato Chips Udon 脚本

`Potato Chips` Udon 脚本组件的 Inspector UI 如下：

![Potato_Chips_Script](./Assets/Potato_Chips_Script.webp)

##### Is Unpacked

用于标志薯片袋子的开袋状态，当其为 `true` 时，薯片袋子开启。

||值|说明|
|-|-|-|
|类型|`bool`||
|访问修饰符|`private`||
|同步类型|`同步`||
|公共获取函数|是|`GetIsUnpacked: bool`|
|公共修改函数|是|`Unpack: void`, `Pack: void`|
|修改回调|否||

> 修改回调可能会在今后版本添加

##### Easy Unpack Mode

用于启用/禁用 [简易开袋模式](#开袋)，当其启用时，玩家将使用 `VRC Pickup` 组件的 `使用` 功能进行开袋。

||值|说明|
|-|-|-|
|类型|`bool`||
|访问修饰符|`private`||
|同步类型|`本地`||
|公共获取函数|是|`GetIsEasyUnpackMode: bool`|
|公共修改函数|是|`EnableEasyUnpackMode: void`, `DisableEasyUnpackMode: void`|
|修改回调|否||

> 修改回调可能会在今后版本添加

##### Easy Unpack Mode Use Text

用于在启用[简易开袋模式](#开袋)后，在玩家捡起后显示的 `使用` 文本。

||值|说明|
|-|-|-|
|类型|`string`||
|访问修饰符|`private`||
|同步类型|`本地`||
|公共获取函数|是|`GetEasyUnpackModeUseText: string`|
|公共修改函数|是|`EnableEasyUnpackMode: void`, `DisableEasyUnpackMode: void`|
|修改回调|否||

> 修改回调可能会在今后版本添加

##### Enable Pouring

决定是否开启[薯片的倾倒](#倾倒)，当为 `true` 时，薯片袋子的袋口与地面方向的夹角小于 [倾倒所需角度](#pour-angle) 所设定值，并且当前薯片袋子被玩家持有时，薯片会从袋子中倒出。

||值|说明|
|-|-|-|
|类型|`bool`||
|访问修饰符|`private`||
|同步类型|`同步`||
|公共获取函数|否||
|公共修改函数|是|`EnablePouring: bool`, `DisablePouring: bool`|
|修改回调|否||

> 修改回调可能会在今后版本添加

##### Pour Angle

用于判断是否倒出薯片，当薯片袋口与地面方向的夹角小于所设定值，并且 [启用倾倒功能](#enable-pouring) 为 `true` 以及当前薯片袋子被玩家持有时，薯片会从袋子中倒出。

||值|说明|
|-|-|-|
|类型|`float`||
|访问修饰符|`public`||
|同步类型|`本地`||
|公共获取函数|否||
|公共修改函数|否||
|修改回调|否||

> 修改回调可能会在今后版本添加

##### Potato Chips Bag

> :warning: **注意**
>
> 除非您知道您在做什么，否则请不要修改该项

[Potato Chips Bag Udon 脚本](#2-potato-chips-bag) 组件的引用，用于在玩家持有薯片袋子同时启用了[薯片倾倒模式](#enable-pouring)时判断袋口与地面方向的夹角，以及在修改 [简易开袋模式](#easy-unpack-mode) 后更新相应对象的显示/隐藏状态。

##### Use Gravity

用于配置薯片袋子是否被重力影响，该值会直接覆写[薯片袋子](#2-potato-chips-bag)的 `Rigidbody` 组件上的同一变量。

||值|说明|
|-|-|-|
|类型|`bool`||
|访问修饰符|`private`||
|同步类型|`本地`||
|公共获取函数|是|`GetChipsBagPhysicSettings: bool[]`|
|公共修改函数|否||
|修改回调|否||

> 由于该成员变量作为初始化时使用，暂无添加修改函数和回调的想法，如果您有需求，请联系 LuiStudio

##### Is Kinematic

用于配置薯片袋子是否受物理影响，该值会直接覆写[薯片袋子](#2-potato-chips-bag)的 `Rigidbody` 组件上的同一变量。

||值|说明|
|-|-|-|
|类型|`bool`||
|访问修饰符|`private`||
|同步类型|`本地`||
|公共获取函数|是|`GetChipsBagPhysicSettings: bool[]`|
|公共修改函数|否||
|修改回调|否||

> 由于该成员变量作为初始化时使用，暂无添加修改函数和回调的想法，如果您有需求，请联系 LuiStudio

---

### 2. Potato Chips Bag

该游戏对象是薯片袋子、开袋逻辑、倾倒薯片粒子效果、开袋音频和薯片父约束对象的父对象，包含 `Potato Chips Bag` Udon 脚本组件，与 [Potato Chips Udon 脚本](#1-potato-chips-udon-脚本) 组件和 [Unpack Controller Udon 脚本](#1-unpack-controller-udon-脚本) 组件互相通信。

该游戏对象还包含 `VRC Pickup`、`VRC Object Sync`、`Rigidbody` 和 `Box Collider` 组件。

#### 1. Potato Chips Bag Udon 脚本

该 Udon 脚本组件的 Inspector UI 如下：

![Potato_Chips_Bag_Script](./Assets/Potato_Chips_Bag_Script.webp)

##### Potato Chips

[Potato Chips Udon 脚本](#1-potato-chips-udon-脚本) 组件的引用。
当初始化或者 [Potato Chips Udon 脚本](#1-potato-chips-udon-脚本) 组件修改了 [简易开袋模式](#easy-unpack-mode) 时，该组件会更新相应对象的显示/隐藏状态。

> :warning: **注意**
>
> 除非您知道您在做什么，否则请不要修改该项

##### Unpack Controller

[Unpack Controller Udon 脚本](#1-unpack-controller-udon-脚本) 组件的引用。
当 [Unpack Controller Udon 脚本](#1-unpack-controller-udon-脚本) 组件在开袋请求时调用该脚本组件的对应函数后，该组件会将调用冒泡到 [Potato Chips Udon 脚本](#1-potato-chips) 进行判断。

> :warning: **注意**
>
> 除非您知道您在做什么，否则请不要修改该项

---

### 4. Unpack

该游戏对象是 [PC、VR 开袋模式](#开袋) 逻辑的父对象，包含 [Unpack Controller Udon 脚本](#1-unpack-controller-udon-脚本) 组件，当满足开袋条件时，会调用 [Potato Chips Bag Udon 脚本](#1-potato-chips-bag-udon-脚本) 组件的开袋函数请求开袋。
当 [简易开袋模式](#easy-unpack-mode) 为 `true` 时，隐藏其相应子对象。

#### 1. Unpack Controller Udon 脚本

Unpack Controller Udon 脚本的 Inspector UI 如下：

![Unpack_Controller_Script](./Assets/Unpack_Controller_Script.webp)

##### Unpack Transform VR

[VR 开袋模式](#开袋)的 Transform 引用，当 [简易开袋模式](#easy-unpack-mode) 为 `true` 时，禁用该 Transform 的游戏对象。

> :warning: **注意**
>
> 除非您知道您在做什么，否则请不要修改该项

##### Unpack Transform PC

[PC 开袋模式](#开袋)的 Transform 引用，当 [简易开袋模式](#easy-unpack-mode) 为 `true` 时，禁用该 Transform 的游戏对象。

> :warning: **注意**
>
> 除非您知道您在做什么，否则请不要修改该项

##### Potato Chips Bag

[Potato Chips Bag Udon 脚本](#1-potato-chips-bag-udon-脚本) 组件的引用，在 [PC、VR开袋模式](#开袋)条件满足时，调用其 `Unpack` 公共函数请求开袋。

> :warning: **注意**
>
> 除非您知道您在做什么，否则请不要修改该项

---

### 5. VR 及其子对象

该游戏对象在开袋模式为 [VR 模式](#开袋) 时启用，该对象上没有组件。

#### Unpack_Grab_1 和 Unpack_Grab_2

该游戏对象包含 [Unpack Grab Udon 脚本](#1-unpack-grab-udon-脚本) 组件，用于判断 [VR 开袋模式](#开袋) 下开袋条件是否满足，并请求开袋。

该游戏对象还包含 `VRC Pickup`、`Rigidbody`、`Sphere Collider` 组件。

该对象的子对象是一个用于提示拖拽方向的指示模型，使用 `lilToon` 着色器中的 `Distance Fade` 功能使其在远距离隐藏，在近距离显示。

##### 1. Unpack Grab Udon 脚本

该脚本用于当前脚本所在游戏对象通过 `VRC Pickup` 组件被玩家抓住并移动的距离来判断该抓握点是否满足开袋条件，如果满足，则调用 [Unpack Controller Udon 脚本](#1-unpack-controller-udon-脚本) 组件的相应函数，从而请求开袋。

该脚本的 Inspector UI 如下：

![Unpack_Grab_Script](./Assets/Unpack_Grab_Script.webp)

###### Unpack Controller

[Unpack Controller Udon 脚本](#1-unpack-controller-udon-脚本) 组件的引用，当开袋条件满足时调用 [Unpack Controller Udon 脚本](#1-unpack-controller-udon-脚本) 组件的相应函数，从而请求开袋。

> :warning: **注意**
>
> 除非您知道您在做什么，否则请不要修改该项

###### Drag Distance

用于判断该抓握点被玩家抓住并移动满足条件所需要的移动距离（米）。

||值|说明|
|-|-|-|
|类型|`float`||
|访问修饰符|`private`||
|同步类型|`本地`||

---

### 6. PC 及其子对象

该游戏对象在开袋模式为 [PC 模式](#开袋) 时启用。
其子对象为一个带有箭头朝上的滑动条，当滑动条滑动到最上方时，调用 [Unpack Controller Udon 脚本](#1-unpack-controller-udon-脚本) 组件的相应函数，从而请求开袋。

由于 UI 中无法做到 [VR 开袋模式子对象](#5-vr-及其子对象) 的距离渐变，所以该游戏对象包含一个用于在远距离时隐藏，并且在显示时始终面向本地玩家的 [Unpack PCUI Display Udon 脚本](#1-unpack-pcui-display-udon-脚本) 组件。

#### 1. Unpack PCUI Display Udon 脚本

该 Udon 脚本用于在一定距离内显示指定的 UI 画布，并且在显示 UI 画布时始终面朝本地玩家头部。

该脚本的 Inspector UI 如下：

![Unpack_PCUI_Display_Script](./Assets/Unpack_PCUI_Display_Script.webp)

##### Ui Canvas

用于显示/隐藏的 UI 画布的 Transform 的引用。

> :warning: **注意**
>
> 除非您知道您在做什么，否则请不要修改该项

##### Show Distance

显示 UI 画布的距离范围，在该距离之外隐藏 UI 画布。

||值|说明|
|-|-|-|
|类型|`float`||
|访问修饰符|`private`||
|同步类型|`本地`||

---

### 10. Chips

该游戏对象为各个能够抓取的薯片的父对象，包含一个 `Parent Constraint` 组件，使其跟随 [Potato Chips Bag](#2-potato-chips-bag) 对象。

#### Chip_1 等

该游戏对象为单个薯片的父对象，在薯片开袋后启用。
其子对象为单个薯片的模型对象(Mesh)以及用于发出咀嚼音效的音频对象(Audio)。

该对象包括一个 [Chip Udon 脚本](#1-chip-udon-脚本) 组件，用于控制该片薯片的启用/禁用以及音效的播放。

该对象还包括 `VRC Pickup` ，`VRC Object Sync` ，`Rigidbody` 组件和 `Sphere Collider` 组件，用于让玩家抓取薯片，并在实例中同步。

##### 1. Chip Udon 脚本

该脚本在[薯片开袋](#is-unpacked)后控制单个薯片在玩家拿取后的显示，在玩家释放后咀嚼音效的播放和薯片的隐藏，以及玩家释放后在[指定时间](#reset-duration)后的重置（使玩家能重新在薯片袋子中获取新薯片）。

该脚本的 Inspector UI 如下：

![Chip_Script](./Assets/Chip_Script.webp)

###### Mesh Transform

薯片的网格所在 Transform 的引用，用于显示/隐藏薯片。

> :warning: **注意**
>
> 除非您知道您在做什么，否则请不要修改该项

###### Audio Source

播放咀嚼声的 `Audio Source` 组件。

> :warning: **注意**
>
> 除非您知道您在做什么，否则请不要修改该项

###### Reset Duration

在玩家释放该薯片后，该薯片重置到薯片袋中的时长。

||值|说明|
|-|-|-|
|类型|`float`||
|访问修饰符|`private`||
|同步类型|`本地`||

<sub>配置说明结束</sub>
