// Toolbar click (or Alt+Shift+D) turns dark mode on or off in all HubSpot tabs.
async function showBadge(enabled) {
  await chrome.action.setBadgeText({ text: enabled ? "" : "off" });
  await chrome.action.setBadgeBackgroundColor({ color: "#666" });
}

chrome.action.onClicked.addListener(async () => {
  const { enabled = true } = await chrome.storage.local.get("enabled");
  await chrome.storage.local.set({ enabled: !enabled });
  await showBadge(!enabled);
});

async function init() {
  const { enabled = true } = await chrome.storage.local.get("enabled");
  await showBadge(enabled);
}
chrome.runtime.onInstalled.addListener(init);
chrome.runtime.onStartup.addListener(init);
