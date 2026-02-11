const selector = document.querySelector('selector');
const list = document.querySelector('.list');

function fetchCourses(filename){
    e.preventDefault()
    fetch('assets/data' + selector.value)
    .then(function(response) {
        // extrait le texte de la réponse 
        return response.json();
    })
    .then(function(data) {
        list.innerText = data;
    })
    .catch(function() {
        title.innerText = "erreur réseau";
        console.log('ERREUR')
    });
}
