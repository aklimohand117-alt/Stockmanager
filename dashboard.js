const nombreProduits = produits.length;
let stockTotal = 0;
for (const produit of produits) {
  stockTotal = stockTotal + produit.quantite;
}

const produitsFaibles = produits.filter(function (produit) {
  return produit.quantite < produit.seuil;
});

document.getElementById("total-produits").textContent = nombreProduits;
document.getElementById("total-stock").textContent = stockTotal;
document.getElementById("total-faible").textContent = produitsFaibles.length;
document.getElementById("message-alerte").textContent =
  produitsFaibles.length + " produits nécessitent votre attention";