let cart = [];

const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

addToCartButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    const existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
      saveCart();
    } else {
      cart.push({ name, price, quantity: 1 });
      saveCart();
    }
    updateCartUI();
    console.log(cart);
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
