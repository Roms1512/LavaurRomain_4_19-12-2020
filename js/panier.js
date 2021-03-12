/*-------------------- Page Panier --------------------*/

let userData;
let allProduit = JSON.parse(localStorage.getItem("produit"));
const produitAjouter = document.getElementById("pdrt-ajouter");

/********** Mettre les Produits dans le Panier **********/

function getProduct() {
  
  // pas d'objet dans le panier
  if (allProduit == null || allProduit.length < 1) {
    produitAjouter.innerHTML = "<p>Aucun produit dans le panier</p>";
    console.log("pas de produit dans le panier");
    return;
  }
}
getProduct();

function productPanier(params) {
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
  });
}
productPanier();

/********** Pop Up **********/

function popUp() {
  const modal = document.querySelector(".modal");
  const caption = document.querySelector(".caption");

  const commande = document.getElementById("submit");
  modal.classList.add("open");
  caption.classList.add("open");

  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      modal.classList.remove("open");
      caption.classList.remove("open");
    }
  });
}

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

/********** Méthodes POST **********/

function methodePost() {
  //*** Tableau de données Vide ***/
  let cameraIds = [];
  let teddyIds = [];
  let furnitureIds = [];

  //*** Boucle qui parcours le panier ***//
  allProduit.forEach((element) => {
    /********** Type de donnée **********/

    // pour chaque elements verifier le type
    if (element.type == "cam") {
      cameraIds.push(element.id);
    } else if (element.type == "teddy") {
      teddyIds.push(element.id);
    } else if (element.type == "furniture") {
      furnitureIds.push(element.id);
    }

    /********** POST des données **********/

    if (cameraIds.length > 0) {
      donnePost(cameraIds, "cameras");
    }
    if (teddyIds.length > 0) {
      donnePost(teddyIds, "teddies");
    }
    if (furnitureIds.length > 0) {
      donnePost(furnitureIds, "furniture");
    }
  });
}

function donnePost(idArray, type) {
  let paramsOrder = {
    formData,
    idArray,
  };
  let headers = {
    "Content-Type": "application/json",
  };

  //   /********** POST des données  -  Caméras **********/

  fetch(`http://localhost:3000/api/${type}/order`, {
    method: "POST",
    body: JSON.stringify(paramsOrder),
    headers: headers,
  })
    .then(function (response) {
      if (response.ok) {
        console.log(response.json());
        return response.json();
      } else {
        console.log("Error");
        return response.status;
      }
    })
    .then(function (data) {
      console.log(data.orderId);
    });
}

//*** Récapitulatif ***/

function recap() {
  const basket = JSON.parse(localStorage.getItem("produit"));
  const recap = document.getElementById("commande");

  basket.forEach((element) => {
    const infoProduit = document.createElement("div");
    infoProduit.innerHTML = `
    <h3 class="titreProduit">- ${element.quantity} ${element.name}</h3>
    <p id:"${element.id}">Total : ${
      (element.price * element.quantity) / 100
    },00 €</p>`;

    recap.appendChild(infoProduit);
  });
}
recap();

////////////////////////////
//// EVENT LISTENER !!! ////
////////////////////////////

/******************** Valider le Formulaire ********************/

//* Regex *//
let regexName = /^[A-Za-z][a-z\é\è\ê\-]+$/;
let regexNameAndNumber = /([0-9]{1,3}) ?([a-zA-Z,\., ?]+)*/;
let regexMail = /[a-zA-Z0-9]+@.+[a-z]\.[a-z]{2,3}/;

//* Input *//
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let adress = document.getElementById("address");
let city = document.getElementById("city");
let mail = document.getElementById("email");

//* Formulaire *//
let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();

  const form = document.querySelector("#valid"); // console.log(form);

  //********** Test du Formulaire **********//

  //*** Si Fonctionnelle ***/
  if (
    regexName.test(firstName.value) &&
    regexName.test(lastName.value) &&
    regexNameAndNumber.test(adress.value) &&
    regexName.test(city.value) &&
    regexMail.test(mail.value)
  ) {
    //***  manipuler le formulaire rapidement et facilement ***/

    const formContent = Object.fromEntries(new FormData(form)); // console.log(formContent);
    formData = formContent;

    const basket = JSON.parse(localStorage.getItem("produit"));

    //***  Rentrer les données du client ***/

    const paramsOrder = {
      utilisateur: formContent, //Données entrées dans le formulaire
      products: basket, //Correspond au panier
    };

    let paramsOrder_json = JSON.stringify(paramsOrder);
    sessionStorage.setItem("client", paramsOrder_json);

    paramsOrder_json = sessionStorage.getItem("client");
    let user = JSON.parse(paramsOrder_json);

    // ********** Méthode POST ********** //

    methodePost();

    // ********** Récap de la Commande ********** //

    popUp();

    console.log(user);
    console.log("Merci d'avoir passer Commande");
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

/******************** Les Produits dans le Panier ********************/

allProduit.forEach((element) => {
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
    priceElement.innerHTML = (element.price * parseInt(quantProd.value)) / 100;
    setTotalPrice();
  });

  //***** supprimer produit *****//
  let supProduct = document.getElementById(`suprimerProduit-${element.id}`); // console.log(supProduct);

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
  }); // console.log(element.quantity);

  //***** vider le panier *****//
  let suprimer = document.getElementById("suprimer");

  suprimer.addEventListener("click", (e) => {
    localStorage.clear();
    console.log("votre panier et vide");
    confirm(`Vous avez suprimer ${element.quantity} produit du panier 😱😱😱`);
    window.location.reload();
  });
});