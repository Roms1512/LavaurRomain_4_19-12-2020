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
    }" type="number" min="1" max="10" aria-label="Produit" value="${
      element.quantity
    }" class="quant"><button id="suprimerProduit-${
      element.id
    }" class="supre">Suprimer</button></div><p>Prix : <span class="prixduproduit" id="prix-${
      element.id
    }">${(element.price * element.quantity) / 100}</span>,00 €</p></div>`;
    produitAjouter.appendChild(currentProduct);

    //***** Augmenter la quantité de produit *****//

    let quantProd = document.getElementById(`quantiter-${element.id}`);
    quantProd.addEventListener("change", (e) => {
      let name = element.name;
      let currentBasket = JSON.parse(localStorage.getItem("produit"));
      currentBasket.forEach((el) => {
        if (el.name == name) {
          el.quantity = parseInt(quantProd.value);
          return;
        }
      });
      localStorage.setItem("produit", JSON.stringify(currentBasket));

      let priceElement = document.getElementById(`prix-${element.id}`);
      priceElement.innerHTML =
        (element.price * parseInt(quantProd.value)) / 100;
      setTotalPrice();
    });

    //***** supprimer produit *****//

    let supProduct = document.getElementById(`suprimerProduit-${element.id}`);
    console.log(supProduct);

    supProduct.addEventListener("click", (e) => {
      console.log(element.name);
      let productName = element.name;
      let basketToUpdate = JSON.parse(localStorage.getItem("produit"));
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
  //* Regex *//
  let regexName = /^[A-Za-z][a-z\é\è\ê\-]+$/;
  let regexNameAndNumber = /([0-9]{1,3}) ?([a-zA-Z,\., ?]+)*/;
  let regexMail = /[a-zA-Z0-9]+@.+[a-z]\.[a-z]{2,3}/;

  //* Input *//
  let lastName = document.getElementById("lastName");
  let firstName = document.getElementById("firstName");
  let adress = document.getElementById("adress");
  let city = document.getElementById("city");
  let mail = document.getElementById("mail");

  //* Formulaire *//
  let submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    // console.log(regexName.test(lastName.value));
    // console.log(regexName.test(firstName.value));
    // console.log(regexNameAndNumber.test(adress.value));
    // console.log(regexName.test(city.value));
    // console.log(regexMail.test(mail.value));

    const form = document.querySelector("#valid"); // console.log(form);
    //***** Test du Formulaire *****//

    //*** Si Fonctionnelle ***/
    if (
      regexName.test(lastName.value) &&
      regexName.test(firstName.value) &&
      regexNameAndNumber.test(adress.value) &&
      regexName.test(city.value) &&
      regexMail.test(mail.value)
    ) {
      //***  manipuler le formulaire rapidement et facilement ***/
      const formContent = Object.fromEntries(new FormData(form)); // console.log(formContent);

      const basket = localStorage.getItem("produit");

      //***  Rentrer les données du client ***/
      const paramsOrder = {
        utilisateur: formContent, //Données entrées dans le formulaire
        products: basket, //Correspond au panier
      };

      let paramsOrder_json = JSON.stringify(paramsOrder);
      sessionStorage.setItem("client", paramsOrder_json);

      paramsOrder_json = sessionStorage.getItem("client");
      let user = JSON.parse(paramsOrder_json);


      // ********** Récap de la Commande ********** //

      function popUp() {
        const modal = document.querySelector(".modal");
        const caption = document.querySelector(".caption");
  
        const commande = document.getElementById("submit");
  
        commande.addEventListener("click", (e) => {
          modal.classList.add("open");
          caption.classList.add("open");
        });
  
        modal.addEventListener("click", (e) => {
          if (e.target.classList.contains("modal")) {
            modal.classList.remove("open");
            caption.classList.remove("open");
          }
        });
      } popUp()


      console.log(user);
      console.log("Merci d'avoir passer Commande");
      // window.location.reload();
      return;
    }

    //*** Si C'est Pas Fonctionnelle ***/
    else {
      console.log("Formulaire mal remplit");

      //* Montré lequels n'ai pas bon *//
      if (regexName.test(lastName.value) == false) {
        lastName.style.border = "4px solid rgb(246, 39, 39)";
      } else {
        lastName.style.border = "4px solid rgb(23, 175, 23)";
      }

      if (regexName.test(firstName.value) == false) {
        firstName.style.border = "4px solid rgb(246, 39, 39)";
      } else {
        firstName.style.border = "4px solid rgb(23, 175, 23)";
      }

      if (regexNameAndNumber.exec(adress.value) == null) {
        adress.style.border = "4px solid rgb(246, 39, 39)";
      } else {
        adress.style.border = "4px solid rgb(23, 175, 23)";
      }

      if (regexName.test(city.value) == false) {
        city.style.border = "4px solid rgb(246, 39, 39)";
      } else {
        city.style.border = "4px solid rgb(23, 175, 23)";
      }

      if (regexMail.test(mail.value) == false) {
        mail.style.border = "4px solid rgb(246, 39, 39)";
      } else {
        mail.style.border = "4px solid rgb(23, 175, 23)";
      }
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
