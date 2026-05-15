import DocCardList from '@theme/DocCardList';

# RIP AFK 使用说明

<DocCardList />

## 更新日志

:::changelog

### v2.0.0

- 重构了插件的部分逻辑。
- 新增了一个用于预览石碑模型位置和大小的 Editor Only 指示网格。
- 新增一个可选的用于在模型本身的 AFK 和 RIP AFK 之间切换的开关功能。
- 新增自定义参数的创建简单开关功能，满足仅需要简单开关 RIP AFK，免于手动制作开关的需求。
- 新增一个强制关闭对象列表，用于再动画中强制关闭不包含指定组件的对象，主要用于用户手动兼容特定 Write Defaults Off 问题。
- 修复了某些情况下石碑模型一直显示的问题。
- 修复了玩家不在他人面前进入或退出 AFK 时因 Animator 的剔除机制导致的玩家隐身问题。
- 修复了 Write Defaults Off 的 Avatar 在其他玩家视野外退出 RIP AFK 导致隐身的问题。

:::

:::changelog

### v1.1.1

- 尝试防止玩家在AFK状态的同时有新玩家加入实例时隐形的问题。

:::

:::changelog

### v1.1.0

- 添加了自定义参数功能，用于通过菜单开关或者其他逻辑播放 AFK 动画。

:::

:::changelog

### v1.0.0

- 发行

:::
