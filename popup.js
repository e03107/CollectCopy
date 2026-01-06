// DOM要素の取得
const filterInput = document.getElementById('filterInput');
const collectBtn = document.getElementById('collectBtn');
const resultArea = document.getElementById('result');
const statusArea = document.getElementById('status');

// ボタンクリックイベント
collectBtn.addEventListener('click', async () => {
  const filterText = filterInput.value.trim();

  if (!filterText) {
    showStatus('フィルタ文字列を入力してください', 'error');
    return;
  }

  // ボタンを無効化
  collectBtn.disabled = true;
  collectBtn.textContent = '処理中...';
  resultArea.classList.remove('show');
  statusArea.classList.remove('show');

  try {
    // 現在のウィンドウの全タブを取得
    const tabs = await chrome.tabs.query({ currentWindow: true });

    // 各タブからリンクを抽出
    const allLinks = new Set(); // 重複除去用
    let processedTabs = 0;
    let skippedTabs = 0;

    for (const tab of tabs) {
      try {
        // chrome:// 等のURLはスキップ
        if (!tab.url || tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://')) {
          skippedTabs++;
          continue;
        }

        // タブにスクリプトを注入してリンクを抽出
        const results = await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: extractLinks,
          args: [filterText]
        });

        // 結果を集約
        if (results && results[0] && results[0].result) {
          results[0].result.forEach(link => allLinks.add(link));
          processedTabs++;
        }
      } catch (error) {
        // 注入できないタブはスキップ（エラーにしない）
        console.warn(`Tab ${tab.id} skipped:`, error.message);
        skippedTabs++;
      }
    }

    // 結果を改行区切りのテキストに変換
    const linksArray = Array.from(allLinks);
    const linkText = linksArray.join('\n');

    // クリップボードにコピー
    const copied = await copyToClipboard(linkText);

    if (copied) {
      // 結果を表示（XSS対策: innerHTMLではなく安全なDOM操作を使用）
      resultArea.textContent = ''; // クリア

      const titleP = document.createElement('p');
      const titleStrong = document.createElement('strong');
      titleStrong.textContent = '処理完了！';
      titleP.appendChild(titleStrong);
      resultArea.appendChild(titleP);

      const tabsP = document.createElement('p');
      tabsP.textContent = `処理タブ数: ${processedTabs}`;
      resultArea.appendChild(tabsP);

      const skippedP = document.createElement('p');
      skippedP.textContent = `スキップタブ数: ${skippedTabs}`;
      resultArea.appendChild(skippedP);

      const countP = document.createElement('p');
      countP.textContent = `抽出件数: ${linksArray.length}`;
      resultArea.appendChild(countP);

      resultArea.classList.add('show');
      showStatus('クリップボードにコピーしました', 'success');
    } else {
      showStatus('クリップボードへのコピーに失敗しました', 'error');
    }

  } catch (error) {
    console.error('Error:', error);
    showStatus('エラーが発生しました: ' + error.message, 'error');
  } finally {
    // ボタンを有効化
    collectBtn.disabled = false;
    collectBtn.textContent = 'Collect & Copy';
  }
});

/**
 * タブに注入される関数：DOMからリンクを抽出
 * @param {string} filterText - フィルタ文字列
 * @returns {string[]} - フィルタにマッチしたURLの配列
 */
function extractLinks(filterText) {
  const links = [];
  const anchors = document.querySelectorAll('a[href]');

  anchors.forEach(anchor => {
    const href = anchor.href; // 絶対URLを取得

    // フィルタ文字列が含まれるかチェック（部分一致、大文字小文字区別なし）
    if (href.toLowerCase().includes(filterText.toLowerCase())) {
      links.push(href);
    }
  });

  return links;
}

/**
 * クリップボードにコピー
 * @param {string} text - コピーするテキスト
 * @returns {Promise<boolean>} - 成功したかどうか
 */
async function copyToClipboard(text) {
  try {
    // 第一選択: navigator.clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // フォールバック: document.execCommand
    return fallbackCopy(text);
  } catch (error) {
    console.warn('Clipboard API failed, trying fallback:', error);
    return fallbackCopy(text);
  }
}

/**
 * フォールバック：textareaを使ったコピー
 * @param {string} text - コピーするテキスト
 * @returns {boolean} - 成功したかどうか
 */
function fallbackCopy(text) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch (error) {
    console.error('Fallback copy failed:', error);
    return false;
  }
}

/**
 * ステータスメッセージを表示
 * @param {string} message - メッセージ
 * @param {string} type - 'success' or 'error'
 */
function showStatus(message, type) {
  statusArea.textContent = message;
  statusArea.className = 'status-area show ' + type;

  // 3秒後に非表示
  setTimeout(() => {
    statusArea.classList.remove('show');
  }, 3000);
}
