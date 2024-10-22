chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "copyText") {
      navigator.clipboard.writeText(request.text).then(() => {
        sendResponse({ status: 'success' });
      }).catch((err) => {
        sendResponse({ status: 'failure', error: err });
      });
      // 需要返回 true 以使 sendResponse 异步发送
      return true;
    }
  });
  