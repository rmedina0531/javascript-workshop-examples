const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()


async function generateJoke(){
    const config = {
            headers: {
                Accept:'application/json'
            }
        }
    //look into the specifics of this line
    const res = await fetch('https://icanhazdadjoke.com/',config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}

jokeBtn.addEventListener('click', generateJoke)


// function generateJoke(){
//     const config = {
//             headers: {
//                 Accept:'application/json'
//             }
//         }
//     //look into the specifics of this line
//     fetch('https://icanhazdadjoke.com/',config).then((res) => res.json()).then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }

// jokeBtn.addEventListener('click', generateJoke)