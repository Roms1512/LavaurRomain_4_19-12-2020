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



/*-------------- création des Objets --------------*/


/***** Objet Camera *****/

const createCamera = (camera) => {
  console.log(camera);

  let firstDiv = document.createElement("div");
  firstDiv.classList.add("produit");
  let firstH2 = document.createElement("h2");
  firstH2.classList.add("titre-produit");
  let firstImg = document.createElement("img");
  firstImg.classList.add("img-produit");
  let firstP = document.createElement("p");
  firstP.classList.add("description-produit");
  let firstButton = document.createElement("button");
  let secondDiv = document.createElement("div");
  secondDiv.classList.add("image");
  let secondP = document.createElement("p");
  secondP.classList.add("prix-produit");
  let thirdDiv = document.createElement("div");
  thirdDiv.classList.add("info-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");
  let firstSelect = document.createElement("select");
  firstSelect.classList.add("choix");

  let firstA = document.createElement("a");
  firstA.classList.add("voir-plus");

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = camera.imageUrl;

  firstA.setAttribute(`href`, `../html/produit.html?id= ${camera._id}`);
  firstA.innerHTML = "voir le produit";

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  thirdDiv.appendChild(firstA);
  fourDiv.appendChild(firstButton);
  thirdDiv.appendChild(firstSelect);
  camera.lenses.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Tailles : ${element}`;
    firstSelect.appendChild(option);
  });

  firstH2.innerHTML = camera.name;
  firstP.innerHTML = camera.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = `${camera.price} €`;
};


/***** Objet Teddy *****/

const createTeddy = (teddy) => {
  console.log(teddy);

  let firstDiv = document.createElement("div");
  firstDiv.classList.add("produit");
  let firstH2 = document.createElement("h2");
  firstH2.classList.add("titre-produit");
  let firstImg = document.createElement("img");
  firstImg.classList.add("img-produit");
  let firstP = document.createElement("p");
  firstP.classList.add("description-produit");
  let firstButton = document.createElement("button");
  let secondDiv = document.createElement("div");
  secondDiv.classList.add("image");
  let secondP = document.createElement("p");
  secondP.classList.add("prix-produit");
  let thirdDiv = document.createElement("div");
  thirdDiv.classList.add("info-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");
  let firstSelect = document.createElement("select");
  firstSelect.classList.add("choix");
  let firstA = document.createElement("a");
  firstA.classList.add("voir-plus");

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = teddy.imageUrl;

  firstA.setAttribute(`href`, `../html/produit.html?id= ${teddy._id}`);
  firstA.innerHTML = "voir le produit";

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  thirdDiv.appendChild(firstA);
  fourDiv.appendChild(firstButton);
  thirdDiv.appendChild(firstSelect);

  firstH2.innerHTML = teddy.name;
  firstP.innerHTML = teddy.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = `${teddy.price} €`;

  teddy.colors.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Couleurs : ${element}`;
    firstSelect.appendChild(option);
  });
};


/***** Objet Furniture *****/

const createFurniture = (furniture) => {
  console.log(furniture);

  let firstDiv = document.createElement("div");
  firstDiv.classList.add("produit");
  let firstH2 = document.createElement("h2");
  firstH2.classList.add("titre-produit");
  let firstImg = document.createElement("img");
  firstImg.classList.add("img-produit");
  let firstP = document.createElement("p");
  firstP.classList.add("description-produit");
  let firstButton = document.createElement("button");
  let secondDiv = document.createElement("div");
  secondDiv.classList.add("image");
  let secondP = document.createElement("p");
  secondP.classList.add("prix-produit");
  let thirdDiv = document.createElement("div");
  thirdDiv.classList.add("info-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");
  let firstSelect = document.createElement("select");
  firstSelect.classList.add("choix");
  let firstA = document.createElement("a");
  firstA.classList.add("voir-plus");

  firstA.setAttribute(`href`, `../html/produit.html?id= ${furniture._id}`);
  firstA.innerHTML = "voir le produit";

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = furniture.imageUrl;

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  thirdDiv.appendChild(firstA);
  fourDiv.appendChild(firstButton);
  thirdDiv.appendChild(firstSelect);

  firstH2.innerHTML = furniture.name;
  firstP.innerHTML = furniture.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = `${furniture.price} €`;

  furniture.varnish.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Couleurs : ${element}`;
    firstSelect.appendChild(option);
  });
};



/*-------------- récuperation des API --------------*/

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
    event.target.value === "peluche"  ||
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

camera.addEventListener("click", () => {
  result.innerHTML = showAllCamera();
});
ours.addEventListener("click", () => {
  result.innerHTML = showAllTeddy();
});
meuble.addEventListener("click", () => {
  result.innerHTML = showAllFurniture();
});

