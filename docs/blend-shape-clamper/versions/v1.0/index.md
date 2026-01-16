---
sidebar_label: v1.0.*
---

# Blend Shape Clamper v1.0.* Instructions {ignore}

## Overview

This is a NDMF plugin that non-destructively clamps blendshapes.

This plugin recalculates blendshape deformation so that a value of 100 produces the same result as the original specified percentage.

Generally used to prevent clipping caused by other shape keys after adjusting facial shape keys.

### Features

- Non-destructively clamp blend shapes with a component.
- Preview blend shapes when configuring.
- Also handle blend shape values in animation clips.

### Notes

- This package has only been tested with VRCSDK3 and Unity 2022.3.22f1.

<sub>Overview end</sub>

---

## Installation

### Dependencies

This package depends on the following packages. Make sure you have installed it before installing this package.

- Non-Destructive Modular Framework (1.9.4 or higher): https://github.com/bdunderscore/ndmf

---

### Installing Package

1. Go to [our vpm package listing page](https://luiscreamed.github.io/VPM-Package-Listing/).
1. Click on `Add to VCC` button to add the repository into VCC/ALCOM.
1. In VCC/ALCOM, go to the project's manage page and install `Blend Shape Clamper`.

<sub>Installation end</sub>

---

## How to Use

### Adding Component

1. Select the skinned mesh renderer with blend shapes about to clamp in your avatar.
1. Click on `Add Component` in inspector.
1. Search for `Blend Shape Clamper` and add it to game object.

### Configuring Blend Shape Clamps

After adding the clamper component:

1. Click on the `+` icon at the bottom right of the `Blendshapes to clamp` list to add a new clamp item.
1. Click on the selector in the left of the clamp item, and select the blend shape to clamp.
1. Adjust the slider in the right of the clamp item, to configure the clamp value, and to preview the clamp result.
1. Click on the `Stop Previewing` button or select other game object to stop previewing.

### Done

Enter play mode or build the avatar to see the result.

<sub>How to Use end</sub>

---

## How Does It Work

This plugin runs in NDMF's optimizing phase.

### What Does It Do

When it runs, It does:

1. Searchs for every clamper component in avatar.
1. Clamps blendshapes and handle their values in skinned mesh renderers in the same game object with clamper components.
1. Handles animations which contains animation curves controlling clamped blend shapes.

### Value Overwrite Rules

The values of clamped blend shapes (Both in skinned mesh renderers and animations) will be overwritten by the following rules:

1. When the original value is equal with or larger than the clamped value, overwrite it to 100.
    Example:

    ```
    Original value: 80
    Clamped to: 70
    Result: 100
    ```

1. When the original value is smaller than the clamped value, overwrite it to (original value / clamped value *100)
    Example:

    ```
    Original value: 50
    Clamped to: 70
    Result: 50 / 70 * 100 ≈ 71.4286
    ```

<sub>How Does It Work end</sub>
