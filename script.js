function getword(info, tab) {
  console.log("Word " + info.selectionText + " was clicked.");
  chrome.tabs.create({
    url:
      "https://api.whatsapp.com/send?phone=" +
      info.selectionText.replace(/\D/g, "").trim(),
  });
}
chrome.contextMenus.create({
  title: "Gerar link para o WhatsApp: %s",
  contexts: ["selection"],
  onclick: getword,
});
