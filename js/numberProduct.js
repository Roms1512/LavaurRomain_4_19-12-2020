// nombres de produits dans le panier
let panier = document.getElementById("nombreDeProduit");
if (localStorage.getItem("quantité de produit") === null) {
  panier.innerHTML = ``;
} else {
  panier.innerHTML = `${localStorage.getItem("quantité de produit")}`;
}

// AOS
AOS.init();
