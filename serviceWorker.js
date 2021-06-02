const staticCoffeeHouse = "coffee-house-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/CafeMocha.jpg",
  "/images/CaramelMacchiato.jpg",
  "/images/Frappuccino.jpg",
  "/images/Americano.jpg",
  "/images/TurkishCoffee.jpg",
  "/images/CafeCubano.jpg",
  "/images/CaféLatte.jpg",
  "/images/IrishCoffee.jpg",
  "/images/Affogato.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCoffeeHouse).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })