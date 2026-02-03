const btn = document.querySelector('a');
const textAdd = document.querySelector('div');
btn.addEventListener('click', textAppear); 

function textAppear(e){
    e.preventDefault()
    fetch(e.currentTarget.getAttribute('href'))
    .then(function(response) {
        // extrait le texte de la réponse 
        return response.text();
    })
    .then(function(text) {
        textAdd.innerText = (text);
    })
    .catch(function() {
        console.log('ERREUR')
    });
}

