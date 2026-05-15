---
sidebar_label: v2.0.*
---

# RIP AFK v2.0.* 使用説明書 {ignore}

:::warning

こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

:::

## ギミック概要

このギミックは [Non-Destructive Modular Framework](https://github.com/bdunderscore/ndmf) と [Modular Avatar](https://github.com/bdunderscore/modular-avatar) を使用し、**非破壊的**に Avatar が AFK 中に石碑へ変化する機能を実現します。

このギミックは Avatar のビルド時に以下の処理を行います：

1. `RIP AFK Setup Tool` コンポーネントの設定に基づいて、パラメーターとトグルを追加します。
1. Avatar 内のすべての PhysBone、Contact Receiver、Renderer、Particle System、または Light を含むオブジェクトを検索します。
1. 設定された `除外項目` と `強制OFF項目` に基づいてアニメーションを生成します。
1. `デフォルト AFK 切り替えトグル機能` の設定に応じて、Action レイヤーおよび FX レイヤー内で AFK が `true` を条件に含むアニメーション遷移を無効化、または条件を追加します。
1. 未使用のメニュー項目やパラメーターをクリーンアップします（例：オリジナル AFK 切り替えトグルを追加していても、その機能が有効化されていない場合など）。

### 注意事項

- このギミックは、以下のコンポーネントを含む GameObject をアニメーションによって有効化／無効化します：
  - PhysBone
  - Contact Receiver
  - Renderer
  - Particle System
  - Light
- 本ギミックは VRCSDK3、Unity 2022.3.22f1 環境でのみテストされています。

### 既知の問題

- Write Defaults Off を使用している Avatar では、互換性の問題が発生する可能性があります。詳細は [Write Defaults Off を使用した Avatar の互換性問題について](#3-write-defaults-off-を使用している-avatar-の互換性問題について) をご確認ください。
- 空中で AFK 状態に入った場合、石碑が Avatar より先に地面に着くと、Avatar の視点がゆっくり沈み込みながら回転し、地面に到達するまで続きます。

<sub>ギミック紹介終了</sub>

---

## インポートガイド

### インポート前の準備

このギミックは以下の Unity プラグインに依存しています。インポート前にインストールされていることを確認してください：

- Modular Avatar (1.16.0 以上): https://modular-avatar.nadena.dev/
- lilToon (2.2.1 以上): https://lilxyzw.github.io/lilToon/#/

---

### パッケージのインポート

`RIP AFK.unitypackage` を Unity の `Project` ウィンドウへドラッグし、表示されるダイアログで `Import` をクリックして、Avatar プロジェクトにパッケージをインポートします：

![Import](./Assets/Import.webp)

---

### ギミックのインストール

#### 1. Prefab の追加

`Assets/LuiStudio/AFKs/RIP/RIP AFK.prefab` を Project ウィンドウから Hierarchy 内の Avatar の子階層へドラッグ＆ドロップします：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. ギミックの設定

##### 1. 石碑の位置とサイズを変更する（任意）

`RIP AFK`<sup>[1]</sup> を選択し、`移動`、`回転`、`スケール` ツール<sup>[2]</sup> を使用して石碑の位置とサイズを調整します：

![Adjust_Position](./Assets/Adjust_Position.webp)

##### 2. カスタムパラメーターを使用する（任意）

Avatar の AFK 状態以外の方法（例：メニューのトグルなど）でこのアニメーションを再生したい場合は、`カスタムパラメーター` 機能を有効にできます。

:::note

有効にすると、ビルド時に自動的に 1 bit を使用するカスタムパラメーター名の bool 同期パラメーターが追加されます。手動でパラメーターを追加する必要はありません。

:::

`カスタムパラメーターを使用`<sup>[1]</sup> をチェックしてこの機能を有効にします。`カスタムパラメーター`<sup>[2]</sup> フィールドは、パラメーター名をコピーして Animator Controller などで使用するためのものです。  
RIP AFK アニメーションを単純なトグル1つで再生したい場合は、`カスタムパラメータートグルを作成`<sup>[3]</sup> をクリックすると、トグルを素早く作成できます：

![Use_Custom_Parameter](./Assets/Use_Custom_Parameter.webp)

カスタムパラメータートグルを作成した後、`カスタムパラメータートグルを削除`<sup>[1]</sup> をクリックすると、作成したトグルを削除できます：

![Remove_Custom_Parameter_Toggle](./Assets/Remove_Custom_Parameter_Toggle.webp)

トグル作成後、新しく作成された GameObject<sup>[1]</sup> を選択し、必要に応じて `MA Menu Installer` コンポーネント内のメニュー項目の配置<sup>[2]</sup> や、`MA Menu Item` コンポーネント内のメニュー項目名・メニューアイコン<sup>[3]</sup> を変更してください：

![Custom_Parameter_Toggle](./Assets/Custom_Parameter_Toggle.webp)

:::warning

`カスタムパラメーターを使用` を有効にしていない場合、ビルド時に不要な `LuiStudio/AFK/RIP` パラメーターおよび、そのパラメーターを使用しているすべてのメニュー項目は削除されます。

:::

##### 3. デフォルト AFK 切り替えトグルを使用する（任意）

オリジナルの AFK を保持したまま、トグルによって RIP AFK と通常の AFK を切り替えたい場合は、`デフォルトAFK切り替えトグルを使用` 機能を有効にできます。

:::note

有効にすると、ビルド時に自動的に 1 bit を使用するカスタムパラメーター名の bool 同期パラメーターが追加されます。手動でパラメーターを追加する必要はありません。

:::

`デフォルトAFK切り替えトグルを使用`<sup>[1]</sup> をチェックしてこの機能を有効にし、`デフォルトAFK切り替えトグルを作成`<sup>[2]</sup> をクリックすると切り替えトグルを作成できます：

![Use_AFK_Toggle](./Assets/Use_AFK_Toggle.webp)

トグル作成後、`デフォルトAFK切り替えトグルを削除`<sup>[1]</sup> をクリックすると、作成したトグルを削除できます：

![Remove_AFK_Toggle_Toggle](./Assets/Remove_AFK_Toggle_Toggle.webp)

トグル作成後、新しく作成された GameObject<sup>[1]</sup> を選択し、必要に応じて `MA Menu Installer` コンポーネント内のメニュー項目の配置<sup>[2]</sup> や、`MA Menu Item` コンポーネント内のメニュー項目名・メニューアイコン<sup>[3]</sup> を変更してください：

![AFK_Toggle_Toggle](./Assets/AFK_Toggle_Toggle.webp)

:::warning

`デフォルト AFK 切り替えトグルを使用する` を有効にしているにもかかわらずトグルを作成していない場合、ビルド時にアクションメニューのルートメニューへデフォルトのデフォルト AFK 切り替えトグルが追加されます。

`デフォルト AFK 切り替えトグルを使用する` を有効にしていない場合、ビルド時に不要な `LuiStudio/AFK/RIP` パラメーターおよび、そのパラメーターを使用しているすべてのメニュー項目は削除されます。

:::

##### 4. 除外項目を追加する（任意）

このギミックが生成する AFK アニメーションは、[注意事項](#注意事項) に記載されている条件に一致するモデル内のすべてのオブジェクトを無効化します。

AFK アニメーション再生中に特定のオブジェクトを影響を受けないようにしたい場合は、それらのオブジェクトを `除外項目` リスト<sup>[1]</sup> に追加してください：

![Exclusions](./Assets/Exclusions.webp)

:::note

`除外項目` に追加されたオブジェクトおよびその子オブジェクトはすべて除外されます。

:::

##### 5. 強制OFF項目を追加する（任意）

RIP AFK アニメーション開始時に、[注意事項](#注意事項) に記載されているオブジェクト以外も無効化したい場合は、それらのオブジェクトを `強制OFF項目` リスト<sup>[1]</sup> に追加してください：

![Force_Off_Objects](./Assets/Force_Off_Objects.webp)

:::note

`強制OFF項目` に追加されたオブジェクトは、まず `除外項目` に追加された後、RIP AFK のアニメーション対象へ追加されます。これにより、その子オブジェクトへ影響を与えないようになります。  
この機能は主に、[Write Defaults Off を使用している Avatar における一部の互換性問題を防ぐ](#3-write-defaults-off-を使用している-avatar-の互換性問題について) ためのものです。

子オブジェクト内に `MA Bone Proxy` コンポーネントが存在し、その参照先がこのオブジェクト外にあり、かつその子オブジェクトにデフォルトで無効化されるコンポーネントが存在しない場合、この機能はその子オブジェクトには効果がありません。  
このケースに該当する場合は、その子オブジェクトも `強制OFF項目` リストへ追加してください。

:::

##### 6. 石碑を変更する（任意）

石碑はデフォルトで非表示になっています。石碑を編集する場合は、Hierarchy で `RIP AFK/Stone`<sup>[1]</sup> を選択し、Inspector 左上の `チェックボックス`<sup>[2]</sup> をオンにしてください：

![Enable_Stone](./Assets/Enable_Stone.webp)

###### 石碑にコンテンツを追加する（任意）

AFK 用の Audio Source を追加したり、石碑に自分の ID などを表示したい場合は、追加したい内容を `Stone` オブジェクト内に配置し、有効化したままにしてください。

###### 石碑モデルを置き換える（任意）

`RIP AFK/Stone`<sup>[1]</sup> オブジェクトを選択し、Inspector で `Mesh Filter` と `Mesh Renderer` コンポーネントを探します。

- `Mesh Filter` コンポーネントの Mesh<sup>[2]</sup> を置き換えたいモデルの Mesh に変更します。  
- `Mesh Renderer` コンポーネント内の Material<sup>[3]</sup> を置き換えたいモデルの Material に変更します：

![Replace_Stone_Model](./Assets/Replace_Stone_Model.webp)

その後、`Box Collider` コンポーネントを見つけ、新しいモデルに合うよう境界を調整してください。

:::warning

`Stone` オブジェクトを直接置き換えないでください。どうしても直接置き換える場合は：

- 新しいオブジェクトのコンポーネント構成が元の `Stone` オブジェクトと一致していることを確認してください。  
- Inspector を Debug ビューに切り替え、`RIP AFK` を選択し、新しいオブジェクトを `RIP AFK Setup Tool` の `Stone Transform` フィールドへドラッグしてください。

:::

`RIP AFK/Stone Indicator (Auto Remove On Build)`<sup>[1]</sup> オブジェクトを選択し、Inspector で `Mesh Filter` コンポーネントを探します。

`Mesh Filter` コンポーネントの Mesh<sup>[2]</sup> を置き換えたいモデルの Mesh に変更してください：

![Replace_Stone_Indicator_Model](./Assets/Replace_Stone_Indicator_Model.webp)

#### 3. Write Defaults Off を使用している Avatar の互換性問題について

Avatar が [`Write Defaults Off`](https://creators.vrchat.com/avatars/#write-defaults-on-states) を使用している場合、Write Defaults Off の特性により、旧バージョンでは RIP AFK アニメーション終了時に Avatar が他プレイヤーの視界外にいると、モデルが完全に復元されず、一部が非表示のままになる（透明化する）問題が発生していました。

この問題を修正するため、新バージョンでは FX レイヤーのアニメーション最上部に、`除外項目` と `強制OFF項目` に基づいて生成されたデフォルトアニメーションを追加しています。
このアニメーションは、RIP AFK アニメーションで有効／無効化されるオブジェクトのデフォルト状態を記録するために使用されます。

##### 互換性問題の詳細

デフォルトアニメーションを追加したことで、RIP AFK 終了時の透明化問題は修正されましたが、新たな問題が発生する可能性があります。
Avatar が以下の条件を満たしている場合：

1. FX レイヤーの Animator Controller 内に Layer が存在する。
1. その Layer 内に複数の State が存在する。
1. それらの State 間に Transition が存在する。
1. いずれかの State の Animation Clip に含まれる Property が、他の State と一致していない。
1. 不足している Property が、ちょうど RIP AFK によって無効化される GameObject の Property である。

あるいは、より簡単に説明すると：

ある Layer 内で、ある State が GameObject の有効／無効を制御しており、その次に遷移する State のアニメーションではその GameObject を制御していない場合、

次の State に遷移した際、その State が該当 GameObject を制御していないため、上記で説明したデフォルトアニメーションによって、その GameObject の有効状態が上書きされます。

##### この問題を解決するには？

さらなる問題を避けるため、このギミックは RIP AFK 以外のアニメーションを変更しません（非破壊的な変更であっても行いません）。
そのため、以下の内容を参考にしながら、ユーザー自身で問題解決を試してください。

新バージョンの `RIP AFK Setup Tool` コンポーネントには、[強制OFF項目](#5-強制off項目を追加する任意) 機能が追加されています。
この機能を使用すると、生成されるアニメーションではリスト内のオブジェクト自身のみを有効／無効化し、その子オブジェクトは無視されます。

以下の状況を参考に、互換性問題の解決を試してください。

###### ケース1

互換性問題が発生しているオブジェクトが Avatar の直接の子オブジェクトではない場合、その親オブジェクトを `強制OFF項目` に追加してください。

###### ケース2

互換性問題が発生しているオブジェクトが Avatar の直接の子オブジェクトである場合：

1. 新しい GameObject を作成します。
1. 問題が発生しているオブジェクトに `MA Bone Proxy` コンポーネントを追加します。
1. 作成した新しい GameObject を、その `MA Bone Proxy` コンポーネントのターゲットに指定します。
1. 新しい GameObject を `強制OFF項目` に追加します。

###### その他の複雑なケース

問題が非常に複雑な場合は、`除外項目` を直接追加することをおすすめします。
また、いつでもお気軽に当店までお問い合わせください。

<sub>インポートガイド</sub>

---

## テスト

インストール完了後、Play Mode に入って動作を確認できます。

まず `Gesture Manager` が必要です。`Vrchat Creator Companion` からインストールしてください。

`Gesture Manager` をインストール後、Unity ウィンドウの `Tools/Gesture Manager Emulator` をクリックします：

![Add_Gesture_Manager_Emulator](./Assets/Add_Gesture_Manager_Emulator.webp)

クリックすると、シーン内に `GestureManager`<sup>[1]</sup> という名前の GameObject が追加されます。  
それを選択し、Inspector で `Gesture Manager` コンポーネント内の `Enter Play-Mode`<sup>[2]</sup> をクリックして Play Mode に入ります：

![Enter_Play_Mode_With_Gesture_Manager](./Assets/Enter_Play_Mode_With_Gesture_Manager.webp)

Play Mode に入ると、Gesture Manager コンポーネント内にアクションメニューが表示されます。

:::warning

いずれかのテスト中に、RIP AFK アニメーション終了後に一部オブジェクトで問題が発生した場合は、[Write Defaults Off を使用している Avatar の互換性問題について](#3-write-defaults-off-を使用している-avatar-の互換性問題について) をご確認ください。

:::

### 通常時のテスト

`Options -> States -> AFK` をクリックして AFK 状態を切り替えます。

AFK 状態に切り替えた際、Avatar が消え、下へ落下する石碑が表示され、その後再度 AFK 状態を切り替えたときに Avatar が正常に表示へ戻れば、このギミックは正常に動作しています。

### カスタムパラメーター機能を有効にしている場合のテスト

[通常時のテスト](#通常時のテスト) に加えて：

- `RIP AFK Setup Tool` でトグルを作成している場合は、アクションメニュー内の `RIP AFK（またはカスタマイズ後の名前）` トグルを切り替えてテストしてください。
- 独自にアニメーションロジックを実装している場合は、そのロジックに従ってテストしてください。

### デフォルト AFK 切り替えトグル機能を有効にしている場合のテスト

アクションメニュー内の `デフォルト AFK を使用（またはカスタマイズ後の名前）` トグルを切り替え、[通常時のテスト](#通常時のテスト) の手順と AFK 状態を組み合わせてテストしてください。

<sub>テスト終了</sub>

---

## 使用方法

### 基本的な使用方法

Avatar の AFK 状態検知が有効になっていることを確認してください：

- PC モードの場合は、キーボードの End キーで AFK 状態を切り替えます。
- VR モードの場合は、SteamVR メニューを開くことで AFK 状態に入ります。

AFK 状態に入ると、Avatar は石碑へ変化します。

### その他の使用方法

`カスタムパラメーター機能` または `デフォルト AFK 切り替えスイッチ機能` を有効にしている場合は、[テストセクション内の対応する方法](#カスタムパラメーター機能を有効にしている場合のテスト) を参考に使用してください。

<sub>使用方法終了</sub>
