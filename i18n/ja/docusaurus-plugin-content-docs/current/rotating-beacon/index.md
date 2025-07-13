---
sidebar_label: 回転ビーコン
---

# 回転ビーコン v1.0 使用説明書 {ignore}

>:warning: **注意**
>
>こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

## インポートガイド

### インポート前の準備

この拡張機能は以下の Unity プラグイン / シェーダーに依存しています。インポート前に以下がインストールされていることを確認してください：

- Modular Avatar (1.11.0以上): [https://modular-avatar.nadena.dev/](https://modular-avatar.nadena.dev/)
- lilToon (1.8.3以上): [https://lilxyzw.github.io/lilToon/#/](https://lilxyzw.github.io/lilToon/#/)

---

### リソースパッケージのインポート

`Rotating Beacon.unitypackage` を Unity の `Project` ウィンドウにドラッグし、ポップアップウィンドウで `Import` をクリックしてリソースパッケージをアバタープロジェクトにインポートします：

![Import](./Assets/Import.webp)

---

### 回転ビーコンをアバターに追加する

#### 1. Prefab の追加

この商品は使用要件に応じて異なるタイプの Prefab を用意しています。ご自身のニーズに合わせて以下の Prefab を選択してください：

- `Rotating Beacon(Head Only)` - ビーコンが常に頭部にある
- `Rotating Beacon(Full)` - ビーコンが*右手*に持たれ、*右手*から頭部に移動可能
- `Rotating Beacon(Full)(Left_Handed)` - ビーコンが*左手*に持たれ、*左手*から頭部に移動可能

`Full` タイプの Prefab は `Head Only` タイプよりも同期パラメーターが 1 ビット多く（3 bits -> 4 bits）、`Contact Sender` と `Contact Receiver`、および `VRC Parent Constraint` を使用します。PC プレイヤーや性能を重視するプレイヤーには、`Head Only` タイプの Prefab を推奨します。

> :warning: **注意**
>
> `Full` タイプの左右手 Prefab を慎重に選択してください。異なる手の Prefab を使用して警灯を反対の手に置くと、取り扱い時に問題が発生します。

選択した Prefab を Project ウィンドウから Hierarchy 内のアバターにドラッグ＆ドロップします。追加後、Prefab とアバターの関係は以下のようになります（ここでは `Rotating Beacon(Full)` を例とします）：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. 回転ビーコンの設定

##### 1. Head Only タイプ Prefab の設定

Prefab を追加後、シーン内のビーコンは地面から 1.5m の高さに配置されます：

![Beacon_Head_Only_Default_Position](./Assets/Beacon_Head_Only_Default_Position.webp)

###### 1. ビーコンの位置調整

Hierarchy で `Prefab/Model`<sup>[1]</sup> を選択し、`移動`、`回転`、`スケール` ツール<sup>[2]</sup> を使ってその位置とサイズを調整します：

![Beacon_Head_Only_Adjust_Position](./Assets/Beacon_Head_Only_Adjust_Position.webp)

ビーコンをアバターの頭部に配置します：

![Beacon_Head_Only_Adjust_Position_Finished](./Assets/Beacon_Head_Only_Adjust_Position_Finished.webp)

完了後、[さらなる設定](#3-さらなる設定) を参照してください。

##### 2. Full タイプ Prefab の設定

このセクションでは、`Rotating Beacon(Full)` を例として説明します。

Prefab を追加後、シーンには地面から 1.5m の高さに配置されたビーコンと、対応する手の方向近くに黄色い球状の Contact Sender が表示されます：

![Beacon_Full_Default_Position](./Assets/Beacon_Full_Default_Position.webp)

###### 1. ビーコンの頭部位置の調整

Hierarchy で `Prefab/Constraint Parents/Head`<sup>[1]</sup> を選択し、シーン内で `移動`、`回転`、`スケール` ツール<sup>[2]</sup> を使ってその位置とサイズを調整します：

![Beacon_Full_Adjust_Position_Head](./Assets/Beacon_Full_Adjust_Position_Head.webp)

ビーコンをアバターの頭部に配置します：

![Beacon_Full_Adjust_Position_Head_Finished](./Assets/Beacon_Full_Adjust_Position_Head_Finished.webp)

###### 2. ビーコンの手部位置の調整

`Full` タイプの Prefab では、ビーコンを手部と頭部の間で移動可能です。そのため、手部での位置調整が必要です。

Hierarchy で `Prefab/Model`<sup>[1]</sup> を選択し、Inspector ウィンドウで `VRC Parent Constraint`<sup>[2]</sup> コンポーネント内の `Sources` リストに移動します。`Element 0 [Head]` の `Weight` を `0`<sup>[3]</sup> に変更し、`Element 1 [Hand]` の `Weight` を `1`<sup>[4]</sup> に設定します：

![Beacon_Full_Set_Constraint_Hand](./Assets/Beacon_Full_Set_Constraint_Hand.webp)

これにより、シーン内のビーコンが対応する手部の近くに移動します：

![Beacon_Full_Set_Constraint_Hand_Scene](./Assets/Beacon_Full_Set_Constraint_Hand_Scene.webp)

Hierarchy に戻り、`Prefab/Constraint Parents/Hand` を選択して、ビーコンを手部に移動します。参考位置：

![Beacon_Full_Adjust_Position_Hand_Finished](./Assets/Beacon_Full_Adjust_Position_Hand_Finished.webp)

###### 3. 手部の Contact Sender と頭部の Contact Receiver の調整

手部の Contact Sender と頭部の Contact Receiver は、回転ビーコンを手部と頭部の間で移動させる際の範囲判定に使用されます。アバターの手部と頭部の位置やサイズに応じて調整する必要があります。一般的には、手や頭よりもやや大きめに設定すると、VR ヘッドセット使用時のコントローラーの位置ズレによる範囲判定ミスを防げます。

Hierarchy で `Prefab/Constraint Parents/Hand/Contact Sender` を選択し、シーン内で `移動` と `スケール` ツール（または Contact Sender コンポーネント内で Position と Radius を調整）を使って Sender の位置とサイズを調整します。調整例：

![Adjust_Contact_Sender_Example](./Assets/Adjust_Contact_Sender_Example.webp)

次に、Hierarchy で `Prefab/Constraint Parents/Head/Contact Receiver` を選択し、同様に `移動` と `スケール` ツール（または Contact Receiver コンポーネント内で Position と Radius を調整）を使って Receiver の位置とサイズを調整します。調整例：

![Adjust_Contact_Receiver_Example](./Assets/Adjust_Contact_Receiver_Example.webp)

##### 3. さらなる設定

###### 1. サブメニューのアクションメニュー内の位置を変更

回転ビーコンのサブメニューはデフォルトでメニューの最上層に配置されていますが、多機能なアバターでは使い勝手が悪い場合があります。`MA Menu Installer` コンポーネントを利用してサブメニューの位置を変更できます：

- Hierarchy で `Prefab/Menu/Rotating Beacon` を選択します。
- Inspector で、`MA Menu Installer` コンポーネント内の `Select Menu` ボタンをクリックします。
- サブメニューを配置したいメニューを選択します。

###### 2. VRChat のアバタープレビューで回転ビーコンを非表示にする

VRChat のアバタープレビューでは Unity 内のアバターの最終状態が表示されます。つまり、Unity で回転ビーコンを無効にしない場合、VRChat のプレビューでも表示されます。以下の手順で Unity と VRChat のプレビューで回転ビーコンを非表示にできます：

- Hierarchy で `Prefab/Model` を選択します。
- Inspector の一番上にあるチェックボックスをオフにします（回転ビーコンを無効化）。

###### 3. 回転ビーコン有効時のサウンドと音量の調整

Hierarchy で `Prefab/Model/Bulb/Audio` を探し、Inspector ウィンドウで `Audio Source` コンポーネントを見つけます。音を変更したい場合は、Unity にインポートした新しい音をコンポーネント内の `AudioClip` 欄にドラッグ＆ドロップします。音量を調整する場合は、コンポーネント内の `Volume` を変更してください。

<sub>インポートガイド終了</sub>

---

## 使用方法

回転ビーコンのインポートが完了しました。次に VRChat 内で回転ビーコンを使用する方法を説明します。

### 回転ビーコンの表示と非表示

アクションメニューを開き、`Rotating Beacon` サブメニューに移動します。サブメニュー内の `Rotating Beacon` ボタンで回転ビーコンの表示 / 非表示を切り替えることができます。

### 頭部と手部間での回転ビーコンの移動（Full バージョンのみ）

回転ビーコンを表示後、以下の操作で頭部または手部に配置できます：

- 回転ビーコンが手部にある場合：手を開かず、手を頭部（具体的には Contact Receiver）に移動させ、手を開くと回転ビーコンが頭部に移動します。
- 回転ビーコンが頭部にある場合：手を握らず、手を頭部（具体的には Contact Receiver）に移動させ、手を握ると回転ビーコンが手部に移動します。

また、`Rotating Beacon` サブメニュー内の `On Head` スイッチを使用して回転ビーコンの位置を切り替えることもできます。

### 回転ビーコンの有効化と無効化

`Rotating Beacon` サブメニュー内の `Activate` スイッチで回転ビーコンの有効化 / 無効化を行います。また、`Siren` スイッチで有効時のサイレン音をオン / オフできます。

<sub>使用方法終了</sub>