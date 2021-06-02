const container = document.querySelector(".container")
const coffees = [
  { name: "Cafe Mocha", image: "images/CafeMocha.jpg" },
  { name: "Caramel Macchiato", image: "images/CaramelMacchiato.jpg" },
  { name: "Frappuccino", image: "images/Frappuccino.jpg" },
  { name: "Americano", image: "images/Americano.jpg" },
  { name: "Turkish Coffee", image: "images/TurkishCoffee.jpg" },
  { name: "Cafe Cubano", image: "images/CafeCubano.jpg" },
  { name: "Café Latte", image: "images/CaféLatte.jpg" },
  { name: "Irish Coffee", image: "images/IrishCoffee.jpg" },
  { name: "Affogato", image: "images/Affogato.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }