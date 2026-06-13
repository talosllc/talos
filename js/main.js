$(document).ready(function () {
  initMobileNav();
  initNewsletter();
  initContactForm();
  initTrackOrder();
  initAccountForms();
});

function initMobileNav() {
  $('.mobile-menu-toggle').on('click', function () {
    $('.mobile-nav').toggleClass('open');
    $(this).toggleClass('active');
  });

  $('.mobile-nav a').on('click', function () {
    $('.mobile-nav').removeClass('open');
    $('.mobile-menu-toggle').removeClass('active');
  });
}

function initNewsletter() {
  $('#newsletter-form').on('submit', function (e) {
    e.preventDefault();
    const email = $(this).find('input[type="email"]').val();
    if (!email) return;

    $(this).find('.form-fields').hide();
    $(this).find('.form-success').addClass('visible');
    $(this)[0].reset();
  });
}

function initContactForm() {
  $('#contact-form').on('submit', function (e) {
    e.preventDefault();
    $(this).find('.form-fields').hide();
    $(this).find('.form-success').addClass('visible');
    $(this)[0].reset();
  });
}

function initTrackOrder() {
  $('#track-order-form').on('submit', function (e) {
    e.preventDefault();
    $(this).find('.form-error').addClass('visible');
  });
}

function initAccountForms() {
  $('#login-form').on('submit', function (e) {
    e.preventDefault();
    showAccountMessage('Username or Password invalid', true);
  });

  $('#register-form').on('submit', function (e) {
    e.preventDefault();
    showAccountMessage('Error account creation did not complete. Please try again later', true);
  });

  $('.account-tab').on('click', function () {
    const tab = $(this).data('tab');
    $('.account-tab').removeClass('active');
    $(this).addClass('active');
    $('.account-panel').removeClass('active');
    $('#' + tab + '-panel').addClass('active');
  });
}

function showAccountMessage(msg, isError) {
  const el = $('.account-message');
  el.text(msg).addClass('visible');
  if (isError) {
    el.addClass('error');
  } else {
    el.removeClass('error');
  }
  setTimeout(function () {
    el.removeClass('visible error');
  }, 4000);
}

function renderProductCard(product) {
  const category = getCategoryById(product.category);
  return (
    '<div class="product-card" data-category="' + product.category + '">' +
      '<a href="product.html?id=' + product.id + '" class="product-card-link">' +
        '<div class="product-card-image">' +
          '<img src="' + product.image + '" alt="' + product.name + '" loading="lazy">' +
        '</div>' +
        '<div class="product-card-body">' +
          '<span class="product-category">' + (category ? category.name : '') + '</span>' +
          '<h3 class="product-name">' + product.name + '</h3>' +
          '<p class="product-price">' + formatPrice(product.price) + '</p>' +
        '</div>' +
      '</a>' +
      '<button class="btn btn-primary btn-sm add-to-cart-btn" data-id="' + product.id + '">Add to Cart</button>' +
    '</div>'
  );
}

function bindAddToCart() {
  $(document).off('click', '.add-to-cart-btn').on('click', '.add-to-cart-btn', function (e) {
    e.preventDefault();
    const id = $(this).data('id');
    Cart.addItem(id, 1);
    const btn = $(this);
    const original = btn.text();
    btn.text('Added!').addClass('added');
    setTimeout(function () {
      btn.text(original).removeClass('added');
    }, 1500);
  });
}

function initShopFilters() {
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get('category');

  if (initialCategory) {
    $('.filter-btn[data-category="' + initialCategory + '"]').addClass('active');
    filterProducts(initialCategory);
  }

  $('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
    const category = $(this).data('category');
    filterProducts(category);
  });
}

function filterProducts(category) {
  if (!category) {
    $('.product-card').show();
  } else {
    $('.product-card').each(function () {
      $(this).toggle($(this).data('category') === category);
    });
  }
}

function renderShopPage() {
  const grid = $('#products-grid');
  if (!grid.length) return;

  let html = '';
  PRODUCTS.forEach(function (p) {
    html += renderProductCard(p);
  });
  grid.html(html);
  bindAddToCart();
  initShopFilters();
}

function renderFeaturedProducts() {
  const grid = $('#featured-products');
  if (!grid.length) return;

  let html = '';
  getFeaturedProducts().forEach(function (p) {
    html += renderProductCard(p);
  });
  grid.html(html);
  bindAddToCart();
}

function renderProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const product = getProductById(id);

  if (!product) {
    $('#product-detail').html(
      '<div class="empty-state">' +
        '<h2>Product Not Found</h2>' +
        '<p>The product you are looking for does not exist.</p>' +
        '<a href="shop.html" class="btn btn-primary">Back to Shop</a>' +
      '</div>'
    );
    return;
  }

  const category = getCategoryById(product.category);
  document.title = product.name + ' — Talos LLC';

  $('#product-detail').html(
    '<div class="product-detail-grid">' +
      '<div class="product-detail-image">' +
        '<img src="' + product.image + '" alt="' + product.name + '">' +
      '</div>' +
      '<div class="product-detail-info">' +
        '<span class="product-category">' + (category ? category.name : '') + '</span>' +
        '<h1>' + product.name + '</h1>' +
        '<p class="product-detail-price">' + formatPrice(product.price) + '</p>' +
        '<p class="product-detail-desc">' + product.description + '</p>' +
        '<div class="product-detail-actions">' +
          '<div class="quantity-selector">' +
            '<button type="button" class="qty-btn" data-action="decrease">−</button>' +
            '<input type="number" id="product-qty" value="1" min="1" max="99">' +
            '<button type="button" class="qty-btn" data-action="increase">+</button>' +
          '</div>' +
          '<button class="btn btn-primary btn-lg" id="add-to-cart-detail">Add to Cart</button>' +
        '</div>' +
        '<a href="shop.html?category=' + product.category + '" class="back-link">← Back to ' + (category ? category.name : 'Shop') + '</a>' +
      '</div>' +
    '</div>'
  );

  $('.qty-btn').on('click', function () {
    const input = $('#product-qty');
    let val = parseInt(input.val(), 10) || 1;
    if ($(this).data('action') === 'increase') {
      val = Math.min(val + 1, 99);
    } else {
      val = Math.max(val - 1, 1);
    }
    input.val(val);
  });

  $('#add-to-cart-detail').on('click', function () {
    const qty = parseInt($('#product-qty').val(), 10) || 1;
    Cart.addItem(product.id, qty);
    const btn = $(this);
    btn.text('Added to Cart!');
    setTimeout(function () { btn.text('Add to Cart'); }, 2000);
  });
}

