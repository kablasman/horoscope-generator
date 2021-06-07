const button = document.querySelector('.button')
const daily = document.querySelector('.daily')
const date = document.querySelector('.date')

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
        const displayHoroscope = response[`${selectSign}`]['Daily'];
        const displayDate = response['Date'];

        date.innerHTML = displayDate;
        daily.innerHTML = displayHoroscope;


    })
    .catch(err => {
        console.error(err);
    });
    }
    getHoroscope()
})