// On récupere les données du serveur
// avec la methode fetch

// on créer une fonction asyncrone ici 'getAllCamera'
// et on on cherche (Fetch) le serveur

// si le server na pas de problème
// on retourn le dossier json
// sinon on fait un console.error

const getAllCamera = async () => {
  let response = await fetch("http://localhost:3000/api/cameras");
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

const getAllTeddy = async () => {
  let response = await fetch("http://localhost:3000/api/teddies");
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

const getAllFurniture = async () => {
  let response = await fetch("http://localhost:3000/api/furniture");
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

// ------------------------------------------------------------------------------------------------

const showAllCamera = () => {
  getAllCamera().then((json) => {
    json.forEach((element) => {
      createCamera(element);
    });
  });
};

const showAllTeddy = () => {
  getAllTeddy().then((json) => {
    json.forEach((element) => {
      createTeddy(element);
    });
  });
};

const showAllFurniture = () => {
  getAllFurniture().then((json) => {
    json.forEach((element) => {
      createFurniture(element);
    });
  });
};

// ------------------------------------------------------------------------------------------------

const createCamera = (camera) => {
  // console.log(camera);

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
  let thirdP = document.createElement("p");
  thirdP.classList.add("taille-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = camera.imageUrl;

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  thirdDiv.appendChild(thirdP);
  fourDiv.appendChild(firstButton);

  firstH2.innerHTML = camera.name;
  firstP.innerHTML = camera.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = camera.price;
  thirdP.innerHTML = camera.lenses[0];
};

const createTeddy = (teddy) => {
  // console.log(teddy);

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
  let thirdP = document.createElement("p");
  thirdP.classList.add("taille-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = teddy.imageUrl;

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  thirdDiv.appendChild(thirdP);
  fourDiv.appendChild(firstButton);

  firstH2.innerHTML = teddy.name;
  firstP.innerHTML = teddy.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = teddy.price;
  thirdP.innerHTML = teddy.colors[0];
};

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
  let thirdP = document.createElement("p");
  thirdP.classList.add("taille-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = furniture.imageUrl;

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  thirdDiv.appendChild(thirdP);
  fourDiv.appendChild(firstButton);

  firstH2.innerHTML = furniture.name;
  firstP.innerHTML = furniture.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = furniture.price;
  thirdP.innerHTML = furniture.varnish[0];
};

// ------------------------------------------------------------------------------------------------

const selectElement = document.getElementById("product");
const result = document.getElementById("produits");

selectElement.addEventListener("change", (event) => {
  if (event.target.value === "camera") {
    result.innerHTML = showAllCamera();
  }
  if (event.target.value === "teddy" || event.target.value === "ours") {
    result.innerHTML = showAllTeddy();
  }
  if (event.target.value === "furniture" || event.target.value === "meuble") {
    result.innerHTML = showAllFurniture();
  }
});