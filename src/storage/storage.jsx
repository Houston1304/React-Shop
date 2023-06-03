export function saveBasket(purchase) {
  const list = JSON.stringify(purchase);
  localStorage.setItem("BasketPurchase", list);
}

export function getBasket() {
  const savedList = localStorage.getItem("BasketPurchase");
  const savedArray = JSON.parse(savedList);
  return savedArray;
}
