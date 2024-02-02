document.querySelector('#btn-form').addEventListener('click', function () {
  console.log("clicked");

  const departure = document.querySelector('#departure').value;
  const arrival = document.querySelector('#arrival').value;
  const date = document.querySelector('#date').value; // Fix the date input ID


  console.log({ departure: departure, arrival: arrival,date: date });
  fetch('http://localhost:3000/trips', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ departure: departure, arrival: arrival,date: date })
  })
  .then((response) => response.json())
  .then(data => {
    if (data.result) {
      console.log(data.result)
      document.querySelector('.card').innerHTML = ''
      for (let i = 0; i < data.trips.length; i++) {
      document.querySelector('.card').innerHTML += `
          <div id="trip-details">
          <p>${data.trips[i].departure} > ${data.trips[i].arrival}</p>
          <p>${data.trips[i].date}</p>
          <p>${data.trips[i].price}€</p>
          <button class="book">Book</button>
          </div>
      `;
      }
    } else {
      document.querySelector('.card').innerHTML = `
        <div id="card-img">
          <img src="./images/notfound.png" alt="">
        </div>
        <p style="color: black; font-size: medium;">No trip found</p>
      `;
    }
    const bookButtons = document.querySelectorAll('.book');
    for (let i = 0; i < bookButtons.length; i++) {
      bookButtons[i].addEventListener('click', function () {
        console.log("clicked on button " + i);
      });
    }
  });
}); //recupere la data trip de l'element sur lequelle on a cliquer

  // const cart = {
  //   name: document.querySelector('#registerName').value,
  //   email: document.querySelector('#registerEmail').value,
  //   password: document.querySelector('#registerPassword').value,

  //  };

  // fetch('http://localhost:3000/users/signup', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(user),
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     if (data.result) {
  //       window.location.assign('index.html');
  //     }
  //   });
