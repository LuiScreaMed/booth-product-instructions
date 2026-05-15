import DocCardList from '@theme/DocCardList';

# RIP AFK Instructions

<DocCardList />

## Changelogs

:::changelog

### v2.0.1

- Fixed an issue that could prevent the Avatar from compiling and uploading.

:::

:::changelog

### v2.0.0

- Refactored part of the gimmick logic.
- Added an Editor Only indicator mesh for previewing the position and scale of the stone model.
- Added an optional toggle feature for switching between the avatar’s original AFK state and RIP AFK.
- Added a simple custom parameter toggle creation feature for users who only need a basic RIP AFK switch without manually creating toggles.
- Added a force off object list for forcibly disabling objects that do not contain specific components during animations, mainly for manually resolving certain Write Defaults Off compatibility issues.
- Fixed an issue where the stone model would remain visible in some cases.
- Fixed an invisibility issue caused by Animator culling when a player entered or exited AFK outside another player's view.
- Fixed an issue where Write Defaults Off avatars could become invisible after exiting RIP AFK outside another player's view.

:::

:::changelog

### v1.1.1

- Attempted to prevent an issue where players become invisible when AFK while new players join the instance.

:::

:::changelog

### v1.1.0

- Added custom parameter feature to play AFK animation via menu toggles or other logic.

:::

:::changelog

### v1.0.0

- Release

:::
