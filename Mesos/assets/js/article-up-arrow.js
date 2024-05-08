
var hideObserver = new IntersectionObserver(function(entries) {
    let bar = document.getElementById('article-up-arrow')
    if (entries[0].intersectionRatio <= 0){
        bar.classList.remove('fade-out')
        bar.classList.add('fade-in')
    }else{
        bar.classList.remove('fade-in')
        bar.classList.add('fade-out')
    }
})

let upArea = document.getElementById('nav')
let arrow = document.getElementById('article-up-arrow')

hideObserver.observe(upArea);

arrow.onclick = () =>{
    upArea.scrollIntoView({
        behavior: 'smooth'
    })    
}