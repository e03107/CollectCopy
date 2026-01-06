# CollectCopy

現在のウィンドウで開いている全タブからリンクを抽出し、指定した文字列でフィルタして、クリップボードにコピーするChrome拡張機能（Manifest V3）です。

[![GitHub](https://img.shields.io/badge/GitHub-e03107%2FCollectCopy-blue)](https://github.com/e03107/CollectCopy)

## 機能

- **全タブからリンク抽出**: 現在のウィンドウの全タブのDOMから`<a>`要素のhrefを抽出
- **フィルタ機能**: ユーザー指定の文字列（部分一致）でリンクをフィルタ
- **クリップボードコピー**: 抽出結果を改行区切りでクリップボードにコピー
- **重複除去**: 同じURLは自動的に除去
- **エラー処理**: chrome://等の注入不可ページは自動スキップ

## インストール

### Chrome Web Store（推奨）
*現在審査中*

### 開発者モードでインストール

1. このリポジトリをクローン、またはZIPをダウンロード
2. Chromeを開き、`chrome://extensions/` にアクセス
3. 右上の「デベロッパーモード」をONにする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. `CollectCopy`フォルダを選択

詳細は [README_FULL.md](README_FULL.md) をご覧ください。

## 使い方

1. 拡張機能アイコンをクリック
2. フィルタ文字列を入力（例：`github`、`.pdf`）
3. 「Collect & Copy」ボタンをクリック
4. クリップボードにコピーされた結果を貼り付け

### 使用例

- `github.com` → GitHubリポジトリのリンクを抽出
- `.pdf` → PDFファイルへのリンクを抽出
- `amazon.co.jp` → Amazonの商品ページを抽出

## ライセンス

MIT License

## バージョン

**v1.0.0** (2026-01-06) - 初回リリース
