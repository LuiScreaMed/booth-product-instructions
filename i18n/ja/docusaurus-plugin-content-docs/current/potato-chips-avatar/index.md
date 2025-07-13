---
sidebar_label: ポテトチップス（アバターバージョン）
---

# ポテトチップス（アバターバージョン） v1.0 使用説明書 {ignore}

>:warning: **注意**
>
>こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

## インポート手順

### インポート前の準備

このギミックは、以下の Unity プラグイン/シェーダーに依存しています。 インポートする前に、次のプラグインがインストールされていることを確認してください：

- Modular Avatar (1.11.0以上): https://modular-avatar.nadena.dev/
- lilToon (1.8.3以上): https://lilxyzw.github.io/lilToon/#/

---

### アセットパッケージのインポート

`Potato Chips (Avatar).unitypackage` を Unity の `Project` ウィンドウにドラッグし、プロンプトが表示されたら `Import` をクリックして、アセットパッケージを Avatar プロジェクトにインポートします：

![Import](./Assets/Import.webp)

---

### ポテトチップスをアバターに追加する

#### 1. Prefab の追加

`Assets/LuiStudio/Potato Chips/Potato Chips.prefab` を Project ウィンドウから Hierarchy のアバターにドラッグ＆ドロップします：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. ポテトチップスの設定

Prefab を追加すると、シーン内にアバターの右側 1m の高さにポテトチップスが出現します：

![Default_Position](./Assets/Default_Position.webp)

##### 1. ポテトチップスの位置調整

Hierarchy で `Potato Chips/Potato Chips`<sup>[1]</sup> を選択し、`移動`、`回転`、`スケール` ツール<sup>[2]</sup> を使ってポテトチップスの位置とサイズを調整します：

![Adjust_Position](./Assets/Adjust_Position.webp)

左手のひらに配置してください：

![Position_Example](./Assets/Position_Example.webp)

右手に持たせたい場合は、ポテトチップスを右手の位置へ移動し、`Potato Chips/Potato Chips`<sup>[1]</sup> を選択して、Inspector で `MA Bone Proxy` コンポーネントの `Advance` 内にある `Bone Reference` を `Right Hand` に変更します<sup>[2]</sup>：

![Switch_Hand](./Assets/Switch_Hand.webp)

##### 2. さらなる設定

###### 1. サブメニューのアクションメニュー内の位置を変更（オプション）

ポテトチップスのサブメニューはデフォルトでルートメニューに配置されていますが、多機能なアバターでは不便なことがあります。`MA Menu Installer` コンポーネントを使用して位置を変更できます：

- Hierarchy で `Potato Chips` を選択
- Inspector で `MA Menu Installer` コンポーネントの `Select Menu` をクリック
- 配置したいメニューを選択

###### 2. VRChat のアバタープレビューでポテトチップスを非表示にする（任意）

VRChat のアバタープレビューでは Unity 上のアバターの最終状態が表示されます。Unity 上でポテトチップスを無効にしないと、プレビューで表示されたままとなります。以下の手順で非表示にできます：

- Hierarchy で `Potato Chips/Potato Chips` を選択
- Inspector の一番上のチェックボックスをオフにします（無効化）

<sub>インポート手順終了</sub>

---

## 使用方法

ポテトチップスのインポートが完了しました。次に VRChat での使用方法を説明します。

### ポテトチップスの表示と非表示

アクションメニューを開き、`Potato Chips` サブメニューに移動します。メニュー内の `Potato Chips` ボタンでポテトチップスの表示 / 非表示を切り替えられます。

### ポテトチップスを取る

手を袋の中に差し入れてチップスをつかみ、手を放す、もしくは口（自分または他人の頭部）に近づけることで、ポリポリという咀嚼音が再生されます。

### ポテトチップスを袋から出す

`Potato Chips` サブメニューには `Pouring` スイッチがあります。有効にすると、袋を逆さにするだけでチップスが自動的にだされ続けます。

<sub>使用方法終了</sub>
