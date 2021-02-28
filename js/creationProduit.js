/*-------------- création de tous les Objets --------------*/

/***** Objets Cameras *****/

// create and insert HTML

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
  fourDiv.setAttribute('id', 'buttonContainer');
  let firstSelect = document.createElement("select");
  firstSelect.classList.add("dif-choix");

  let firstA = document.createElement("a");
  firstA.classList.add("voir-plus");

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = Camera.imageUrl;
  firstImg.alt = "Photo d'une caméra";

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
  secondP.innerHTML = `${Camera.price /100},00 €`;

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
  let secondDiv = document.createElement("div");
  secondDiv.classList.add("image");
  let secondP = document.createElement("p");
  secondP.classList.add("prix-produits");
  let thirdDiv = document.createElement("div");
  thirdDiv.classList.add("info-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");
  fourDiv.setAttribute('id', 'buttonContainer');
  let firstSelect = document.createElement("select");
  firstSelect.classList.add("choix");
  let firstA = document.createElement("a");
  firstA.classList.add("voir-plus");

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = Teddy.imageUrl;
  firstImg.alt = "Photo d'un ours en peluche";

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
  secondP.innerHTML = `${Teddy.price /100},00 €`;

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
  let secondDiv = document.createElement("div");
  secondDiv.classList.add("image");
  let secondP = document.createElement("p");
  secondP.classList.add("prix-produits");
  let thirdDiv = document.createElement("div");
  thirdDiv.classList.add("info-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");
  fourDiv.setAttribute('id', 'buttonContainer');
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
  firstImg.alt = "Photo d'un meuble en bois";

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(secondP);
  fourDiv.appendChild(firstA);

  firstH2.innerHTML = Furniture.name;
  secondP.innerHTML = `${Furniture.price /100},00 €`;

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

  let firstDiv = document.querySelector('.produit.seul');
  let firstH2 = document.querySelector('.titre-produit');
  let firstImg = document.querySelector('.img');
  let firstP = document.querySelector('.description-produit');
  let secondDiv = document.querySelector('.image');
  let secondP = document.querySelector('.prix-produit');
  let thirdDiv = document.querySelector('.info-produit');
  let fourDiv = document.getElementById('buttonContainer');
  let firstSelect = document.querySelector('.choix');

  firstImg.src = camera.imageUrl;
  firstImg.alt = "Photo de la caméra";

  camera.lenses.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Tailles : ${element}`;
    firstSelect.appendChild(option);
  });

  firstH2.innerHTML = camera.name;
  firstP.innerHTML = camera.description;
  secondP.innerHTML = `${camera.price /100},00 €`;
};

/***** Objet Teddy *****/

const teddys = (teddy) => {
  console.log(teddy);

  let firstDiv = document.querySelector('.produit.seul');
  let firstH2 = document.querySelector('.titre-produit');
  let firstImg = document.querySelector('.img');
  let firstP = document.querySelector('.description-produit');
  let secondDiv = document.querySelector('.image');
  let secondP = document.querySelector('.prix-produit');
  let thirdDiv = document.querySelector('.info-produit');
  let fourDiv = document.getElementById('buttonContainer');
  let firstSelect = document.querySelector('.choix');

  firstImg.src = teddy.imageUrl;
  firstImg.alt = "Photo de ours en peluche";

  teddy.colors.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Tailles : ${element}`;
    firstSelect.appendChild(option);
  });

  firstH2.innerHTML = teddy.name;
  firstP.innerHTML = teddy.description;
  secondP.innerHTML = `${teddy.price /100},00 €`;
};

/***** Objet Furniture *****/

const furnitures = (furniture) => {
  console.log(furniture);

  let firstDiv = document.querySelector('.produit.seul');
  let firstH2 = document.querySelector('.titre-produit');
  let firstImg = document.querySelector('.img');
  let firstP = document.querySelector('.description-produit');
  let secondDiv = document.querySelector('.image');
  let secondP = document.querySelector('.prix-produit');
  let thirdDiv = document.querySelector('.info-produit');
  let fourDiv = document.getElementById('buttonContainer');
  let firstSelect = document.querySelector('.choix');

  firstImg.src = furniture.imageUrl;
  firstImg.alt = "Photo du meuble";

  furniture.varnish.forEach((element) => {
    let option = document.createElement("option");
    option.innerHTML = `Tailles : ${element}`;
    firstSelect.appendChild(option);
  });

  firstH2.innerHTML = furniture.name;
  firstP.innerHTML = furniture.description;
  secondP.innerHTML = `${furniture.price /100},00 €`;
};