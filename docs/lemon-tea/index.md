---
sidebar_label: Lemon Tea
---

# Lemon Tea v1.0 Instructions {ignore}

## Table of Contents {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Installation Instructions](#installation-instructions)
  - [Dependencies](#dependencies)
  - [Importing Unity Package](#importing-unity-package)
  - [Installing Lemon Tea](#installing-lemon-tea)
    - [1. Add Prefab to Scene](#1-add-prefab-to-scene)
    - [2. Reposition](#2-reposition)
      - [1. Asign the Animator Controller for your Avatar](#1-asign-the-animator-controller-for-your-avatar)
      - [2. Enable Animation Preview](#2-enable-animation-preview)
      - [3. Reposition the Lemon Tea](#3-reposition-the-lemon-tea)
      - [4. Adjust the Gesture Holding Lemon Tea](#4-adjust-the-gesture-holding-lemon-tea)
      - [5. Adjust the Gesture Squeezing Lemon Tea](#5-adjust-the-gesture-squeezing-lemon-tea)
      - [6. Disable Preview and Revert Animator Controller](#6-disable-preview-and-revert-animator-controller)
      - [7. (Optional) Hide the Lemon Tea](#7-optional-hide-the-lemon-tea)
      - [8. Reposition the Mouth Contact Receiver](#8-reposition-the-mouth-contact-receiver)
    - [Well Done](#well-done)
- [How to Use](#how-to-use)
  - [Basic Usage](#basic-usage)
  - [Squeezable Edition Usage](#squeezable-edition-usage)
- [Miscellaneous](#miscellaneous)
  - [Change the Switch Position in Action Menu](#change-the-switch-position-in-action-menu)

<!-- /code_chunk_output -->

## Installation Instructions

### Dependencies

This gimmick relies on the following Unity plugins / shaders. Make sure you have installed them before you install this gimmick.

- Modular Avatar (1.9.13 or above): https://modular-avatar.nadena.dev/
- lilToon (1.7.3 or above): https://lilxyzw.github.io/lilToon/#/

<sub>Dependencies end</sub>

---

### Importing Unity Package

Drag `Lemon Tea.unitypackage` into `Project` window, click the `Import` button on the dialog to import the package to your avatar project:

![Import](./Assets/Import.webp)

<sub>Importing Unity Package end</sub>

---

### Installing Lemon Tea

#### 1. Add Prefab to Scene

This gimmick contains:

- **Normal Edition**
  Which can show/hide with action menu toggle.
- **Squeezable While Holding Fist Edition**
  Which... is squeezable while holding fist...

And left-handed editions, 4 editions in total.

The prefab names for each editions:

- Normal Edition: `Lemon_Tea_MA.prefab`
- Squeezable Edition: `Lemon_Tea_Squeeze_MA.prefab`
- Normal Edition (Left-handed): `Lemon_Tea_Left_Handed_MA.prefab`
- Squeezable Edition (Left-handed): `Lemon_Tea_Left_Handed_Squeeze_MA.prefab`

This instruction will use the squeezable edition as an example.

Drag `Assets/LuiStudio/Lemon Tea/Lemon_Tea_Squeeze_MA.prefab` (Or prefab of other editions) from project window into your avatar locates in hierarchy, it should looks like this after the drag:

![Prefab](./Assets/Prefab.webp)

#### 2. Reposition

##### 1. Asign the Animator Controller for your Avatar

> :warning: **Attention**
>
> This step is for adjusting both lemon tea's position and the gesture holding lemon tea, when in animation preview.
>
> This step is **temporary**. Although VRChat will ignore the controller inside your avatar's animator, please revert the controller after the whole installation if you can.

The Animator Controller names for each edition:

- Normal Edition: `LemonTeaAnimatorGesture`
- Squeezable Edition: `LemonTeaSqueezeAnimatorGesture`
- Normal Edition (Left-handed): `LemonTeaLeftHandedAnimatorGesture`
- Squeezable Edition (Left-handed): `LemonTeaLeftHandedSqueezeAnimatorGesture`

Head to `Assets/LuiStudio/Lemon Tea/Animations/Controllers` in project window, drag `LemonTeaSqueezeAnimatorGesture`<sup>[1]</sup> (Or animator controller of other editions) into your avatar's<sup>[2]</sup> (Sample_Avatar for example) Animator's Controller<sup>[3]</sup>, you should see the result below after you've done it:

![Gesture_Controller_Drag](./Assets/Gesture_Controller_Drag.webp)

##### 2. Enable Animation Preview

Select your avatar<sup>[1]</sup> (Sample_Avatar for example) in Hierarchy, and click "Preview" in the animation window<sup>[2]</sup>. The scene<sup>[3]</sup> should looks like this after the step:

>:warning: **Attention**
>
>If you don't see the Animation Window, right click on the tab of the Project Window -> Add Tab -> Animation.

![Animation_Preview](./Assets/Animation_Preview.webp)

##### 3. Reposition the Lemon Tea

Select `Model/Lemon_Tea`<sup>[1]</sup> in prefab located in Hierarchy, use the `Move Tool`, `Rotate Tool` and `Scale Tool`<sup>[2]</sup> to reposition the lemon tea:

![Adjust_Position](./Assets/Adjust_Position.webp)

Position the lemon tea until you're happy. Such as the image below:

![Adjust_Position_Finished](./Assets/Adjust_Position_Finished.webp)

##### 4. Adjust the Gesture Holding Lemon Tea

After following the steps above, we might see fingers clipping into lemon tea carton, that looks cheap. We need to adjust the gesture to make our avatar "holding" the carton.
Click on the first keyframe<sup>[1]</sup> in animation window, set the fingers' angles to make the hand visibly holding the carton:

![Adjust_Gesture](./Assets/Adjust_Gesture.webp)

Adjust the gesture until you're happy. Such as image below:

![Adjust_Gesture_Finished](./Assets/Adjust_Gesture_Finished.webp)

>:warning: **Attention**
>
>If you are not satisfying with the result. You can repeat [Step 3](#3-reposition-the-lemon-tea) and [Step 4](#4-adjust-the-gesture-holding-lemon-tea) to find the best postiion and gesture.

##### 5. Adjust the Gesture Squeezing Lemon Tea

>:warning: **Attention**
>
>If you choose to install normal editions, please skip and follow [Disable Preview and Revert Animator Controller](#6-disable-preview-and-revert-animator-controller).

Select `Model/Lemon Tea/Lemon_Tea`<sup>[1]</sup> in prefab located in Hierarchy, set `Skinned Mesh Renderer -> BlendShapes -> Squeeze` to `100`<sup>[2]</sup>:

![Shape_Key_100](./Assets/Shape_Key_100.webp)

After that, the carton in the scene will be slightly squeezed：

![Squeezed_Lemon_Tea](./Assets/Squeezed_Lemon_Tea.webp)

Copy and paste the first keyframe's data to the last keyframe:
Select your avatar<sup>[1]</sup> in Hierarchy, click on the first keyframe<sup>[2]</sup> in animation window. Press `Ctrl + C` to copy the keyframe, set the timeline to `60`<sup>[3]</sup> and hit `Enter`, then click on the last keyframe<sup>[4]</sup> of the animation and press `Ctrl + V` to paste the frame data.
Adjust fingers' angles to make the hand visibly squeezing the carton:

![Adjust_Gesture_Squeeze](./Assets/Adjust_Gesture_Squeeze.webp)

Adjust the gesture until you're happy. Such as image below:

![Adjust_Gesture_Squeeze_Finished](./Assets/Adjust_Gesture_Squeeze_Finished.webp)

Select `Model/Lemon Tea/Lemon_Tea`<sup>[1]</sup> in prefab located in Hierarchy, and set `Skinned Mesh Renderer -> BlendShapes -> Squeeze` back to `0`<sup>[2]</sup>:

![Shape_Key_0](./Assets/Shape_Key_0.webp)

##### 6. Disable Preview and Revert Animator Controller

Select your avatar<sup>[1]</sup> and disable preview<sup>[2]</sup> in animation window:

![Animation_Cancel_Preview](./Assets/Animation_Cancel_Preview.webp)

(Optional) Select your avatar<sup>[1]</sup>, revert the animator controller to previous<sup>[2]</sup> (None for example):

![Gesture_Controller_Reset](./Assets/Gesture_Controller_Reset.webp)

##### 7. (Optional) Hide the Lemon Tea

If you don't want the lemon tea to be visible in avatar preview in VRChat, please follow steps below:

Select `Model/Lemon Tea`<sup>[1]</sup> in prefab located in Hierarchy, and deactivate it<sup>[2]</sup> in Inspector:

![Hide_Lemon_Tea](./Assets/Hide_Lemon_Tea.webp)

##### 8. Reposition the Mouth Contact Receiver

This gimmick use `Contact Sender` and `Contact Receiver` to simulate the straw tracking the mouth (Without occupying DPS, SPS etc.). This step is for moving `Contact Receiver` to your avatar's mouth.

Select `Receiver/Mouth`<sup>[1]</sup> in prefab located in Hierarchy, use the `Move Tool` and `Rotate Tool`<sup>[2]</sup> to reposition the receiver:

![Adjust_Mouth_Position](./Assets/Adjust_Mouth_Position.webp)

Move the receiver to avatar's mouth, as image below:

![Adjust_Mouth_Position_Result](./Assets/Adjust_Mouth_Position_Result.webp)

#### Well Done

You have done the installation, head to [How to Use](#how-to-use) and try it in VRChat.

<sub>Installing end</sub>

---

## How to Use

You've done the installation, it's time to try it out in VRChat.

### Basic Usage

- Open the Action Menu, find and toggle the Lemon Tea Switch to show / hide the lemon tea.
- Move the carton toward your avatar's face, the straw will automatically aim to your mouth.

### Squeezable Edition Usage

- Make your hand fist to squeeze the carton.

<sub>How to Use end</sub>

---

## Miscellaneous

### Change the Switch Position in Action Menu

The switch is installed to the root menu by default, that's not friendly to avatars having many other gimmicks. You can change the position of the switch using Modular Avatar:

- Select `Menu/Lemon Tea` under the added prefab.
- Head to the Inspector, click on the `Select Menu` inside the `MA Menu Installer` component.
- Select the submenu where you want to put in.

<sub>Miscellaneous end</sub>