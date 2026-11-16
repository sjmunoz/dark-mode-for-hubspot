// Turns the dark.css rules on or off from the stored setting.
// Default is on. The setting is shared by all HubSpot tabs.
const root = document.documentElement;

function apply(enabled) {
  if (enabled) root.removeAttribute("data-hsdm");
  else root.setAttribute("data-hsdm", "off");
}

chrome.storage.local.get({ enabled: true }, (s) => apply(s.enabled));

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.enabled) apply(changes.enabled.newValue);
});
