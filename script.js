document.getElementById('convert-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const url = document.getElementById('input-url').value;
  const aiFriendly = document.getElementById('ai-friendly').checked;

  // Simula conversione
  alert(`Conversione avviata per: ${url}\nModalità AI-friendly: ${aiFriendly}`);

  // Simula anteprima PDF
  const preview = document.getElementById('pdf-preview');
  preview.src = 'https://example.com/sample.pdf'; // Sostituire con PDF generato
  preview.hidden = false;

  // Attiva pulsanti
  document.getElementById('download-btn').disabled = false;
  document.getElementById('drive-btn').disabled = false;
});
