const client = JSON.parse(sessionStorage.getItem("client"));
const basket = JSON.parse(localStorage.getItem("produit"));
const orderId = sessionStorage.getItem("orderId");
const recap = document.getElementById("commande");

console.log(client);

//*************** Remerciement et Numéro de Commande ***************/
const confProduit = document.createElement("div");
confProduit.classList.add("confirmation-pdrt");
confProduit.innerHTML = `
  <p class="remerciement">Monsieur ${client.utilisateur.lastName}, merci d'avoir pris commande chez nous ;). Nous espérons vous revoir bientôt. </p>
  <div class="idProduit">
    <h2 class="titreId">Numéro de commande : </h2>
    <p class="id">${orderId}.</p>
  </div>
  <h2 class="contProduit">Contenue de la commande :</h2>`;
recap.appendChild(confProduit);

//*************** Contenue de la Commande ***************/ 
basket.forEach((element) => {
  const infoProduit = document.createElement("div");
  infoProduit.classList.add("info-pdrt");
  infoProduit.innerHTML = `
    <div class="contenuProduit">
    <h3 class="titreProduit">- ${element.quantity} ${element.name}</h3>
    <p id="${client.id}">Total : ${
    (element.price * element.quantity) / 100
  },00 €</p>
    </div>`;
  confProduit.appendChild(infoProduit);
});