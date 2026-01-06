# CollectCopy

現在のウィンドウで開いている全タブからリンクを抽出し、指定した文字列でフィルタして、クリップボードにコピーするChrome拡張機能（Manifest V3）です。

## 機能

- **全タブからリンク抽出**: 現在のウィンドウの全タブのDOMから`<a>`要素のhrefを抽出
- **フィルタ機能**: ユーザー指定の文字列（部分一致）でリンクをフィルタ
- **クリップボードコピー**: 抽出結果を改行区切りでクリップボードにコピー
- **重複除去**: 同じURLは自動的に除去
- **エラー処理**: chrome://等の注入不可ページは自動スキップ

## ファイル構成

```
CollectCopy/
├── manifest.json         # Manifest V3設定
├── popup.html            # Popup UI構造
├── popup.css             # UIスタイリング
├── popup.js              # メインロジック
├── icons/
│   ├── icon48.png        # 48x48アイコン
│   └── icon128.png       # 128x128アイコン
└── README.md             # このファイル
```

## 導入手順

### 1. 拡張機能の読み込み

1. Chromeを開き、アドレスバーに `chrome://extensions/` と入力してEnter
2. 右上の「デベロッパーモード」をONにする
3. 「パッケージ化されていない拡張機能を読み込む」ボタンをクリック
4. このディレクトリ（`CollectCopy`フォルダ）を選択

### 2. 動作確認

1. 複数のタブを開く（例：GitHubのページを3つ）
2. 拡張機能アイコン（ツールバー右上）をクリック
3. フィルタ文字列を入力（例：`github`）
4. 「Collect & Copy」ボタンをクリック
5. 結果が表示され、クリップボードにコピーされる
6. テキストエディタ等で貼り付け（Ctrl+V / Cmd+V）して確認

## 使い方

### 基本的な使い方

1. **フィルタ文字列を入力**: 抽出したいリンクに含まれる文字列を入力（例：`rapidgator`、`github`）
2. **Collect & Copyをクリック**: ボタンをクリックすると全タブから抽出開始
3. **結果を確認**: 処理タブ数、抽出件数が表示される
4. **貼り付け**: クリップボードにコピーされているので、任意の場所に貼り付け

### 例

#### 例1: RapidGatorのリンクを抽出

```
フィルタ文字列: rapidgator
```

結果（クリップボード）:
```
https://rapidgator.net/file/abc123
https://rapidgator.net/file/def456
https://rapidgator.net/file/ghi789
```

#### 例2: GitHubリポジトリのリンクを抽出

```
フィルタ文字列: github.com/
```

結果（クリップボード）:
```
https://github.com/user1/repo1
https://github.com/user2/repo2
https://github.com/user3/repo3
```

## 技術仕様

- **Manifest Version**: 3
- **権限**:
  - `tabs`: タブ情報の取得
  - `scripting`: 各タブへのスクリプト注入
  - `clipboardWrite`: クリップボードへの書き込み
  - `<all_urls>`: 全URLでスクリプト実行（ホスト権限）

- **クリップボードコピー方式**:
  1. 第一選択: `navigator.clipboard.writeText()` (Modern API)
  2. フォールバック: `document.execCommand('copy')` with textarea（互換性のため）

## 注意事項

- **注入不可ページ**: 以下のページではスクリプトを注入できないため、自動的にスキップされます
  - `chrome://` で始まるページ
  - `chrome-extension://` で始まるページ
  - Chrome Web Store等の一部の特殊なページ

- **大文字小文字**: フィルタは大文字小文字を区別しません（`GitHub`でも`github`でもマッチ）

## ライセンス

MIT License

## バージョン履歴

- **1.0.0** (2026-01-06): 初回リリース
  - 全タブからリンク抽出
  - フィルタ機能
  - クリップボードコピー
  - 重複除去
