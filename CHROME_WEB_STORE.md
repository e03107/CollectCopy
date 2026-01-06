# CollectCopy - Chrome Extension Store Listing

## Store Listing Information

### Extension Name
CollectCopy

### Short Description (132 characters max)
現在のウィンドウの全タブからリンクを抽出し、フィルタしてクリップボードにコピーする拡張機能

### Detailed Description

CollectCopyは、複数のタブで開いているWebページから特定のリンクを簡単に抽出できるChrome拡張機能です。

**主な機能：**

✅ **全タブからリンク抽出** - 現在のウィンドウで開いている全タブのリンクを一括取得

✅ **柔軟なフィルタ機能** - キーワードを指定して必要なリンクだけを抽出（部分一致、大文字小文字不問）

✅ **ワンクリックでコピー** - 抽出結果を自動的にクリップボードにコピー

✅ **重複除去** - 同じURLは自動的に除去

✅ **安全設計** - chrome://など、アクセスできないページは自動スキップ

**こんな時に便利：**

📚 リサーチ中に開いた参考サイトのリンクを一覧化
🛒 ショッピング比較で複数サイトの商品URLを整理
📝 技術記事・ドキュメントのリンクを収集
🎓 学習リソースのURLをまとめて保存
📎 特定のファイル形式（PDF、ZIPなど）へのリンクを一括抽出

**使い方：**

1. 拡張機能アイコンをクリック
2. フィルタ文字列を入力（例：github、.pdf、amazon）
3. 「Collect & Copy」ボタンをクリック
4. クリップボードにコピーされた結果を貼り付け

**プライバシー：**

この拡張機能は、ユーザーのブラウジングデータを外部に送信しません。すべての処理はローカルで行われます。

### Category
生産性

### Language
日本語

### Privacy Policy
この拡張機能はユーザーのプライバシーを尊重します。

- データ収集：一切行いません
- データ送信：外部サーバーへのデータ送信は行いません
- データ保存：ローカルストレージへのデータ保存は行いません
- 処理：すべての処理はユーザーのブラウザ内でのみ実行されます

使用する権限：
- `tabs`: タブ情報の取得（URL取得のため）
- `scripting`: 各タブへのスクリプト注入（リンク抽出のため）
- `clipboardWrite`: クリップボードへの書き込み（結果コピーのため）
- `<all_urls>`: 全URLでのスクリプト実行（ユーザーが開いているページからリンクを抽出するため）

これらの権限は拡張機能の動作に必要最小限のものであり、収集したデータは一切外部に送信されません。

## Required Assets for Chrome Web Store

### Screenshots (1280x800 or 640x400)
- At least 1 screenshot required
- Maximum 5 screenshots

### Promotional Images
- Small Tile: 440x280 (required)
- Large Tile: 920x680 (optional)
- Marquee: 1400x560 (optional)

### Icons (Already Prepared)
- 16x16 ✅
- 48x48 ✅
- 128x128 ✅

## Version History

### v1.0.0 (2026-01-06)
- 初回リリース
- 全タブからリンク抽出機能
- フィルタ機能（部分一致、大文字小文字不問）
- クリップボードコピー機能
- 重複除去機能
- エラーハンドリング（注入不可ページの自動スキップ）
