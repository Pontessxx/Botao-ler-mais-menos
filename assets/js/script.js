var button = document.getElementById('read_more')
button.addEventListener('click', ()=>{
    var card = document.querySelector('.card');
    card.classList.toggle('active')
})