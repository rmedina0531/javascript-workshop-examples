const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle')

let currentActive = 1


next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
        //make unclickable
    }
    if (currentActive > 1) {
        //make prev clickable
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive <= 1) {
        currentActive = 1
        //make unclickable
    }
    
    if (currentActive > 1) {
        //make prev clickable
    }
    update()
})

function update(){
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')      
        }
    })

    //make the line light up as well
    const actives = document.querySelectorAll('.active')

    //calculate persentage to use for progress bar css
    percentage = ((actives.length - 1) / (circles.length - 1)) * 100
    // console.log(percentage)
    progress.style.width = percentage + '%'

    if (currentActive === 1){
        prev.disabled = true
    }else{
        prev.disabled = false
    }

    if (currentActive === circles.length){
        next.disabled = true
    }else{
        next.disabled = false
    }
    
}