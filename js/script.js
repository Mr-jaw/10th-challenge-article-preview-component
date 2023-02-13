document.querySelector('.share-img-btn').addEventListener('click', function (){
    let tooltip = document.querySelector('.tooltip')
    let button_container = document.querySelector('.share-img-btn')
    let button_img = document.querySelector('.share')
    tooltip.classList.toggle('hidden')
    button_container.classList.toggle('active')
    button_img.classList.toggle('active')
})