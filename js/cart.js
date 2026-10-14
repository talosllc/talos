const CART_KEY = 'talos_cart';

const Cart = {
  getItems: function () {
    try {
      const data = localStorage.getItem(CART_KEY);
      const items = data ? JSON.parse(data) : [];
      return this.sanitizeItems(items);
    } catch (e) {
      return [];
    }
  },

  /** Remove discontinued products and refresh name/image from catalog */
  sanitizeItems: function (items) {
    if (!Array.isArray(items) || typeof getProductById !== 'function') {
      return Array.isArray(items) ? items : [];
    }

    const cleaned = [];
    let changed = false;

    items.forEach(function (item) {
      const product = getProductById(item.id);
      if (!product) {
        changed = true;
        return;
      }
      if (item.name !== product.name || item.image !== product.image || item.price !== null) {
        changed = true;
      }
      cleaned.push({
        id: product.id,
        name: product.name,
        price: null,
        image: product.image,
        quantity: item.quantity || 1
      });
    });

    if (changed) {
      localStorage.setItem(CART_KEY, JSON.stringify(cleaned));
    }
    return cleaned;
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
      existing.name = product.name;
      existing.image = product.image;
      existing.price = null;
    } else {
      items.push({
        id: product.id,
        name: product.name,
        price: null,
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
    return null;
  },

  getDiscount: function () {
    return 0;
  },

  getTotal: function () {
    return null;
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
  // Drop discontinued items (e.g. old catalog) and refresh badge
  Cart.getItems();
  Cart.updateBadge();
});
