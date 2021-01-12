console.log("Bonsoir");

const parametre = new URLSearchParams(window.location.search).get("id");
console.log(parametre);

// ------------------------------------------------------------------------------------------------

const getProductCamera = async () => {
  let response = await fetch("http://localhost:3000/api/cameras/" + parametre);
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

const getProductTeddy = async () => {
  let response = await fetch("http://localhost:3000/api/teddies/" + parametre);
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

const getProductFurniture = async () => {
  let response = await fetch(
    "http://localhost:3000/api/furniture/" + parametre
  );
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

//   ----------------------------------------------------------------------------------------------

const showCamera = () => {
  getProductCamera().then((json) => {
    json.forEach((element) => {
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

// ------------------------------------------------------------------------------------------------

const cameras = (camera) => {
  console.log(getProductCamera());
};
const teddys = (teddy) => {
  console.log(getProductTeddy());
};
const furnitures = (furniture) => {
  console.log(getProductCamera());
};

// ------------------------------------------------------------------------------------------------

const result = document.getElementById("produits");

if (getProductCamera) {
  console.log(showCamera());
} else if (getProductTeddy) {
  console.log(showTeddy());
} else {
  console.log(showFurniture());
}
