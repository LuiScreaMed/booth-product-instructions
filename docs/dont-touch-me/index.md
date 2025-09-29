import DocCardList from '@theme/DocCardList';

# Don't Touch Me Instructions

<DocCardList />

## Changelogs

:::changelog

### v1.1.0

1. Fixed a minor performance issue caused by the animation conditions of locked emotes.
1. Fixed an issue where switching to another locked emote did not take effect immediately if an emote was already locked.
1. Fixed an issue where having only two dodge emotes used 18 bits of sync parameters instead of 11 bits.
1. Fixed an issue where gizmos icons were displayed in the scene by default in older versions, making the scene hard to see.
1. Removed the Modular Avatar Parameters and Menu Item components from the Prefab, now automatically generated when entering PlayMode or building.
1. Added the ability to customize menu item names and menu item modes in the setup tool. You can configure toggle dodge emote, toggle random emote, and lock emote features to reduce sync parameter usage.
1. Added a sync parameter usage indicator to the custom menu item section of the setup tool, showing how many sync parameters this gimmick used under the current settings.

:::

:::changelog

### v1.0.3

1. Fixed an issue where the head collider would reset after restarting Unity; Added a button in the component to manually reset the head collider.

:::

:::changelog

### v1.0.2

1. Added VRC PhysBone Collider for testing in Play Mode; added component logo.

:::

:::changelog

### v1.0.1

1. Added menu icons; added incompatible gimmick error reporting.

:::

:::changelog

### v1.0.0

1. Release

:::
