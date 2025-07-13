---
sidebar_label: Feather Duster
---

# Feather Duster v1.0 Instructions {ignore}

## Installation Instructions

### Dependencies

This gimmick relies on the following Unity plugins / shaders. Make sure you have installed them before you install this gimmick.

- Modular Avatar (1.9.13 or above): https://modular-avatar.nadena.dev/
- lilToon (1.7.3 or above): https://lilxyzw.github.io/lilToon/#/

<sub>Dependencies end</sub>

---

### Importing Unity Package

Drag `Duster.unitypackage` into `Project` window, click the `Import` button on the dialog to import the package to your avatar project:

![Import](./Assets/Import.webp)

<sub>Importing Unity Package end</sub>

---

### Installing the Normal Edition

#### 1. Add Prefab to Scene

Drag `Assets/LuiStudio/Duster/Duster_Normal_MA.prefab` into your avatar locates in hierarchy, it should looks like this after the drag:

![Prefab_Normal](./Assets/Prefab_Normal.webp)

#### 2. Reposition the Feather Duster

##### 1. Reveal the Feather Duster Model

Select `Model/Duster`<sup>[1]</sup> under the added prefab. Check the tick box<sup>[2]</sup>(Activate the object) in the inspector as the image below to reveal the model:

![Normal_Show_Model](./Assets/Normal_Show_Model.webp)

You should now see feather duster on the right hand of your avatar:

![Model_Show_On_Right_Handwebp](./Assets/Model_Show_On_Right_Hand.webp)

##### 2. Reposition

Select `Constraints/Right_Hand/Right_Hand_Relative`<sup>[1]</sup> under the added prefab. Use `Move Tool` and `Rotate Tool`<sup>[2]</sup> to reposition the duster on avatar's right hand:

![Adjust_Position_Right_Hand](./Assets/Adjust_Position_Right_Hand.webp)

Position the feather duster until you're happy. For example, like image below:

![Adjust_Position_Right_Hand_Finished](./Assets/Adjust_Position_Right_Hand_Finished.webp)

##### 3. Hide the Feather Duster Model

