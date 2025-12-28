let cart = [];

const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

addToCartButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    const existingItem = cart.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCartUI();
    console.log(cart);
  })
);

const cartCount = document.getElementById("cart-count");
const cartPrice = document.getElementById("cart-price");

function updateCartUI() {
  let sum = 0;
  let Tprice = 0;
  cart.forEach((c) => {
    sum += c.quantity;
    Tprice += c.quantity * c.price;
  });

  cartCount.textContent = sum;
  cartPrice.textContent = Tprice;
}
