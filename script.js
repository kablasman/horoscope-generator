// defining variables for selected html elements 
const button = document.querySelector('.button')
const daily = document.querySelector('.daily')
const career = document.querySelector('.career')
const health = document.querySelector('.health')
const love = document.querySelector('.love')
const date = document.querySelector('.date')

// creating click event for submit button
button.addEventListener("click", function() {

    // creating variable for text input
    const selectSign = document.querySelector('#inputValue').value;
    
    // calling API 
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

        // selecting data in returned array
        const displayHoroscope1 = response[`${selectSign}`]['Daily'];
        const displayHoroscope2 = response[`${selectSign}`]['Career'];
        const displayHoroscope3 = response[`${selectSign}`]['Health'];
        const displayHoroscope4 = response[`${selectSign}`]['Love'];
        const displayDate = response['Date'];

        // displaying data from array

        date.innerHTML = displayDate;
        daily.innerHTML = `<h2>Daily</h2> ${displayHoroscope1}`;
        career.innerHTML = `<h2>Career</h2> ${displayHoroscope2}`;
        health.innerHTML = `<h2>Health</h2> ${displayHoroscope3}`;
        love.innerHTML = `<h2>Love</h2> ${displayHoroscope4}`;

    })
    .catch(err => {
        console.error(err);
    });
    }
    getHoroscope()
})