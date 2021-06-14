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

        const divWrapper = document.querySelector('.display');
        divWrapper.innerHTML = `
        <h1 class="date">${displayDate}</h1>
        <h2 class="daily">Daily</h2>
        <p> ${displayHoroscope1}</p>
        <h2 class="career">Career</h2>
        <p> ${displayHoroscope2}</p>
        <h2 class="health">Health</h2>
        <p> ${displayHoroscope3}</p>
        <h2 class="love">Love</h2>
        <p> ${displayHoroscope4}</p>
        `
    })
    .catch(err => {
        console.error(err);
    });
    }
    getHoroscope()
})