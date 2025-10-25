const translations = {
  en: {
    title: "CleanConvertPDF",
    "label-url": "Insert URL:",
    "label-drive": "Save to Google Drive",
    "btn-url": "Convert from URL",
    "label-html": "Upload HTML file:",
    "label-drive-html": "Save to Google Drive",
    "btn-html": "Convert from HTML"
  },
  it: {
    title: "CleanConvertPDF",
    "label-url": "Inserisci URL:",
    "label-drive": "Salva su Google Drive",
    "btn-url": "Converti da URL",
    "label-html": "Carica file HTML:",
    "label-drive-html": "Salva su Google Drive",
    "btn-html": "Converti da HTML"
  },
  es: {
    title: "CleanConvertPDF",
    "label-url": "Introduce URL:",
    "label-drive": "Guardar en Google Drive",
    "btn-url": "Convertir desde URL",
    "label-html": "Subir archivo HTML:",
    "label-drive-html": "Guardar en Google Drive",
    "btn-html": "Convertir desde HTML"
  },
  pt: {
    title: "CleanConvertPDF",
    "label-url": "Inserir URL:",
    "label-drive": "Salvar no Google Drive",
    "btn-url": "Converter do URL",
    "label-html": "Carregar arquivo HTML:",
    "label-drive-html": "Salvar no Google Drive",
    "btn-html": "Converter do HTML"
  }
};

const selector = document.getElementById("language-selector");

selector.addEventListener("change", () => {
  const lang = selector.value;
  const t = translations[lang];
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) el.textContent = t[key];
  }
});

