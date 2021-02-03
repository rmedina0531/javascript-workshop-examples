const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        // console.log("clicked")
        removeActiveClass()
        panel.classList.add('active')
        
    })
})

function removeActiveClass(active){
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}