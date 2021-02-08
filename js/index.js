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