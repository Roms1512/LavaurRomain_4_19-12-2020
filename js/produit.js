let currentProduct = null;

/***---------------*** récuperation de l'ID ***---------------***/

/***** récupération des données *****/

const id = new URLSearchParams(window.location.search).get("id");
const type = new URLSearchParams(window.location.search).get("type");

console.log(id);
console.log(type);

/***---------------*** récupération de l'ID ***---------------***/

const getProductCamera = async () => {
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
  let response = await fetch(`http://localhost:3000/api/furniture/${id}`);
  if (response.ok) {
    return response.json();
  } else {
    console.error("server return", response.status);
  }
};

/***---------------*** Récupérer un Objet JSON ***---------------***/

/***** JSON Camera *****/

const showCamera = () => {
  getProductCamera().then((json) => {
    currentProduct = json;
    cameras(json);
  });
};

/***** JSON Teddy *****/

const showTeddy = () => {
  getProductTeddy().then((json) => {
    currentProduct = json;
    teddys(json);
  });
};

/***** JSON Furniture *****/

const showFurniture = () => {
  getProductFurniture().then((json) => {
    currentProduct = json;
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
    break;
  default:
    console.error("no type found");
    break;
}

/***---------------*** LocalStorage pour le panier ***---------------***/

const createButton = () => {
  const button = document.createElement("button");
  button.classList.add("button");
  button.setAttribute("id", "bouttonPanier");
  button.innerHTML = `Ajoutez au panier`;

  const buttonContainer = document.getElementById("buttonContainer");
  
  /*-------------- écoute de l'événement --------------*/
  
  button.addEventListener("click", (e) => {
    /***** garder un element dans le local storage *****/
    const ajouté = () => {
      let equivalence = false;
      let currentBasket = JSON.parse(localStorage.getItem("produit"));
      
      // condition si null //
      if (currentBasket == null) {
        let basket = [];
        let product = {
          name: currentProduct.name,
          image: currentProduct.imageUrl,
          id: currentProduct._id,
          price: currentProduct.price,
          quantity: 1
        };
        console.log('nouveau produit');
        basket.push(product);
        localStorage.setItem("produit", JSON.stringify(basket));
        
        // sinon parcourrir le tableau //
      } else {
        currentBasket.forEach((element) => {
          // si equivalant
          if (element.name === currentProduct.name) {
            element.quantity++;
            localStorage.setItem("produit", JSON.stringify(currentBasket));
            console.log('produit existant');
            equivalence = false;
            return;
          } else {
            equivalence = true;
          }
        });

        if(equivalence){
          // pas d'equivalance
          let product = {
            name: currentProduct.name,
            image: currentProduct.imageUrl,
            id: currentProduct._id,
            price: currentProduct.price,
            quantity: 1
          };
          currentBasket.push(product);
          console.log('ajout panier');
          localStorage.setItem("produit", JSON.stringify(currentBasket));
        }
      };
    };
    ajouté();

    /***** Afficher le nombre de produit dans le panier *****/
    
    let panier = document.getElementById("nombreDeProduit");
    panier.innerHTML = localStorage.getItem("quantité de produit");
    let quantitéStorage = localStorage.getItem("quantité de produit");
    
    quantitéStorage++;
    localStorage.setItem("quantité de produit", quantitéStorage);
      if(!quantitéStorage){
        panier.innerHTML = "";
      } else {
        panier.innerHTML = `${quantitéStorage}`;
      }
      console.log(quantitéStorage);
    
  });
  buttonContainer.appendChild(button);
};

createButton();

/***---------------*** Afficher les différents Objets ***---------------***/



