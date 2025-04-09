---
sidebar_label: 催眠スマホ
---

# 催眠スマホ v1.0 使用説明書 {ignore}

>:warning: **注意**
>
>こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

## 目次 {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [インポート手順](#インポート手順)
  - [インポート前の準備](#インポート前の準備)
  - [アセットパッケージのインポート](#アセットパッケージのインポート)
  - [催眠スマホのインポート](#催眠スマホのインポート)
    - [1. Prefab のインポート](#1-prefab-のインポート)
    - [2. スマホの位置と握るポーズの調整](#2-スマホの位置と握るポーズの調整)
      - [1. （オプション）ジェスチャーアニメーションとコントローラーをコピー](#1-オプションジェスチャーアニメーションとコントローラーをコピー)
      - [2. アバターの Animator アニメーションコントローラーを変更](#2-アバターの-animator-アニメーションコントローラーを変更)
      - [3. スマホの位置と握り手ジェスチャーを調整](#3-スマホの位置と握り手ジェスチャーを調整)
        - [1. アニメーションをプレビュー](#1-アニメーションをプレビュー)
        - [2. スマホの位置と握り手ジェスチャーを調整](#2-スマホの位置と握り手ジェスチャーを調整)
        - [3. アニメーションプレビューを終了](#3-アニメーションプレビューを終了)
      - [4. （オプション）Avatar の Animator アニメーションコントローラーを元に戻す](#4-オプションavatar-の-animator-アニメーションコントローラーを元に戻す)
    - [インポート完了](#インポート完了)
- [使用方法](#使用方法)
- [その他](#その他)
  - [アクションメニュー内でのスイッチの位置を変更する](#アクションメニュー内でのスイッチの位置を変更する)
  - [自分だけがスマホと対話可能にする](#自分だけがスマホと対話可能にする)
  - [VRChat のアバタープレビューでスマホを非表示にする](#vrchat-のアバタープレビューでスマホを非表示にする)

<!-- /code_chunk_output -->

## インポート手順

### インポート前の準備

このギミックは、以下の Unity プラグイン/シェーダーに依存しています。 インポートする前に、次のプラグインがインストールされていることを確認してください：

- Modular Avatar (1.9.13以上): https://modular-avatar.nadena.dev/
- lilToon (1.7.3以上): https://lilxyzw.github.io/lilToon/#/
- Gesture Manager (3.9以上): https://github.com/BlackStartx/VRC-Gesture-Manager

<sub>インポート前の準備完了</sub>

---

### アセットパッケージのインポート

`Hypnosis Phone.unitypackage` を Unity の `Project` ウィンドウにドラッグし、プロンプトが表示されたら `Import` をクリックして、アセットパッケージを Avatar プロジェクトにインポートします。

![Import](./Assets/Import.webp)

<sub>アセットパッケージのインポート完了</sub>

---

### 催眠スマホのインポート

#### 1. Prefab のインポート

Project ウィンドウで、`Assets/LuiStudio/Hypnosis Phone` に移動し、スマホを持つ手に応じて以下の Prefab のいずれかを選択してください。その後の操作を行います：

- 左手用：`Hypnosis Phone (Left Handed).prefab`
- 右手用：`Hypnosis Phone (Right Handed).prefab`

選択した Prefab（例として右手用）をアバターにドラッグ＆ドロップします。ドラッグ後、Prefab とアバターの関係は以下のようになります：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. スマホの位置と握るポーズの調整

前のステップが完了すると、シーン内のスマホが対応する手に固定されているのが確認できます。以下の画像のように表示されます：

![Phone_Startup_Position](./Assets/Phone_Startup_Position.webp)

##### 1. （オプション）ジェスチャーアニメーションとコントローラーをコピー

このコンポーネントを1つのプロジェクト内の複数のアバターで使用したい場合、各アバターごとにジェスチャーアニメーションとジェスチャーコントローラーをコピーし、競合を防止してください。  
Project ウィンドウで `Assets/LuiStudio/Hypnosis Phone/Animations` に移動し、スマホを握る手に応じて以下のフォルダーのいずれかを選択して操作を続けてください：

- 左手用：`Gesture Left`
- 右手用：`Gesture Right`

選択したフォルダーをコピーし、Assets 内の任意の場所に貼り付け、新しい名前を付けてください。  
操作が完了したら、コピーしたフォルダーに入り、アニメーションコントローラー（`HypnosisPhoneGesture*Controlller`）<sup>[1]</sup> を**ダブルクリック**してください。ポップアップする Animator ウィンドウで、`On`<sup>[2]</sup> ステートをクリックし、Project ウィンドウ内の `On`<sup>[3]</sup> アニメーションを Inspector ウィンドウ内の Motion<sup>[4]</sup> にドラッグ＆ドロップして置き換えます：

> :warning: **注意**
>
> Animator ウィンドウ内の `On` ステートをクリックしても Inspector に内容が表示されない場合、Animator ウィンドウ内の任意の空白部分をクリックして選択を解除し、再度 `On` ステートをクリックしてください。

![Replace_Gesture_On_Animation](./Assets/Replace_Gesture_On_Animation.webp)

次に、Hierarchy ウィンドウで催眠スマホの Prefab<sup>[1]</sup> を選択し、Inspector ウィンドウ内の**最初の** `MA Merge Animator` コンポーネント<sup>[2]</sup> を見つけてください。  
Project ウィンドウ内のアニメーションコントローラー（`HypnosisPhoneGesture*Controlller`）<sup>[3]</sup> を、このコンポーネントの `Animator to merge` にドラッグ＆ドロップして、元のジェスチャーアニメーションコントローラーを置き換えます<sup>[4]</sup>：

![Replace_Gesture_Controller](./Assets/Replace_Gesture_Controller.webp)

##### 2. アバターの Animator アニメーションコントローラーを変更

> :warning: **注意**
>
> この手順の目的は、後続の手順でアニメーションプレビューに入る際、催眠スマホの位置と、それを握る手のジェスチャーを同時に調整できるようにすることです。
>
> この手順は**一時的**なもので、VRChat はアバターをアップロード後、`Animator` コンポーネント内のコントローラーを無効化しますが、位置調整が完了した後は、可能な限り `Animator` 内のコントローラーを元に戻してください。

Hierarchy ウィンドウで催眠スマホの Prefab<sup>[1]</sup> を選択し、Inspector ウィンドウ内の**最初の** `MA Merge Animator` コンポーネント<sup>[2]</sup> を見つけてください。  
その中の `Animator to merge` 欄にあるアニメーションコントローラー<sup>[3]</sup> をクリックして、Project ウィンドウで該当するアニメーションコントローラーの場所を特定します：

![Locate_Gesture_Controller](./Assets/Locate_Gesture_Controller.webp)

次に、Hierarchy ウィンドウでアバター<sup>[1]</sup> を選択し、Inspector ウィンドウ内で `Animator` コンポーネント<sup>[2]</sup> を見つけてください。  
Project ウィンドウ内で前の手順で特定したアニメーションコントローラー<sup>[3]</sup> を `Animator` コンポーネントの `Controller` 欄<sup>[4]</sup> にドラッグ＆ドロップします：

![Replace_Avatar_Animator_Controller](./Assets/Replace_Avatar_Animator_Controller.webp)

##### 3. スマホの位置と握り手ジェスチャーを調整

###### 1. アニメーションをプレビュー

Hierarchy ウィンドウで `催眠スマホ Prefab/Phone`<sup>[1]</sup> を選択します。その後、Animation ウィンドウでアニメーションを `On`<sup>[2]</sup> に変更し、`Preview`<sup>[3]</sup> をクリックしてアニメーションプレビューモードに入ります（録画ボタンは押さないでください）。プレビューを開始すると、シーンは次のようになります<sup>[4]</sup>：

>:warning: **注意**  
>
> Animation ウィンドウが見つからない場合は、Project ウィンドウのタブを右クリックし、`Add Tab -> Animation` を選択してください。

![Preview_Gesture_Animation](./Assets/Preview_Gesture_Animation.webp)

###### 2. スマホの位置と握り手ジェスチャーを調整

シーン内で、`移動ツール`、`回転ツール`、`拡大縮小ツール`<sup>[1]</sup> を使ってスマホの位置を調整します。  
Animation ウィンドウでは、アニメーションのタイムラインカーソルを最初のフレームに維持した状態で<sup>[2]</sup>、左側のパネルで各指を調整します<sup>[3]</sup>：

![Adjust_Phone_Pos_And_Gesture](./Assets/Adjust_Phone_Pos_And_Gesture.webp)

> :warning: **注意**  
>
> Animation ウィンドウで、マウスカーソルをあるプロパティの値の左側に移動すると、カーソルが以下の図のように変化します。この状態で上下または左右にドラッグすることで、指の調整がより簡単に行えます：  
>
> ![Adjuust_Gesture_Value_Hint](./Assets/Adjuust_Gesture_Value_Hint.webp)

スマホの位置とジェスチャーの参考例：  

![Phone_Pos_And_Gesture_Example](./Assets/Phone_Pos_And_Gesture_Example.webp)

###### 3. アニメーションプレビューを終了

Animation ウィンドウで `Preview` をクリックして、アニメーションプレビューモードを終了します。

##### 4. （オプション）Avatar の Animator アニメーションコントローラーを元に戻す

Hierarchy で Avatar を選択し、元のアニメーションコントローラーを `Animator` コンポーネントの `Controller` 欄にドラッグして戻します。

#### インポート完了

催眠スマホのインポートが完了しました。続いて [使用方法](#使用方法) をご確認ください。

<sub>インポート手順完了</sub>

---

## 使用方法

インポートが完了しましたので、次に催眠スマホを VRChat 内で使用する方法を説明します。

- アクションメニューを開き、`Hypnosis Phone` のスイッチを探します。このスイッチでスマホの表示/非表示を切り替えられます。
- もう片方の手で指を使って、スマホ画面中央の `Start` ボタンをタッチして、催眠アニメーションを開始します。
- 再びもう片方の手で指を使って、スマホ画面中央をタッチすると、催眠アニメーションが停止します。

<sub>使用方法完了</sub>

---

## その他

### アクションメニュー内でのスイッチの位置を変更する

催眠スマホのスイッチはデフォルトでメニューの最上層に配置されていますが、多くの機能を持つアバターでは不便になることがあります。
Modular Avatar を使用してスイッチの位置を変更できます。

- Hierarchy で `催眠スマホ Prefab/Menu/Hypnosis Phone` を選択します。
- Inspector で、`MA Menu Installer` コンポーネント内の `Select Menu` ボタンをクリックします。
- 催眠スマホのスイッチを配置したいメニューを選択します。

### 自分だけがスマホと対話可能にする

`催眠スマホ Prefab/Phone/Button Contacts` を選択し、Inspector で 2 つの `VRC Contact Receiver` コンポーネントにおいて、`Filtering -> Allow Others` のチェックを外します。

### VRChat のアバタープレビューでスマホを非表示にする

`催眠スマホ Prefab/Phone` を選択し、Inspector の一番上にあるチェックボックスのチェックを外します。

<sub>その他完了</sub>