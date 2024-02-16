window.onload = function() {
    fetch("https://run.mocky.io/v3/56623dd2-ea8f-4f9d-9158-32fc7f5d0183").then(function(response){
        return response.json()
    }).then(function(object){
        let games = object.games
        const games_div = document.querySelector(".games")

        function enterGenres(arrayOfGenres) {
            let result = ""
            if (arrayOfGenres.length === 0) {
                return result;
            }
            for (let i = 0; i < arrayOfGenres.length; i++) {
                result += arrayOfGenres[i] + " ";
            }
            return result;
        }

        let result = ""
        for(let i = 0; i < games.length; i++) {
            
            result += `<div class="game">
            <div class="image-div">
                <img src="${games[i].banner}">
            </div>
            <div class="name-and-price">
                <div class="name">
                    <p id="name">${games[i].name}</p>
                </div>
                <div class="price">
                    <button id="price">${games[i].price}</button>
                </div>
            </div>
            <div class="genres">${enterGenres(games[i].genres)}</div>
            <div class="decription"><p id="desc">${games[i].description}</p></div>
            </div>`
            
        }
        games_div.innerHTML = result
    })
    
}