To avoid showing the duster when you preview your avatar in VRChat, we need to hide(Deactivate) the model. (You could skip this if you don't mind at all)
Select `Model/Duster`<sup>[1]</sup> under the added prefab. Uncheck the tick box<sup>[2]</sup>(Deactivate the object) in the inspector as he image below to hide the model:

![Normal_Hide_Model](./Assets/Normal_Hide_Model.webp)

You should now see the duster disapear:

![Model_Hide](./Assets/Model_Hide.webp)

#### Well Done

You have done the installation of the normal edition, head to [How to Use](#how-to-use) and try it in VRChat.

>:warning: **Attention**
>
>If you are here by following the instruction of [Weaponizable(Can be held in reverse) Edition](#installing-the-weaponizable-can-be-held-in-reverse-edition), please follow the [next step](#3-reposition-the-duster-on-left-hand-weaponize-state--hold-in-reverse-state) to continue the installation.

<sub>Installing the Normal Edition end</sub>

---

### Installing the Weaponizable (Can be held in reverse) Edition

#### 1. Add Prefab to Scene

Drag the `Assets/LuiStudio/Duster/Duster_Normal+Weaponize_MA.prefab` into your avatar locates in hierarchy, it should looks like this after the drag:

![Prefab_Weaponize](./Assets/Prefab_Weaponize.webp)

#### 2. Reposition the Duster on Right Hand (Normal State)

Please follow the [Reposition the Feather Duster](#2-reposition-the-feather-duster) in the installation instructions of the normal edition.

#### 3. Reposition the Duster on Left Hand (Weaponize State / Hold in Reverse State)

##### 1. Reveal the Feather Duster Model

Please follow the [Reveal the Feather Duster Model](#1-reveal-the-feather-duster-model) in the installation instructions of the normal edition.

##### 2. Deactivate the Animator on Your Avatar

>:warning: **Attention**
>
>This step is for avoiding your avatar being changed with unexpected situation due to a Unity bug. It's necessary to save / backup the scene before the next step.

Select your avatar<sup>[1]</sup> in the hierarchy, Uncheck the `Animator` component<sup>[2]</sup> to deactivate it:

![Weaponize_Disable_Avatar_Animator](./Assets/Weaponize_Disable_Avatar_Animator.webp)

##### 3. Switch the Duster to Left Hand

Make sure you selected any object in the added prefab. Head to the `Animation` window. Click on the dropdown menu<sup>[1]</sup>, select `Duster_Left_Handed`<sup>[2]</sup>, then click the `Preview` button<sup>[3]</sup> above (**Do not click the red button next to the Preview button**):

>:warning: **Attention**
>
>If you don't see the Animation Window, right click on the tab of the Project Window -> Add Tab -> Animation.

![Weaponize_Animation_Left_Handed](./Assets/Weaponize_Animation_Left_Handed.webp)

You should now see feather duster on the left hand of your avatar:

![Model_Show_On_Left_Hand](./Assets/Model_Show_On_Left_Hand.webp)

##### 4. Reposition

Select `Constraints/Left_Hand/Left_Hand_Relative`<sup>[1]</sup> under the added prefab. Use `Move Tool` and `Rotate Tool`<sup>[2]</sup> to reposition the duster on avatar's left hand:

![Adjust_Position_Left_Hand](./Assets/Adjust_Position_Left_Hand.webp)

Position the duster until you're happy. Such as the image below:

![Adjust_Position_Left_Hand_Finished](./Assets/Adjust_Position_Left_Hand_Finished.webp)

##### 5. Disable the Animation Preview

Click on the `Preview` button<sup>[1]</sup> to disable the preview (**Do not click on the red button next to it**):

![Weaponize_Animation_Left_Handed_Off](./Assets/Weaponize_Animation_Left_Handed_Off.webp)

Now the duster should return to right hand:

![Adjust_Position_Right_Hand_Finished](./Assets/Adjust_Position_Right_Hand_Finished.webp)

##### 6. Reactivate the Animator on Your Avatar

Select your avatar<sup>[1]</sup> in hierarchy, check the tick box<sup>[2]</sup> on the `Animator` component to activate the animator:

![Weaponize_Enable_Avatar_Animator](./Assets/Weaponize_Enable_Avatar_Animator.webp)

##### 7. Hide the Feather Duster Model

Please follow the [Hide the Feather Duster Model](#3-hide-the-feather-duster-model) in the installation instructions of the normal edition.

#### Well Done!

You have installed the Weaponizable (Can be held in reversed) Edition, head to [How to Use](#how-to-use) and try it in VRChat.

<sub>Installing Weaponizable (Can be held in reverse) Edition end</sub>

---

## How to Use

You've done the installation, it's time to try it out in VRChat.

### Usage of the Normal Edition

Open the Action Menu, find and toggle the Duster Switch to show / hide the feather duster.

### Usage of the Weaponizable (Can be held in reverse) Edition

Apart from the usage of the normal edition:

- When holding in normal state, make a fist on your left hand and move it to the part of the duster close to the end, would switch the duster to the left hand and be held in reverse.
- When holding in reverse, make a fist on your right hand and move it to the handle of the duster, would switch the duster back to the normal state.

<sub>How to Use end</sub>

---

## Miscellaneous

### Rescaling the Feather Duster

Every avatar is unique, that's why you need to scale the feather duster to fit with your avatar.

#### 1. Reveal the Feather Duster Model

Please follow the [Reveal the Feather Duster Model](#1-reveal-the-feather-duster-model) in the installation instructions of the normal edition.

#### 2. Rescale

Select `Model/Duster` under the added prefab, use scale tool or set the scale in the inspector to rescale the duster.

#### 3. Hide the Feather Duster Model

Please follow the [Hide the Feather Duster Model](#3-hide-the-feather-duster-model) in the installation instructions of the normal edition.

### Change the duster switch position in action menu

The switch is installed to the root menu by default, that's not friendly to avatars having many other gimmicks. You can change the position of the switch using Modular Avatar:

- Select `Menu/Duster` under the added prefab.
- Head to the Inspector, click on the `Select Menu` inside the `MA Menu Installer` component.
- Select the submenu where you want to put in.

<sub>Miscellaneous end</sub>