---
sidebar_label: Hypnosis Phone
---

# Hypnosis Phone v1.0 Instructions {ignore}

## Table of Contents {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Installation Instructions](#installation-instructions)
  - [Dependencies](#dependencies)
  - [Importing Unity Package](#importing-unity-package)
  - [Installing Hypnosis Phone](#installing-hypnosis-phone)
    - [1. Add Prefab to Scene](#1-add-prefab-to-scene)
    - [2. Adjust Position and Holding Gesture](#2-adjust-position-and-holding-gesture)
      - [1. (Optional) Duplicate the Gesture Animation and Controller](#1-optional-duplicate-the-gesture-animation-and-controller)
      - [2. Asign the Gesture Animator Controller to your Avatar](#2-asign-the-gesture-animator-controller-to-your-avatar)
      - [3. Adjust Position of the Phone and Holding Gesture](#3-adjust-position-of-the-phone-and-holding-gesture)
        - [1. Enable Animation Preview](#1-enable-animation-preview)
        - [2. Adjust Position of the Phone and Holding Gesture](#2-adjust-position-of-the-phone-and-holding-gesture)
        - [3. Disable Animation Preview](#3-disable-animation-preview)
      - [4. (Optional) Recover the Animator Controller for your Avatar](#4-optional-recover-the-animator-controller-for-your-avatar)
    - [Well Done](#well-done)
- [How to Use](#how-to-use)
- [Miscellaneous](#miscellaneous)
  - [Change the Toggle Position in Action Menu](#change-the-toggle-position-in-action-menu)
  - [Only Allow Yourself to Interact with the Phone](#only-allow-yourself-to-interact-with-the-phone)
  - [Hide the Phone in VRChat Avatar Preview](#hide-the-phone-in-vrchat-avatar-preview)

<!-- /code_chunk_output -->

## Installation Instructions

### Dependencies

This gimmick relies on the following Unity plugins / shaders. Make sure you have installed them before you install this gimmick.

- Modular Avatar (1.9.13 or higher): https://modular-avatar.nadena.dev/
- lilToon (1.7.3 or higher): https://lilxyzw.github.io/lilToon/#/
- Gesture Manager (3.9 or higher): https://github.com/BlackStartx/VRC-Gesture-Manager

<sub>Dependencies end</sub>

---

### Importing Unity Package

Drag `Hypnosis Phone.unitypackage` into `Project` window, click the `Import` button on the dialog to import the package to your avatar project:

![Import](./Assets/Import.webp)

<sub>Importing Unity Package end</sub>

---

### Installing Hypnosis Phone

#### 1. Add Prefab to Scene

Enter the folder `Assets/LuiStudio/Hypnosis Phone`, choose the prefab determind to the hand that holds the phone:

- Left hand: `Hypnosis Phone (Left Handed).prefab`
- Right hand: `Hypnosis Phone (Right Handed).prefab`

Drag the chosen prefab (right hand for example) into your avatar, the hierarchy should as below:

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. Adjust Position and Holding Gesture

As we can see in the image, the phone in the scene is fixed to the corresponding hand after completing the previous step:

![Phone_Startup_Position](./Assets/Phone_Startup_Position.webp)

##### 1. (Optional) Duplicate the Gesture Animation and Controller

If you want to apply hypnosis phone on multiple avatars in one project, please duplicate gesture animation and controller for every avatar to prevent conflicts.
Head to `Assets/LuiStudio/Hypnosis Phone/Animations`, choose the folder depend on the hand that holds the phone:

- Left hand: `Gesture Left`
- Right hand: `Gesture Right`

Duplicate the chosen folder into wherever you want, rename it to whatever name you want.
After the duplication, enter the duplicated folder and **double click** the animator controller(`HypnosisPhoneGesture*Controlller`)<sup>[1]</sup>. Click on the `On`<sup>[2]</sup> state in the Animator window. Drag the `On` animation<sup>[3]</sup> from the Project window into the motion field in Inspector to replace the gesture animation:

> :warning: **Attention**
>
>If the Inspector window not showing any contents after clicking on the `On` state, please click on any blank area in the Animator window, and click on `On` state again.

![Replace_Gesture_On_Animation](./Assets/Replace_Gesture_On_Animation.webp)

Select the Hypnosis Phone prefab<sup>[1]</sup> in Hierarchy window, head to the Inspector window and find the **first** `MA Merge Animator` component<sup>[2]</sup>. Drag the animator controller(`HypnosisPhoneGesture*Controlller`)<sup>[3]</sup> from the Project window into the `Animator to merge` field in the component we found to replace the original gesture animator controller:

![Replace_Gesture_Controller](./Assets/Replace_Gesture_Controller.webp)

##### 2. Asign the Gesture Animator Controller to your Avatar

> :warning: **Attention**
>
> This step is for adjusting both lemon tea's position and the gesture holding lemon tea, when in animation preview.
>
> This step is **temporary**. Although VRChat will ignore the controller inside your avatar's animator, please revert the controller after the whole installation if you can.

Select the Hypnosis Phone prefab<sup>[1]</sup> in Hierarchy window, find the **first** `MA Merge Animator` component<sup>[2]</sup>, click on the animator controller<sup>[3]</sup> in the `Animator to merge` field to locate the animator controller in Project window:

![Locate_Gesture_Controller](./Assets/Locate_Gesture_Controller.webp)

Select your avatar<sup>[1]</sup> in Hierarchy window, find the `Animator` component<sup>[2]</sup> in Inspector window. Drag the animator controller we've located<sup>[3]</sup> from Project window into the `Controller` field<sup>[4]</sup> in the `Animator` component:

![Replace_Avatar_Animator_Controller](./Assets/Replace_Avatar_Animator_Controller.webp)

##### 3. Adjust Position of the Phone and Holding Gesture

###### 1. Enable Animation Preview

Select `Hypnosis Phone prefab/Phone`<sup>[1]</sup> in Hierarchy window, switch the animation to `On`<sup>[2]</sup> in Animation window. Click on `Preview`<sup>[3]</sup>(not the record button) to enter the animation preview, the scene should be like this after clicking on `Preview`<sup>[4]</sup>:

>:warning: **Attention**
>
>If you can't locate the Animation window, please right click on Project window's tab and click `Add Tab -> Animation`.

![Preview_Gesture_Animation](./Assets/Preview_Gesture_Animation.webp)

###### 2. Adjust Position of the Phone and Holding Gesture

Adjust the position of the phone by using `Move Tool`, `Rotate Tool` and `Scale Tool`<sup>[1]</sup> in the scene;
To change the holding gesture, head to the Animation window, make sure the timeline cursor aiming at the first frame<sup>[2]</sup>, and adjust every finger in the left panel<sup>[3]</sup>:

![Adjust_Phone_Pos_And_Gesture](./Assets/Adjust_Phone_Pos_And_Gesture.webp)

> :warning: **Attention**
>
>In Animation window, move the cursor to the left side of a value, the cursor would turn into as the image below, at this moment we can adjust fingers easier by dragging vertically or horizontally:

![Adjuust_Gesture_Value_Hint](./Assets/Adjuust_Gesture_Value_Hint.webp)

The reference for the position and the gesture:

![Phone_Pos_And_Gesture_Example](./Assets/Phone_Pos_And_Gesture_Example.webp)

###### 3. Disable Animation Preview

Click on `Preview` in Animation window to exit the animation preview.

##### 4. (Optional) Recover the Animator Controller for your Avatar

Select your avatar in Hierarchy window, drag the original animator controller in to the `Controller` field in `Animator` component.

#### Well Done

You have done the installation. Head to [How to Use](#how-to-use) and try it in VRChat.

<sub>Installation Instructions end</sub>

---

## How to Use

You've done the installation, it's time to try it out in VRChat.

- Turn on the action menu, locate the toggle called `Hypnosis Phone`, when toggles on, the phone will appear.
- Use the hand other than the holding hand and tap on the `Start` button on the screen to start the hipnosis animation.
- Use the hand other than the holding hand again and tap on the middle of the screen to stop the hipnosis animation.

<sub>How to Use end</sub>

---

## Miscellaneous

### Change the Toggle Position in Action Menu

The toggle is installed to the root menu by default, that's not friendly to avatars having many other gimmicks. You can change the position of it by using Modular Avatar:

- Select `Hypnosis Phone Prefab/Menu/Hypnosis Phone` in Hierarchy;
- Head to Inspector, click on the `Select Menu` inside the `MA Menu Installer` component;
- Select the menu where you want to install the toggle into.

### Only Allow Yourself to Interact with the Phone

Select `Hypnosis Phone Prefab/Phone/Button Contacts` in Hierarchy windodw, find two `VRC Contact Receiver` components in Inspector window, uncheck `Filtering -> Allow Others` in both components.

### Hide the Phone in VRChat Avatar Preview

Select `Hypnosis Phone Prefab/Phone` in Hierarchy window, uncheck the checkbox at the top of the Inspector window.

<sub>Miscellaneous end</sub>