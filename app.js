const key = "AIzaSyAT07Ggk44NYUCsRhKnnD2_A0mGytoi3Dw"
const apiFeatureURL = "https://tenor.googleapis.com/v2/featured?key="
const apiSearchURL = "https://tenor.googleapis.com/v2/search?q="

const input = document.getElementById('input')
const containerCards = document.getElementById("container-cards")

window.addEventListener("DOMContentLoaded", getAPI)
input.addEventListener('keyup', searchGif)

function getAPI(){


    fetch(`${apiFeatureURL}${key}&q=`)
    .then(
        response => response.json())
    .then(
        data => createGift(data)
    )

}

function createGift(data){

    data.results.forEach(element => {
        
        console.log(element.media_formats.gif.url)

        const card = document.createElement('div')
        card.classList.add("card")

        const gif = document.createElement('img')
        gif.src = element.media_formats.gif.url
        gif.classList.add("gif")

        card.appendChild(gif)
        containerCards.appendChild(card)

    });

}

function searchGif(event){

    containerCards.innerHTML = " "

    fetch(`${apiSearchURL}${event.target.value}&key=${key}`)
    .then(
        response => response.json())
    .then(
        data => createGift(data)
    )

    if(event.target.value === ""){
        location.reload()
    }
}


