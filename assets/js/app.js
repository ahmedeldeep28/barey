var swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
});

var swiper = new Swiper(".swiper_product", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  spaceBetween: 10,
  grabCursor: true,
  loop: true
});



let amount_input = document.getElementById("amount");
let total_price = document.getElementById("total");
let product_price = document.getElementById("product-price");
amount_input.onchange = () => {
  total_price.textContent = amount_input.value * product_price.value + 35
}