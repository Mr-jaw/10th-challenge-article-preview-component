let tooltip = document.querySelector('.tooltip')
let button_container = document.querySelector('.share-img-btn')

function toggleShare(){
    tooltip.classList.toggle('hidden')
    button_container.classList.toggle('active')
}



addEventListener('keydown', function(event){
    keypressed = event.key
    if (keypressed === 'Escape') {
        tooltip.classList.add('hidden');
        button_container.classList.remove('active');
    }
});

addEventListener('click', function(event) {
    if (event.target.closest('.tooltip')) {
        return
    } else if (event.target.closest('.share-img-btn')){
        return
    } else {
        tooltip.classList.add('hidden')
        button_container.classList.remove('active')
    }
});


