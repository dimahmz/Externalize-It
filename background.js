import { optionStorage } from "./options.js";

chrome.runtime.onInstalled.addListener(async () => {
  await chrome.storage.sync.set({
    options: optionStorage,
  });
});
