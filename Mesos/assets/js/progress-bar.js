
/* ------------------------------------------------------*/
/* ------------- Variables ------------------------------*/
/* ------------------------------------------------------*/

N_STEPS = 0                 // modificar dependiendo de cuantos puntos de observacion haya
let visible = new Set()
visible.add(0)

/* ------------------------------------------------------*/
/* -------------- Functions -----------------------------*/
/* ------------------------------------------------------*/


function generateArrow(sections, maxSections){
    let container = document.getElementById('arrow-container')
    container.innerHTML = "";
    let divisionSize = Number.parseInt( 100/maxSections )
    for(let i=0 ; i<sections ; i++){
        let arrow = document.createElement('div')
        arrow.classList.add('arrow')
        arrow.style.width = `${divisionSize}%`
        container.appendChild(arrow)
    }

}


var intersectionObserver = new IntersectionObserver(function(entries) {
    let index=entries[0].target.id[3]
    if (entries[0].intersectionRatio <= 0){
        visible.delete(index)
    }else{
        visible.add(index)
    }
    let max = Math.max.apply(null, Array.from(visible))
    generateArrow(max, N_STEPS)
  });

var hideObserver = new IntersectionObserver(function(entries) {
    let bar = document.getElementById('article-progress-bar')
    if (entries[0].intersectionRatio <= 0){
        bar.classList.remove('fade-out')
        bar.classList.add('fade-in')
    }else{
        bar.classList.remove('fade-in')
        bar.classList.add('fade-out')
    }
})

/* ------------------------------------------------------*/
/* ------------- Puntos de observacion ------------------*/
/* ------------------------------------------------------*/


let cont = 0
while(true){
    cont += 1
    let obs = document.getElementById(`obs${cont}`)
    if(!obs){
        break;
    }
    intersectionObserver.observe(obs)
    
}

N_STEPS = cont - 1

if(N_STEPS){
    hideObserver.observe(document.getElementById('footer'));
    hideObserver.observe(document.getElementById('nav'));
}