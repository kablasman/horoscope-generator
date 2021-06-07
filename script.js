const button = document.querySelector('.button')

button.addEventListener("click", function() {
    const selectSign = document.querySelector('#inputValue').value;
    
    function getHoroscope() {
    fetch(`https://devbrewer-horoscope.p.rapidapi.com/today/long/${selectSign}`, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "838f5a36admsh33a1aa6c782acb4p1a2161jsndd1bd2ab601d",
        "x-rapidapi-host": "devbrewer-horoscope.p.rapidapi.com"
    }
})
    .then(response =>response.json())
    .then(response => {
        console.log(response);

        //document.getElementById('horoscope').innerHTML = 
        //`<header>
        //<div class="book-picture">
        //</div>
        //<h3>${response.Aries.Career}</h3>
        //<h4>${response.Aries.Daily}</h4>
        //</header>`
    })
    .catch(err => {
        console.error(err);
    });
    }
    getHoroscope()
})