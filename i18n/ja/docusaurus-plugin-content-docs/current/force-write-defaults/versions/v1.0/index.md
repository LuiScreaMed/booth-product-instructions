---
sidebar_label: v1.0.*
---

# 強制 Write Defaults v1.0.* 使用説明書 {ignore}

:::warning

こちらの説明書は ChatGPT によって生成されました。翻訳には誤りが含まれる可能性があります。誤りがある場合はご容赦ください。

:::

## 概要

アニメーションステートの Write Defaults の有効／無効を強制するための、非破壊型 NDMF プラグインです。

### 注意事項

- 本プラグインは VRCSDK3、Unity 2022.3.22f1 環境でのみテストされています。

<sub>概要終了</sub>

---

## インストール

### 依存関係

本プラグインは以下の Unity パッケージに依存しています。インポート前にインストールされていることを確認してください：

- Non-Destructive Modular Framework (1.11.0 以上): https://github.com/bdunderscore/ndmf

---

### パッケージのインストール

1. [VPM パッケージ一覧ページ](https://luistudio.github.io/VPM-Package-Listing/) にアクセスします。
1. `Add to VCC` ボタンをクリックして、リポジトリを VCC / ALCOM に追加します。
1. VCC / ALCOM でプロジェクトの管理ページを開き、`Force Write Defaults` をインストールします。

<sub>インストール終了</sub>

---

## 使用方法

本プラグインは、State Behaviour とステート名タグの2つの方法で Animator State の Write Defaults を上書きできます。なお、State Behaviour の方が優先度が高くなります。

### State Behaviour を使用して Write Defaults を上書きする

1. Animator で、Write Defaults を上書きしたい State を選択します。
1. Inspector で `Add Behaviour` をクリックします。
1. `Force Write Defaults` を検索し、State に追加します。
1. 追加された `Force Write Defaults` 内の `Write Defaults` をチェック／解除して上書きします。

### ステート名タグを使用して Write Defaults を上書きする

1. Animator で、Write Defaults を上書きしたい State を選択します。
1. Inspector で選択中の State の名前を変更し、末尾に `(WD On)` または `(WD Off)`（大文字・小文字は区別しません）を追加して上書きします。

### 完了

Play Mode に入るか、Avatar をビルドして結果を確認してください。

<sub>使用方法終了</sub>

---

## 動作原理

本プラグインは NDMF の Optimizing フェーズで実行されます。

### 実行内容

本プラグインが実行されると、以下の処理を行います：

1. Avatar 内のすべての Animator State と Animator State Machine を取得します。
1. 取得した State または State Machine に `Force Write Defaults` が存在するかを確認します。
1. State に `Force Write Defaults` が存在する、または名前の末尾に `(WD On)` / `(WD Off)` が含まれている場合、Write Defaults を上書きします。
1. State および State Machine 内の `Force Write Defaults` を削除します。

<sub>動作原理終了</sub>
