
window.onload = function(){
    document.getElementById('contact').addEventListener('submit', (event) => {
    event.preventDefault();
    emailjs.sendForm('contact_mfm', 'contact_mfm', document.getElementById('contact'))
        .then(function() {
            document.getElementById('reponse').innerHTML = "Formulaire envoyé ! ";
            document.getElementById('reponse').classList.add("ok")
        }, function(error) {
            document.getElementById('reponse').innerHTML = "Erreur lors de l'envoie du formulaire ";
            document.getElementById('reponse').classList.add("fail")
            console.log( error);
        });
});
}