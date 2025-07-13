---
sidebar_label: LED 口罩
---

# LED 口罩 v1.0 使用说明 {ignore}

## 导入教程

### 导入前的准备

该扩展依赖以下Unity插件 / Shader，请在导入前确保已经安装：

- Modular Avatar (1.9.13或以上): https://modular-avatar.nadena.dev/
- lilToon (1.7.3或以上): https://lilxyzw.github.io/lilToon/#/
- Gesture Manager (3.9或以上): https://github.com/BlackStartx/VRC-Gesture-Manager

<sub>导入前的准备结束</sub>

---

### 资源包导入

将 `LED Mask.unitypackage` 拖入 Unity 的 `Project` 窗口中，点击提示窗中的 `Import`，将资源包导入到 Avatar 项目中：

![Import](./assets/Import.webp)

<sub>资源包导入结束</sub>

---

### 对于已适配 Avatar 的导入步骤

#### 1. 导入 DLC 资源包

找到下载的 DLC 资源，将其中的 `unitypackage` 文件拖入 Unity 的 `Project` 窗口中，点击提示窗口中的 `Import`，将资源包导入到项目中。

#### 2. 导入 Prefab

在 Project 窗口中，转到 `Assets/LuiStudio/LED Mask/Prefabs`，找到标有您的 Avatar 素体名字的 Prefab（本教程中以 [しろいの 的 にゃにゃし](https://siroinoworks.booth.pm/items/6082750) 为例），如图：

![Fitted_Prefab](./assets/Fitted_Prefab.webp)

将该 Prefab 拖入 Avatar 中，拖入后 Prefab 与 Avatar 的关系如下：

![Prefab_In_Avatar](./assets/Prefab_In_Avatar.webp)

#### 3. 测试

使用 `Gesture Manager` 进入 `Play Mode(播放模式)`，在圆盘菜单中找到并开启 LED 口罩，修改手势以测试口罩表情。

> :warning: **注意**
>
>如果您对口罩表情不满意，并想修改口罩表情，不幸的是，如果手动修改将会十分繁琐，推荐跟随 [自定义口罩表情](#3-自定义口罩表情) 对 Avatar 重新进行适配。
>
>如果您想要手动修改，这些信息可能对您有所帮助：
>口罩 Prefab 的 MA Merge Animator 组件中，第一个作用于口罩形变，第二个作用于口罩的图案，内部的动画控制器内容理应与 Avatar 的 FX 层控制器中负责表情的动画层的内容相同。
>
>正常情况下请不要修改第三个 MA Merge Animator 组件中的控制器。

#### 导入完成

已适配模型的 LED 口罩导入完成，接下来请查看 [使用方法](#使用方法)。

<sub>对于已适配 Avatar 的导入步骤结束</sub>

### 对于未适配 Avatar 的导入步骤

#### 1. 导入 Prefab

在 Project 窗口中，转到 `Assets/LuiStudio/LED Mask/Prefabs`，找到 `LED_Mask.prefab`，如图：

![Not_Fitted_Prefab](./assets/Not_Fitted_Prefab.webp)

将该 Prefab 拖入 Avatar 中，**并保证 Avatar 中只存在一个 LED 口罩 Prefab**，拖入后 Prefab 与 Avatar 的关系如下：

![Not_Fitted_Prefab_In_Avatar](./assets/Not_Fitted_Prefab_In_Avatar.webp)

#### 2. 调整口罩形状

>:warning: **注意**
>
>在这一步之前，请将场景窗口左上角的 Tool Settings 修改为 Pivot（轴心）和 Local（局部）<sup>[1]</sup>：
>
>![Set_Pivot_Local](./assets/Set_Pivot_Local.webp)

因为每个 Avatar 的脸型和骨骼都不尽相同，我们需要将 LED 口罩的形状调整到适合自己的 Avatar 为止。

保持在 Hierarchy 中选中 `LED 口罩 Prefab/Armature_LED_Mask/Root`<sup>[1]</sup>，在场景中使用 `移动工具`、`旋转工具`和`缩放工具`<sup>[2]</sup>粗略地对口罩的位置、旋转和大小进行调整：

![Adjust_Position_Root](./assets/Adjust_Position_Root.webp)

>:warning: **注意**
>
>如果 Avatar 的任何部位阻碍到您口罩位置的判断，可在 Hierarchy 中临时将其隐藏。

粗略调整完毕后，看起来如下图所示：

![Adjust_Position_Root_Finished](./assets/Adjust_Position_Root_Finished.webp)

口罩看起来依然不贴合 Avatar 的脸颊，我们需要对口罩的各个部位进行微调，展开 `Root`，可以看到口罩不同部位的骨骼：

![Bones](./assets/Bones.webp)

这看起来很复杂，但是如果我们分成不同的部分，一步一步进行调整，就简单多了：

![Bones_Assigned](./assets/Bones_Assigned.webp)

我们分成了三个部分，下面我们对三个部分按顺序进行调整。

##### 1. 调整口罩的中间部分

这一部分的骨骼包含：`Jaw`、`Jaw_Inner`、`Nose_Tip`和`Top`，这些骨骼所对应的部位如图所示：

![Bones_Reference_1](./assets/Bones_Reference_1.webp)

选中相应的骨骼，使用 `移动`、`旋转` 工具对需要修改的部位进行微调。

调整到您满意的程度，如下图：

![Bones_1_Position_Finished](./assets/Bones_1_Position_Finished.webp)

##### 2. 调整口罩的左侧部分

这一部分的骨骼包含：`Cheek.L`、`Cheek_Jaw_Inner.L`、`Cheek_Puff.L`、`Cheek_Top.L`、`Side.L`和`Ear.L`，这些骨骼所对应的部位如图所示：

![Bones_Reference_2](./assets/Bones_Reference_2.webp)

请根据骨骼的层级，从外到里，按顺序调整，例如以下顺序：

- Cheek.L
- Cheek_Jaw_Inner.L, Cheek_Puff.L, Cheek_Top.L, Side.L
- Ear.L

调整到您满意的程度，如下图（请忽视我的 Avatar 中没有耳朵的情况:sob:）：

![Bones_2_Position_Finished](./assets/Bones_2_Position_Finished.webp)

##### 3. 调整口罩的右侧部分

口罩右侧骨骼的位置其实就是将口罩左侧的骨骼对称过来（如果 Avatar 的头部是对称的话）。
我提供了一个对称工具，可以将左侧的骨骼对称到右侧相应骨骼上。

点击 Unity 顶部菜单中的 `Tools > LuiStudio > LED Mask > Mirror Bones`，呼出 `Mirror LED Mask Bones` 窗口，将  Avatar 中的 LED 口罩 Prefab 拖入窗口的 `LED Mask` 中：

![Mirror_Tool_1](./assets/Mirror_Tool_1.webp)

如果移动的骨骼是右侧的骨骼，请将窗口中的 `Mirror Right To Left` 勾选。

点击窗口中的 `Mirror` 按钮，口罩将会左右对称：

![Mirror_Bones_Finished](./assets/Mirror_Bones_Finished.webp)

> :warning: **注意**
>
>如果口罩没有往预期的方向对称，请按下 Ctrl + Z 撤销操作。

##### 4. （可选）调整图案的大小

如果调整了口罩的形状后，因为口罩过宽或者过窄导致图案的变形，可以通过调整口罩 LED 着色器的一项设置修复。
在 Hierarchy 中选中 `LED 口罩 Prefab/LED_Mask`<sup>[1]</sup>，在 Inspector 最下方中，展开 `LED (Material)`<sup>[2]</sup>，找到 `LED Tiling`<sup>[3]</sup> 属性，调整其 `X` 和 `Y`<sup>[4]</sup> 数值到满意为止：

![Adjuest_LED_Pattern_Tiling](./assets/Adjuest_LED_Pattern_Tiling.webp)

#### 3. 自定义口罩表情

##### 1. （可选）LED图案参考

口罩LED的图案参考对后续的步骤很有帮助。
选中 Hierarchy 中的 `LED 口罩 Prefab/LED_Mask`<sup>[1]</sup>，转到 Inspector，找到位于最底下的 `LED (Material)`，将其展开后，其中的 `Emote Masks`<sup>[2]</sup> 纹理列表将作为我们设置口罩表情的图案参考，`Emote` 后的数字即为图案编号。请通过点击 Inspector 窗口右上角的 :unlock:<sup>[3]</sup> 将该 Inspector 窗口锁定：

![Show_Emote_Reference](./assets/Show_Emote_Reference.webp)

我们需要新建一个 Inspector 进行其他操作。
右键 Inspector 窗口上的 `Inspector（检查器）` 标签，选择 `Add Tab（添加标签） -> Inspector（检查器）`：

![Add_Inspector](./assets/Add_Inspector.webp)

> :warning: **注意**
>
>拖动窗口标签可以自由移动窗口并吸附在所需的地方。建议将口罩表情参考的 Inspector 窗口拖动到新建的 Inspector 窗口之外。这个操作能减少后续操作的繁琐程度。

##### 2. 初始化口罩表情设置工具

口罩表情设置工具能够预览当前 Avatar 的 FX 动画层的动画，并结合 Unity 的 Animation 窗口快捷地`设置 LED 口罩的表情图案`和`处理口罩与 Avatar 的冲突`。

> :warning: **注意**
>
>口罩表情设置工具还未经过彻底的全方位测试，建议先对**模型文件**进行备份。
>
>在**没有备份**的情况下使用该工具时出现任何损失，LuiStudio 均不会负责。
>
>欢迎反馈对于使用过程中遇见的任何 bug。
>
>该工具会在 Unity 中没有开启 Animation 窗口时自动唤起 Animation 窗口，请确保开启 Animation 窗口。

选择 Unity 顶部菜单中的 `Tools > LuiStudio > LED Mask > Setup Animator Controller`，呼出设置工具，将 Hierarchy 中的 Avatar<sup>[1]</sup> 拖入窗口中的 `Avatar`<sup>[2]</sup> 中，并等待工具完成初始化（初始化时长随 FX 层动画控制器的复杂程度而增长）：

![Setup_Emotes_Drag_In](./assets/Setup_Emotes_Drag_In.webp)

##### 3. 使用口罩表情设置工具自定义表情

###### 1. 取消不必要的动画层

首先将**不涉及面部表情**的动画层取消勾选，取消勾选意味着最终的动画控制器不包含该动画层。通过点击动画层列表子项右侧的 `勾选框`<sup>[1]</sup> 对动画层进行 `勾选 / 取消勾选`，必要时可以使用 `全选/取消全选` 按钮<sup>[2]</sup>：

![Setup_Emotes_Uncheck_Unrelated_Layers](./assets/Setup_Emotes_Uncheck_Unrelated_Layers.webp)

作为示例，删除后的动画层如下：

![Setup_Emotes_Uncheak_Unrelated_Layers_Finished](./assets/Setup_Emotes_Uncheak_Unrelated_Layers_Finished.webp)

###### 2. 预览动画层中的表情

在 `Layers` 栏中选择动画层<sup>[1]</sup>，在右侧的 `Animation Clips` 栏中点击动画<sup>[2]</sup>，则可以在场景中预览动画<sup>[3]</sup>（再次点击即可停止预览）：

![Setup_Emotes_Preview_Animation](./assets/Setup_Emotes_Preview_Animation.webp)

> :warning: **注意**
>
>上文中提到的预览，具体为通过更换 Avatar 的 Animator 组件中的动画控制器，然后在 Animation 窗口中启用预览功能来进行预览，在正常状况下取消预览时会将动画控制器恢复（在开启工具并预览动画时，不正常地关闭 Unity 会导致控制器恢复失败）。

###### 3. 修改口罩表情

预览时，可以在 Animation 中对表情进行修改。

> :warning: **注意**
>
>为了最大化口罩的自定义程度，该步骤将直接通过 Unity 的 Animation 窗口对动画进行修改。如果您对 Unity 的动画操作不熟悉，请完全遵循下方的步骤。

**口罩图案修改**

转到 Animation 窗口并**打开 `录制模式`<sup>[1]</sup>**。时间轴中的 `LED_Mask : ..._Emote Index`<sup>[2]</sup> 为口罩的图案索引，其余的属性为 Avatar 原本的表情动画属性，修改图案索引的值（0 ~ 15）<sup>[3]</sup> 以更改口罩图案，如果想使用默认值（详见 [注意事项 - (2)](#7-注意事项)），请直接将索引属性删除：

![Setup_Emotes_Change_Emote_Index](./assets/Setup_Emotes_Change_Emote_Index.webp)

调整后的示例如下：

![Setup_Emotes_Change_Emote_Index_Finished](./assets/Setup_Emotes_Change_Emote_Index_Finished.webp)

**冲突处理**

如果口罩与 Avatar 冲突，请根据下方的建议进行修改（该部分以 [しろいの 的 にゃにゃし](https://siroinoworks.booth.pm/items/6082750) 的鼓脸表情为例）：

>:warning: **注意**
>
>如果想要参考 Avatar 原本的表情，但是被口罩遮挡，可以在 Hierarchy 中点击口罩 Prefab 左侧的眼睛按钮暂时在场景中隐藏口罩。

- **Avatar 的面部变形导致的冲突**

  如图：

  ![Setup_Emotes_Change_Mask_Transform_Example](./assets/Setup_Emotes_Change_Mask_Transform_Example.webp)

  **这种情况建议修改口罩的形状：**

  确保 Animation 窗口中的 **`录制模式` 保持开启状态**<sup>[1]</sup>，选择 LED 口罩相应位置（这里是左脸颊）<sup>[2]</sup>的骨骼通过 `移动`、`旋转`和`缩放`工具进行调整<sup>[3]</sup>：

  ![Setup_Emotes_Change_Mask_Transform](./assets/Setup_Emotes_Change_Mask_Transform.webp)

  调整后的示例如下：

  ![Setup_Emotes_Change_Mask_Transform_Finished](./assets/Setup_Emotes_Change_Mask_Transform_Finished.webp)

  <sup>にゃにゃし可爱捏</sup>

- **Avatar 的漫画符号和口罩相冲突**

  如图：

  ![Setup_Emotes_Emanata_Example](./assets/Setup_Emotes_Emanata_Example.webp)

  **这种情况建议视情况选择调整漫画符号或者口罩形状：**

  在这个例子中，上半部分的眼泪，我认为通过调整口罩形状，保证眼泪完全显示出来比较好。

  确保 Animation 窗口中的 **`录制模式` 保持开启状态**，根据上一建议的位置移动步骤，对口罩的上方边缘进行调整，调整完成后如下：

  ![Setup_Emotes_Emanata_Mask_Transform_Finished](./assets/Setup_Emotes_Emanata_Mask_Transform_Finished.webp)

  下半部分的汗，我认为通过调整形态键隐藏起来比较好。

  在一般情况下，漫画符号是受面部网格中的 `形态键` 的影响而移动，该步骤也将以 `形态键` 形式的漫画符号为例。如果您的 Avatar 的漫画符号为单独的 Gameobject，请参考上一个建议的位置移动步骤。
  &#10;
  确保 Animation 窗口中的 **`录制模式` 保持开启状态**<sup>[1]</sup>，在 Hierarchy 中找到 Avatar 中包含表情形态键的 Gameobject，一般情况下名称为 `Body` 或 `Face`<sup>[2]</sup>。选中后，在 Inspector 中找到 `SkinnedMeshRenderer` 组件，展开该组件中的 `BlendShapes`<sup>[3]</sup>，找到并调整漫画符号的形态键：

  ![Setup_Emotes_Emanata_Blend_Shape](./assets/Setup_Emotes_Emanata_Blend_Shape.webp)

  调整后的示例如下：

  ![Setup_Emotes_Emanata_Blend_Shape_Finished](./assets/Setup_Emotes_Emanata_Blend_Shape_Finished.webp)

  <sup>にゃにゃし可爱捏</sup>

###### 4. 完成其余表情的修改

重复 [预览动画层中的表情](#2-预览动画层中的表情) 和 [修改口罩表情](#3-修改口罩表情)，完成对所有表情的修改。

###### 5. 应用口罩表情

完成对所有表情的自定义后，点击窗口中的 `Setup` 按钮，等待工具生成 LED 口罩所使用的动画控制器。
生成之后的控制器将自动引用到 LED 口罩 Prefab 的 MA Merge Animator 组件中。

###### 6. 测试

使用 `Gesture Manager` 进入 `Play Mode(播放模式)`，在圆盘菜单中找到 LED 口罩的开关并将其开启，切换 Avatar 的手势，查看口罩表情是否正常。

###### 7. 注意事项

- (1) 关于多层动画表情
  当您在设置工具中勾选的动画层数多于 1 层（例如在本示例中 [しろいの 的 にゃにゃし](https://siroinoworks.booth.pm/items/6082750) 包含手势动画的动画层以及摸头动画的动画层），请注意动画层的动画覆盖，后一层的动画会覆盖前一层的对应值。
- (2) 关于不同 Write Defaults（以下简称 WD）的口罩默认状态
  默认状态指当口罩的表情动画中没有相应属性时，这个属性的值。例如当一个动画里面没有口罩图案索引的属性时的口罩图案索引值。
  Avatar 的 FX 层动画控制器的每个状态中都有一项 WD 选项，查看其中任意一个状态的 WD 选项来确定 Avatar 采用的是 WD On 还是 WD Off ，不同的 WD 选项的默认状态有以下不同：
  - 开启
    当您的 Avatar 使用的是 WD On，口罩的默认状态将会是场景中编辑模式下（非预览状态和播放模式）口罩的状态。
  - 关闭
    当您的 Avatar 使用的是 WD Off，该工具将会在生成的动画控制器中添加一层默认口罩表情层，这时的动画表情层将会是点击 `Setup` 按钮时编辑模式下（非预览状态和播放模式）口罩的状态。
  也就是说，如果您的 Avatar 使用了 WD On 的同时需要更改默认表情，则直接在编辑模式下修改口罩即可；
  如果使用的是 WD Off，则需要在按下 `Setup` 按钮前和 WD On 一样在编辑模式下修改口罩。
- (3) 口罩 LED 图案索引的关键帧问题
  如果您在修改口罩表情动画时删除了口罩图案索引的属性（..._Emote Index），并且需要重新加回来时。请确保重新添加后，将其关键帧的曲线修改为恒定曲线。具体修改步骤为：
  选择口罩图案索引属性下<sup>[1]</sup>的所有帧<sup>[2]</sup>，右键选择 `Both Tangents > Constant`<sup>[3]</sup>：

  ![Setup_Emotes_Tangents_Constant](./assets/Setup_Emotes_Tangents_Constant.webp)

#### 导入完成

未适配模型的 LED 口罩导入完成，接下来请查看 [使用方法](#使用方法)

<sub>导入教程结束</sub>

---

## 自定义 LED 图案

口罩的 LED 着色器支持 16 个表情图案和 4 个音量反馈图案，我们在上面的步骤中提到的口罩图案索引就是对应着 16 个表情图案图案。
LED 着色器的纹理是作为蒙版使用的，一个像素的红色值越高，这个像素的透明度越低。您可以自行创作后导入需要显示的纹理，或者使用 LED 图案绘制工具生成图案后导入。

### 1. 使用工具绘制图案

该组件附带了一个工具，可以用该工具绘制和生成图案纹理后将纹理文件导入到 Unity 中使用。

#### 1. 图案绘制工具介绍

在该说明书所在文件夹中，找到 `LEDPatternPainter/painter.html` 并通过浏览器打开。
开启的绘制工具如下所示：

![LED_Pattern_Generator_Introduce](./assets/LED_Pattern_Generator_Introduce.webp)

图中标注的各个交互的说明如下：

1. 画布
1. 模板图案列表的开关，用于在画布中应用模板
1. X / Y 轴对称开关，开启后的绘制和擦除操作可以根据对称轴对称
1. 撤回 / 重做按钮
1. UV 显示按钮，显示 / 隐藏 口罩 LED 图案区域的 UV
1. 保存图案图片文件按钮
1. 语言选单

#### 2. 绘制并保存图案

在画布中，按住左键绘制 LED 灯珠，按住右键擦除 LED 灯珠，在模板图案中选择 `None` 清空画布。
请确保绘制的 LED 图案在 UV 的范围内，否则该图案在使用时需要调整着色器的属性。

点击保存按钮保存图案，找到保存的文件，然后将其拖入 Unity 的 Project 窗口中您想要存放的位置，将其名称修改为您想要的名称。

### 2. 应用图案

#### 1. 导入设置

在 Project 窗口中，点击导入的图案纹理，转到 Inspector，展开 `Advance`<sup>[1]</sup>，勾选 `Read/Write`<sup>[2]</sup> 和 `Mip Streaming`<sup>[3]</sup>，将下方的 `Max Size` 改为 `512`<sup>[4]</sup>，然后点击 `Apply`<sup>[5]</sup>：

![Custom_Pattern_Import_Setting](./assets/Custom_Pattern_Import_Setting.webp)

#### 2. 替换图案

在 Hierarchy 中选中 `LED 口罩 Prefab/LED_Mask`<sup>[1]</sup>，在 Inspector 最下方中，展开 `LED (Material)`<sup>[2]</sup>，展开 `Emote Masks`<sup>[3]</sup>，将想要替换的图案替换成您的图案：

![Custom_Pattern_Replace](./assets/Custom_Pattern_Replace.webp)

替换完成后，在口罩的表情动画中，通过 `Emote Masks` 下的口罩图案索引进行选择。

<sub>自定义 LED 图案结束</sub>

---

## 使用方法

你已经完成了导入，接下来将讲解 LED 口罩在 VRChat 中的使用方法。
开启圆盘菜单，找到 `LED Mask` 子菜单，其中：

- `Mask`: 用于显示 / 隐藏口罩
- `LED`: 用于显示 / 隐藏口罩上的 LED
- `Voice`: 用于开启 / 关闭口罩 LED 的语音反馈
- `Color`: 用于调整口罩 LED 的颜色
- `Emission`: 用于调整口罩 LED 的发光度

<sub>使用方法结束</sub>

---

## 杂项

### 修改子菜单在圆盘菜单中的位置

LED 口罩的子菜单入口默认在菜单的起始层，这对拥有许多功能的 Avatar 来说很不友好，使用 Modular Avatar 可以修改开关的位置

- 在 Hierarchy 中选中 `LED 口罩 Prefab/Menu/LED_Mask`
- 在 Inspector 中，点击 `MA Menu Installer` 组件中的 `Select Menu` 按钮
- 选择想要将口罩子菜单放入的菜单

<sub>杂项结束</sub>