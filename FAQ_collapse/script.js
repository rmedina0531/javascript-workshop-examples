const buttons = document.querySelectorAll('button')
// const faqs = document.querySelectorAll('.faq')

// faqs.forEach(faq => {
//     const button = faq.querySelector('button')
//     button.addEventListener('click', ()=>{
//         if (faq.classList.contains('active')){
//             faq.classList.remove('active')
//         }else{
//             faq.classList.add('active')
//         }
//     })
// })

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        button.parentNode.classList.toggle('active')
    })
})