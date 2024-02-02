fetch('http://localhost:3000/carts')
	.then(response => response.json())
	.then(data => { 
        console.log(data)
    
		if (data.cart) {
			for (let i = 0; i < data.cart.length; i++) {
				document.querySelector('#cart-details').innerHTML += `
				<div class="cityContainer">
				    <p class="dep-arrival"> ${data.cart[i].departure} ${data.cart[i].arrival}  </p>
                    <p class="hour-depart"> ${data.cart[i].date} </p>
                    <p class="book-price"> ${data.cart[i].price}  </p>
                    <button class="deleteTrip" id="btn-delete">X</button>
			`;
        }
		}else{
            document.querySelector('#cart-container').innerHTML +=`
            <div class="cartEmpty">
            <p> No ticket in your cart </p>
            <p> Why not plan a trip? </p>
            `
        }
        
        updateDeletetripEventListener()
	});

    function updateDeletetripEventListener() {
        for (let i = 0; i < document.querySelectorAll('.deleteTrip').length; i++) {
            document.querySelectorAll('.deleteTrip')[i].addEventListener('click', function () {
                fetch(`http://localhost:3000/carts/${this.id}`, { method: 'DELETE' })
                    .then(response => response.json())
                    .then(data => {
                        if (data.result) {
                            this.parentNode.remove();
                        }
                    });
            });
        }
    }