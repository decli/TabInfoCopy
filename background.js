chrome.action.onClicked.addListener((tab) => {
  const text = `${tab.title}\n${tab.url}`;

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: (text) => {
        function copyTextToClipboard(text) {
          const textArea = document.createElement('textarea');
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();

          try {
            document.execCommand('copy');
            console.log('已成功复制标题和URL到剪贴板。');
          } catch (err) {
            console.error('复制失败:', err);
          }

          document.body.removeChild(textArea);
        }

        copyTextToClipboard(text);
      },
      args: [text],
    },
    () => {
      if (chrome.runtime.lastError) {
        console.error('执行脚本时出错:', chrome.runtime.lastError);
      }
    }
  );
});
