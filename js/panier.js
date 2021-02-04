/***** mettre les produits dans le panier *****/

let produitAjouter = document.getElementById("pdrt-ajouter");
let boutton = document.querySelector("#submit");

function getProduct() {
  let produit = JSON.parse(localStorage.getItem("produit"));
  // pas d'objet dans le panier
  if (!produit) {
    produitAjouter.innerHTML = "<p>Aucun produit dans le panier</p>";
    console.log("pas de produit dans le panier");
  }

  /***** Afficher le prix *****/
  let prixTotal = document.getElementById("prixTotal");

  produit.forEach((element) => {
    prixTotal.innerHTML = `${element.price * element.quantity} €`;
    
    produitAjouter.innerHTML = `<div class="produit seul" id="produitSeul"><h3 class="titre-produit">${element.name}</h3><div class="image">${element.image}</div><div class="suprimer"><button id="suprimer">Suprimer</button></div></div>`;

    let div1 = document.createElement('div');
    div1.classList('quantiter')
    let pdrt = document.getElementById('produitSeul');
    pdrt.appendChild(div1);

  });
}
getProduct();
