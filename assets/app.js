// const promise = fetch('assets/data/file.txt');
// promise.then(function(){

// });
// ci dessus vaut la même chose que ci bas 

fetch('assets/data/file.txt')
    .then(function(response) {
        // extrait le texte de la réponse 
        return response.text();
    });


