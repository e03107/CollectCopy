# CollectCopy - Chrome Web Store Submission Guide

## 事前準備完了 ✅

### ファイル構成
- ✅ manifest.json (Manifest V3)
- ✅ popup.html/css/js
- ✅ icons/ (16x16, 48x48, 128x128)
- ✅ README.md (rapidgator記述削除済み)

### Store Assets
- ✅ Screenshot (1280x800): `store_assets/screenshot_1.png`
- ✅ Promo Tile (440x280): `store_assets/promo_440x280.png`

## Chrome Web Storeへの提出手順

### 1. ZIPファイルの作成

ウェブストアには以下のファイルのみをZIPで提出します：

```
CollectCopy.zip
├── manifest.json
├── popup.html
├── popup.css
├── popup.js
└── icons/
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

**重要**: README.md、CHROME_WEB_STORE.md、store_assets/ は含めません。

ZIPファイルは `d:/git/CollectCopy/CollectCopy.zip` に作成されます。

### 2. Chrome Developer Dashboard

1. https://chrome.google.com/webstore/devconsole にアクセス
2. 「新しいアイテム」をクリック
3. `CollectCopy.zip` をアップロード

### 3. ストア掲載情報を入力

#### 商品の詳細

**商品名**:
```
CollectCopy
```

**概要** (132文字以内):
```
現在のウィンドウの全タブからリンクを抽出し、フィルタしてクリップボードにコピーする拡張機能
```

**詳細な説明**:
CHROME_WEB_STORE.md の「Detailed Description」セクションをコピー

**カテゴリ**:
- 生産性

**言語**:
- 日本語

#### グラフィック アセット

**スクリーンショット** (必須、最大5枚):
- `store_assets/screenshot_1.png` をアップロード

**プロモーション用タイル** (440x280):
- `store_assets/promo_440x280.png` をアップロード

#### プライバシー

**単一目的**:
```
複数のタブで開いているWebページから特定のリンクを抽出し、クリップボードにコピーする
```

**権限の正当性**:

- **tabs**: タブのURL情報を取得するために必要
- **scripting**: 各タブのDOMからリンクを抽出するためにスクリプトを注入
- **clipboardWrite**: 抽出結果をクリップボードにコピーするために必要
- **<all_urls>**: ユーザーが開いている全てのページでリンク抽出を実行可能にするため

**データの取り扱い**:
```
この拡張機能はユーザーデータを収集、送信、保存しません。
全ての処理はローカル（ブラウザ内）で完結します。
```

**プライバシーポリシー**:
CHROME_WEB_STORE.md の「Privacy Policy」セクションを使用

### 4. 配布

**公開設定**:
- 公開
- 全ての国/地域

**料金**:
- 無料

### 5. 審査提出

「審査のため送信」をクリック

## 審査について

- 審査期間：通常1-3営業日
- 却下された場合：フィードバックに基づいて修正し、再提出

## 公開後

公開後、以下のURLで拡張機能が利用可能になります：
```
https://chrome.google.com/webstore/detail/[拡張機能ID]
```

README.mdにウェブストアのリンクを追加することを推奨します。

## トラブルシューティング

### よくある却下理由

1. **権限の正当性が不明確**
   - 各権限がなぜ必要かを詳細に説明する

2. **単一目的が不明確**
   - 拡張機能の主な目的を1文で明確に説明する

3. **スクリーンショットが不足**
   - 最低1枚、できれば2-3枚のスクリーンショットを用意

4. **プライバシーポリシーが不十分**
   - データ収集の有無を明確に記載
