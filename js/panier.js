/*-------------------- Page Panier --------------------*/

/***** Mettre les Produits dans le Panier *****/

function getProduct() {
  let allProduit = JSON.parse(localStorage.getItem("produit"));
  const produitAjouter = document.getElementById("pdrt-ajouter");

  // pas d'objet dans le panier
  if (allProduit == null || allProduit.length < 1) {
    produitAjouter.innerHTML = "<p>Aucun produit dans le panier</p>";
    console.log("pas de produit dans le panier");
    return;
  } 
  
  /***** Les Produits dans le Panier *****/

  allProduit.forEach((element) => {
    
    // prixTotal.innerHTML = `${element.price * element.quantity /100} €`;

    /***** Afficher les produits *****/
    const currentProduct = document.createElement("div");
    currentProduct.innerHTML = `<div class="produit seul" id="produitSeul"><h3 class="titre-produit">${
      element.name
    }</h3><div class="image"><img src="${
      element.image
    }" alt="Image du produit mit dans le panier" width ="100%"></div><div class="Suprimer"><input type="number" value="${
      element.quantity
    }" class="quant"><button id="suprimerProduit" class="supre">Suprimer</button></div><p>Prix : ${
      element.price * element.quantity / 100
    },00 €</p></div>`;
    produitAjouter.appendChild(currentProduct);

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
getProduct();



/***** Valider le Formulaire *****/

function valid() {
  let regexName = /[^a-zA-Z]+[a-z]/;
  let regexNameAndNumber = /[[:alnum:]]/i;
  let regexMail = /[a-zA-Z0-9]+@.+[a-z]\.[a-z]{2,4}/;

  let submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    if (
      document.commande.lastName.value == regexName &&
      document.commande.firstName.value == regexName &&
      document.commande.adress.value == regexNameAndNumber &&
      document.commande.city.value == regexName &&
      document.commande.mail.value == regexMail
    ) {
      document.commande.submit();
      confirm("Merci d'avoir passer Commande");
      return;
    } else {
      alert("Remplissez Correctement le Formulaire");
    }
  });
}
valid();

/***** Afficher le Prix *****/

const setTotalPrice = () => {
  let allPriceElement = document.getElementsByClassName("productTotal");
  console.log(allPriceElement.length);
  let total = 0;

  for (let i = 0; i < allPriceElement.length; i++) {
    const element = allPriceElement[i];
    total += parseInt(element.innerHTML);
  }
  console.log(total);
  
  let prixTotal = document.getElementById("prixTotal");
  prixTotal.innerHTML = `${total},00 €`;
};
setTotalPrice();