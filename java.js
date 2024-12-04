let showMoreButton = document.querySelector('.submitbutton');
showMoreButton.addEventListener('click', function() {
    let text = document.querySelector('p[hidden]');
    if (text) {
       text.hidden = false;
    }
});

//selecteer de knop
//als ik op de knop klik
//het eerstvolgende ontzichtbare bericht verschijnt.

