---
sidebar_label: レモンティー
---

# レモンティー v1.0 使用説明書 {ignore}

>:warning: **注意**
>
>こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

## 目次 {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [インポート手順](#インポート手順)
  - [インポート前の準備](#インポート前の準備)
  - [アセットパッケージのインポート](#アセットパッケージのインポート)
  - [レモンティーのインポート](#レモンティーのインポート)
    - [1. Prefab のインポート](#1-prefab-のインポート)
    - [2. 位置調整](#2-位置調整)
      - [1. Avatar の Animator Controller の変更](#1-avatar-の-animator-controller-の変更)
      - [2. アニメーションプレビューを有効化](#2-アニメーションプレビューを有効化)
      - [3. レモンティーの位置を調整](#3-レモンティーの位置を調整)
      - [4. レモンティーを握るジェスチャーの調整](#4-レモンティーを握るジェスチャーの調整)
      - [5. 絞り動作時のジェスチャーの調整](#5-絞り動作時のジェスチャーの調整)
      - [6. プレビュー状態を終了し、Animator Controllerを元に戻す](#6-プレビュー状態を終了しanimator-controllerを元に戻す)
      - [7.（オプション）レモンティーを非表示にする](#7オプションレモンティーを非表示にする)
      - [8. 口部レシーバーの位置を調整](#8-口部レシーバーの位置を調整)
    - [インポート完了](#インポート完了)
- [使用方法](#使用方法)
  - [基本的な使用方法](#基本的な使用方法)
  - [握り拳で箱を絞るバージョンを使用している場合](#握り拳で箱を絞るバージョンを使用している場合)
- [その他](#その他)
  - [メニュー内でのスイッチの位置を変更](#メニュー内でのスイッチの位置を変更)

<!-- /code_chunk_output -->


## インポート手順

### インポート前の準備

この拡張機能は、以下の Unity プラグイン/シェーダーに依存しています。 インポートする前に、次のプラグインがインストールされていることを確認してください：

- Modular Avatar (1.9.13以上): [Modular Avatar](https://modular-avatar.nadena.dev/)
- lilToon (1.7.3以上): [lilToon](https://lilxyzw.github.io/lilToon/#/)

<sub>インポート前の準備完了</sub>

---

### アセットパッケージのインポート

`Lemon Tea.unitypackage` を Unity の `Project` ウィンドウにドラッグし、プロンプトが表示されたら `Import` をクリックして、アセットパッケージをAvatarプロジェクトにインポートします。

![Import](./Assets/Import.webp)

<sub>アセットパッケージのインポート完了</sub>

---

### レモンティーのインポート

#### 1. Prefab のインポート

このコンポーネントには以下が含まれています：

- **通常バージョン：**
  メニューのスイッチで操作するバージョン
- **握り拳で箱を絞ることができるバージョン：**
  メニューのスイッチに加え、握り拳で飲み物の箱を絞ることができます。

および、それぞれの左手バージョンの合計 4 つのバージョン。

各バージョンの Prefab の名前は以下の通りです：

- 通常バージョン：`Lemon_Tea_MA.prefab`
- 握り拳で箱を絞るバージョン：`Lemon_Tea_Squeeze_MA.prefab`
- 通常バージョン（左手）：`Lemon_Tea_Left_Handed_MA.prefab`
- 握り拳で箱を絞るバージョン（左手）：`Lemon_Tea_Left_Handed_Squeeze_MA.prefab`

本チュートリアルでは、握り拳で箱を絞るバージョンを例に説明します。

`Assets/LuiStudio/Lemon Tea` 内の `Lemon_Tea_Squeeze_MA.prefab`（または他のバージョンの Prefab）を Avatar にドラッグすると、Prefab と Avatar の関係は以下のようになります：

![Prefab](./Assets/Prefab.webp)

#### 2. 位置調整

##### 1. Avatar の Animator Controller の変更

> :warning: **注意**
>
> この手順は、後のステップでアニメーションプレビューに入る際に、レモンティーの位置とそれを握る手のジェスチャーを同時に調整するためのものです。
>
> この手順は**一時的なもの**であり、VRChat が Avatar をアップロードした後は Animator コンポーネントの Controller は無効になりますが、位置調整が完了した後に Animator 内の Controller を元に戻すことをお勧めします。

各バージョンに必要な Animator Controller の名前は以下の通りです：

- 通常バージョン：`LemonTeaAnimatorGesture`
- 握り拳で箱を絞るバージョン：`LemonTeaSqueezeAnimatorGesture`
- 通常バージョン（左手）：`LemonTeaLeftHandedAnimatorGesture`
- 握り拳で箱を絞るバージョン（左手）：`LemonTeaLeftHandedSqueezeAnimatorGesture`

`Project` 内の `Assets/LuiStudio/Lemon Tea/Animations/Controllers` に移動し、`LemonTeaSqueezeAnimatorGesture`<sup>[1]</sup>（または他のバージョンの Animator Controller）を Avatar<sup>[2]</sup>（Sample_Avatar を例にします）の Animator の Controller にドラッグしてください。完了すると、以下のようになります：

![Gesture_Controller_Drag](./Assets/Gesture_Controller_Drag.webp)

##### 2. アニメーションプレビューを有効化

`Hierarchy` 内で Avatar<sup>[1]</sup>（Sample_Avatar を例にします）を選択し、`Animation` ウィンドウでプレビュー<sup>[2]</sup>をクリックします。プレビューをクリックすると、シーンは以下のようになります<sup>[3]</sup>：

>:warning: **注意**
>
>`Animation` ウィンドウが見つからない場合は、`Project` ウィンドウタブを右クリック -> `Add Tab` -> `Animation` を選択してください。

![Animation_Preview](./Assets/Animation_Preview.webp)

##### 3. レモンティーの位置を調整

`Hierarchy` 内で Prefab の `Model/Lemon_Tea`<sup>[1]</sup> を選択し、Unity の`移動、回転、スケール`ツール<sup>[2]</sup>を使用して、手に持つレモンティーの位置を調整します：

![Adjust_Position](./Assets/Adjust_Position.webp)

満足のいく位置に調整したら、以下のようになります：

![Adjust_Position_Finished](./Assets/Adjust_Position_Finished.webp)

##### 4. レモンティーを握るジェスチャーの調整

前のステップの結果画像でわかるように、指がレモンティーを突き抜けてしまっており、とても安っぽく見えます。Avatar がしっかりレモンティーを握っているように見せるために、ジェスチャーの調整が必要です。
`Animation` ウィンドウ内で最初のフレーム<sup>[1]</sup>を選択し、各指<sup>[2]</sup>の角度を調整して、手がレモンティーをしっかり握っているように見えるようにします：

![Adjust_Gesture](./Assets/Adjust_Gesture.webp)

満足のいくジェスチャーに調整したら、以下のようになります：

![Adjust_Gesture_Finished](./Assets/Adjust_Gesture_Finished.webp)

>:warning: **注意**
>
>結果に満足できない場合は、[第 3 ステップ](#3-レモンティーの位置を調整)および[第 4 ステップ](#4-レモンティーを握るジェスチャーの調整)を繰り返して、最適な位置とジェスチャーを見つけてください。

##### 5. 絞り動作時のジェスチャーの調整

>:warning: **注意**
>
>通常バージョンを選択した場合、このステップをスキップして、[プレビュー状態を終了し、Animator Controllerを元に戻す](#6-プレビュー状態を終了しanimator-controllerを元に戻す)に進んでください。

`Hierarchy` 内で Prefab の `Model/Lemon Tea/Lemon_Tea`<sup>[1]</sup> を選択し、`Skinned Mesh Renderer -> BlendShapes -> Squeeze` を `100` <sup>[2]</sup>に設定します：

![Shape_Key_100](./Assets/Shape_Key_100.webp)

変更後、シーン内のレモンティーの箱がやや絞られた形になります：

![Squeezed_Lemon_Tea](./Assets/Squeezed_Lemon_Tea.webp)

手のジェスチャーアニメーションの最初のフレームを最後のフレームにコピーします。具体的な手順は以下の通りです：
`Hierarchy` 内で Avatar<sup>[1]</sup> を選択し、`Animation` 内でアニメーションの最初のフレーム<sup>[2]</sup>を選択し、`Ctrl + C`を押してキーフレームをコピーします。その後、タイムラインを `60`<sup>[3]</sup> に変更し、エンターキーを押して、最後のフレーム<sup>[4]</sup>をクリックした後、`Ctrl + V`を押してキーフレームを貼り付けます。各指<sup>[5]</sup>の角度を調整して、手がレモンティーをしっかり絞っているように見えるようにします：

![Adjust_Gesture_Squeeze](./Assets/Adjust_Gesture_Squeeze.webp)

満足のいくジェスチャーに調整したら、以下のようになります：

![Adjust_Gesture_Squeeze_Finished](./Assets/Adjust_Gesture_Squeeze_Finished.webp)

`Hierarchy` 内で Prefab の `Model/Lemon Tea/Lemon_Tea`<sup>[1]</sup> を選択し、`Skinned Mesh Renderer -> BlendShapes -> Squeeze` を `0`<sup>[2]</sup> に戻します：

![Shape_Key_0](./Assets/Shape_Key_0.webp)

##### 6. プレビュー状態を終了し、Animator Controllerを元に戻す

Avatar<sup>[1]</sup> を選択し、`Animation` ウィンドウでプレビューを解除します<sup>[2]</sup>：

![Animation_Cancel_Preview](./Assets/Animation_Cancel_Preview.webp)

（オプション）Avatar<sup>[1]</sup> を選択し、Animator Controller を元の状態に戻します<sup>[2]</sup>：

![Gesture_Controller_Reset](./Assets/Gesture_Controller_Reset.webp)

##### 7.（オプション）レモンティーを非表示にする

VRChatでモデルをプレビューする際にレモンティーを表示する必要がない場合は、以下の手順に従ってください：

`Hierarchy` 内で Prefab の `Model/Lemon Tea`<sup>[1]</sup> を選択し、`Inspector` でそれをオフにします<sup>[2]</sup>：

![Hide_Lemon_Tea](./Assets/Hide_Lemon_Tea.webp)

##### 8. 口部レシーバーの位置を調整

このコンポーネントは `Contact Sender` と `Contact Receiver` を使用してストローが口元を追跡する様子をシミュレートします（DPSやSPSなどのスイッチは使用しません）。このステップでは、`Contact Receiver` を口部に移動します。

`Hierarchy` 内でPrefabの `Receiver/Mouth`<sup>[1]</sup> を選択し、Unityの`移動、回転`ツール<sup>[2]</sup>を使用して、その位置を調整します：

![Adjust_Mouth_Position](./Assets/Adjust_Mouth_Position.webp)

口部に移動させたら、以下のようになります：

![Adjust_Mouth_Position_Result](./Assets/Adjust_Mouth_Position_Result.webp)

#### インポート完了

レモンティーのインポートが完了しました。次に[使用方法](#使用方法)を確認してください。

<sub>インポート完了</sub>

---

## 使用方法

インポートが完了したので、次に VRChat でのレモンティーの使用方法を説明します。

### 基本的な使用方法

- 円盤メニューを開き、Lemon Tea のスイッチを見つけて、レモンティーの表示/非表示を切り替えます。
- レモンティーを顔に近づけると、ストローが自動的に口元に合わせられます。

### 握り拳で箱を絞るバージョンを使用している場合

- 握り拳でレモンティーの箱を絞ることができます。

<sub>使用方法完了</sub>

---

## その他

### メニュー内でのスイッチの位置を変更

レモンティーのスイッチはデフォルトでメニューの最初の層にありますが、多機能な Avatar ではこれが不便な場合があります。Modular Avatar を使用してスイッチの位置を変更できます。

- Prefab の `Menu/Lemon Tea` を選択します。
- Inspector で、`MA Menu Installer` コンポーネント内の `Select Menu` ボタンをクリックします。
- スイッチを配置したいサブメニューを選択します。

<sub>その他完了</sub>