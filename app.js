const showBtn = document.querySelector('.show')
const hideBtn = document.querySelector('.hide')

showBtn.addEventListener('click', function() {
    const main = showBtn.parentElement.parentElement

    main.classList.toggle('clear')
})

hideBtn.addEventListener('click', function() {
    const main = showBtn.parentElement.parentElement

    main.classList.remove('clear')
})