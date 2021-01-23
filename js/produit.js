/*-------------- récuperation de l'ID --------------*/

/*****  *****/

const id = new URLSearchParams(window.location.search).get("id");
const type = new URLSearchParams(window.location.search).get("type");

console.log(id);
console.log(type);

/*-------------- récuperation de l'ID --------------*/

const getProductCamera = async() => {
  let response = await fetch(`http://localhost:3000/api/cameras/${id}`);
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

const getProductTeddy = async () => {
  let response = await fetch(`http://localhost:3000/api/teddies/${id}`);
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

const getProductFurniture = async () => {
  let response = await fetch(
    `http://localhost:3000/api/furniture/${id}`
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
      cameras(json);
  });
};

/***** JSON Teddy *****/

const showTeddy = () => {
  getProductTeddy().then((json) => {
      teddys(json);
  });
};

/***** JSON Furniture *****/

const showFurniture = () => {
  getProductFurniture().then((json) => {
      furnitures(json);
  });
};

switch (type) {
  case "cam":
    showCamera();
    break;
  case "teddy":
    showTeddy();
    break;
  case "furniture":
    showFurniture();
  break
  default: 
    console.error("no type found")
    break;
}

/*-------------- Afficher les différents Objets --------------*/

