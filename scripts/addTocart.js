let cart = [];

const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
const toast = document.getElementById("toast");

let toastTimer;

// const btnDivContainer = document.getElementsByClassName("addBtn-div-container");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

addToCartButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    console.log("target:", e.target);
    console.log("currentTarget:", e.currentTarget);

    const productName = button.getAttribute("data-name").trim();
    const price = Number(button.dataset.price);

    // toast.innerText = `'${productName}'` + " added to cart!";
    clearTimeout(toastTimer);

    toast.innerHTML = `<span class="toast-highlight"> ${productName}</span>added to cart! `;
    toast.classList.add("show");

    const existingItem = cart.find((item) => item.productName === productName);
    if (existingItem) {
      existingItem.quantity += 1;
      saveCart();
    } else {
      cart.push({ productName, price, quantity: 1 });
      saveCart();
    }

    btnChange(existingItem, e.target);

    updateCartUI();
    console.log(cart);

    toastTimer = setTimeout(() => {
      console.log("Hiding toast");
      toast.classList.remove("show");
    }, 3000);
  })
);

function btnChange(existingItem, clickedButton) {
  const container = clickedButton.closest(".addBtn-div-container");

  if (!container) return;

  const qty = existingItem ? existingItem.quantity : 1;

  container.innerHTML = `<div class="qty-control">
 <button class="qty-btn decrement">-</button>
 <span class="qty-value">${qty}</span>
 <button class="qty-btn increment">+</button>
</div>`;
}

let cartPrice = null;
let cartCountElements = [];

// We needed this function, because without this we were accessing this cart-price, cart-count elements without them being injected by header.html via header.js so it was assigning null to these variables.
function initHeaderElements() {
  cartPrice = document.getElementById("cart-price");
  cartCountElements = document.querySelectorAll(".cart-count");

  updateCartUI();
}

function updateCartUI() {
  let sum = 0;
  let Tprice = 0;
  cart.forEach((c) => {
    sum += c.quantity;
    Tprice += c.quantity * c.price;
  });

  cartCountElements.forEach((el) => {
    el.textContent = sum;
  });

  cartPrice.textContent = Tprice;
}