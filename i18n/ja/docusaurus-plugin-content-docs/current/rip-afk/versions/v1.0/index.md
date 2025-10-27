---
sidebar_label: v1.0.*
---

# RIP AFK v1.0.* 使用説明書 {ignore}

:::warning

こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

:::

## ギミック紹介

このギミックは [Non-Destructive Modular Framework](https://github.com/bdunderscore/ndmf) と [Modular Avatar](https://github.com/bdunderscore/modular-avatar) を使用し、**非破壊的**に Avatar が AFK 中に石碑へと変化する機能を実現します。
このギミックは Avatar のビルド時に以下の処理を行います：

- Action レイヤーおよび FX レイヤー内で、条件に AFK が `true` を含むすべてのアニメーション遷移を無効化します。
- Avatar 内のすべての PhysBone、Contact Receiver、Renderer、Particle System、または Light を含むオブジェクトを検出します。
- ユーザーが除外したオブジェクトを除くこれらのオブジェクトに基づいて AFK アニメーションを生成します。

### 注意事項

- 本ギミックは VRCSDK3、Unity 2022.3.22f1 環境でのみテストされています。

### 既知の問題

- 空中で AFK 状態に入った場合、石碑が Avatar より先に地面に着くと、Avatar の視点がゆっくりと沈み込みながら回転し、地面に到達するまで続きます。
- 多数のプレイヤーが存在するインスタンスでは、ローカルプレイヤーが AFK 状態を切り替えた際に AFK アニメーションが再生されないことがありますが、他のプレイヤーからは正常に再生されます。

<sub>ギミック紹介終了</sub>

---

## インポート手順

### インポート前の準備

このギミックは、以下の Unity プラグインに依存しています。 インポートする前に、次のプラグインがインストールされていることを確認してください：

- Modular Avatar (1.13.0以上): https://modular-avatar.nadena.dev/
- lilToon (1.8.3以上): https://lilxyzw.github.io/lilToon/#/

---

### アセットパッケージのインポート

`RIP AFK.unitypackage` を Unity の `Project` ウィンドウにドラッグし、プロンプトが表示されたら `Import` をクリックして、アセットパッケージを Avatar プロジェクトにインポートします：

![Import](./Assets/Import.webp)

---

### ギミックのインストール

#### 1. Prefab の追加

`Assets/LuiStudio/AFKs/RIP/RIP AFK.prefab` を Project ウィンドウから Hierarchy 内のアバターの下にドラッグ＆ドロップしてください：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. ギミックの設定

##### 1. 除外項目の追加（オプション）

このギミックが生成する AFK アニメーションは、モデル内のすべての Mesh、PhysBone、Contact Receiver、Particle System、Light を無効化します。

AFK アニメーション再生中に特定のオブジェクトを影響を受けないようにしたい場合は、それらのオブジェクトを `除外項目` 配列<sup>[1]</sup> に追加してください：

![Exclusions](./Assets/Exclusions.webp)

:::warning

「除外項目」に追加されたオブジェクトおよびその子オブジェクトはすべて除外されます。

:::

##### 2. 石碑の変更（オプション）

石碑はデフォルトで非表示になっています。石碑を編集する場合は、Hierarchy で `RIP AFK/Stone`<sup>[1]</sup> を選択し、Inspector の左上にある `チェックボックス`<sup>[2]</sup> をオンにしてください：

![Enable_Stone](./Assets/Enable_Stone.webp)

###### 位置とサイズの変更（オプション）

`RIP AFK`<sup>[1]</sup> を選択し、`移動`、`回転`、`スケール` ツール<sup>[2]</sup> を使用して石碑の位置とサイズを調整します：

![Adjust_Position](./Assets/Adjust_Position.webp)

###### 石碑にコンテンツを追加（オプション）

AFK に Audio Source を追加したり、石碑上に独自の ID などを追加したい場合は、必要なコンテンツを `Stone` オブジェクトに配置し、オンにしておいてください。

:::note

NDMF のビルド時に Text から文字メッシュを生成したり、Camera を使って文字テクスチャをレンダリングすることは試みましたが、いずれも失敗しました。
もしビルド時にカスタム石碑の文字を生成する方法をご存知でしたら、ぜひ当店までご連絡ください！

:::

###### 石碑モデルの置き換え（オプション）

`RIP AFK/Stone`<sup>[1]</sup> オブジェクトを選択し、Inspector で `Mesh Filter` と `Mesh Renderer` コンポーネントを見つけます。

- `Mesh Filter` の Mesh<sup>[2]</sup> を置き換えたいモデルの Mesh に変更します。
- `Mesh Renderer` の Material<sup>[3]</sup> を置き換えたいモデルのマテリアルに変更します：

![Replace_Stone_Model](./Assets/Replace_Stone_Model.webp)

`Box Collider` コンポーネントを見つけ、その境界を調整して新しいモデルに合わせます。

:::warning

`Stone` オブジェクトを直接置き換えないでください。もしどうしても直接置き換える場合は：

- 新しいオブジェクトのコンポーネントが元の `Stone` と一致していることを確認してください。
- Inspector を Debug ビューに切り替え、`RIP AFK` を選択し、新しいオブジェクトを `RIP AFK Setup Tool` の `Stone Transform` フィールドにドラッグしてください。

:::

<sub>インポート手順終了</sub>

---

## テスト

インストール完了後、Play Mode に入り、動作を確認できます。

まず `Gesture Manager` が必要です。`Vrchat Creator Companion` からインストールしてください。

`Gesture Manager` がインストールされたら、Unity ウィンドウの `Tools/Gesture Manager Emulator` をクリックします：

![Add_Gesture_Manager_Emulator](./Assets/Add_Gesture_Manager_Emulator.webp)

クリックすると、シーンに `GestureManager`<sup>[1]</sup> という名前のゲームオブジェクトが追加されます。選択した状態で Inspector に移動し、`Gesture Manager` コンポーネントの `Enter Play-Mode`<sup>[2]</sup> をクリックして Play Mode に入ります：

![Enter_Play_Mode_With_Gesture_Manager](./Assets/Enter_Play_Mode_With_Gesture_Manager.webp)

Play Mode に入ると、Gesture Manager コンポーネントにアクションメニュー<sup>[1]</sup> が表示されます。
`Options -> States -> AFK`<sup>[2]</sup> をクリックして AFK 状態を切り替えます：

![Gesture_Manager_AFK](./Assets/Gesture_Manager_AFK.webp)

AFK 状態に切り替えた後、Avatar が消え、下に落ちる石碑が表示されれば、このギミックは正常に動作しています。

<sub>テスト終了</sub>

---

## 使用方法

Avatar の AFK 状態検出が有効になっていることを確認してください：

- PC モードの場合：キーボードの **End** キーで AFK 状態を切り替えます。
- VR モードの場合：SteamVR のインターフェースを開き、AFK 状態に入ります。

AFK 状態に入ると、Avatar は石碑に変化します。

<sub>使用方法終了</sub>
