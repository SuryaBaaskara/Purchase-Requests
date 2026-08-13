export function clampQuantity(quantity, stock) {
  const value = Number(quantity) || 0;
  return Math.min(Math.max(value, 0), stock);
}

export function getCartItems(cart, products) {
  return Object.entries(cart)
    .map(([productId, quantity]) => {
      const product = products.find((item) => item.id === Number(productId));
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);
}

export function getSubtotal(items) {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

export function getTax(subtotal) {
  return Math.round(subtotal * 0.11);
}

export function getShipping(items) {
  return items.length ? 50000 : 0;
}
