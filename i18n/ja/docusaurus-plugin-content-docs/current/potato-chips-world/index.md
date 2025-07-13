---
sidebar_label: ポテトチップス（ワールドバージョン）
---

# ポテトチップス（ワールドバージョン） v1.0 使用説明書 {ignore}

>:warning: **注意**
>
>こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

## インポート手順

### インポート前の準備

このギミックは、以下の Shader に依存しています。インポートする前に必ずインストールしてください：

- lilToon (1.8.3以上): https://lilxyzw.github.io/lilToon/#/

本ギミックは Unity 2022.3.22f1 及び VRChat SDK 3.8.0 でテスト済みです

---

### ポテトチップスをシーンに追加

`Potato Chips (World).unitypackage` を Unity の `Project` ウィンドウにドラッグし、表示されるポップアップの `Import` をクリックしてワールドプロジェクトにインポートします：

![Import](./Assets/Import.webp)

インポート後、`Assets/LuiStudio/Potato Chips (World)/Potato Chips.prefab` をProjectウィンドウからシーンにドラッグします。

<sub>インポート手順終了</sub>

---

## 機能説明

本 Udon ギミックは VRChat ワールド内でポテトチップスの「移動/開封/食べる/だす」機能を実装しています：

### 移動

- `VRC Pickup` コンポーネントにより、プレイヤーはポテトチップス袋を持ち上げ/置く/投げることが可能
- `VRC Object Sync` コンポーネントにより、インスタンス間で同期されます

### 開封

PC・VR・`VRC Pickup` コンポーネントの「使用」機能による3種類の開封方法を実装しています。

`VRC Pickup` コンポーネントを使用する開封方法を「簡易開封モード」と呼びます。

- `PC開封方法` - PCプレイヤーの視界に上向き矢印の「スライダー」UIが表示されます：

  ![PC_Unpack](./Assets/PC_Unpack.webp)
  
  矢印をスライダーの最上部までドラッグすると開封されます。
