let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let logo = document.querySelector('#logo')

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})
