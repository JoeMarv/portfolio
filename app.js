const showBtn = document.querySelector('.show')
const hideBtn = document.querySelector('.hide')
const topBtn = document.querySelector ('.top-btn')

showBtn.addEventListener('click', function() {
    const main = showBtn.parentElement.parentElement

    main.classList.toggle('clear')
})

hideBtn.addEventListener('click', function() {
    const main = showBtn.parentElement.parentElement

    main.classList.remove('clear')
})


window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset

    if (scrollHeight > 400) {
        topBtn.classList.add('show')
    } 
    else {
        topBtn.classList.remove('show')
    }
})

topBtn.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})