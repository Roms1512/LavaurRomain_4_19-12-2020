/*-------------- Afficher les Objets --------------*/

/***** Au click *****/

const allProduct = document.querySelectorAll('#info');

allProduct.forEach(element => {
  element.addEventListener('click', (e)=> {
    e.preventDefault();
    let camera = document.getElementById('produit1');
    let teddy = document.getElementById('produit2');
    let furniture = document.getElementById('produit3');

    if (camera) {
      showAllCamera();
      return
    } 
    if (teddy) {
      showAllTeddy();
      return
    } 
    if (furniture) {
      showAllFurniture();
      return
    }
  });
})

/***** Barre de recherche *****/

const selectElement = document.getElementById("product");

selectElement.addEventListener("change", (event) => {
  event.preventDefault();
  if (/(cameras?|zurss?|hirsch?|franck?|kuros?|katatone?)/i) {
    showAllCamera();
    return;
  } 
  
  else if (
    /(teddy|ours|oursons?|peluches?|norbert|arnold|lenny and carl|gustav|garfunkel)/i
  ) {
    showAllTeddy();
    return;
  }
  
  else if (/(furnitures?|meubles?|tables?|chaises?|planches?)/i) {
    showAllFurniture();
    return;
  }
});