function renderCartPage() {
  const container = $('#cart-content');
  if (!container.length) return;

  const items = Cart.getItems();

  if (items.length === 0) {
    container.html(
      '<div class="empty-state">' +
        '<h2>Your Cart is Empty</h2>' +
        '<p>Looks like you haven\'t added anything yet.</p>' +
        '<a href="shop.html" class="btn btn-primary">Continue Shopping</a>' +
      '</div>'
    );
    return;
  }

  let rows = '';
  items.forEach(function (item) {
    rows +=
      '<div class="cart-item" data-id="' + item.id + '">' +
        '<div class="cart-item-image">' +
          '<img src="' + item.image + '" alt="' + item.name + '">' +
        '</div>' +
        '<div class="cart-item-info">' +
          '<h3><a href="product.html?id=' + item.id + '">' + item.name + '</a></h3>' +
          '<p class="cart-item-price">' + formatPrice(item.price) + '</p>' +
        '</div>' +
        '<div class="cart-item-qty">' +
          '<button class="qty-btn cart-qty-decrease" data-id="' + item.id + '">−</button>' +
          '<span>' + item.quantity + '</span>' +
          '<button class="qty-btn cart-qty-increase" data-id="' + item.id + '">+</button>' +
        '</div>' +
        '<div class="cart-item-total">' + formatPrice(item.price * item.quantity) + '</div>' +
        '<button class="cart-item-remove" data-id="' + item.id + '" aria-label="Remove item">&times;</button>' +
      '</div>';
  });

  const subtotal = Cart.getSubtotal();
  const discount = Cart.getDiscount();
  const total = Cart.getTotal();

  container.html(
    '<div class="cart-layout">' +
      '<div class="cart-items">' + rows + '</div>' +
      '<div class="cart-summary">' +
        '<h3>Order Summary</h3>' +
        '<div class="summary-row"><span>Subtotal</span><span>' + formatPrice(subtotal) + '</span></div>' +
        (discount > 0
          ? '<div class="summary-row discount"><span>15% Off (orders $350+)</span><span>−' + formatPrice(discount) + '</span></div>'
          : '<p class="promo-hint">Spend $350+ to get 15% off automatically!</p>') +
        '<div class="summary-row total"><span>Total</span><span>' + formatPrice(total) + '</span></div>' +
        '<a href="checkout.html" class="btn btn-primary btn-lg btn-block">Proceed to Checkout</a>' +
        '<a href="shop.html" class="btn btn-outline btn-block">Continue Shopping</a>' +
      '</div>' +
    '</div>'
  );

  $('.cart-qty-decrease').on('click', function () {
    const id = $(this).data('id');
    const item = Cart.getItems().find(function (i) { return i.id === id; });
    if (item) Cart.updateQuantity(id, item.quantity - 1);
    renderCartPage();
  });

  $('.cart-qty-increase').on('click', function () {
    const id = $(this).data('id');
    const item = Cart.getItems().find(function (i) { return i.id === id; });
    if (item) Cart.updateQuantity(id, item.quantity + 1);
    renderCartPage();
  });

  $('.cart-item-remove').on('click', function () {
    Cart.removeItem($(this).data('id'));
    renderCartPage();
  });
}

function renderCheckoutPage() {
  const summary = $('#checkout-summary');
  if (!summary.length) return;

  const items = Cart.getItems();
  if (items.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  let rows = '';
  items.forEach(function (item) {
    rows += '<div class="checkout-item"><span>' + item.name + ' × ' + item.quantity + '</span><span>' + formatPrice(item.price * item.quantity) + '</span></div>';
  });

  const subtotal = Cart.getSubtotal();
  const discount = Cart.getDiscount();
  const total = Cart.getTotal();

  summary.html(
    rows +
    '<div class="summary-divider"></div>' +
    '<div class="summary-row"><span>Subtotal</span><span>' + formatPrice(subtotal) + '</span></div>' +
    (discount > 0 ? '<div class="summary-row discount"><span>15% Discount</span><span>−' + formatPrice(discount) + '</span></div>' : '') +
    '<div class="summary-row total"><span>Total</span><span>' + formatPrice(total) + '</span></div>'
  );

  $('#checkout-form').on('submit', function (e) {
    e.preventDefault();
    $(this).hide();
    $('#checkout-error').addClass('visible');
  });
}

$(document).ready(function () {
  renderShopPage();
  renderFeaturedProducts();
  renderProductDetail();
  renderCartPage();
  renderCheckoutPage();
});
