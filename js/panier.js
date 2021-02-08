/***** mettre les produits dans le panier *****/

function getProduct() {
  let allProduit = JSON.parse(localStorage.getItem("produit"));

  for (let i = 0; i < allProduit.length; i++) {
    let produitAjouter = document.getElementById("pdrt-ajouter");
    const produit = JSON.parse(
      localStorage.getItem("produit", JSON.stringify(allProduit[i]))
    );

    console.log(produit[i]);

    /***** Les Produits dans le Panier *****/
    produit.forEach((element) => {
      prixTotal.innerHTML = `${element.price * element.quantity} €`;

      /***** Afficher les produits *****/
      produitAjouter.innerHTML = `<div class="produit seul" id="produitSeul"><h3 class="titre-produit">${element.name}</h3><div class="image"><img src="${element.image}" alt="Image du produit mit dans le panier" width ="100%"></div><div class="Suprimer"><input type="number" value="${element.quantity}" class="quant"><button id="suprimerProduit" class="supre">Suprimer</button></div><p>Prix : ${element.price} €</p></div>`;

      // supprimer produit par produit
      let supProduct = document.getElementById("suprimerProduit");

      supProduct.addEventListener("click", (e) => {
        if (element.quantity > 0) {
          localStorage.getItem("");
          element.quantity -= 1;
          console.log("produit suprimer");
        } else if (element.quantity === 0) {
          localStorage.clear("produit", JSON.stringify(element[i]));
          console.log("le produit n'est plus dans le panier");
          return;
        }
        console.log(element.quantity);
      });

      // vider le panier
      let suprimer = document.getElementById("suprimer");
      suprimer.addEventListener("click", (e) => {
        localStorage.clear();
        confirm(
          `Vous avez suprimer ${element.quantity} produit du panier 😱😱😱`
        );
        console.log("votre panier et vide");
      });
    });
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

/***** Valider le Formulaire *****/

function valid() {
  let regexName = /[^a-zA-Z]+[a-z]/;
  let regexNameAndNumber = /[[:alnum:]]/i;
  let regexMail = /[a-zA-Z0-9]+@.+[a-z]\.[a-z]{2,4}/;

  let submit = document.getElementById('submit');
  submit.addEventListener('click', (e) => {
    if (
      document.commande.lastName.value == regexName &&
      document.commande.firstName.value == regexName &&
      document.commande.adress.value == regexNameAndNumber &&
      document.commande.city.value == regexName &&
      document.commande.mail.value == regexMail 
    ) {
      document.commande.submit();
      confirm('merci d\'avoir passer commande');
      return;
  
    } else{
      alert("remplisser correctement le formulaire");
    }
  })
}
valid();
