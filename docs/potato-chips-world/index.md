---
sidebar_label: Potato Chips (World Edition)
---

# Potato Chips (World Edition) v1.0 Instructions {ignore}

## Table of Contents {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Installation Instructions](#installation-instructions)
  - [Dependencies](#dependencies)
  - [Adding Potato Chips to the Scene](#adding-potato-chips-to-the-scene)
  - [Feature Introduction](#feature-introduction)
  - [Movement](#movement)
  - [Opening](#opening)
  - [Eating](#eating)
  - [Pouring](#pouring)
- [Configuration Guide](#configuration-guide)
  - [1. Potato Chips](#1-potato-chips)
    - [1. Potato Chips Udon Script](#1-potato-chips-udon-script)
      - [Is Unpacked](#is-unpacked)
      - [Easy Unpack Mode](#easy-unpack-mode)
      - [Easy Unpack Mode Use Text](#easy-unpack-mode-use-text)
      - [Enable Pouring](#enable-pouring)
      - [Pour Angle](#pour-angle)
      - [Potato Chips Bag](#potato-chips-bag)
      - [Use Gravity](#use-gravity)
      - [Is Kinematic](#is-kinematic)
  - [2. Potato Chips Bag](#2-potato-chips-bag)
    - [1. Potato Chips Bag Udon Script](#1-potato-chips-bag-udon-script)
      - [Potato Chips](#potato-chips)
      - [Unpack Controller](#unpack-controller)
  - [4. Unpack](#4-unpack)
    - [1. Unpack Controller Udon Script](#1-unpack-controller-udon-script)
      - [Unpack Transform VR](#unpack-transform-vr)
      - [Unpack Transform PC](#unpack-transform-pc)
      - [Potato Chips Bag](#potato-chips-bag-1)
  - [5. VR and Child Objects](#5-vr-and-child-objects)
    - [Unpack_Grab_1 and Unpack_Grab_2](#unpack_grab_1-and-unpack_grab_2)
      - [1. Unpack Grab Udon Script](#1-unpack-grab-udon-script)
        - [Unpack Controller](#unpack-controller-1)
        - [Drag Distance](#drag-distance)
  - [6. PC and Child Objects](#6-pc-and-child-objects)
    - [1. Unpack PCUI Display Udon Script](#1-unpack-pcui-display-udon-script)
      - [Ui Canvas](#ui-canvas)
      - [Show Distance](#show-distance)
  - [10. Chips](#10-chips)
    - [Chip_1 etc.](#chip_1-etc)
      - [1. Chip Udon Script](#1-chip-udon-script)
        - [Mesh Transform](#mesh-transform)
        - [Audio Source](#audio-source)
        - [Reset Duration](#reset-duration)

<!-- /code_chunk_output -->

## Installation Instructions

### Dependencies

This gimmick relies on the following Unity plugins / shaders. Make sure you have installed them before you install this gimmick.

- lilToon (1.8.3 or higher): https://lilxyzw.github.io/lilToon/#/

---

### Adding Potato Chips to the Scene

Drag `Potato Chips (World).unitypackage` into `Project` window, click the `Import` button on the dialog to import the package to your avatar project:

![Import](./Assets/Import.webp)

After that, drag `Assets/LuiStudio/Potato Chips (World)/Potato Chips.prefab` from the product window into the scene.

<sub>Installation Instructions end</sub>

---

### Feature Introduction

This Udon gimmick implements movement, opening, eating and pouring mechanics for potato chips in VRChat worlds:

### Movement

- Uses `VRC Pickup` component for grab/throw mechanics
- Uses `VRC Object Sync` for instance synchronization

### Opening

Three opening methods implemented: PC, VR, and simplified mode using `VRC Pickup`'s Use function.

The `VRC Pickup` method is called "Easy Unpack Mode".

- `PC Method` - PC players see an upward slider UI:

  ![PC_Unpack](./Assets/PC_Unpack.webp)

  Drag the arrow to the top to open.
- `VR Method` - VR players see two outward arrows:

  ![VR_Unpack](./Assets/VR_Unpack.webp)
  
  Grab both arrows and pull apart to open. Configure activation distance via [Drag Distance](#drag-distance).
- `Easy Unpack Mode` - When enabled via [Easy Unpack Mode](#easy-unpack-mode), hides the above UIs and allows opening by using the pickup (mouse click/trigger).

> After opening, the bag's collider shrinks to 1/4 size to avoid interference with chips. With [Use Gravity](#use-gravity) enabled, inverted bags may sink - this is normal.

### Eating

Contains 12 chips controlled by `Chip` scripts.
Chip meshes are hidden by default. After opening, players can take chips which become visible when grabbed.
Releasing (mouse click/trigger) plays a crunch sound, hides the chip, and makes it unavailable for 3 seconds before resetting. Adjust via [Reset Duration](#reset-duration).

### Pouring

Enabled via [Enable Pouring](#enable-pouring). When holding the bag inverted beyond [Pour Angle](#pour-angle), chips will pour out.

<sub>End of Feature Introduction</sub>

---

## Configuration Guide

Configuration reference for the potato chips' Udon scripts.

Hierarchy structure:

![Hierarchy](./Assets/Hierarchy.webp)

|ID|Quick Jump|Description|
|-|-|-|
|1|[Potato Chips](#1-potato-chips)|Root object|
|2|[Potato Chips Bag](#2-potato-chips-bag)|Bag parent object|
|3|Armature_Chips_Bag...|Bag model|
|4|[Unpack](#4-unpack)|Opening logic parent|
|5|[VR and Child Objects](#5-vr-and-child-objects)|VR opening logic|
|6|[PC and Child Objects](#6-pc-and-child-objects)|PC opening logic|
|7|Particles|Pouring particle effects|
|8|Audio|Opening sound effects|
|9|Chips_Parent|Chips parent constraint source|
|10|[Chips](#10-chips)|Chips parent object|

---

### 1. Potato Chips

Root GameObject containing the main `Potato Chips` Udon script and driving Animator.

#### 1. Potato Chips Udon Script

Inspector UI:

![Potato_Chips_Script](./Assets/Potato_Chips_Script.webp)

##### Is Unpacked

Tracks whether the bag is opened.

||Value|Notes|
|-|-|-|
|Type|`bool`||
|Access|`private`||
|Sync|`Sync`||
|Getter|Yes|`GetIsUnpacked: bool`|
|Setter|Yes|`Unpack: void`, `Pack: void`|
|Callback|No||

> Callbacks may be added in future versions

##### Easy Unpack Mode

Enables simplified opening via `VRC Pickup` Use function.

||Value|Notes|
|-|-|-|
|Type|`bool`||
|Access|`private`||
|Sync|`Local`||
|Getter|Yes|`GetIsEasyUnpackMode: bool`|
|Setter|Yes|`EnableEasyUnpackMode: void`, `DisableEasyUnpackMode: void`|
|Callback|No||

> Callbacks may be added in future versions

##### Easy Unpack Mode Use Text

"Use" prompt text when Easy Unpack Mode is enabled.

||Value|Notes|
|-|-|-|
|Type|`string`||
|Access|`private`||
|Sync|`Local`||
|Getter|Yes|`GetEasyUnpackModeUseText: string`|
|Setter|Yes|`EnableEasyUnpackMode: void`, `DisableEasyUnpackMode: void`|
|Callback|No||

> Callbacks may be added in future versions

##### Enable Pouring

Enables chip pouring mechanics.

||Value|Notes|
|-|-|-|
|Type|`bool`||
|Access|`private`||
|Sync|`Sync`||
|Getter|No||
|Setter|Yes|`EnablePouring: bool`, `DisablePouring: bool`|
|Callback|No||

> Callbacks may be added in future versions

##### Pour Angle

Angle threshold for pouring (degrees from vertical).

||Value|Notes|
|-|-|-|
|Type|`float`||
|Access|`public`||
|Sync|`Local`||
|Getter|No||
|Setter|No||
|Callback|No||

> Callbacks may be added in future versions

##### Potato Chips Bag

> :warning: **Warning**
>
> Do not modify unless you know what you're doing

Reference to [Potato Chips Bag Udon Script](#2-potato-chips-bag).

##### Use Gravity

Controls whether gravity affects the bag.

||Value|Notes|
|-|-|-|
|Type|`bool`||
|Access|`private`||
|Sync|`Local`||
|Getter|Yes|`GetChipsBagPhysicSettings: bool[]`|
|Setter|No||
|Callback|No||

> Currently initialization-only. Contact LuiStudio for modification requests.

##### Is Kinematic

Controls whether physics affects the bag.

||Value|Notes|
|-|-|-|
|Type|`bool`||
|Access|`private`||
|Sync|`Local`||
|Getter|Yes|`GetChipsBagPhysicSettings: bool[]`|
|Setter|No||
|Callback|No||

> Currently initialization-only. Contact LuiStudio for modification requests.

---

### 2. Potato Chips Bag

This GameObject is the parent object for the potato chips bag model, opening logic, pouring particles, audio components, and chip constraints. It contains the `Potato Chips Bag` Udon script which communicates with both the [Potato Chips Udon Script](#1-potato-chips-udon-script) and [Unpack Controller Udon Script](#1-unpack-controller-udon-script).

The object also includes `VRC Pickup`, `VRC Object Sync`, `Rigidbody`, and `Box Collider` components.

#### 1. Potato Chips Bag Udon Script

Inspector UI:

![Potato_Chips_Bag_Script](./Assets/Potato_Chips_Bag_Script.webp)

##### Potato Chips

Reference to the [Potato Chips Udon Script](#1-potato-chips-udon-script). Updates object visibility states when initialization occurs or when [Easy Unpack Mode](#easy-unpack-mode) is modified.

> :warning: **Warning**
>
> Do not modify unless you know what you're doing

##### Unpack Controller

Reference to the [Unpack Controller Udon Script](#1-unpack-controller-udon-script). When opening requests are made, this script bubbles the call up to [Potato Chips Udon Script](#1-potato-chips-udon-script) for verification.

> :warning: **Warning**
>
> Do not modify unless you know what you're doing

---

### 4. Unpack

Parent object for [PC/VR opening mechanics](#opening), containing the [Unpack Controller Udon Script](#1-unpack-controller-udon-script) which requests bag opening when conditions are met. Hides relevant child objects when [Easy Unpack Mode](#easy-unpack-mode) is active.

#### 1. Unpack Controller Udon Script

Inspector UI:

![Unpack_Controller_Script](./Assets/Unpack_Controller_Script.webp)

##### Unpack Transform VR

Reference transform for [VR opening mode](#opening). Disabled when [Easy Unpack Mode](#easy-unpack-mode) is active.

> :warning: **Warning**
>
> Do not modify unless you know what you're doing

##### Unpack Transform PC

Reference transform for [PC opening mode](#opening). Disabled when [Easy Unpack Mode](#easy-unpack-mode) is active.

> :warning: **Warning**
>
> Do not modify unless you know what you're doing

##### Potato Chips Bag

Reference to [Potato Chips Bag Udon Script](#1-potato-chips-bag-udon-script). Calls its Unpack public function when opening conditions are met.

> :warning: **Warning**
>
> Do not modify unless you know what you're doing

---

### 5. VR and Child Objects

Enabled when in [VR opening mode](#opening). Contains no components itself.

#### Unpack_Grab_1 and Unpack_Grab_2

Contains the [Unpack Grab Udon Script](#1-unpack-grab-udon-script) which determines if [VR opening](#opening) conditions are met and requests opening.

Also includes `VRC Pickup`, `Rigidbody`, and `Sphere Collider` components.

Child objects are directional indicator models using `lilToon` shader's `Distance Fade` feature for proximity-based visibility.

##### 1. Unpack Grab Udon Script

Determines opening conditions based on movement distance via `VRC Pickup`, then calls the corresponding function in [Unpack Controller Udon Script](#1-unpack-controller-udon-script).

Inspector UI:

![Unpack_Grab_Script](./Assets/Unpack_Grab_Script.webp)

###### Unpack Controller

Reference to [Unpack Controller Udon Script](#1-unpack-controller-udon-script). Calls its functions when opening conditions are met.

> :warning: **Warning**
>
> Do not modify unless you know what you're doing

###### Drag Distance

Required pull distance (in meters) to activate opening.

||Value|Notes|
|-|-|-|
|Type|`float`||
|Access|`private`||
|Sync|`Local`||

---

### 6. PC and Child Objects

Enabled when in [PC opening mode](#opening). Child object is an upward slider UI - dragging to the top calls opening functions.

Since UI can't gradually fade like [VR mode objects](#5-vr-and-child-objects), this includes an [Unpack PCUI Display Udon Script](#1-unpack-pcui-display-udon-script) for distance-based visibility that always faces the local player.

#### 1. Unpack PCUI Display Udon Script

Controls UI Canvas visibility within specified distances while maintaining player-facing orientation.

Inspector UI:

![Unpack_PCUI_Display_Script](./Assets/Unpack_PCUI_Display_Script.webp)

##### Ui Canvas

Reference to the UI Canvas Transform being controlled.

> :warning: **Warning**
>
> Do not modify unless you know what you're doing

##### Show Distance

Visibility range (meters). UI hides beyond this distance.

||Value|Notes|
|-|-|-|
|Type|`float`||
|Access|`private`||
|Sync|`Local`||

---

### 10. Chips

Parent object for individual chip GameObjects. Contains a Parent Constraint component to make it constraint to the [Potato Chips Bag](#2-potato-chips-bag).

#### Chip_1 etc.

Parent object for individual chips, enabled after opening. Children include the chip model (Mesh) and eating sound (Audio).

Contains a [Chip Udon Script](#1-chip-udon-script) controlling activation/deactivation and sound playback.

Also includes `VRC Pickup`, `VRC Object Sync`, `Rigidbody`, and `Sphere Collider` components for player interaction.

##### 1. Chip Udon Script

Controls chip visibility when grabbed, sound playback when released, and reset mechanics after [specified duration](#reset-duration).

Inspector UI:

![Chip_Script](./Assets/Chip_Script.webp)

###### Mesh Transform

Reference to the chip's Mesh Transform for visibility control.

> :warning: **Warning**
>
> Do not modify unless you know what you're doing

###### Audio Source

`Audio Source` component for crunch sounds.

> :warning: **Warning**
>
> Do not modify unless you know what you're doing

###### Reset Duration

Delay (seconds) before chip resets to bag after release.

||Value|Notes|
|-|-|-|
|Type|`float`||
|Access|`private`||
|Sync|`Local`||

<sub>End of Configuration Guide</sub>