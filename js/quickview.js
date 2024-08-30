// let imgCon = document.getElementById("imgCon");
// let quicImg = document.getElementById("quicImg")

// imgCon.addEventListener("mousemove", onZoom);
// imgCon.addEventListener("mouseover", onZoom);
// imgCon.addEventListener("mouse", offZoom);

// function onZoom(e) {
//     const x = e.clientX - e.target.offsetLeft;
//     const y = e.clientY - e.target.offsetTop;
//     quicImg.style.transformOrigin = `${x}px${y}px`
//     quicImg.style.transform = "scale(2)"
// }
// function offZoom(e) {
//     quicImg.style.transform = `center center`;
//     quicImg.style.transform = "scale(1)";
// }
const quantityDisplay = document.getElementById("quantity");
const increaseBtn = document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn");
const addToCartBtn = document.getElementById("add-to-cart-btn");
const totalDisplay = document.getElementById("total");

// Set the initial quantity and total
let quantity = 0;
let total = 0.0;

// Add event listeners to the increase and decrease buttons
increaseBtn.addEventListener("click", () => {
  quantity++;
  updateQuantityDisplay();
  updateTotal();
});

decreaseBtn.addEventListener("click", () => {
  if (quantity > 0) {
    quantity--;
    updateQuantityDisplay();
    updateTotal();
  }
});

// Add an event listener to the add to cart button
addToCartBtn.addEventListener("click", () => {
  alert(`You have added ${quantity} items to your cart!`);
});

// Update the quantity display
function updateQuantityDisplay() {
  quantityDisplay.textContent = quantity;
}

// Update the total display
function updateTotal() {
  total = quantity * 10.99;
  totalDisplay.textContent = total.toFixed(2);
}
// Array.from(lisProducts.children).forEach((lisProducts, i, list) => {
//     lisProducts.addEventListener("click", function () {
//         let newSrc = productImg.querySelectorAll(".product-img").src;
//         productImg.src = newSrc;
//         list.forEach(prod => prod.classList.remove('active'));
//         productImg.classList.add('active')
//     })
// })
// let options = {
//     width: 400,
//     // height: 400,
//     zoomWidth: 500,
//     offset: { vertical: 80, horizontal: 0 },
//     scale: 1,
//     left: 3000
// }
// let = ImageZoom(document.getElementById("imgCon"), options);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entries) => {
    if (entries.isIntersecting) {
      entries.target.classList.add("show");
    } else {
      entries.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".col");
hiddenElements.forEach((el) => observer.observe(el));

let quicImg1 = document.getElementById("quickImg1");
let quicImg2 = document.getElementById("quickImg2");
let quicImg3 = document.getElementById("quickImg3");
let mainImg1 = document.getElementById("quicImg");
function changeImg1() {
  quicImg1.addEventListener(
    "click",
    mainImg1.setAttribute("src", `assets/products img/product1newclose.jpg`)
  );
}
function changeImg2() {
  quicImg2.addEventListener(
    "click",
    mainImg1.setAttribute(
      "src",
      `
            assets/products img/product1 new.jpg`
    )
  );
}
function changeImg3() {
  quicImg3.addEventListener(
    "click",
    mainImg1.setAttribute(
      "src",
      `
            assets/products img/product1front.jpg`
    )
  );
}
let quicImg4 = document.getElementById("quickImg4");
let quicImg5 = document.getElementById("quickImg5");
let quicImg6 = document.getElementById("quickImg6");
let mainImg2 = document.getElementById("quicImg");
function changeImg4() {
  quicImg4.addEventListener(
    "click",
    mainImg2.setAttribute("src", `assets/products img/product2 close.jpg`)
  );
}
function changeImg5() {
  quicImg5.addEventListener(
    "click",
    mainImg2.setAttribute(
      "src",
      `
            assets/products img/product2 new.jpg`
    )
  );
}
function changeImg6() {
  quicImg6.addEventListener(
    "click",
    mainImg2.setAttribute(
      "src",
      `
            assets/products img/product 2.jpg`
    )
  );
}
let quicImg7 = document.getElementById("quickImg7");
let quicImg8 = document.getElementById("quickImg8");
let quicImg9 = document.getElementById("quickImg9");
let mainImg3 = document.getElementById("quicImg");
function changeImg7() {
  quicImg7.addEventListener(
    "click",
    mainImg3.setAttribute("src", `assets/products img/product3 close.jpg`)
  );
}
function changeImg8() {
  quicImg8.addEventListener(
    "click",
    mainImg3.setAttribute(
      "src",
      `
            assets/products img/product3 angle.jpg`
    )
  );
}
function changeImg9() {
  quicImg9.addEventListener(
    "click",
    mainImg3.setAttribute(
      "src",
      `
       assets/products img/product3.jpg`
    )
  );
}
let quicImg10 = document.getElementById("quickImg10");
let quicImg11 = document.getElementById("quickImg11");
let quicImg12 = document.getElementById("quickImg12");
let mainImg4 = document.getElementById("quicImg");
function changeImg10() {
  quicImg10.addEventListener(
    "click",
    mainImg4.setAttribute("src", `assets/products img/product4 close.jpg`)
  );
}
function changeImg11() {
  quicImg11.addEventListener(
    "click",
    mainImg4.setAttribute(
      "src",
      `
            assets/products img/product4 close2.jpg`
    )
  );
}
function changeImg12() {
  quicImg12.addEventListener(
    "click",
    mainImg4.setAttribute(
      "src",
      `
        assets/products img/product 4.jpg`
    )
  );
}

