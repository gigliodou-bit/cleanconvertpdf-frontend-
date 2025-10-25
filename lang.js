const translations = {
  en: {
    "title-url": "Convert from URL",
    "label-url": "Enter URL:",
    "label-drive": "Save to Google Drive",
    "btn-url": "Convert",
    "title-html": "Convert from HTML",
    "label-html": "Upload HTML file:",
    "label-drive-html": "Save to Google Drive",
    "btn-html": "Convert"
  },
  it: {
    "title-url": "Converti da URL",
    "label-url": "Inserisci URL:",
    "label-drive": "Salva su Google Drive",
    "btn-url": "Converti",
    "title-html": "Converti da HTML",
    "label-html": "Carica file HTML:",
    "label-drive-html": "Salva su Google Drive",
    "btn-html": "Converti"
  },
  es: {
    "title-url": "Convertir desde URL",
    "label-url": "Introduce URL:",
    "label-drive": "Guardar en Google Drive",
    "btn-url": "Convertir",
    "title-html": "Convertir desde HTML",
    "label-html": "Subir archivo HTML:",
    "label-drive-html": "Guardar en Google Drive",
    "btn-html": "Convertir"
  },
  pt: {
    "title-url": "Converter do URL",
    "label-url": "Inserir URL:",
    "label-drive": "Salvar no Google Drive",
    "btn-url": "Converter",
    "title-html": "Converter do HTML",
    "label-html": "Carregar arquivo HTML:",
    "label-drive-html": "Salvar no Google Drive",
    "btn-html": "Converter"
  }
};

document.getElementById("language-selector").addEventListener("change", (e) => {
  const lang = e.target.value;
  const t = translations[lang];
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) el.textContent = t[key];
  }
});
