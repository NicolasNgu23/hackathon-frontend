function updateBookingDatabase() {
fetch('http://localhost:3000/bookings')
.then(response => response.json())
.then(data => {
        
console.log(data);
    if (data.bookings) {
        console.log(data.bookings);
        for (let i = 0; i < data.bookings.length; i++) {
            document.querySelector('#tripdetails').innerHTML += `
            <div id="booking-details">
                    <p class="${data.bookings[i].departure} > ${data.bookings[i].arrival}  </p>
                    <p class="hour-depart"> ${data.bookings[i].date} </p>
                    <p class="book-price"> ${data.bookings[i].price} </p>
                    <p class="time-before-departure"> Departure in 5 hours </p>
                </div>
            `
        }
    }
})
}

module.exports (updateBookingDatabase())