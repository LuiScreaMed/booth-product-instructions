---
sidebar_label: サーチライト
---

# サーチライト v1.0 使用説明書 {ignore}

>:warning: **注意**
>
>こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

## インポートチュートリアル

### インポート前の準備

この拡張機能は、以下の Unity プラグイン/シェーダーに依存しています。 インポートする前に、次のプラグインがインストールされていることを確認してください：

- Modular Avatar (1.9.13以上): [Modular Avatar](https://modular-avatar.nadena.dev/)
- lilToon (1.7.3以上): [lilToon](https://lilxyzw.github.io/lilToon/#/)

<sub>インポート前の準備完了</sub>

---

### アセットパッケージのインポート

`Search Light.unitypackage` を Unity の `Project` ウィンドウにドラッグし、プロンプトが表示されたら `Import` をクリックして、アセットパッケージをAvatarプロジェクトにインポートします。

![Import](./assets/Import.webp)

<sub>アセットパッケージのインポート完了</sub>

---

### サーチライトのインポート

#### 1. Prefab のインポート

> :warning: **注意**
>
>Modular Avatar の制限により、MA Bone Proxy でバインドされたオブジェクトが空の場合、エラーが発生します。ほとんどの Avatar には左右の目のボーンが含まれていますが、エラーを防ぐため、目をバインドせずに頭にだけバインドする Prefab も用意しています。

まず、Avatar に目のボーン（左右の目）があるかを確認し、以下の説明に従って対応する Prefab をインポートしてください：

- 目のボーンがある：`Search Light (eyes).prefab`
- 目のボーンがない、または目のボーンはあるがサーチライトを視線に追従させたくない場合：`Search Light (head).prefab`

`Assets/LuiStudio/Search Light` の対応する Prefab を Avatar にドラッグし、ドラッグ後の Prefab と Avatar の関係は以下のようになります（ Search Light (eyes) を例にしています）：

![Prefab](./assets/Prefab.webp)

#### 2. 位置の調整

Prefab には位置を指示するモデルが含まれています。このモデルはアップロード時に自動的に削除されます。

##### 1. 全体の位置を調整

Hierarchy 内で Prefab の `Armature_Search_Light`<sup>[1]</sup> を選択し、Unity の `移動、回転` ツール<sup>[2]</sup>を使用して、サーチライトの全体の位置を調整します：

![Adjust_Position](./assets/Adjust_Position.webp)

目の正面に調整したら、以下のようになります：

![Adjust_Position_Finished](./assets/Adjust_Position_Finished.webp)

##### 2. 両目の位置を調整

全体の位置を大まかに調整した後、左右のサーチライトを目の正面に向けます。この説明では、まず左目の位置を調整し、その後左目の座標に基づいて右目のサーチライトを対称に配置します。

###### 1. 左目の位置を調整

Hierarchy 内で `Armature_Search_Light` 内の `Search_Light_L`<sup>[1]</sup> を選択し、Unity の `移動、回転` ツール<sup>[2]</sup>を使用して光線を左目の正面に向けます<sup>[3]</sup>：

![Adjust_Position_L](./assets/Adjust_Position_L.webp)

###### 2. 右目の位置を調整

`Search_Light_L`<sup>[1]</sup> を選択した状態を保持し、`Inspector` で Transform の Position を右クリックして `コピー`<sup>[2]</sup> を選択します：

![Copy_Position_L](./assets/Copy_Position_L.webp)

次に、`Search_Light_R`<sup>[1]</sup> を選択し、`Inspector` で Transform の Position を右クリックして `貼り付け`<sup>[2]</sup> を選択します：

![Paste_Position_R](./assets/Paste_Position_R.webp)

Position の X軸 の値を正の数なら負に、負の数なら正に反転させます：

![Position_R_X_Opposite](./assets/Position_R_X_Opposite.webp)

##### 3. 位置指示モデルを非表示にする（オプション）

`Position (Auto_Remove_After_Upload)` を選択し、`Inspector` でそのチェックを外します：

![Hide_Position_Indicator](./assets/Hide_Position_Indicator.webp)

#### インポート完了

サーチライトのインポートが完了しました。次に[使用方法](#使用方法)を確認してください。

<sub>インポート完了</sub>

---

## 使用方法

インポートが完了したので、次に VRChat でのサーチライトの使用方法を説明します。

- アクションメニューを開き、Search Light のスイッチを探して、サーチライトを表示/非表示にします。

<sub>使用方法完了</sub>

---

## その他

### 光線のサイズと長さの変更

各光線には始点と終点の2つのボーンがあります。これらのスケールや位置を変更して、光線のサイズと長さを調整できます。

### メニュー内でのスイッチの位置を変更

サーチライトのスイッチはデフォルトでメニューの最初の層にありますが、多機能な Avatar ではこれが不便な場合があります。Modular Avatar を使用してスイッチの位置を変更できます。

- Prefab の `Menu/Search Light` を選択します。
- `Inspector` で、`MA Menu Installer` コンポーネント内の`Select Menu` ボタンをクリックします。
- スイッチを配置したいサブメニューを選択します。

<sub>その他完了</sub>