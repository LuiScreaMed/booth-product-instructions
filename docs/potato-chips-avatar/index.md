---
sidebar_label: Potato Chips (Avatar Edition)
---

# Potato Chips (Avatar Edition) v1.0 Instructions {ignore}

## Table of Contents {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Installation Instructions](#installation-instructions)
  - [Dependencies](#dependencies)
  - [Importing Unity Package](#importing-unity-package)
  - [Adding Potato Chips to Your Avatar](#adding-potato-chips-to-your-avatar)
    - [1. Add the Prefab to Scene](#1-add-the-prefab-to-scene)
    - [2. Setup the Potato Chips](#2-setup-the-potato-chips)
      - [1. Adjust the Position of the Chips Bag](#1-adjust-the-position-of-the-chips-bag)
      - [2. Extra Setup](#2-extra-setup)
        - [1. Change the Submenu Location in Action Menu (Optional)](#1-change-the-submenu-location-in-action-menu-optional)
        - [2. Hide the Potato Chips in VRChat Avatar Preview (Optional)](#2-hide-the-potato-chips-in-vrchat-avatar-preview-optional)
- [How to Use](#how-to-use)
  - [Show/Hide the Rocket Puncher](#showhide-the-rocket-puncher)
  - [Acquire and Consume Chips](#acquire-and-consume-chips)
  - [Pour Out Chips](#pour-out-chips)

<!-- /code_chunk_output -->

## Installation Instructions

> asdasdsadas

### Dependencies

This gimmick relies on the following Unity plugins / shaders. Make sure you have installed them before you install this gimmick.

- Modular Avatar (1.11.0 or higher): https://modular-avatar.nadena.dev/
- lilToon (1.8.3 or higher): https://lilxyzw.github.io/lilToon/#/

---

### Importing Unity Package

Drag `Potato Chips (Avatar).unitypackage` into `Project` window, click the `Import` button on the dialog to import the package to your avatar project:

![Import](./Assets/Import.webp)

---

### Adding Potato Chips to Your Avatar

#### 1. Add the Prefab to Scene

Find and drag `Assets/LuiStudio/Potato Chips/Potato Chips.prefab` from product window into your avatar inside hierarchy:

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. Setup the Potato Chips

After the dragging, the chips will show up on the right side of your avatar, 1m from the ground:

![Default_Position](./Assets/Default_Position.webp)

##### 1. Adjust the Position of the Chips Bag

Select `Potato Chips/Potato Chips`<sup>[1]</sup> in hierarchy and use `Move Tool`, `Rotate Tool` and `Scale Tool`<sup>[2]</sup> to adjust it's position, rotation and size:

![Adjust_Position](./Assets/Adjust_Position.webp)

Place the chips bag to your left hand:

![Position_Example](./Assets/Position_Example.webp)

If you want to place it to your `right hand`, move it to your right hand, make sure `Potato Chips/Potato Chips`<sup>[1]</sup> is still being selected, and switch the `Bone Reference` in `MA Bone Proxy Component -> Advance Collapse` to `Right Hand`<sup>[2]</sup>:

![Switch_Hand](./Assets/Switch_Hand.webp)

##### 2. Extra Setup

###### 1. Change the Submenu Location in Action Menu (Optional)

By default, the submenu for potato chips is at the root of Action Menu, which is not friendly to avatars having lots of gimmicks. We can change the location by setting up `MA Menu Installer` component:

- Select the `Potato Chips` in Hierarchy window
- Go to Inspector, click on the `Select Menu` button in `MA Menu Installer` component
- Select the menu where you want to place the submenu into

###### 2. Hide the Potato Chips in VRChat Avatar Preview (Optional)

The avatar preview in VRChat shows the final state of the avatar in Unity. Which means, if the potato chips has not been disabled in Unity, it would also be shown in VRChat avatar preview. We can hide the chips bag in Unity and VRChat avatar preview by doing these:

- Select `Potato Chips/Potato Chips`
- Uncheck the checkbox at the top of Inspector (Disable the chips bag)

<sub>Installation Instructions end</sub>

---

## How to Use

You've done the installation, it's time to try it out in VRChat.

### Show/Hide the Rocket Puncher

Open the Action Menu, find and enter the `Potato Chips` submenu, the `Potato Chips` toggle shows/hides the chips bag.

### Acquire and Consume Chips

Grab a chip inside the chips bag, release the chip or place it into your/others mouth (Head) to consume the chip, a chewing sound would be played after consuming.

### Pour Out Chips

There's a `Pouring` toggle inside the `Potato Chips` submenu. When it's on, you can infinitely pour out chips by putting the chips bag upside down.

<sub>How to Use end</sub>
