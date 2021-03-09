const basket = JSON.parse(localStorage.getItem("produit"));
const recap = document.getElementById("commande");

basket.forEach((element) => {
  const infoProduit = document.createElement("div");
  infoProduit.classList.add('info-pdrt');
  infoProduit.innerHTML = `
  <h2 class="idProduit">commande : ${element.id}.</h2>
    <h3 class="titreProduit">- ${element.quantity} ${element.name}</h3>
    <p id="${
    element.id
    }">Total : ${(element.price * element.quantity) / 100},00 €</p>`;

  recap.appendChild(infoProduit);
});