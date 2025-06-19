var products = [
  {
    img: "./assets/t-shirt.png",
    description: "RRR Logo Minimal Yellow T-Shirt",
    quantity: 1,
    price: 30,
    id: 1,
  },
  {
    img: "./assets/glasses.png",
    description: "Porgy Backstage Reading Glasses | CADDIS Readers",
    quantity: 4,
    price: 5,
    id: 2,
  },
  {
    img: "./assets/hat.png",
    description:
      "The Classic Fedora - Genuine Fine Weave Panama Hat By Pachacuti",
    quantity: 3,
    price: 10,
    id: 3,
  },
  {
    img: "./assets/hoodie.png",
    description: "High Street Hiphop Printing Sm Hoodie Fg E467 - T2ng",
    quantity: 2,
    price: 20,
    id: 4,
  },
];
const tbody = document.querySelector("#cart-body");
const totalPrice = document.querySelector("#total-price");
renderCart();

function renderCart() {
    renderBodyCart();
    renderFooterCart();
}

function renderBodyCart(){
    tbody.innerHTML = "";
    products.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = getRowContentInnerHTML(index, item);
        tbody.appendChild(row);
        addEventHandleManual(item.id);
    });
}

function getRowContentInnerHTML(index, item){
    return `
        <td>${index + 1}</td>
        <td><img src="${item.img}" /></td>
        <td>${item.description}</td>
        <td>
        <button class="minus" onclick="updateQty(${item.id}, -1)" ${item.quantity === 1 ? 'disabled' : ''}>-</button>
          <input type="number" id="qty-${item.id}" value="${item.quantity}" style="width:30px;">
          <button class="plus" onclick="updateQty(${item.id}, 1)">+</button>
        </td>
        <td>$${item.price}</td>
        <td>$${totalPriceEachItem(item.price,item.quantity)}</td>
        <td><button class="delete" onclick="removeItem(${item.id})">
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
        <path d="M9 3V4H4V6H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V6H20V4H15V3H9ZM7 6H17V20H7V6ZM9 8V18H11V8H9ZM13 8V18H15V8H13Z"/>
         </svg>
        </button></td>
      `;
}

function addEventHandleManual(itemId){
    const input = document.querySelector(`#qty-${itemId}`);
    input.addEventListener("blur", () => handleManualQtyChange(itemId, input.value));
    input.addEventListener("keydown", (e) => {if (e.key === "Enter") handleManualQtyChange(itemId, input.value);});
}

function handleManualQtyChange(id, value) {
  const item = findProductById(id);
  const qty = parseInt(value);
  if (!item || isNaN(qty) || qty < 1) {
    renderCart();
    return;
  }
  item.quantity = qty;
  renderCart();
}

function renderFooterCart(){
  let total = 0;
  products.forEach((item) => {
    const itemTotal = totalPriceEachItem(item.price,item.quantity);
    total += itemTotal;
  });
  totalPrice.textContent = `$${total}`;
}

function totalPriceEachItem(price, quantity){return price* quantity;
}

function updateQty(id, delta) {
  const item = findProductById(id);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity < 1) item.quantity = 1;
  renderCart();
}

function removeItem(id) {
  const index = findIndexOfProductById(id);
  if (index !== -1) {products.splice(index, 1); renderCart();}
}

function findProductById(id){
    return products.find((p) => p.id === id);
}

function findIndexOfProductById(id){
    return products.findIndex((p) => p.id === id);
}

