let cart = [];

const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
const toast = document.getElementById("toast");

let toastTimer;

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

addToCartButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-name").trim();
    const price = Number(button.dataset.price);

    // toast.innerText = `'${productName}'` + " added to cart!";
    clearTimeout(toastTimer);

    toast.innerHTML = `<span class="toast-highlight"> ${productName}</span>added to cart! `;
    toast.className = "show";

    const existingItem = cart.find((item) => item.productName === productName);
    if (existingItem) {
      existingItem.quantity += 1;
      saveCart();
    } else {
      cart.push({ productName, price, quantity: 1 });
      saveCart();
    }
    updateCartUI();
    console.log(cart);

    toastTimer = setTimeout(function () {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  })
);

const cartCountElements = document.querySelectorAll(".cart-count");
const cartPrice = document.getElementById("cart-price");

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