- `VR開封方法` - VRプレイヤーの視界に外側を向いた2つの矢印が表示されます：

  ![VR_Unpack](./Assets/VR_Unpack.webp)

  両手で各矢印を掴み、外側に引っ張ることで開封します。引き離しの有効距離は[Drag Distance](#drag-distance)で設定可能です。
- `簡易開封モード` - [簡易開封モード](#easy-unpack-mode)が有効な場合、上記UIは非表示となり、代わりにポテトチップス袋を持った状態でPCのマウス左クリックまたはVRコントローラーのトリガーを押すことで開封できます。

> 開封後、ポテトチップス袋のコライダーは約 1/4 サイズに縮小され、袋内のチップスの `VRC Pickup` コンポーネントとの干渉を防ぎます。[重力影響](#use-gravity)が有効な状態で袋を逆さにすると地面に沈む場合がありますが、これは正常な挙動です。

### 食べる

ポテトチップス袋には 12 枚のチップスが含まれており、各々`Chip`スクリプトで制御されています。
初期状態ではチップスのメッシュは非表示ですが、開封後に袋から取り出すとメッシュが表示されます。
マウス左クリックまたはVRコントローラーのトリガーを離すと、チップスの位置で咀嚼音が再生され、メッシュが非表示になります。その後 3 秒間は拾えず、3秒後に元の位置にリセットされて再び拾えるようになります。
リセット時間を調整する場合は [Reset Duration](#reset-duration) を変更してください。

### だす

[だす機能の有効化](#enable-pouring)設定と袋の向きに応じてチップスを出します。
袋の開口部が地面との角度[出すの角度](#pour-angle)より小さくなった状態でプレイヤーが保持している場合、チップスが出されます。

<sub>機能説明終了</sub>

---

## 設定説明

本節ではポテトチップスギミックの Udon スクリプト設定について説明します。

ポテトチップスの Hierarchy は以下の通りです：

![Hierarchy](./Assets/Hierarchy.webp)

|id|クイックジャンプ|概要|
|-|-|-|
|1|[Potato Chips](#1-potato-chips)|ポテトチップス全体の親オブジェクト|
|2|[Potato Chips Bag](#2-potato-chips-bag)|ポテトチップス袋の親オブジェクト|
|3|Armature_Chips_Bag...|ポテトチップス袋のモデル|
|4|[Unpack](#4-unpack)|開封ロジックの親オブジェクト|
|5|[VR 及び子オブジェクト](#5-vr-及び子オブジェクト)|VR 開封モードのロジック親オブジェクト|
|6|[PC 及び子オブジェクト](#6-pc-及び子オブジェクト)|PC 開封モードのロジック親オブジェクト|
|7|Particles|チップス出す時のパーティクル親オブジェクト|
|8|Audio|開封音效のオーディオコンポーネント|
|9|Chips_Parent|Chips オブジェクトの Parent Constraint ソース|
|10|[Chips](#10-chips)|チップス親オブジェクト|

---

### 1. Potato Chips

本ゲームオブジェクトはポテトチップスギミック全体の親オブジェクトで、主要設定を行う `Potato Chips` Udon スクリプトとアニメーションを制御する `Animator` コンポーネントを含みます。

#### 1. Potato Chips Udon スクリプト

`Potato Chips` Udon スクリプトの Inspector UI は以下の通りです：

![Potato_Chips_Script](./Assets/Potato_Chips_Script.webp)

##### Is Unpacked

ポテトチップス袋の開封状態を表します。`true` で開封状態になります。

||値|説明|
|-|-|-|
|型|`bool`||
|アクセス修飾子|`private`||
|同期タイプ|`同期`||
|公開取得関数|あり|`GetIsUnpacked: bool`|
|公開設定関数|あり|`Unpack: void`, `Pack: void`|
|変更コールバック|なし||

> 変更コールバックは将来のバージョンで追加される可能性があります

##### Easy Unpack Mode

[簡易開封モード](#開封)の有効/無効を設定します。有効時、プレイヤーは `VRC Pickup` コンポーネントの「使用」機能で開封できます。

||値|説明|
|-|-|-|
|型|`bool`||
|アクセス修飾子|`private`||
|同期タイプ|`ローカル`||
|公開取得関数|あり|`GetIsEasyUnpackMode: bool`|
|公開設定関数|あり|`EnableEasyUnpackMode: void`, `DisableEasyUnpackMode: void`|
|変更コールバック|なし||

> 変更コールバックは将来のバージョンで追加される可能性があります

##### Easy Unpack Mode Use Text

[簡易開封モード](#開封)有効時に表示される「使用」テキストです。

||値|説明|
|-|-|-|
|型|`string`||
|アクセス修飾子|`private`||
|同期タイプ|`ローカル`||
|公開取得関数|あり|`GetEasyUnpackModeUseText: string`|
|公開設定関数|あり|`EnableEasyUnpackMode: void`, `DisableEasyUnpackMode: void`|
|変更コールバック|なし||

> 変更コールバックは将来のバージョンで追加される可能性があります

##### Enable Pouring

[チップスだす機能](#だす)の有効/無効を設定します。有効時、袋の開口部が[出すの角度](#pour-angle)より下向きになった状態で保持されているとチップスが出されます。

||値|説明|
|-|-|-|
|型|`bool`||
|アクセス修飾子|`private`||
|同期タイプ|`同期`||
|公開取得関数|なし||
|公開設定関数|あり|`EnablePouring: bool`, `DisablePouring: bool`|
|変更コールバック|なし||

> 変更コールバックは将来のバージョンで追加される可能性があります

##### Pour Angle

チップスだす判定角度です。袋の開口部が地面との角度がこの値より小さく、[チップスだす機能有効](#enable-pouring)かつ保持状態の場合に出されます。

||値|説明|
|-|-|-|
|型|`float`||
|アクセス修飾子|`public`||
|同期タイプ|`ローカル`||
|公開取得関数|なし||
|公開設定関数|なし||
|変更コールバック|なし||

> 変更コールバックは将来のバージョンで追加される可能性があります

##### Potato Chips Bag

> :warning: **注意**
>
> 特別な理由がない限り変更しないでください

[Potato Chips Bag Udonスクリプト](#2-potato-chips-bag)への参照です。チップスだす機能判定や簡易開封モード変更時の表示更新に使用されます。

##### Use Gravity

ポテトチップス袋の重力影響設定です。[Potato Chips Bag](#2-potato-chips-bag)の `Rigidbody` コンポーネントに直接反映されます。

||値|説明|
|-|-|-|
|型|`bool`||
|アクセス修飾子|`private`||
|同期タイプ|`ローカル`||
|公開取得関数|あり|`GetChipsBagPhysicSettings: bool[]`|
|公開設定関数|なし||
|変更コールバック|なし||

> 初期化専用変数のため、設定関数は現時点で予定されていません。要望がある場合は LuiStudio まで

##### Is Kinematic

ポテトチップス袋の物理演算設定です。[Potato Chips Bag](#2-potato-chips-bag)の `Rigidbody` コンポーネントに直接反映されます。

||値|説明|
|-|-|-|
|型|`bool`||
|アクセス修飾子|`private`||
|同期タイプ|`ローカル`||
|公開取得関数|あり|`GetChipsBagPhysicSettings: bool[]`|
|公開設定関数|なし||
|変更コールバック|なし||

> 初期化専用変数のため、設定関数は現時点で予定されていません。要望がある場合はLuiStudioまで

---

### 2. Potato Chips Bag

ポテトチップス袋・開封ロジック・チップスだすパーティクル・開封音效・チップス制御の親オブジェクトです。`Potato Chips Bag` Udon スクリプトを含み、[Potato Chips](#1-potato-chips)スクリプトと[Unpack Controller](#1-unpack-controller-udon-スクリプト)スクリプトと連携します。

`VRC Pickup`、`VRC Object Sync`、`Rigidbody`、`Box Collider` コンポーネントも含みます。

#### 1. Potato Chips Bag Udon スクリプト

本スクリプトの Inspector UI は以下の通りです：

![Potato_Chips_Bag_Script](./Assets/Potato_Chips_Bag_Script.webp)

##### Potato Chips

[Potato Chips Udon スクリプト](#1-potato-chips-udon-スクリプト)への参照です。簡易開封モード変更時の表示更新に使用されます。

> :warning: **注意**
>
> 特別な理由がない限り変更しないでください

##### Unpack Controller

[Unpack Controller Udon スクリプト](#1-unpack-controller-udon-スクリプト)への参照です。開封要求を [Potato Chips](#1-potato-chips) スクリプトに伝達します。

> :warning: **注意**
>
> 特別な理由がない限り変更しないでください

---

### 4. Unpack

[PC/VR開封モード](#開封)ロジックの親オブジェクトです。[Unpack Controller Udon スクリプト](#1-unpack-controller-udon-スクリプト)を含み、開封条件を満たすと[Potato Chips Bag](#2-potato-chips-bag)スクリプトの開封関数を呼び出します。
[簡易開封モード](#easy-unpack-mode)有効時、対応する子オブジェクトを非表示にします。

#### 1. Unpack Controller Udon スクリプト

Unpack Controller Udon スクリプトの Inspector UI は以下の通りです：

![Unpack_Controller_Script](./Assets/Unpack_Controller_Script.webp)

##### Unpack Transform VR

[VR開封モード](#開封)の Transform 参照です。[簡易開封モード](#easy-unpack-mode)有効時、非表示になります。

> :warning: **注意**
>
> 特別な理由がない限り変更しないでください

##### Unpcak Transform PC

[PC開封モード](#開封)の Transform 参照です。[簡易開封モード](#easy-unpack-mode)有効時、非表示になります。

> :warning: **注意**
>
> 特別な理由がない限り変更しないでください

##### Potato Chips Bag

[Potato Chips Bag Udonスクリプト](#1-potato-chips-bag-udon-スクリプト)への参照です。開封条件達成時に開封関数を呼び出します。

> :warning: **注意**
>
> 特別な理由がない限り変更しないでください

---

### 5. VR 及び子オブジェクト

[VR開封モード](#開封)用の親オブジェクトです。コンポーネントは含みません。

#### Unpack_Grab_1 と Unpack_Grab_2

[VR開封モード](#開封)の開封条件判定を行う[Unpack Grab Udonスクリプト](#1-unpack-grab-udon-スクリプト)を含みます。

`VRC Pickup`、`Rigidbody`、`Sphere Collider` コンポーネントも含みます。

子オブジェクトは開封方向を示すモデルで、`lilToon` シェーダーの `Distance Fade` 機能で距離に応じた表示制御を行います。

##### 1. Unpack Grab Udon スクリプト

`VRC Pickup` コンポーネントの移動距離から開封条件を判定し、[Unpack Controller](#1-unpack-controller-udon-スクリプト)の開封関数を呼び出します。

Inspector UI は以下の通りです：

![Unpack_Grab_Script](./Assets/Unpack_Grab_Script.webp)

###### Unpack Controller

[Unpack Controller Udonスクリプト](#1-unpack-controller-udon-スクリプト)への参照です。開封条件達成時に開封関数を呼び出します。

> :warning: **注意**
>
> 特別な理由がない限り変更しないでください

###### Drag Distance

開封に必要な引き離し距離(メートル)です。

||値|説明|
|-|-|-|
|型|`float`||
|アクセス修飾子|`private`||
|同期タイプ|`ローカル`||

---

### 6. PC 及び子オブジェクト

[PC開封モード](#開封)用の親オブジェクトです。
子オブジェクトは上向き矢印のスライダー UI で、最上部まで移動させると開封します。

距離によるフェード表示ができないため、[Unpack PCUI Display Udonスクリプト](#1-unpack-pcui-display-udon-スクリプト)で表示制御とプレイヤー面向き制御を行います。

#### 1. Unpack PCUI Display Udon スクリプト

指定距離内で UI を表示し、常にプレイヤー方向を向くように制御します。

Inspector UI は以下の通りです：

![Unpack_PCUI_Display_Script](./Assets/Unpack_PCUI_Display_Script.webp)

##### Ui Canvas

表示制御する UI キャンバスの Transform 参照です。

> :warning: **注意**
>
> 特別な理由がない限り変更しないでください

##### Show Distance

UI 表示範囲(メートル)です。この距離を超えると非表示になります。

||値|説明|
|-|-|-|
|型|`float`||
|アクセス修飾子|`private`||
|同期タイプ|`ローカル`||

---

### 10. Chips

個々のチップスの親オブジェクトです。`Parent Constraint`コンポーネントで[Potato Chips Bag](#2-potato-chips-bag)に追従します。

#### Chip_1 等

個々のチップスオブジェクトです。開封後に有効化されます。
子オブジェクトはチップスモデルと咀嚼音效用オーディオです。

[Chip Udon スクリプト](#1-chip-udon-スクリプト)で表示/音效再生/リセットを制御します。

`VRC Pickup`、`VRC Object Sync`、`Rigidbody`、`Sphere Collider` コンポーネントも含みます。

##### 1. Chip Udon スクリプト

開封後のチップス表示・音效再生・リセット処理を制御します。

Inspector UI は以下の通りです：

![Chip_Script](./Assets/Chip_Script.webp)

###### Mesh Transform

チップスメッシュの Transform 参照です。表示/非表示に使用します。

> :warning: **注意**
>
> 特別な理由がない限り変更しないでください

###### Audio Source

咀嚼音を再生する `Audio Source` コンポーネントです。

> :warning: **注意**
>
> 特別な理由がない限り変更しないでください

###### Reset Duration

チップスがリセットされるまでの時間(秒)です。

||値|説明|
|-|-|-|
|型|`float`||
|アクセス修飾子|`private`||
|同期タイプ|`ローカル`||

<sub>設定説明終了</sub>