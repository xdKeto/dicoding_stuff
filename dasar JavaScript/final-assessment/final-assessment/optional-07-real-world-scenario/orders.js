// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  let id = generateUniqueId();
  let totalPrice = items.reduce((total, item) => total + item.price, 0);
  let status = "Menunggu";

  orders.push({
    id,
    customerName,
    items,
    totalPrice,
    status,
  });
}
// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const find = orders.find((item) => orderId === item.id);

  if (find) {
    find.status = status;
  }
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders.reduce((total, order) => total + order.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  orders = orders.filter((i) => i.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