let quicImg13 = document.getElementById("quickImg13");
let quicImg14 = document.getElementById("quickImg14");
let quicImg15 = document.getElementById("quickImg15");
let mainImg5 = document.getElementById("quicImg");
function changeImg13() {
  quicImg13.addEventListener(
    "click",
    mainImg5.setAttribute("src", `assets/products img/product5close.jpg`)
  );
}
function changeImg14() {
  quicImg14.addEventListener(
    "click",
    mainImg5.setAttribute(
      "src",
      `
            assets/products img/product5 close 2.jpg`
    )
  );
}
function changeImg15() {
  quicImg15.addEventListener(
    "click",
    mainImg5.setAttribute(
      "src",
      `
       assets/products img/product 5.jpg`
    )
  );
}
let quicImg16 = document.getElementById("quickImg16");
let quicImg17 = document.getElementById("quickImg17");
let quicImg18 = document.getElementById("quickImg18");
let mainImg6 = document.getElementById("quicImg");
function changeImg16() {
  quicImg16.addEventListener(
    "click",
    mainImg6.setAttribute("src", `assets/products img/product 6 close2.jpg`)
  );
}
function changeImg17() {
  quicImg17.addEventListener(
    "click",
    mainImg6.setAttribute("src", `assets/products img/product6 close.jpg`)
  );
}
function changeImg18() {
  quicImg18.addEventListener(
    "click",
    mainImg6.setAttribute(
      "src",
      `
        assets/products img/product 6.jpg`
    )
  );
}
let quicImg19 = document.getElementById("quickImg19");
let quicImg20 = document.getElementById("quickImg20");
let quicImg21 = document.getElementById("quickImg21");
let mainImg7 = document.getElementById("quicImg");
function changeImg19() {
  quicImg19.addEventListener(
    "click",
    mainImg7.setAttribute("src", `assets/products img/product7 close2.jpg`)
  );
}
function changeImg20() {
  quicImg20.addEventListener(
    "click",
    mainImg7.setAttribute(
      "src",
      `
          assets/products img/product 7 close.jpg`
    )
  );
}
function changeImg21() {
  quicImg21.addEventListener(
    "click",
    mainImg7.setAttribute(
      "src",
      `
     assets/products img/product7.jpg`
    )
  );
}
let quicImg22 = document.getElementById("quickImg22");
let quicImg23 = document.getElementById("quickImg23");
let quicImg24 = document.getElementById("quickImg24");
let mainImg8 = document.getElementById("quicImg");
function changeImg22() {
  quicImg22.addEventListener(
    "click",
    mainImg8.setAttribute("src", `assets/products img/product8close.jpg`)
  );
}
function changeImg23() {
  quicImg23.addEventListener(
    "click",
    mainImg8.setAttribute(
      "src",
      `
          assets/products img/product8 close 2.jpg`
    )
  );
}
function changeImg24() {
  quicImg24.addEventListener(
    "click",
    mainImg8.setAttribute(
      "src",
      `
    assets/products img/product8.jpg`
    )
  );
}
