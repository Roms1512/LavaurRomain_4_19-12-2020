/*-------------- récuperation de l'ID --------------*/

/*****  *****/

const parametre = new URLSearchParams(window.location.search).get("id");
console.log(parametre);

/*-------------- récuperation de l'ID --------------*/

const getProductCamera = async() => {
  let response = await fetch(`http://localhost:3000/api/cameras/ ${parametre}`);
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

const getProductTeddy = async () => {
  let response = await fetch(`http://localhost:3000/api/teddies/ ${parametre}`);
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

const getProductFurniture = async () => {
  let response = await fetch(
    `http://localhost:3000/api/furniture/ ${parametre}`
  );
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

/*-------------- Récupérer un Objet JSON --------------*/

/***** JSON Camera *****/

const showCamera = () => {
  getProductCamera().then((json) => {
    json.foreach((element) => {
      cameras(element);
    });
  });
};

/***** JSON Teddy *****/

const showTeddy = () => {
  getProductTeddy().then((json) => {
    json.forEach((element) => {
      teddys(element);
    });
  });
};

/***** JSON Furniture *****/

const showFurniture = () => {
  getProductFurniture().then((json) => {
    json.forEach((element) => {
      furnitures(element);
    });
  });
};

// showCamera();
// showTeddy();
// showFurniture();

/*-------------- Créations des Objets --------------*/

const cameras = (camera) => {
  console.log(camera);
};

const teddys = (teddy) => {
  console.log(teddy);
};

const furnitures = (furniture) => {
  console.log(furniture);
};

/*-------------- Afficher les différents Objets --------------*/
const result = document.getElementById("produits");
