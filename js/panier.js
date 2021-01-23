const ajouter = document.getElementsByClassName("ajouter-panier");
const nombreDeProduit = document.querySelector("span#nombreDeProduit");
const produitAjouter = document.getElementById("pdrt-ajouter");
let nombre = 0;

/*-------------- localStorage --------------*/

// ajouter un element
ajouter.addEventListener("click", () => {
  nombreDeProduit.innerHTML += `(${nombre})`;
});

// console.log(nombre);
// console.log('Ajouter des produit au panier');
