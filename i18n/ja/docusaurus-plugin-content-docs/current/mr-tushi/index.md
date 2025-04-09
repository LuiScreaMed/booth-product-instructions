---
sidebar_label: Mr.トゥシー
---

# Mr.トゥシー v1.0 使用説明書 {ignore}

>:warning: **注意**
>
>こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

## 目次 {ignore}

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [インポート手順](#インポート手順)
  - [インポート前の準備](#インポート前の準備)
  - [アセットパッケージのインポート](#アセットパッケージのインポート)
  - [Mr.トゥシー のインポート](#mrトゥシー-のインポート)
    - [1. Prefab のインポート](#1-prefab-のインポート)
    - [2. 位置の調整](#2-位置の調整)
    - [インポート完了](#インポート完了)
- [使用方法](#使用方法)
- [その他](#その他)
  - [サブメニューのアクションメニュー内の位置を変更する](#サブメニューのアクションメニュー内の位置を変更する)
  - [VRChat のアバタープレビューで Mr.トゥシー を非表示にする](#vrchat-のアバタープレビューで-mrトゥシー-を非表示にする)

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

`Mr Tushi.unitypackage` を Unity の `Project` ウィンドウにドラッグし、プロンプトが表示されたら `Import` をクリックして、アセットパッケージを Avatar プロジェクトにインポートします。

![Import](./Assets/Import.webp)

<sub>アセットパッケージのインポート完了</sub>

---

### Mr.トゥシー のインポート

#### 1. Prefab のインポート

Project ウィンドウで `Assets/LuiStudio/Mr Tushi/Mr Tushi.prefab` を Hierarchy ウィンドウのアバターにドラッグ＆ドロップします。Prefab を追加すると、アバターと Prefab の関係は以下のようになります：

![Prefab_In_Avatar](./Assets/Prefab_In_Avatar.webp)

#### 2. 位置の調整

前の手順を完了すると、シーン内で Mr.トゥシー が頭部の骨に固定されているのが確認できます（以下の画像を参照）：

![Tushi_Startup_Position](./Assets/Tushi_Startup_Position.webp)

Hierarchy で `Mr Tushi/Armature_Tushi/Root`<sup>[1]</sup> を選択し、シーン内で `移動ツール`、`回転ツール`、`スケールツール`<sup>[2]</sup> を使って Mr.トゥシー を頭の上に移動します：

![Adjust_Position](./Assets/Adjust_Position.webp)

移動後の参考位置：

![Position_Example](./Assets/Position_Example.webp)

#### インポート完了

Mr.トゥシー のインポートが完了しました。続いて [使用方法](#使用方法) をご確認ください。

<sub>インポート手順完了</sub>

---

## 使用方法

インポートが完了しましたので、次に Mr.トゥシー を VRChat で使用する方法を説明します。  
アクションメニューを開き、`Mr.Tushi` サブメニューを見つけて開きます。メニュー内のスイッチは、対応するモデルの表示 / 非表示を切り替えるために使用します。

<sub>使用方法完了</sub>

---

## その他

### サブメニューのアクションメニュー内の位置を変更する  

Mr.トゥシー のサブメニューはデフォルトでメニューの最上層に配置されていますが、多機能なアバターでは使い勝手が悪い場合があります。`MA Menu Installer` コンポーネントを利用してサブメニューの位置を変更できます：  

- Hierarchy ウィンドウで `Mr Tushi/Menu/Mr.Tushi` を選択します。  
- Inspector ウィンドウで、`MA Menu Installer` コンポーネント内の `Select Menu` ボタンをクリックします。  
- サブメニューを配置したいメニューを選択します。

### VRChat のアバタープレビューで Mr.トゥシー を非表示にする  

Hierarchy ウィンドウで以下の項目を選択します：  

- `Mr Tushi/Tushi_Body`  
- `Mr Tushi/Tushi_Hat`  
- `Mr Tushi/Tushi_Monocle`  
- `Mr Tushi/Tushi_Mustache`  
- `Mr Tushi/Tushi_Suit`  

選択した後、Inspector ウィンドウの最上部にあるチェックボックスの選択を解除します。

<sub>その他完了</sub>