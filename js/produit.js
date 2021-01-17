const parametre = new URLSearchParams(window.location.search).get("id");
console.log(parametre);

// ------------------------------------------------------------------------------------------------

const getProductCamera = async () => {
  let response = await fetch(`http://localhost:3000/api/cameras/ ${parametre}`);
  // On vérifie si la réponse du server et OK
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

const getProductTeddy = async () => {
  let response = await fetch(`http://localhost:3000/api/teddies/ ${parametre}`);
  // On vérifie si la réponse du server et OK
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

const getProductFurniture = async () => {
  let response = await fetch(`http://localhost:3000/api/furniture/ ${parametre}`);
  // On vérifie si la réponse du server et OK
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

//   ----------------------------------------------------------------------------------------------

const showCamera = () => {
  getProductCamera().then((json) => {
    json.foreach((element) => {
      cameras(element);
    });
  });
};

const showTeddy = () => {
  getProductTeddy().then((json) => {
    json.forEach((element) => {
      teddys(element);
    });
  });
};
const showFurniture = () => {
  getProductFurniture().then((json) => {
    json.forEach((element) => {
      furnitures(element);
    });
  });
};

showCamera();

// ------------------------------------------------------------------------------------------------

const cameras = (camera) => {
  console.log(camera);
};

const teddys = (teddy) => {
  console.log(teddy);
};

const furnitures = (furniture) => {
  console.log(furniture);
};

// ------------------------------------------------------------------------------------------------

const result = document.getElementById("produits");
