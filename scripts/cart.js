const cartData = JSON.parse(localStorage.getItem("cart")) || [];

// const tableBody = document.querySelector("#cart-table tbody");

const totalPrice = document.getElementById("grand-total");

// let grandTotal = 0;

// cartData.forEach((item) => {
//   const row = document.createElement("tr");

//   const itemTotal = item.quantity * item.price;
//   grandTotal += itemTotal;

//   row.innerHTML = `
//     <td> ${item.productName} </td>
//     <td> ${item.price} </td>
//     <td> ${item.quantity} </td>
//     <td> ${itemTotal} </td>
// `;

//   tableBody.appendChild(row);
// });

// const resetBtn = document.getElementById("cart-reset-btn");
// resetBtn.addEventListener("click", () => {
//   localStorage.removeItem("cart");
//   location.reload();
// });

// totalPrice.textContent = `Grand Total : ₹${grandTotal}`;

const cartItemsContainer = document.querySelector(".cart-items");

cartItemsContainer.innerHTML = "";

let totalItems = 0;
cartData.forEach((item, index) => {
  const row = document.createElement("div");
  row.className = "grid-cart-row";

  const subtotal = item.price * item.quantity;
  totalItems+=item.quantity;

row.innerHTML = `<div class="produt-info">${item.productName}</div>
  <div class="produt-price">₹${item.price}</div>
  <div class="produt-qty">${item.quantity}</div>
  <div class="produt-subTotal">₹${subtotal}</div>
  <div class="produt-removeBtn">x</div>`;

  cartItemsContainer.appendChild(row);
});


const total = cartData.reduce((sum, item) => {
    return sum+item.price * item.quantity;
} , 0);


document.getElementById("cart-total").textContent = `₹${total}`;

document.getElementById("total-items").textContent = `${totalItems}`;


document.getElementById("coupons-disc").textContent = `₹${Math.round(total*0.05)}`


document.getElementById("total-amt").textContent = `₹${total - Math.round(total*0.05)}`;

