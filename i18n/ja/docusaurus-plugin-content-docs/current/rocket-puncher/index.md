---
sidebar_label: ロケットパンチャー
---

# ロケットパンチャー v1.0 使用説明書 {ignore}

>:warning: **注意**
>
>こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

## 目次 {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [インポート手順](#インポート手順)
  - [インポート前の準備](#インポート前の準備)
  - [アセットパッケージのインポート](#アセットパッケージのインポート)
  - [ロケットパンチャーをアバターに追加する](#ロケットパンチャーをアバターに追加する)
    - [1. Prefab の追加](#1-prefab-の追加)
    - [2. ロケットパンチャーの設定](#2-ロケットパンチャーの設定)
      - [1. ロケットパンチャーの位置調整](#1-ロケットパンチャーの位置調整)
      - [2. さらなる設定](#2-さらなる設定)
        - [1. サブメニューのアクションメニュー内の位置を変更（オプション）](#1-サブメニューのアクションメニュー内の位置を変更オプション)
        - [2. VRChat のアバタープレビューでロケットパンチャーを非表示にする（オプション）](#2-vrchat-のアバタープレビューでロケットパンチャーを非表示にするオプション)
- [使用方法](#使用方法)
  - [ロケットパンチャーの表示と非表示](#ロケットパンチャーの表示と非表示)
  - [パンチの発射](#パンチの発射)
  - [ロケットパンチャーの待機モードの変更](#ロケットパンチャーの待機モードの変更)

<!-- /code_chunk_output -->

## インポート手順

### インポート前の準備

このギミックは、以下の Unity プラグイン/シェーダーに依存しています。 インポートする前に、次のプラグインがインストールされていることを確認してください：

- Modular Avatar (1.11.0以上): https://modular-avatar.nadena.dev/
- lilToon (1.8.3以上): https://lilxyzw.github.io/lilToon/#/

---

### アセットパッケージのインポート

`Rocket Puncher.unitypackage` を Unity の `Project` ウィンドウにドラッグし、プロンプトが表示されたら `Import` をクリックして、アセットパッケージを Avatar プロジェクトにインポートします：

![Import](./Assets/Import.webp)

---

### ロケットパンチャーをアバターに追加する

#### 1. Prefab の追加

`Assets/LuiStudio/Rocket Puncher/Rocket Puncher.prefab` を Project ウィンドウから Hierarchy のアバターにドラッグ＆ドロップします：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. ロケットパンチャーの設定

Prefab を追加すると、シーン内にアバターの右側 1m の高さにロケットパンチャーが出現します：

![Rocket_Puncher_Default_Position](./Assets/Rocket_Puncher_Default_Position.webp)

##### 1. ロケットパンチャーの位置調整

Hierarchy で `Rocket Puncher/Model`<sup>[1]</sup> を選択し、`移動`、`回転`、`スケール` ツール<sup>[2]</sup> を使ってロケットパンチャーの位置とサイズを調整します：

![Adjust_Position](./Assets/Adjust_Position.webp)

右手に配置してください：

![Position_Example](./Assets/Position_Example.webp)

##### 2. さらなる設定

###### 1. サブメニューのアクションメニュー内の位置を変更（オプション）

ロケットパンチャーのサブメニューはデフォルトでルートメニューに配置されていますが、多機能なアバターでは不便なことがあります。`MA Menu Installer` コンポーネントを使用して位置を変更できます：

- Hierarchy でロケットパンチャーを選択
- Inspector で `MA Menu Installer` コンポーネントの `Select Menu` をクリック
- 配置したいメニューを選択

###### 2. VRChat のアバタープレビューでロケットパンチャーを非表示にする（オプション）

VRChat のアバタープレビューでは Unity 上のアバターの最終状態が表示されます。Unity 上でロケットパンチャーを無効にしないと、プレビューで表示されたままとなります。以下の手順で非表示にできます：

- Hierarchy で `Rocket Puncher/Model` と `Rocket Puncher/PB` を選択
- Inspector の一番上のチェックボックスをオフにします（無効化）

<sub>インポート手順終了</sub>

---

## 使用方法

ロケットパンチャーのインポートが完了しました。次に VRChat での使用方法を説明します。

### ロケットパンチャーの表示と非表示

アクションメニューを開き、`Rocket Puncher` サブメニューに移動します。メニュー内の `Rocket Puncher` スイッチで表示 / 非表示を切り替えられます。

### パンチの発射

左手でロケットパンチャーの `リアグリップ`<sup>[1]</sup> を握ることで待機状態になります。この状態で `右手` のジェスチャーが握り拳になっているとパンチが発射され、そうでない場合は拳が戻ります。

![Rocket_Puncher_Grip](./Assets/Rocket_Puncher_Grip.webp)

### ロケットパンチャーの待機モードの変更

`Rocket Puncher` サブメニューにはさらに 2 つのスイッチがあります。それぞれの機能は以下の通りです：

- `Standby when gripped` - リアグリップを握ったときに前部のカバーを開けるかどうか
- `Standby after punching` - パンチが戻ったあとにカバーを開いたままにするかどうか

<sub>使用方法終了</sub>
