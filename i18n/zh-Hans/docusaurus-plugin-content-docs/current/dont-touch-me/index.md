import DocCardList from '@theme/DocCardList';

# 莫挨老子 使用说明

<DocCardList />

## 更新日志

:::changelog

### v1.1.0

- 修复了锁定表情的动画条件导致轻微性能损失的问题。
- 修复了在已经锁定表情时切换其他锁定表情，不会立即切换的问题。
- 修复了仅有两个躲避表情时同步参数占用18bits而不是11bits的问题。
- 修复了旧版默认在场景中显示图标导致看不清楚的问题。
- 将 Prefab 中的 Modular Avatar 的 Parameters 组件和 Menu Item 组件删除，改为在进入 PlayMode 或者构建时自动生成。
- 新增在设定工具中自定义菜单项名称，菜单项模式的功能。可对开关躲避表情、开关随机表情、锁定表情的功能进行设定，以减少同步参数的占用。
- 在设定工具的自定义菜单项部分中添加一个同步参数占用提示，用于显示在当前的设定下该 gimmick 所占用的同步参数。

:::

:::changelog

### v1.0.3

- 修复头部碰撞在 Unity 重新启动之后重置的问题；在组件中添加手动重置头部碰撞的按钮。

:::

:::changelog

### v1.0.2

- 添加在 Play Mode 时可供测试的VRC PhysBone Collider；添加组件Logo。

:::

:::changelog

### v1.0.1

- 添加菜单图标；新增不兼容错误报告。

:::

:::changelog

### v1.0.0

- 发行

:::
