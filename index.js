// On récupere les données du serveur 
// avec la methode fetch

// on créer une fonction asyncrone ici 'getAllCamera'
// et on on cherche (Fetch) le serveur

// si le server na pas de problème 
// on retourn le dossier json
// sinon on fait un console.error

const getAllCamera = async function() {
    let response = await fetch('http://localhost:3000/api/cameras');
    if(response.ok) {
        return response.json();
    } else {
        console.error('server return', response.status);
    }
}


// on créer un fonction, ici 'showAllCamera'
// 

const showAllCamera = () => {
    getAllCamera().then((json) => {
        json.forEach(element => {
            createCamera(element)
        });
    })
}


// on créer un fonction ici 'createCamera'
// avec la valeur 'camera'

// 

const createCamera = (camera) => {
    console.log(camera);

    let firstDiv = document.createElement('div');      firstDiv.classList.add('produit');
    let firstH2 = document.createElement('h2');        firstH2.classList.add('titre-produit');
    let firstImg = document.createElement('img');   firstImg.classList.add('img-produit');
    let secondDiv = document.createElement('div');  secondDiv.classList.add('info-produit');
    let firstP = document.createElement('p');       firstP.classList.add('description-produit');
    let secondP = document.createElement('p');      secondP.classList.add('prix-produit');
    let thirdDiv = document.createElement('div');    thirdDiv.classList.add('button');
    let firstButton = document.createElement('button');
    let thirdP = document.createElement('p');     thirdP.classList.add('taille-produit');

    document.getElementById('produits').appendChild(firstDiv);

    firstImg.src = camera.imageUrl;

    firstDiv.appendChild(firstH2);
    firstDiv.appendChild(firstImg);
    firstDiv.appendChild(secondDiv);
    secondDiv.appendChild(firstP);
    secondDiv.appendChild(secondP);
    firstDiv.appendChild(thirdDiv);
    thirdDiv.appendChild(firstButton);
    secondDiv.appendChild(thirdP);


    firstH2.innerHTML = camera.name;
    firstP.innerHTML = camera.description;
    secondP.innerHTML = camera.price;
    firstButton.innerHTML = 'Ajouter au Panier';
    thirdP.innerHTML = camera.lenses[0];
    

}

// on affiche le contenue

showAllCamera();