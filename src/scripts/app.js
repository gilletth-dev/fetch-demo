// Sélectionner le formulaire
const form = document.querySelector('#form');

// Ajouter un écouteur d'événement sur la soumission du formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const ul = document.querySelector('.list');
    ul.innerText = '';

    // Récupérer les valeurs des champs du formulaire avec form.elements
    const inputs = form.elements; // renvoie les champs du formulaire
    const nom = inputs['nom'].value; // récupère la valeur du champ "nom"

    // Vérifier si le champ est vide
    if (nom.trim() === '') {
        console.log("Veuillez entrer un nom.");
        return; // Arrêter l'exécution si le champ est vide
    }

    // Afficher la valeur saisie dans la console
    console.log('Nom saisi:', nom);
   
    fetch('https://web.mayfly.ovh/api.php?type=city&query='+ nom)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            data.forEach(function(item){
                let liElement = document.createElement('li');
                let aElement = document.createElement('a');
                aElement.href = "#";
            
                aElement.innerText = item.title;
                
                liElement.appendChild(aElement);
                ul.appendChild(liElement);

                cityId = item.woeid;
                console.log(cityId);
                // const text = document.querySelector('.meteo')
    
                aElement.addEventListener('click', function(event){
                    
                    fetch('https://web.mayfly.ovh/api.php?type=weather&woeid=' + cityId)
                    .then(function(res){
                        return res.json();
                    })
                    .then(function(data){
                        const p = document.createElement('p');
                        p.innerText = data.consolidated_weather[0].weather_state_name;
                        liElement.appendChild(p);
                    });
                })
            });
        });
    
    

});

