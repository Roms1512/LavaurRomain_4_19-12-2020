/***** mettre les produits dans le panier *****/

let produitAjouter = document.getElementById("pdrt-ajouter");
let boutton = document.querySelector("#submit");

function getProduct() {
  let allProduit = JSON.parse(localStorage.getItem("produit"));
  for (let i = 0; i < allProduit.length; i++) {
    const produit = JSON.parse(localStorage.getItem('produit', JSON.stringify(allProduit[i])));

    console.log(produit);

    /***** Les Produits dans le Panier *****/
    produit.forEach((element) => {
      prixTotal.innerHTML = `${element.price * element.quantity} €`;
  
        produitAjouter.innerHTML = `<div class="produit seul" id="produitSeul"><h3 class="titre-produit">${element.name}</h3><div class="image"><img src="${element.image}" alt="Image du produit mit dans le panier" width ="100%"></div><div class="Suprimer"><input type="number" value="${element.quantity}" class="quant"><button id="suprimerProduit" class="supre">Suprimer</button></div><p>Prix : ${element.price} €</p></div>`;
      
      let supProduct = document.getElementById("suprimerProduit");
  
      supProduct.addEventListener("click", (e) => {
        if (element.quantity > 0) {
          element.quantity -= 1;
          console.log('produit suprimer');
        } else if (element.quantity === 0) {
          localStorage.removeItem('produit')
          console.log('le produit n\'est plus dans le panier');
          return;
        }
        console.log(element.quantity);
  
      });
  
      let suprimer = document.getElementById("suprimer");
      suprimer.addEventListener("click", (e) => {
        localStorage.removeItem("produit");
        localStorage.removeItem("quantité de produit");
        confirm(
          `Vous avez suprimer ${element.quantity} produit du panier 😱😱😱`
        );
        console.log('votre panier et vide');
      });
    });
    // console.log(produit[0]);
    
  }

  // pas d'objet dans le panier
  if (!allProduit) {
    produitAjouter.innerHTML = "<p>Aucun produit dans le panier</p>";
    console.log("pas de produit dans le panier");
  } else {
    /***** Afficher le Prix *****/
    let prixTotal = document.getElementById("prixTotal");

  }
}
getProduct();
