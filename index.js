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
  let firstSelect = document.createElement('select');
  firstSelect.classList.add("choix");

  let firstA = document.createElement('a');
  firstA.classList.add("voir-plus");

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = camera.imageUrl;
  
  firstA.setAttribute('href', './html/produit.html?id=' + camera._id)
  firstA.innerHTML = 'voir le produit';

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  thirdDiv.appendChild(firstA)
  fourDiv.appendChild(firstButton);
  thirdDiv.appendChild(firstSelect)
  camera.lenses.forEach(element => {
    let option = document.createElement('option')
    option.innerHTML = `Tailles : ${element}`;
    firstSelect.appendChild(option);
  })

  firstH2.innerHTML = camera.name;
  firstP.innerHTML = camera.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = `${camera.price} €`;
};


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
  let firstSelect = document.createElement('select');
  firstSelect.classList.add("choix");
  let firstA = document.createElement('a');
  firstA.classList.add("voir-plus");
  
  
  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = teddy.imageUrl;
  
  firstA.setAttribute('href', './html/produit.html?id=' + teddy._id)
  firstA.innerHTML = 'voir le produit';
  
  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  thirdDiv.appendChild(firstA)
  fourDiv.appendChild(firstButton);
  thirdDiv.appendChild(firstSelect);
  
  firstH2.innerHTML = teddy.name;
  firstP.innerHTML = teddy.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = `${teddy.price} €`;
  
  teddy.colors.forEach(element => {
    let option = document.createElement('option')
    option.innerHTML = `Couleurs : ${element}`;
    firstSelect.appendChild(option);
  })
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
  // let thirdP = document.createElement("p");
  // thirdP.classList.add("taille-produit");
  let fourDiv = document.createElement("div");
  fourDiv.classList.add("button");
  let firstSelect = document.createElement('select');
  firstSelect.classList.add("choix");
  let firstA = document.createElement('a');
  firstA.classList.add("voir-plus");

  firstA.setAttribute('href', './html/produit.html?id=' + furniture._id)
  firstA.innerHTML = 'voir le produit';

  document.getElementById("produits").appendChild(firstDiv);

  firstImg.src = furniture.imageUrl;

  firstDiv.appendChild(firstH2);
  firstDiv.appendChild(secondDiv);
  firstDiv.appendChild(thirdDiv);
  firstDiv.appendChild(fourDiv);
  secondDiv.appendChild(firstImg);
  thirdDiv.appendChild(firstP);
  thirdDiv.appendChild(secondP);
  // thirdDiv.appendChild(thirdP);
  thirdDiv.appendChild(firstA)
  fourDiv.appendChild(firstButton);
  thirdDiv.appendChild(firstSelect);

  firstH2.innerHTML = furniture.name;
  firstP.innerHTML = furniture.description;
  firstButton.innerHTML = "Ajouter au Panier";
  secondP.innerHTML = `${furniture.price} €`;
  // thirdP.innerHTML = `Matière : ${furniture.varnish[0]}`;

  furniture.varnish.forEach(element => {
    let option = document.createElement('option')
    option.innerHTML = `Couleurs : ${element}`;
    firstSelect.appendChild(option);
  })
};


// ------------------------------------------------------------------------------------------------


// je crée 2 constantes
// une qui prend l'élement avec la balise 'product'
// et une autre qui prend l'élement 'produits
const selectElement = document.getElementById("product");
const result = document.getElementById("produits");

// j'écoute l'évenemet 'product'
selectElement.addEventListener("change", (event) => {
  // si on écrit camera
  // alors toutes les camera s'affiche
  if (event.target.value === "camera") {
    result.innerHTML = showAllCamera();
  }
  // si on écrit teddy ou ours 
  // alors tous les teddys s'affiche
  if (event.target.value === "teddy" || event.target.value === "ours") {
    result.innerHTML = showAllTeddy();
  }
  // si on ecrit furniture ou meuble 
  // alors toutes les furnitures s'affiche
  if (event.target.value === "furniture" || event.target.value === "meuble") {
    result.innerHTML = showAllFurniture();
  }
});

  // je crée 3 constantes
  // une qui prend l'élement avec la balise 'produit1'
  // une autre qui prend l'élement avec la balise 'produit2'
  // et une autre qui prend l'élement avec la balise 'produit3'
  const allProduct = document.getElementById('all-product');
  const camera = document.getElementById('produit1');
  const ours = document.getElementById('produit2');
  const meuble = document.getElementById('produit3');
  
  allProduct.addEventListener('click', () => {
    result.innerHTML = `${showAllCamera()} ${showAllTeddy()} ${showAllFurniture()}`;

  })
  // si on selectione l'élement avec la valeur camera 
  // alors toutes les camera s'affiche
  camera.addEventListener('click', () => {
    result.innerHTML = showAllCamera();
  })
  // si on selectione l'élement avec la valeur teddy 
  // alors tous les teddys s'affiche
  ours.addEventListener('click', ()=>{
    result.innerHTML = showAllTeddy();
  })
  // si on selectione l'élement avec la valeur furniture 
  // alors toutes les furnitures s'affiche
  meuble.addEventListener('click', ()=> {
    result.innerHTML = showAllFurniture();
  })


// ------------------------------------------------------------------------------------------------
