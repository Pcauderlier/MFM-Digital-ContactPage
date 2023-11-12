
window.onload = function(){
    document.getElementById('contact').addEventListener('submit', (event) => {
    event.preventDefault(); // Pour empecher la page de ce refresh lors du click
        // contact_mfm sont respectivements : un service email et un email template que j'ai créer sur le site de email.js
    emailjs.sendForm('contact_mfm', 'contact_mfm', document.getElementById('contact'))
        .then(function() {
            // En cas de succès, rajoute le texte "Formulaire envoyé !"" dans une div, puis lui rajoute la class : "ok"
            document.getElementById('reponse').innerHTML = "Formulaire envoyé ! "; 
            document.getElementById('reponse').classList.add("ok")
        }, function(error) {
             // En cas d'echec, rajoute le texte "Erreur lors de l'envoie du formulaire " dans une div, puis lui rajoute la class : "fail"
            document.getElementById('reponse').innerHTML = "Erreur lors de l'envoie du formulaire ";
            document.getElementById('reponse').classList.add("fail")
            console.log( error); // Afin de connaitre la nature de l'erreur dans la console.
        });
});
}