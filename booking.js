
    fetch('http://localhost:3000/bookings')
    .then(response => response.json())
    .then(data => {
            
    console.log(data);
        if (data.bookings) {
            console.log(data.bookings);
            for (let i = 0; i < data.bookings.length; i++) {
                console.log(data.bookings[i].date);
                const formattedDate = moment(data.bookings[i].date).locale('fr').format('LT')
                document.querySelector('#tripdetails').innerHTML += `
                <div class="booking-details">
                        <p class="dep-arrival">${data.bookings[i].departure} > ${data.bookings[i].arrival}  </p>
                        <p class="hour-depart"> ${formattedDate} </p>
                        <p class="book-price"> ${data.bookings[i].price}€ </p>
                        <p class="time-before-departure"> Departure in 5 hours </p>
                    </div>
                `
            }
        } else {
            document.querySelector('#booking-container').innerHTML = `
                <div class="emptybooking">
                <p class="no-booking">No booking yet.</p>
                <p class="plan-trip">Why not plan a trip?</p>
                </div>
           ` }
    })
    
    