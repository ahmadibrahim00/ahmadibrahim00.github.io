document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h1>Yay! On se voit ce soir au restaurant</h1>';
});

document.getElementById('no').addEventListener('click', function() {
    document.getElementById('content').innerHTML = '<h1>Mauvaise réponse, veuillez recommencer</h1><button id="retry">Retour</button>';
    document.getElementById('retry').addEventListener('click', function() {
        window.location.reload(); // Cette ligne recharge la page pour revenir à l'état initial
    });
});
