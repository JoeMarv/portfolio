const pages = document.querySelectorAll('.page')
const topBtn = document.querySelector ('.top-btn')


pages.forEach(function(page) {
    const showBtn = page.querySelector('.show')
    const hideBtn = page.querySelector('.hide')

    showBtn.addEventListener('click', function() {
        pages.forEach(function(item) {
            if (item !== page) {
                item.classList.remove('clear')
            }
        })

        page.classList.toggle('clear')
    })

    hideBtn.addEventListener('click', function() {
        pages.forEach(function(item) {
            if (item !== page) {
                item.classList.remove('clear')
            }
        })

        page.classList.remove('clear')
    })
})


window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset

    if (scrollHeight > 200) {
        topBtn.classList.add('show-btn')
    } 
    else {
        topBtn.classList.remove('show-btn')
    }
})

topBtn.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})