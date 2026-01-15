---
sidebar_label: Rocket Puncher
---

# Rocket Puncher v1.0 Instructions {ignore}

## Installation Instructions

### Dependencies

This gimmick depends on the following packages. Make sure you have installed them before you install this gimmick.

- Modular Avatar (1.11.0 or higher): https://modular-avatar.nadena.dev/
- lilToon (1.8.3 or higher): https://lilxyzw.github.io/lilToon/#/

---

### Importing Unity Package

Drag `Rocket Puncher.unitypackage` into `Project` window, click the `Import` button on the dialog to import the package to your avatar project:

![Import](./Assets/Import.webp)

---

### Adding Rocket Puncher to Your Avatar

#### 1. Add the Prefab to Scene

Find and drag `Assets/LuiStudio/Rocket Puncher/Rocket Puncher.prefab` from product window into your avatar inside hierarchy:

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. Setup the Rocket Puncher

After the dragging, the rocket puncher will show up on the right side of your avatar, 1m from the ground:

![Rocket_Puncher_Default_Position](./Assets/Rocket_Puncher_Default_Position.webp)

##### 1. Adjust the Position for the Rocket Puncher

Select `Rocket Puncher/Model`<sup>[1]</sup> in hierarchy and use `Move Tool`, `Rotate Tool` and `Scale Tool`<sup>[2]</sup> to adjust it's position, rotation and size:

![Adjust_Position](./Assets/Adjust_Position.webp)

Place the rocket puncher to your right hand:

![Position_Example](./Assets/Position_Example.webp)

##### 3. Extra Setup

###### 1. Change the Submenu Location in Action Menu (Optional)

By default, the submenu for rocket puncher is at the root of Action Menu, which is not friendly to avatars having lots of gimmicks. We can change the location by setting up `MA Menu Installer` component:

- Select the rocket puncher in Hierarchy window
- Go to Inspector, click on the `Select Menu` button in `MA Menu Installer` component
- Select the menu where you want to place the submenu into

###### 2. Hide the Rocket Puncher in VRChat Avatar Preview (Optional)

The avatar preview in VRChat shows the final state of the avatar in Unity. Which means, if the rocket puncher has not been disabled in Unity, it would also be shown in VRChat avatar preview. We can hide the rocket puncher in Unity and VRChat avatar preview by doing these:

- Select `Rocket Puncher/Model` and `Rocket Puncher/PB` in Hierarchy window
- Uncheck the checkbox at the top of Inspector (Disable the rocket puncher)

<sub>Installation Instructions end</sub>

---

## How to Use

You've done the installation, it's time to try it out in VRChat.

### Show/Hide the Rocket Puncher

Open the Action Menu, find and enter the `Rocket Puncher` submenu, the `Rocket Puncher` toggle shows/hides the rocket puncher.

### Pop out(Fire) the Boxing Glove

Grab the `rear grip`<sup>[1]</sup> with your left hand would drive the rocket puncher into `Standby` state. At this point, when you make your `right hand` into fist, the boxing glove will pop out. When your `right hand` is no longer a fist, the glove will return.

![Rocket_Puncher_Grip](./Assets/Rocket_Puncher_Grip.webp)

### Change the Standby Mode of the Rocket Puncher

There are 2 more toggles inside the `Rocket Puncher` submenu:

- `Standby when gripped` - Controls whether the 'cap' in front opens when the `rear grip` is grabbed
- `Standby after punching` - Controls whether the 'cap' stays open after the boxing glove returns

<sub>How to Use end</sub>