/*-------------- Afficher les Objets --------------*/

/***** Au click *****/

function addEvent() {
  let camera = document.getElementById("produit1");
  let teddy = document.getElementById("produit2");
  let furniture = document.getElementById("produit3");

  camera.addEventListener("click", () => showAllCamera());
  teddy.addEventListener("click", () => showAllTeddy());
  furniture.addEventListener("click", () => showAllFurniture());
}
addEvent();

/***** Barre de recherche *****/

const selectElement = document.getElementById("product");

const regCamera = /(cameras?|zurss?|hirsch?|franck?|kuros?|katatone?)/i;
const regTeddy = /(teddies?|teddy?|ours?|oursons?|peluches?|norbert?|arnold?|lenny and carl|gustav?|garfunkel?)/i;
const regFurniture = /(furnitures?|meubles?|tables?|chaises?|planches?)/i;

selectElement.addEventListener("change", (event) => {
  event.preventDefault();

  if (regCamera.test(selectElement.value)) {
    return showAllCamera();
  } else if (regTeddy.test(selectElement.value)) {   
    return showAllTeddy();
  } else if (regFurniture.test(selectElement.value)) {
    return showAllFurniture();
  } 
});
