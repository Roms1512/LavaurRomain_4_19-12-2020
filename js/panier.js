/*-------------------- Page Panier --------------------*/

/********** Mettre les Produits dans le Panier **********/

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

    //***** Afficher les produits *****//

    const currentProduct = document.createElement("div");
    currentProduct.innerHTML = `<div class="produit seul" id="produitSeul-${
      element.id
    }"><h3 class="titre-produit">${
      element.name
    }</h3><div class="image"><img src="${
      element.image
    }" alt="Image du produit mit dans le panier" width ="100%"></div><div class="Suprimer"><input id="quantiter-${
      element.id
    }" type="number" min="1" max="10" value="${
      element.quantity
    }" class="quant"><button id="suprimerProduit-${
      element.id
    }" class="supre">Suprimer</button></div><p>Prix : <span class="prixduproduit" id="prix-${
      element.id
    }">${(element.price * element.quantity) / 100}</span>,00 €</p></div>`;
    produitAjouter.appendChild(currentProduct);

    //***** supprimer produit par produit *****//

    let supProduct = document.getElementById(`suprimerProduit-${element.id}`);
    console.log(supProduct);

    supProduct.addEventListener("click", (e) => {
      console.log(element.name);
      let productName = element.name;
      let basketToUpdate = JSON.parse(localStorage.getItem("produit"));
      let quantiteProduit = JSON.parse(localStorage.getItem('quantité de produit'));
      for (let i = 0; i < basketToUpdate.length; i++) {
        const elt = basketToUpdate[i];
        if (elt.name == productName) {
          basketToUpdate.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("produit", JSON.stringify(basketToUpdate));
      document.getElementById(`produitSeul-${element.id}`).remove();
      
      setTotalPrice();
    });
    console.log(element.quantity);

    //***** vider le panier *****//

    let suprimer = document.getElementById("suprimer");
    suprimer.addEventListener("click", (e) => {
      localStorage.clear();
      console.log("votre panier et vide");
      confirm(
        `Vous avez suprimer ${element.quantity} produit du panier 😱😱😱`
      );
      window.location.reload();
    });
  });
}
getProduct();

/********** Valider le Formulaire **********/

function valid(data) {
  let client = [];
  console.log(client);

  let regexName = /[^a-zA-Z]+[a-z]/;
  let regexNameAndNumber = /[[:alnum:]]/i;
  let regexMail = /[a-zA-Z0-9]+@.+[a-z]\.[a-z]{2,4}/;

  // console.log(regexName.test(lastName.value));

  let submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    let personne = JSON.parse(localStorage.getItem("client"));
    if (
      document.commande == regexName.test(lastName.value) &&
      document.commande == regexName.test(firstName.value) &&
      document.commande == regexNameAndNumber.test(adress.value) &&
      document.commande == regexName.test(city.value) &&
      document.commande == regexMail.test(mail.value)
    ) {
      document.commande.submit();
      
      console.log("Merci d'avoir passer Commande");
      return;
    }
  });
}
valid();

/********** Afficher le Prix **********/

const setTotalPrice = () => {
  let allPriceElement = document.getElementsByClassName("prixduproduit");
  let prixTotal = document.getElementById("prixTotal");
  let total = 0;

  for (let i = 0; i < allPriceElement.length; i++) {
    total += parseInt(allPriceElement[i].innerHTML);
  }

  prixTotal.innerHTML = `${total},00 €`;
};
setTotalPrice();
