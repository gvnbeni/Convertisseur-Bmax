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
