const CART_KEY = "my_cart";

export const getCart = () => {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (product, quantity = 1) => {
  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.product.productId === product.productId);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  saveCart(cart);
};

export const clearCart = () => {
  localStorage.removeItem(CART_KEY);
};

export const getCartCount = ()=> {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.quantity, 0);
};

