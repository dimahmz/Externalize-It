const optionsForm = document.getElementById("options-form");

const options = {};

// initialize the form with users's options
async function initFormOptions() {
  const data = await chrome.storage.sync.get("options");
  Object.assign(options, data.options);

  for (let key in options) {
    if (optionsForm[key]) optionsForm[key].checked = Boolean(options[key]);
  }
}

await initFormOptions();

optionsForm.externalize.addEventListener("change", async (e) => {
  // get the current Tab
  const tab = await chrome.tabs.query({ active: true, currentWindow: true }),
    tabId = tab[0].id;

  const isChecked = e.target.checked;

  // when is checked
  if (isChecked) {
    await chrome.scripting.executeScript({
      files: ["/scripts/externalize.js"],
      target: { tabId },
    });
  }
  // when is unchecked
  else {
    await chrome.scripting.executeScript({
      files: ["/scripts/unexternalize.js"],
      target: { tabId },
    });
  }
  options.externalize = isChecked;
  chrome.storage.sync.set({ options });
});
