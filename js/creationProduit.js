/*-------------- création de tous les Objets --------------*/

/***** Objets Cameras *****/

const createCamera = (Camera) => {
  // console.log(camera);

  let firstDiv = document.createElement("div");
  firstDiv.classList.add("produit");
  let firstH2 = document.createElement("h2");
  firstH2.classList.add("titre-produit");
  let firstImg = document.createElement("img");
  firstImg.classList.add("img-produit");
  let firstP = document.createElement("p");
  firstP.classList.add("description-produit");
  // let firstButton = document.createElement("button");
  let secondDiv = document.createElement("div");
  secondDiv.classList.add("image");
  let secondP = document.createElement("p");
  secondP.classList.add("prix-produits");
  let thirdDiv = document.createElement("div");
  thirdDiv.classList.add("info-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");
  let firstSelect = document.createElement("select");
  firstSelect.classList.add("dif-choix");

  let firstA = document.createElement("a");
  firstA.classList.add("voir-plus");

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = Camera.imageUrl;

  firstA.setAttribute(`href`, `../html/produit.html?id=${Camera._id}&type=cam`);
  firstA.innerHTML = "voir le produit";

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(secondP);
  fourDiv.appendChild(firstA);

  firstH2.innerHTML = Camera.name;
  secondP.innerHTML = `${Camera.price} €`;

  Camera.lenses.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Tailles : ${element}`;
    firstSelect.appendChild(option);
  });
};

/***** Objets Teddys *****/

const createTeddy = (Teddy) => {
  // console.log(teddy);

  let firstDiv = document.createElement("div");
  firstDiv.classList.add("produit");
  let firstH2 = document.createElement("h2");
  firstH2.classList.add("titre-produit");
  let firstImg = document.createElement("img");
  firstImg.classList.add("img-produit");
  let firstP = document.createElement("p");
  firstP.classList.add("description-produit");
  // let firstButton = document.createElement("button");
  let secondDiv = document.createElement("div");
  secondDiv.classList.add("image");
  let secondP = document.createElement("p");
  secondP.classList.add("prix-produits");
  let thirdDiv = document.createElement("div");
  thirdDiv.classList.add("info-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");
  let firstSelect = document.createElement("select");
  firstSelect.classList.add("choix");
  let firstA = document.createElement("a");
  firstA.classList.add("voir-plus");

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = Teddy.imageUrl;

  firstA.setAttribute(
    `href`,
    `../html/produit.html?id=${Teddy._id}&type=teddy`
  );
  firstA.innerHTML = "voir le produit";

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(secondP);
  fourDiv.appendChild(firstA);

  firstH2.innerHTML = Teddy.name;
  secondP.innerHTML = `${Teddy.price} €`;

  Teddy.colors.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Couleurs : ${element}`;
    firstSelect.appendChild(option);
  });
};

/***** Objets Furnitures *****/

const createFurniture = (Furniture) => {
  // console.log(Furniture);

  let firstDiv = document.createElement("div");
  firstDiv.classList.add("produit");
  let firstH2 = document.createElement("h2");
  firstH2.classList.add("titre-produit");
  let firstImg = document.createElement("img");
  firstImg.classList.add("img-produit");
  let firstP = document.createElement("p");
  firstP.classList.add("description-produit");
  // let firstButton = document.createElement("button");
  let secondDiv = document.createElement("div");
  secondDiv.classList.add("image");
  let secondP = document.createElement("p");
  secondP.classList.add("prix-produits");
  let thirdDiv = document.createElement("div");
  thirdDiv.classList.add("info-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");
  let firstSelect = document.createElement("select");
  firstSelect.classList.add("choix");
  let firstA = document.createElement("a");
  firstA.classList.add("voir-plus");

  firstA.setAttribute(
    `href`,
    `../html/produit.html?id=${Furniture._id}&type=furniture`
  );
  firstA.innerHTML = "voir le produit";

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = Furniture.imageUrl;

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(secondP);
  fourDiv.appendChild(firstA);

  firstH2.innerHTML = Furniture.name;
  secondP.innerHTML = `${Furniture.price} €`;

  Furniture.varnish.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Couleurs : ${element}`;
    firstSelect.appendChild(option);
  });
};

/*-------------- création d'un Objets --------------*/

/***** Objet Camera *****/

const cameras = (camera) => {
  console.log(camera);

  let firstDiv = document.createElement("div");
  firstDiv.classList.add("produit");
  firstDiv.classList.add("seul");
  let firstH2 = document.createElement("h2");
  firstH2.classList.add("titre-produit");
  let firstImg = document.createElement("img");
  firstImg.classList.add("img-produit");
  firstImg.classList.add("img");
  let firstP = document.createElement("p");
  firstP.classList.add("description-produit");
  let firstButton = document.createElement("button");
  firstButton.classList.add('ajouter-panier');
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

  document.querySelector(".produits").appendChild(firstDiv);

  firstImg.src = camera.imageUrl;

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
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

const teddys = (teddy) => {
  console.log(teddy);

  let firstDiv = document.createElement("div");
  firstDiv.classList.add("produit");
  firstDiv.classList.add("seul");
  let firstH2 = document.createElement("h2");
  firstH2.classList.add("titre-produit");
  let firstImg = document.createElement("img");
  firstImg.classList.add("img-produit");
  firstImg.classList.add("img");
  let firstP = document.createElement("p");
  firstP.classList.add("description-produit");
  let firstButton = document.createElement("button");
  firstButton.classList.add('ajouter-panier');
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

  document.querySelector(".produits").appendChild(firstDiv);

  firstImg.src = teddy.imageUrl;

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  fourDiv.appendChild(firstButton);
  thirdDiv.appendChild(firstSelect);
  teddy.colors.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Tailles : ${element}`;
    firstSelect.appendChild(option);
  });

  firstH2.innerHTML = teddy.name;
  firstP.innerHTML = teddy.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = `${teddy.price} €`;
};

/***** Objet Furniture *****/

const furnitures = (furniture) => {
  console.log(furniture);

  let firstDiv = document.createElement("div");
  firstDiv.classList.add("produit");
  firstDiv.classList.add("seul");
  let firstH2 = document.createElement("h2");
  firstH2.classList.add("titre-produit");
  let firstImg = document.createElement("img");
  firstImg.classList.add("img-produit");
  firstImg.classList.add("img");
  let firstP = document.createElement("p");
  firstP.classList.add("description-produit");
  let firstButton = document.createElement("button");
  firstButton.classList.add('ajouter-panier');
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

  document.querySelector(".produits").appendChild(firstDiv);

  firstImg.src = furniture.imageUrl;

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  fourDiv.appendChild(firstButton);
  thirdDiv.appendChild(firstSelect);
  furniture.varnish.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Tailles : ${element}`;
    firstSelect.appendChild(option);
  });

  firstH2.innerHTML = furniture.name;
  firstP.innerHTML = furniture.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = `${furniture.price} €`;
};


