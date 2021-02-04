/*-------------- récuperation des API --------------*/

/***** API Camera *****/

const getAllCamera = async () => {
  let response = await fetch("http://localhost:3000/api/cameras");
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

/***** API teddy *****/

const getAllTeddy = async () => {
  let response = await fetch("http://localhost:3000/api/teddies");
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

/***** API Furniture *****/

const getAllFurniture = async () => {
  let response = await fetch("http://localhost:3000/api/furniture");
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

/*-------------- Récupérer un Objet JSON --------------*/

/***** JSON Camera *****/

const showAllCamera = () => {
  getAllCamera().then((json) => {
    json.forEach((element) => {
      createCamera(element);
    });
  });
};

/***** JSON Teddy *****/

const showAllTeddy = () => {
  getAllTeddy().then((json) => {
    json.forEach((element) => {
      createTeddy(element);
    });
  });
};

/***** JSON Furniture *****/

const showAllFurniture = () => {
  getAllFurniture().then((json) => {
    json.forEach((element) => {
      createFurniture(element);
    });
  });
};

/*-------------- Afficher les Objets --------------*/


/***** Barre de recherche *****/

const selectElement = document.getElementById("product");

selectElement.addEventListener("change", (event) => {
  if (
    event.target.value === "camera" ||
    event.target.value === "cameras" ||
    event.target.value === "Camera" ||
    event.target.value === "Cameras" ||
    event.target.value === "Zurss" ||
    event.target.value === "zurss" ||
    event.target.value === "Hirsch" ||
    event.target.value === "hirsch" ||
    event.target.value === "Franck" ||
    event.target.value === "franck" ||
    event.target.value === "Kuros" ||
    event.target.value === "kuros" ||
    event.target.value === "Katatone" ||
    event.target.value === "katatone"
  ) {
    showAllCamera();
  }

  if (
    event.target.value === "teddy" ||
    event.target.value === "Teddy" ||
    event.target.value === "ours" ||
    event.target.value === "Ours" ||
    event.target.value === "Oursons" ||
    event.target.value === "oursons" ||
    event.target.value === "Ourson" ||
    event.target.value === "ourson" ||
    event.target.value === "peluches" ||
    event.target.value === "peluche" ||
    event.target.value === "Peluches" ||
    event.target.value === "peluches"
  ) {
    showAllTeddy();
  }

  if (
    event.target.value === "furniture" ||
    event.target.value === "furnitures" ||
    event.target.value === "Furniture" ||
    event.target.value === "Furnitures" ||
    event.target.value === "meuble" ||
    event.target.value === "meubles" ||
    event.target.value === "Meuble" ||
    event.target.value === "Meubles" ||
    event.target.value === "table" ||
    event.target.value === "Table" ||
    event.target.value === "tables" ||
    event.target.value === "Tables" ||
    event.target.value === "chaise" ||
    event.target.value === "chaises" ||
    event.target.value === "Chaises" ||
    event.target.value === "chaise"
  ) {
    showAllFurniture();
  }
});

/***** Au click *****/

// const prdt = document.querySelectorAll("#info");

// prdt.forEach((element) => {
//   element.addEventListener('click', (e) => {
//     let camera = document.querySelector(".produit1")
//     let teddy = document.querySelector(".produit2")
//     let furniture = document.querySelector(".produit3")
//     if (camera) {
//       return showAllCamera();
//     } else if (teddy) {
//       return showAllTeddy();
//     } else if (furniture){
//       return showAllFurniture();
//     };
//     console.log(camera);
//   });
// });

// console.log(prdt);