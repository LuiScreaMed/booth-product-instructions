---
sidebar_label: ダスター
---

# ダスター v1.0 使用説明書 {ignore}

>:warning: **注意**
>
>こちらの説明書はChatGPTによって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

## インポートチュートリアル

### インポートの準備

この拡張機能は、以下のUnityプラグイン/シェーダーに依存しています。 インポートする前に、次のプラグインがインストールされていることを確認してください：

- Modular Avatar (1.9.13以上): [Modular Avatar](https://modular-avatar.nadena.dev/)
- lilToon (1.7.3以上): [lilToon](https://lilxyzw.github.io/lilToon/#/)

<sub>インポートの準備完了</sub>

---

### パッケージのインポート

`Duster.unitypackage` を Unity の `Project` ウィンドウにドラッグアンドドロップし、ポップアップウィンドウの `Import` をクリックして、パッケージを Avatar プロジェクトにインポートします：

![インポート](./Assets/Import.webp)

<sub>パッケージのインポート完了</sub>

---

### 通常バージョンのインポート

#### 1. Prefabのインポート

`Assets/LuiStudio/Duster` 内の `Duster_Normal_MA.prefab` を Avatar にドラッグアンドドロップします。ドラッグアンドドロップ後、Prefab と Avatar の関係は次のようになります：

![通常プレハブ](./Assets/Prefab_Normal.webp)

#### 2. ダスターの位置調整

##### 1. ダスターのモデルを表示する

Hierarchy で、Prefab 内の `Model/Duster`<sup>[1]</sup> を選択し、Inspector で以下のようにチェックボックスをチェック<sup>[2]</sup> して、ダスターのモデルを表示します：

![通常_モデル表示](./Assets/Normal_Show_Model.webp)

チェックを入れると、ダスターが右手に表示されます：

![モデル右手表示](./Assets/Model_Show_On_Right_Hand.webp)

##### 2. 位置調整

Hierarchy で、Prefab 内の `Constraints/Right_Hand/Right_Hand_Relative`<sup>[1]</sup> を選択し、Unity の `移動、回転` ツール<sup>[2]</sup> を使用して、ダスターの右手での位置を調整します：

![右手位置調整](./Assets/Adjust_Position_Right_Hand.webp)

自分の満足のいく位置に調整し、以下のようになります：

![右手位置調整完了](./Assets/Adjust_Position_Right_Hand_Finished.webp)

##### 3. ダスターのモデルを非表示にする

VRChatでモデルをプレビューする際にダスターが表示されないようにするために、非表示にする必要があります（これについて気にしない場合は、この手順をスキップしてください）
Hierarchy で、Prefab 内の `Model/Duster`<sup>[1]</sup> を選択し、Inspector で以下のようにチェックボックスを外して<sup>[2]</sup> 、ダスターのモデルを非表示にします：

![通常_モデル非表示](./Assets/Normal_Hide_Model.webp)

チェックを外すと、ダスターが非表示になります：

![モデル非表示](./Assets/Model_Hide.webp)

#### インポート完了

ダスターの通常バージョンのインポートが完了しました。次に、[使用方法](#使用方法) をご覧ください

>:warning: **注意**
>
>[可武器使用（逆さに持つ）バージョンのインポート](#可武器使用逆さに持つバージョンのインポート) に従って、上記の手順を完了させた場合は、[次の手順](#3-ダスターの左手武器状態の位置を調整) を続行してください。

<sub>通常バージョンのインポート完了</sub>

---

### 可武器使用（逆さに持つ）バージョンのインポート

#### 1. Prefabのインポート

`Assets/LuiStudio/Duster` 内の `Duster_Normal+Weaponize_MA.prefab` を Avatar にドラッグアンドドロップします。ドラッグアンドドロップ後、Prefab と Avatar の関係は次のようになります：

![武器プレハブ](./Assets/Prefab_Weaponize.webp)

#### 2. ダスターの右手（通常状態）の位置を調整

[通常バージョンの位置調整手順](#2-ダスターの位置調整) を参照してください。

#### 3. ダスターの左手（武器状態）の位置を調整

##### 1. ダスターのモデルを表示する

通常バージョンの [ダスターのモデルを表示する](#1-ダスターのモデルを表示する) を参照してください。

##### 2. AvatarのAnimatorコンポーネントを無効にする

>:warning: **注意**
>
>この手順は、Avatarモデルが予想外の場所に移動し、戻せなくなるのを防ぐためです（これはUnityのバグです）。 次のステップの前に、シーンを保存するかバックアップを作成することをお勧めします。

Hierarchy で Avatar モデルを選択<sup>[1]</sup> し、Inspector で `Animator` コンポーネント<sup>[2]</sup> を無効にします：

![Avatar Animatorコンポーネントを無効にする](./Assets/Weaponize_Disable_Avatar_Animator.webp)

##### 3. ダスターを左手に表示する

Hierarchy で、Prefab 内の任意のオブジェクトを選択し、Animation ウィンドウで、ドロップダウンメニュー<sup>[1]</sup> から `Duster_Left_Handed`<sup>[2]</sup> を選択し、 `Preview`<sup>[3]</sup> をクリックします（**赤いボタンの横のプレビューをクリックしないでください**）：

>:warning: **注意**
>
>Animation ウィンドウが見つからない場合は、Project ウィンドウタブを右クリック -> タブの追加 -> Animation で追加してください。

![左手のアニメーション](./Assets/Weaponize_Animation_Left_Handed.webp)

これにより、ダスターが左手に移動します：

![モデル左手に表示](./Assets/Model_Show_On_Left_Hand.webp)

##### 4. 位置調整

Hierarchy で、Prefab 内の `Constraints/Left_Hand/Left_Hand_Relative`<sup>[1]</sup> を選択し、Unity の `移動、回転` ツール<sup>[2]</sup> を使用して、ダスターの左手での位置を調整します：

![左手の位置調整](./Assets/Adjust_Position_Left_Hand.webp)

ダスターを適切な位置に移動し、以下のようになります：

![左手の位置調整完了](./Assets/Adjust_Position_Left_Hand_Finished.webp)

##### 5. 左手のダスターのアニメーションプレビューを無効にする

Animation ウィンドウで、 `Preview`<sup>[1]</sup> をクリックしてアニメーションプレビューを無効にします（**赤いボ

タンの横のプレビューをクリックしないでください**）：

![左手のアニメーション無効化](./Assets/Weaponize_Animation_Left_Handed_Off.webp)

これにより、ダスターが右手に戻ります：

![右手位置調整完了](./Assets/Adjust_Position_Right_Hand_Finished.webp)

##### 6. AvatarのAnimatorコンポーネントを再度有効にする

Hierarchy で Avatar モデルを選択<sup>[1]</sup> し、Inspector で `Animator` コンポーネント<sup>[2]</sup> を有効にします：

![Avatar Animatorコンポーネントを有効にする](./Assets/Weaponize_Enable_Avatar_Animator.webp)

##### 7. ダスターのモデルを非表示にする

通常バージョンの [ダスターのモデルを非表示にする](#3-ダスターのモデルを非表示にする) を参照してください。

#### インポート完了

ダスターの武器使用可能（逆さに持つ）バージョンのインポートが完了しました。次に、[使用方法](#使用方法) をご覧ください。

<sub>武器使用可能（逆さに持つ）バージョンのインポート完了</sub>

---

## 使用方法

インポートが完了したので、次にVRChatでダスターを使用する方法について説明します。

### 通常バージョンの使用方法

ホイールメニューを開き、Dusterスイッチを見つけてダスターを表示/非表示にします。

### 武器使用可能（逆さに持つ）バージョンの使用方法

上記の表示/非表示以外に：

- 通常の握り方の場合、左手をダスターの末尾近くに移動し、グローブジェスチャーに切り替えると、ダスターを逆さに持つことができます。
- 逆握りの場合、右手をダスターのハンドルに移動し、グローブジェスチャーに切り替えると、ダスターを通常の握り方に戻すことができます。

<sub>使用方法完了</sub>

---

## その他

### ダスターのサイズの変更

各Avatarは特別ですので、ダスターのサイズを調整する必要があります。

#### 1. ダスターのモデルを表示する

通常バージョンの [ダスターのモデルを表示する](#1-ダスターのモデルを表示する) を参照してください。

#### 2. ダスターのサイズ調整

Prefab内の `Model/Duster` を選択し、スケーリングツールを使用するか、Inspectorでダスターのサイズを調整します。

#### 3. ダスターのモデルを非表示にする

通常バージョンの [ダスターのモデルを非表示にする](#3-ダスターのモデルを非表示にする) を参照してください。

### メニュー内のスイッチの位置を変更する

ダスターのスイッチは、デフォルトでメニューの最初のレベルにありますが、多くの機能を持つAvatarにとっては使いづらいです。 Modular Avatar を使用すると、スイッチの位置を変更できます。

- Prefab内の `Menu/Duster` を選択します
- Inspectorで `MA Menu Installer` コンポーネントの `Select Menu` ボタンをクリックします
- スイッチを配置したいサブメニューを選択します

<sub>その他完了</sub>