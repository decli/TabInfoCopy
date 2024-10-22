chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'copyToClipboard') {
      (async () => {
        try {
          await navigator.clipboard.writeText(message.text);
          sendResponse({ status: 'success' });
        } catch (error) {
          sendResponse({ status: 'failure', error: error.toString() });
        }
      })();
      return true; // 表示将异步发送响应
    }
  });
  