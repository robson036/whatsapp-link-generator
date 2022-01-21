function getword(info, tab) {
  const { selectionText } = info;

  let formattedValue = selectionText.replace(/\D/g, "");

  if (!selectionText.startsWith("55")) {
    formattedValue = `55${formattedValue}`;
  }

  chrome.tabs.create({
    url: "https://api.whatsapp.com/send?phone=" + formattedValue,
  });
}
chrome.contextMenus.create({
  title: "Gerar link para o WhatsApp: %s",
  contexts: ["selection"],
  onclick: getword,
});
