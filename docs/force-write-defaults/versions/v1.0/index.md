---
sidebar_label: v1.0.*
---

# Force Write Defaults v1.0.* Instructions {ignore}

## Overview

This is a NDMF plugin that non-destructively forces a animator state writes defaults or not.

### Notes

- This package has only been tested with VRCSDK3 and Unity 2022.3.22f1.

<sub>Overview end</sub>

---

## Installation

### Dependencies

This package depends on the following packages. Make sure you have installed it before installing this package.

- Non-Destructive Modular Framework (1.11.0 or higher): https://github.com/bdunderscore/ndmf

---

### Installing Package

1. Go to [our vpm package listing page](https://luiscreamed.github.io/VPM-Package-Listing/).
1. Click on `Add to VCC` button to add the repository into VCC/ALCOM.
1. In VCC/ALCOM, go to the project's manage page and install `Force Write Defaults`.

<sub>Installation end</sub>

---

## How to Use

This plugin supports overriding animator states' write defaults with State Behaviour or state name marks, State Behaviour method has higher priority.

### Override Write Defaults with State Behaviour

1. Select states that need to be override in Animator;
1. Go to Inspector and click on `Add Behaviour`;
1. Search for `Force Write Defaults` and add it to the selected state;
1. Check / Uncheck the `Write Defaults` field in the added `Force Write Defaults` to override the write defaults.

### Override Write Defaults with State Name Mark

1. Select states that need to be override in Animator;
1. Go to Inspector and edit the name of the selected state, Add `(WD On)`/`(WD Off)`(Case-insensitive) at the end of the name to override the write defaults.

### Done

Enter play mode or build the avatar to see the result.

<sub>How to Use end</sub>

---

## How Does It Work

This plugin runs in NDMF's optimizing phase.

### What Does It Do

When it runs, It:

1. Searchs for every Animator State and Animator State Machine in avatar;
1. Finds out if there's any `Force Write Defaults` in that state or state machine;
1. If there's any `Force Write Defaults` in the state, or the state's name ends with `(WD On)`/`(WD Off)`, overrides it's write defaults;
1. Destroy `Force Write Defaults` in the state or state machine.

<sub>How Does It Work end</sub>
