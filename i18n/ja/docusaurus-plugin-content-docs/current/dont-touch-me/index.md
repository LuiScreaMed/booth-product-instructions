---
sidebar_label: さわらないで
---

# さわらないで v1.0 使用説明書 {ignore}

:::warning

こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

:::

## ギミック紹介

本ギミックは [Non-Destructive Modular Framework](https://github.com/bdunderscore/ndmf) と [Modular Avatar](https://github.com/bdunderscore/modular-avatar) を使用し、**非破壊的**にアバターの頭部が他のプレイヤーの両手の接近時に回避動作を行い、回避時にツールで定義された表情を再生する機能を実現しています。

具体的には、アバターの頭骨に PhysBone を備えた頭骨代理を挿入することで、他のプレイヤーの手部が近づいたときに回避動作を行う仕組みとなっています。

### 注意事項

- 本ギミックは VRCSDK3、Unity 2022.3.22f1 環境でのみテストされています。
- 本ギミックはヒューマノイド（Humanoid）かつ頭骨が存在するアバターのみ対応しています。
- 本ギミックはアバターのボーン階層を変更するため、他のギミック（例えば取り外し可能な頭部ギミックなど）と競合する可能性があります。
- **メニュー項目の名称以外は、プレハブの内容を変更・削除しないでください。**

<sub>ギミック紹介終了</sub>

---

## インポート手順

### インポート前の準備

このギミックは、以下の Unity プラグインに依存しています。 インポートする前に、次のプラグインがインストールされていることを確認してください：

- Modular Avatar (1.12.0以上): https://modular-avatar.nadena.dev/

---

### アセットパッケージのインポート

`Don't Touch Me.unitypackage` を Unity の `Project` ウィンドウにドラッグし、プロンプトが表示されたら `Import` をクリックして、アセットパッケージを Avatar プロジェクトにインポートします：

![Import](./Assets/Import.webp)

---

#### 1. Prefab の追加

`Assets/LuiStudio/Don't Touch Me/Dont't Touch Me.prefab` を Project ウィンドウから Hierarchy 内のアバターの下にドラッグ＆ドロップしてください：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. ギミックの設定

Prefab を追加すると、アバターの頭部に白い球状のワイヤーフレームが表示されます：

![Head_Collider_Indicator](./Assets/Head_Collider_Indicator.webp)

:::warning

白い球状のワイヤーフレームが表示されない場合は、現在のウィンドウがシーンビューであること、そしてシーンビュー右上の Gismos が有効になっていることを確認してください。

アバターに `VRC Avatar Descriptor` コンポーネントが存在しない場合、`Animator` コンポーネントが存在しない場合、または `Animator` に Humanoid アバターが設定されていない場合、頭部コライダーは座標 `(0, 0, 0)` に表示されます。しかし、アバターが要件を満たしていないため、頭部コライダーを編集することはできません。

:::

##### 1. 頭部コライダーの位置とサイズを調整

Hierarchy で `Don't Touch Me`<sup>[1]</sup> を選択し、Inspector で `Don't Touch Me Setup Tool` コンポーネント<sup>[2]</sup> を見つけて、コンポーネント内の `編集 頭部コライダー` ボタン<sup>[3]</sup> をクリックします：

![Edit_Head_Collider](./Assets/Edit_Head_Collider.webp)

`編集 頭部コライダー` をクリックすると、白い球状のワイヤーフレームの中央にトランスフォームツールが表示されます。`移動` と `スケール` ツール<sup>[1]</sup> を使って、位置とサイズを調整してください：

![Edit_Head_Collider_1](./Assets/Edit_Head_Collider_1.webp)

調整が完了したら、任意のゲームオブジェクトを選択するか、Inspector 内の `DTM Head Transformer` コンポーネントの `適用` ボタン<sup>[1]</sup> をクリックして調整を終了します：

![Edit_Head_Collider_Finish](./Assets/Edit_Head_Collider_Finish.webp)

##### 2. よりスムーズな回避を有効にする（オプション）

「よりスムーズな回避」とは、ギミックが PhysBone コンポーネントを生成する際に、Stiffness を使用して頭部の動きをより滑らかにするかどうかを指します。

`Don't Touch Me Setup Tool` コンポーネント内で `よりスムーズな回避`<sup>[1]</sup> にチェックを入れることで、この機能を有効にできます：

![Smoothing_Toggle](./Assets/Smoothing_Toggle.webp)

:::warning

よりスムーズな回避を有効にすると、頭部が移動する際（特に移動方向の変化時）に、慣性の影響で頭部が回転することがあります（特に PC プラットフォームで顕著です）。

:::

##### 3. 回避表情を追加する（オプション）

回避表情とは、回避動作を行う際に再生される表情のことで、`Blendshape` アニメーションによって実現されます。複数の表情を追加することができ、それらを回避のたびに「順番に再生」「ランダムに再生」「特定の表情を固定して再生」するように設定できます。

###### 1. 表情に関する注意事項

表情の数に応じて、メニュー構成および同期パラメータの使用量が以下のように異なります：

|表情数|メニュー内容|同期パラメータ使用量|
|-|-|-|
|0|回避機能のオン／オフ用のメインスイッチのみ|1 bit|
|1|メインスイッチと表情スイッチを含むサブメニュー|2 bits|
|2|メインスイッチ、表情スイッチ、固定表情サブメニューを含むサブメニュー|11 bits|
|>2|メインスイッチ、表情スイッチ、ランダム表情スイッチ、固定表情サブメニューを含むサブメニュー|19 bits|

設定された表情リストの中に、必要な Blendshape が存在しない表情は自動的に削除されます。

###### 2. 表情を追加する

`Don't Touch Me Setup Tool` コンポーネント内の表情リスト右下にある `+` ボタン<sup>[1]</sup> をクリックして、新しい表情を追加します：

![Add_Emote](./Assets/Add_Emote.webp)

###### 3. 表情の BlendShape を追加する

追加した表情の BlendShape リスト右下にある `+` ボタン<sup>[1]</sup> をクリックして、新しい表情用 BlendShape を追加します：

![Add_Blendshape](./Assets/Add_Blendshape.webp)

<span id="Add_Blendshape_Finish"></span>

新しい BlendShape を追加すると、リストは以下のようになります（画像内の番号は下記にて説明）：

![Add_Blendshape_Finish](./Assets/Add_BlendShape_Finish.webp)

追加されたエントリには以下の項目があります：

- `メッシュ`<sup>[1]</sup>：再生したい BlendShape が存在する `Skinned Mesh Renderer`；
- `BlendShape`<sup>[2]</sup>：再生したい BlendShape の名前；
- `ウェイト`<sup>[3]</sup>：その BlendShape を再生する際のウェイト値です。

BlendShape を含む Skinned Mesh Renderer がアタッチされた GameObject を `メッシュ`<sup>[1]</sup> にドラッグし、`BlendShape`<sup>[2]</sup> から再生したい BlendShape を選択し、`ウェイト`<sup>[3]</sup> を調整します。

ウェイトを調整すると Unity は自動的にアニメーションモードに入り、表情の効果をリアルタイムで確認できます：

![Emote_Preview](./Assets/Emote_Preview.webp)

`プレビュー`<sup>[[4]](#Add_Blendshape_Finish)</sup> のチェックを外すか、他の GameObject を選択すると表情のプレビューが解除されます。

##### 4. その他の設定

###### 1. サブメニューやスイッチの円盤メニュー内の位置を変更する（オプション）

本ギミックのサブメニューはデフォルトでルートメニューの直下に配置されており、多機能なアバターでは使いづらい場合があります。`MA Menu Installer` コンポーネントを編集して、サブメニューやスイッチの配置場所を変更できます：

- Hierarchy で `Don't Touch Me` を選択
- Inspector で `MA Menu Installer` コンポーネントを見つけ、`Select Menu` ボタンをクリック
- サブメニューやスイッチを配置したいメニューを選択

:::note

表情を追加していない場合、ギミックは元のサブメニューをスイッチに置き換えます。詳細は [表情に関する注意事項](#1-表情に関する注意事項) をご参照ください。

:::

<sub>インポート手順終了</sub>

---

## 使用方法

「さわらないで」のインポートが完了しました。次に VRChat での使用方法を説明します。

### 回避機能の有効化・無効化

|表情数|方法|
|-|-|
|0|アクションメニューを開き、`Don't Touch Me` スイッチを見つけて切り替えることで回避機能を有効/無効にします|
|>0|アクションメニューを開き、`Don't Touch Me` サブメニューに入り、サブメニュー内の `Don't Touch Me` スイッチで回避機能を有効/無効にします|

### 回避表情の有効化・無効化（回避表情がある場合のみ）

アクションメニューを開き、`Don't Touch Me` サブメニューに入り、サブメニュー内の `Enable Emotes` スイッチで回避表情の再生を有効/無効にします。

### ランダム回避表情の有効化・無効化（回避表情数が2を超える場合のみ）

デフォルトでは、回避時に表情リストの順番通りに回避表情が再生されますが、ランダム表情を有効にするとリストからランダムに表情が選ばれて再生されます。

アクションメニューを開き、`Don't Touch Me` サブメニューに入り、サブメニュー内の `Random Emote` スイッチでランダム回避表情の有効/無効を切り替えます。

### 回避表情の固定（回避表情数が2以上の場合のみ）

回避表情を固定すると、回避するたびに指定した表情が再生されます。

アクションメニューを開き、`Don't Touch Me/Lock Emote` サブメニューに入り、サブメニュー内の `Emote` スイッチで固定したい表情を選択します。

<sub>使用方法終了</sub>
