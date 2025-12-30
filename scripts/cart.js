const cartData = JSON.parse(localStorage.getItem("cart")) || [];

const tableBody = document.querySelector("#cart-table tbody");

const totalPrice = document.getElementById("grand-total");

let grandTotal = 0;

cartData.forEach((item) => {
  const row = document.createElement("tr");

  const itemTotal = item.quantity * item.price;
  grandTotal += itemTotal;

  row.innerHTML = `
    <td> ${item.productName} </td>
    <td> ${item.price} </td>
    <td> ${item.quantity} </td>
    <td> ${itemTotal} </td>
`;

  tableBody.appendChild(row);
});

const resetBtn = document.getElementById('cart-reset-btn');
resetBtn.addEventListener('click' , () =>{
    localStorage.removeItem('cart');
    location.reload();
});

totalPrice.textContent = `Grand Total : ₹${grandTotal}`;
