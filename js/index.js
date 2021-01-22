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
const result = document.getElementById("produits");

selectElement.addEventListener("change", (event) => {
  if (
    event.target.value === "camera" ||
    event.target.value === "cameras" ||
    event.target.value === "Camera" ||
    event.target.value === "Cameras"
  ) {
    result.innerHTML = showAllCamera();
  }
  if (
    event.target.value === "teddy" ||
    event.target.value === "ours" ||
    event.target.value === "Ours" ||
    event.target.value === "Oursons" ||
    event.target.value === "oursons" ||
    event.target.value === "peluches" ||
    event.target.value === "peluche" ||
    event.target.value === "Peluches" ||
    event.target.value === "peluches"
  ) {
    result.innerHTML = showAllTeddy();
  }
  if (
    event.target.value === "furniture" ||
    event.target.value === "meuble" ||
    event.target.value === "table" ||
    event.target.value === "tables" ||
    event.target.value === "chaise"
  ) {
    result.innerHTML = showAllFurniture();
  }
});

/***** Au click *****/

const allProduct = document.getElementById("all-product");

allProduct.addEventListener("click", () => {
  result.innerHTML = `${showAllCamera()} ${showAllTeddy()} ${showAllFurniture()}`;
});

const camera = document.getElementById("produit1");
const ours = document.getElementById("produit2");
const meuble = document.getElementById("produit3");
let produit1 = document.createElement('div');
let section1 = document.getElementsByClassName('create-element');
section1.appendchild(produit1);

camera.addEventListener("click", () => {
  produit1.innerHTML = showAllCamera();
});
ours.addEventListener("click", () => {
  showAllTeddy();
});
meuble.addEventListener("click", () => {
  showAllFurniture();
});

/*-------------- Ajout au Panier --------------*/

/*-------------- Petit localStorage --------------*/

window.onload = () => {
  if (localStorage.prenom != null) {
    var prenom = localStorage.prenom;
  } else {
    var prenom = prompt("Entrez votre Prénom ici 😜");
    localStorage.prenom = prenom;
  }

  let utilisateur = (document.getElementById(
    "utlisateur"
  ).innerText = `${prenom}`);
};
