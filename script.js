function convertir() {
  const montant = parseFloat(document.getElementById("inputValue").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  if (isNaN(montant)) {
    document.getElementById("resultat").textContent = "Montant invalide.";
    return;
  }

  // Taux fixes
  const taux = {
    EUR: { USD: 1.1, CFA: 655.957 },
    USD: { EUR: 0.91, CFA: 595 },
    CFA: { EUR: 1 / 655.957, USD: 1 / 595 }
  };

  if (from === to) {
    document.getElementById("resultat").textContent = "Même devise sélectionnée.";
    return;
  }

  const valeurConvertie = montant * taux[from][to];
  document.getElementById("resultat").textContent = 
    `${montant} ${from} = ${valeurConvertie.toFixed(2)} ${to}`;
}
<script>
  const euroInput = document.getElementById('euro');
  const cfaInput = document.getElementById('cfa');
  const taux = 655.957; // 1 euro = 655.957 CFA

  let isUpdating = false;

  euroInput.addEventListener('input', () = {
    if (isUpdating) return;
    isUpdating = true;
    const euro = parseFloat(euroInput.value);
    if (!isNaN(euro)) {
      cfaInput.value = (euro * taux).toFixed(0);
    } else {
      cfaInput.value = '';
    }
    isUpdating = false;
  });

  cfaInput.addEventListener('input', () = {
    if (isUpdating) return;
    isUpdating = true;
    const cfa = parseFloat(cfaInput.value);
    if (!isNaN(cfa)) {
      euroInput.value = (cfa / taux).toFixed(2);
    } else {
      euroInput.value = '';
    }
    isUpdating = false;
  });
</script>


