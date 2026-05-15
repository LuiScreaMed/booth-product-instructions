---
sidebar_label: v2.0.*
---

# RIP AFK v2.0.* 使用说明 {ignore}

## 扩展简介

该扩展使用 [Non-Destructive Modular Framework](https://github.com/bdunderscore/ndmf) 和 [Modular Avatar](https://github.com/bdunderscore/modular-avatar) **非破坏性**地实现了 Avatar 在 AFK 时变成石碑的功能。

该扩展在 Avatar 编译时实现以下内容：

1. 根据 `RIP AFK Setup Tool` 组件的配置添加参数和开关。
1. 查找 Avatar 中所有包含 PhysBone、Contact Receiver、Renderer、Particle System 或者 Light 的对象。
1. 根据配置的`排除项`和`强制关闭项`生成动画。
1. 根据 `默认 AFK 切换开关功能` 的配置禁用 Action 层和 FX 层中任何包含 AFK 为 `true` 的条件的动画过渡，或者为其添加条件。
1. 清理未使用的菜单项和参数（如添加了切换原版 AFK 开关但未勾选该功能时）。

### 注意事项

- 该扩展会通过动画启用/禁用包含以下组件的游戏对象：
  - PhysBone
  - Contact Receiver
  - Renderer
  - Particle System
  - Light
- 该扩展只在 VRCSDK3，Unity 2022.3.22f1 环境下进行过测试。

### 已知问题

- 使用 Write Defaults Off 的 Avatar 时，可能出现兼容性问题，详情请查看 [关于 Write Defaults Off 的 Avatar 的兼容性问题](#3-关于-write-defaults-off-的-avatar-的兼容性问题)。
- 在空中进入 AFK 状态时，石碑先于 Avatar 落地的情况下，Avatar 视角会缓慢下沉并旋转，直到到达地面。

<sub>扩展简介结束</sub>

---

## 导入教程

### 导入前的准备

该扩展依赖以下 Unity 插件，请在导入前确保已经安装：

- Modular Avatar (1.16.0或以上): https://modular-avatar.nadena.dev/
- lilToon (2.2.1或以上): https://lilxyzw.github.io/lilToon/#/

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

##### 1. 更改石碑的位置和大小（可选）

选中 `RIP AFK`<sup>[1]</sup>，使用 `移动`、`旋转` 和 `缩放` 工具<sup>[2]</sup> 调整石碑的位置和大小：

![Adjust_Position](./Assets/Adjust_Position.webp)

##### 2. 使用自定义参数（可选）

当您需要除了通过 Avatar 的 AFK 状态之外，通过其他方式（比如菜单开关等）播放该动画时，可以启用自`定义参数`功能。

:::note

启用后，构建时将自动添加一个占用 1 bit 的自定义参数名称的 bool 同步参数，您不需要重复添加参数。

:::

勾选 `使用自定义参数`<sup>[1]</sup> 启用该功能。`自定义参数`<sup>[2]</sup> 字段用于复制参数，并在 Animator Controller 等中使用。如果您仅需要使用一个开关播放 RIP AFK 动画，可以点击 `创建自定义参数开关`<sup>[3]</sup> 快速创建一个开关：

![Use_Custom_Parameter](./Assets/Use_Custom_Parameter.webp)

创建了自定义参数开关后，点击 `删除自定义参数开关`<sup>[1]</sup> 可以删除创建的开关：

![Remove_Custom_Parameter_Toggle](./Assets/Remove_Custom_Parameter_Toggle.webp)

创建开关后，选中新建的游戏对象<sup>[1]</sup>，根据需要修改 `MA Menu Installer` 组件中的菜单项位置<sup>[2]</sup>和 `MA Menu Item` 组件中的菜单项名称、菜单项图标<sup>[3]</sup>：

![Custom_Parameter_Toggle](./Assets/Custom_Parameter_Toggle.webp)

:::warning

如果您没有勾选 `使用自定义参数`，在构建过程中多余的 `LuiStudio/AFK/RIP` 参数以及包含该参数的所有菜单项将会被删除。

:::

##### 3. 使用默认 AFK 切换开关（可选）

当您想保留原始 AFK，并且想通过开关在 RIP AFK 与原版 AFK 之间切换时，可以启用 `使用默认 AFK 切换开关` 功能。

:::note

启用后，构建时将自动添加一个占用 1 bit 的自定义参数名称的 bool 同步参数，您不需要重复添加参数。

:::

勾选 `使用默认 AFK 切换开关`<sup>[1]</sup> 启用该功能，点击 `创建默认 AFK 切换开关`<sup>[2]</sup> 创建一个切换开关：

![Use_AFK_Toggle](./Assets/Use_AFK_Toggle.webp)

创建开关后，点击 `删除默认 AFK 切换开关`<sup>[1]</sup> 可以删除创建的开关：

![Remove_AFK_Toggle_Toggle](./Assets/Remove_AFK_Toggle_Toggle.webp)

创建开关后，选中新建的游戏对象<sup>[1]</sup>，根据需要修改 `MA Menu Installer` 组件中的菜单项位置<sup>[2]</sup>和 `MA Menu Item` 组件中的菜单项名称、菜单项图标<sup>[3]</sup>：

![AFK_Toggle_Toggle](./Assets/AFK_Toggle_Toggle.webp)

:::warning

如果您勾选了 `使用默认 AFK 切换开关` 但未创建开关，则在构建时会在圆盘菜单根菜单中添加一个默认的默认 AFK 切换开关。

如果您没有勾选 `使用默认 AFK 切换开关`，在构建过程中多余的 `LuiStudio/AFK/RIP` 参数以及包含该参数的所有菜单项将会被删除。

:::

##### 4. 添加排除项（可选）

该扩展生成的 AFK 动画会禁用模型中的所有符合 [注意事项](#注意事项) 中提到的对象。

如果您需要让某些对象在 AFK 动画播放时不被影响，可以将这些对象添加到 `排除项` 列表<sup>[1]</sup>中：

![Exclusions](./Assets/Exclusions.webp)

:::note

添加到 `排除项` 的对象及其子项都会被排除。

:::

##### 5. 添加强制关闭项（可选）

如果您需要在进入 RIP AFK 动画时关闭除了 [注意事项](#注意事项) 中提到的对象之外的对象，可以将这些对象添加到 `强制关闭项` 列表<sup>[1]</sup>中：

![Force_Off_Objects](./Assets/Force_Off_Objects.webp)

:::note

添加到 `强制关闭项` 的对象会被首先加入到 `排除项` 中，再将其加入到 RIP AFK 的动画中，确保不操作其子对象。该功能主要用于[防止某些使用 Write Defaults Off 的 Avatar 的兼容性问题](#3-关于-write-defaults-off-的-avatar-的兼容性问题)。

如果子对象中存在 `MA Bone Proxy` 组件，其目标在该对象外，并且该子对象不存在默认会禁用的组件的对象，则该功能对该子对象没有效果。当您正好遇见该情况，请将该子对象也一并加入 `强制关闭项` 列表中。

:::

##### 6. 修改石碑（可选）

石碑默认处于隐藏状态，如果需要修改石碑，请在 Hierarchy 中选中 `RIP AFK/Stone`<sup>[1]</sup>，并在 Inspector 中勾选左上角的 `勾选框`<sup>[2]</sup>：

![Enable_Stone](./Assets/Enable_Stone.webp)

###### 为石碑添加内容（可选）

如果您想为 AFK 添加 Audio Source、在石碑上添加您自己的 id 等，将您需要添加的内容放入 `Stone` 对象中，并保持开启即可。

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

选中 `RIP AFK/Stone Indicator (Auto Remove On Build)`<sup>[1]</sup> 对象，在 Inspector 中找到 `Mesh Filter` 组件。

将 `Mesh Filter` 组件的网格<sup>[2]</sup>替换成您想替换的模型的网格：

![Replace_Stone_Indicator_Model](./Assets/Replace_Stone_Indicator_Model.webp)

#### 3. 关于 Write Defaults Off 的 Avatar 的兼容性问题

当您的 Avatar 使用 [`Write Defaults Off`](https://creators.vrchat.com/avatars/#write-defaults-on-states) 时，由于 Write Defaults Off 的特性，旧版本中退出 RIP AFK 动画时，如果您的 Avatar 在他人视线之外，则模型会恢复不完全（隐身）。

为了修复该问题，新版本在 FX 层动画的顶部加入了一个根据 `排除项` 与 `强制关闭项` 生成的默认动画，用于记录 RIP AFK 动画所需要禁用/启用的对象的默认状态。

##### 兼容性问题详情

添加了默认动画虽然修复了离开 RIP AFK 时的隐身问题，但带来了新的问题。当您的 Avatar 满足以下条件时：

1. FX 层 Animator Controller 中存在一个 Layer。
1. 该 Layer 中存在复数 State。
1. 这些 State 存在过渡关系。
1. 其中某个或多个 State 中的 Animation Clip 的 Property 与其他 State 的不一致。
1. 缺少的 Property 正好是 RIP AFK 需要禁用的 GameObject 的 Property。

或者更加通俗的解释：

如果有一个 Layer 里有一个 State 启用/禁用了一个 GameObject，它过渡到的下一个 State 的动画中没有控制该 GameObject。

那么，当处于下一个 State 时，由于这些 State 并没有控制相应 GameObject，相应的 GameObject 的启用状态会被上文提到的默认动画覆写。

##### 我该如何解决这个问题？

为了避免导致更多问题，本扩展不会去修改 RIP AFK 之外的动画（即使是非破坏性地修改），用户需要根据下文自行尝试解决。

新版本的 `RIP AFK Setup Tool` 组件中加入了[强制关闭项](#5-添加强制关闭项可选)，通过使用该功能，在生成动画中只会启用/禁用该列表中的对象本身，并忽略相应对象的所有子对象。

请参考以下不同情况尝试解决兼容性问题。

###### 情况一

如果出现兼容性问题的对象不是 Avatar 的直接子对象，将其父对象加入 `强制关闭项` 中即可。

###### 情况二

如果出现兼容性问题的对象是 Avatar 的直接子对象：

1. 新建一个新的 GameObject。
1. 在出现问题的对象上添加一个 `MA Bone Proxy` 组件。
1. 将新建的 GameObject 指定为这个 `MA Bone Proxy` 组件的目标。
1. 将新建的 GameObject 加入 `强制关闭项`。

###### 其他复杂情况

如果问题实在复杂，建议直接添加排除项，或者随时欢迎联系本店提问。

<sub>导入教程结束</sub>

---

## 测试

在安装完毕后，可以通过进入 Play Mode 对其进行测试。

首先我们需要 `Gesture Manager`，在 `Vrchat Creator Companion` 中可以安装。

确保安装了 `Gesture Manager` 后，点击 Unity 窗口中的 `Tools/Gesture Manager Emulator`：

![Add_Gesture_Manager_Emulator](./Assets/Add_Gesture_Manager_Emulator.webp)

点击后，场景中会新增一个名为 `GestureManager`<sup>[1]</sup> 的游戏对象，选中它，转到 Inspector，点击 `Gesture Manager` 组件中的 `Enter Play-Mode`<sup>[2]</sup> 进入 Play Mode：

![Enter_Play_Mode_With_Gesture_Manager](./Assets/Enter_Play_Mode_With_Gesture_Manager.webp)

在进入 Play Mode 后，Gesture Manager 组件中会出现一个圆盘菜单。

:::warning

当您在任一测试中遇到了退出 RIP AFK 动画后出现某些对象出现问题，请查看 [关于 Write Defaults Off 的 Avatar 的兼容性问题](#3-关于-write-defaults-off-的-avatar-的兼容性问题)。

:::

### 一般情况下的测试

点击 `Options -> States -> AFK` 切换 AFK 状态。

在切换到 AFK 状态后，Avatar 消失，并且出现一个往下坠落的石碑，再次切换 AFK 状态，Avatar 恢复正常显示，则表示该扩展正常运行。

### 启用了自定义参数功能的测试

除了进行 [默认情况的测试](#一般情况下的测试) 的步骤外：

- 如果您在 `RIP AFK Setup Tool` 中创建了开关，则在圆盘菜单中找到 `RIP AFK(或者您自定义后的名称)` 开关并切换开关进行测试。
- 如果您自行实现了动画逻辑，请自行根据您的逻辑进行测试。

### 启用了默认 AFK 切换开关功能的测试

在圆盘菜单中找到 `使用默认 AFK(或者您自定义后的名称)` 开关，切换该开关并结合 [默认情况的测试](#一般情况下的测试) 的步骤和 AFK 状态进行测试。

<sub>测试结束</sub>

---

## 使用方法

### 一般使用方法

确保 Avatar 的 AFK 状态检测已经处于开启状态：

- 处于 PC 模式时，使用键盘的 End 键切换 AFK 状态。
- 处于 VR 模式时，开启 SteamVR 界面进入 AFK 状态。

在进入 AFK 状态时，Avatar 即可变为石碑。

### 其他使用方法

如果您启用了 `自定义参数功能` 或者 `默认 AFK 切换开关功能`，则根据 [测试章节中的相应方法](#启用了自定义参数功能的测试) 使用即可。

<sub>使用方法结束</sub>
