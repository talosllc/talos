const CART_KEY = 'talos_cart';

const Cart = {
  getItems: function () {
    try {
      const data = localStorage.getItem(CART_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveItems: function (items) {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    this.updateBadge();
  },

  addItem: function (productId, quantity) {
    quantity = quantity || 1;
    const product = getProductById(productId);
    if (!product) return false;

    const items = this.getItems();
    const existing = items.find(function (i) { return i.id === productId; });

    if (existing) {
      existing.quantity += quantity;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }

    this.saveItems(items);
    return true;
  },

  removeItem: function (productId) {
    const items = this.getItems().filter(function (i) { return i.id !== productId; });
    this.saveItems(items);
  },

  updateQuantity: function (productId, quantity) {
    quantity = parseInt(quantity, 10);
    if (quantity < 1) {
      this.removeItem(productId);
      return;
    }

    const items = this.getItems();
    const item = items.find(function (i) { return i.id === productId; });
    if (item) {
      item.quantity = quantity;
      this.saveItems(items);
    }
  },

  clear: function () {
    localStorage.removeItem(CART_KEY);
    this.updateBadge();
  },

  getCount: function () {
    return this.getItems().reduce(function (sum, i) { return sum + i.quantity; }, 0);
  },

  getSubtotal: function () {
    return this.getItems().reduce(function (sum, i) { return sum + i.price * i.quantity; }, 0);
  },

  getDiscount: function () {
    const subtotal = this.getSubtotal();
    return subtotal >= 350 ? subtotal * 0.15 : 0;
  },

  getTotal: function () {
    return this.getSubtotal() - this.getDiscount();
  },

  updateBadge: function () {
    const count = this.getCount();
    $('.cart-count').text(count);
    if (count > 0) {
      $('.cart-count').addClass('visible');
    } else {
      $('.cart-count').removeClass('visible');
    }
  }
};

$(document).ready(function () {
  Cart.updateBadge();
});
