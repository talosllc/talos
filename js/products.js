const CATEGORIES = [
  { id: 'smart-devices', name: 'Smart Devices & Audio', slug: 'smart-devices', image: 'images/categories/smart-devices.jpg' },
  { id: 'ventilation', name: 'Ventilation & Cooling', slug: 'ventilation', image: 'images/categories/ventilation.jpg' },
  { id: 'power', name: 'Power Distribution', slug: 'power', image: 'images/categories/power.jpg' },
  { id: 'connectivity', name: 'Connectivity & Data', slug: 'connectivity', image: 'images/categories/connectivity.jpg' },
  { id: 'storage', name: 'Storage & Protective Cases', slug: 'storage', image: 'images/categories/storage.jpg' }
];

const PRODUCTS = [
  {
    id: 'usb-c-hub-pro',
    name: 'USB-C Hub Pro 7-in-1',
    category: 'smart-devices',
    price: 49.99,
    description: 'Expand your laptop with HDMI, USB 3.0, SD card reader, and 100W power delivery in one compact hub.',
    image: 'images/products/usb-c-hub-pro.jpg',
    featured: true
  },
  {
    id: 'wireless-earbuds-x2',
    name: 'Wireless Earbuds X2',
    category: 'smart-devices',
    price: 79.99,
    description: 'True wireless earbuds with active noise cancellation, 32-hour battery case, and IPX5 water resistance.',
    image: 'images/products/wireless-earbuds-x2.jpg',
    featured: true
  },
  {
    id: 'bluetooth-speaker-rugged',
    name: 'Bluetooth Speaker Rugged',
    category: 'smart-devices',
    price: 129.00,
    description: '360° sound portable speaker with 20W output, shockproof body, and 18-hour playtime for job sites.',
    image: 'images/products/bluetooth-speaker-rugged.jpg',
    featured: true
  },
  {
    id: 'smart-wifi-plug',
    name: 'Smart WiFi Plug 4-Pack',
    category: 'smart-devices',
    price: 39.99,
    description: 'Voice-controlled smart plugs with energy monitoring, scheduling, and app control from anywhere.',
    image: 'images/products/smart-wifi-plug.jpg',
    featured: false
  },
  {
    id: 'usb-desktop-microphone',
    name: 'USB Desktop Microphone',
    category: 'smart-devices',
    price: 59.99,
    description: 'Studio-quality cardioid condenser mic with mute button, gain control, and zero-latency monitoring.',
    image: 'images/products/usb-desktop-microphone.jpg',
    featured: false
  },
  {
    id: 'industrial-floor-fan',
    name: '12" Industrial Floor Fan',
    category: 'ventilation',
    price: 189.00,
    description: 'High-torque motor with three speed settings, steel grille, and tilt-adjustable head for warehouse use.',
    image: 'images/products/industrial-floor-fan.jpg',
    featured: true
  },
  {
    id: 'workshop-fan',
    name: 'High-Velocity Workshop Fan',
    category: 'ventilation',
    price: 249.00,
    description: '20" drum fan delivering 4500 CFM airflow with powder-coated steel housing and thermal overload protection.',
    image: 'images/products/workshop-fan.jpg',
    featured: true
  },
  {
    id: 'wall-mount-ventilator',
    name: 'Wall-Mount Ventilator 16"',
    category: 'ventilation',
    price: 159.00,
    description: 'Space-saving wall fan with pull-chain control, reversible airflow, and corrosion-resistant blades.',
    image: 'images/products/wall-mount-ventilator.jpg',
    featured: false
  },
  {
    id: 'oscillating-pedestal-fan',
    name: 'Oscillating Pedestal Fan',
    category: 'ventilation',
    price: 119.00,
    description: 'Wide-area cooling with 90° oscillation, adjustable height, and remote control for large workspaces.',
    image: 'images/products/oscillating-pedestal-fan.jpg',
    featured: false
  },
  {
    id: 'desk-cooling-fan',
    name: 'Compact Desk Cooling Fan',
    category: 'ventilation',
    price: 49.99,
    description: 'Quiet brushless USB desk fan with four speed levels and adjustable tilt for personal cooling.',
    image: 'images/products/desk-cooling-fan.jpg',
    featured: false
  },
  {
    id: 'heavy-duty-extension',
    name: '10ft Heavy-Duty Extension Cord',
    category: 'power',
    price: 34.99,
    description: '14-gauge SJTW cord rated for 15A/1875W with lighted end and flexible cold-weather jacket.',
    image: 'images/products/heavy-duty-extension.jpg',
    featured: false
  },
  {
    id: 'surge-protector-strip',
    name: '6-Outlet Surge Protector Strip',
    category: 'power',
    price: 59.99,
    description: '2160 joule surge protection with six spaced outlets, two USB ports, and 6ft braided power cord.',
    image: 'images/products/surge-protector-strip.jpg',
    featured: true
  },
  {
    id: 'power-distribution-block',
    name: 'Industrial Power Distribution Block',
    category: 'power',
    price: 89.00,
    description: 'Heavy-duty PDU with eight grounded outlets, circuit breaker, and wall or rack mounting options.',
    image: 'images/products/power-distribution-block.jpg',
    featured: false
  },
  {
    id: 'outdoor-extension-lead',
    name: '25ft Outdoor Extension Lead',
    category: 'power',
    price: 45.99,
    description: 'Weather-resistant 12-gauge cord with GFCI protection and illuminated connector for outdoor jobs.',
    image: 'images/products/outdoor-extension-lead.jpg',
    featured: false
  },
  {
    id: 'usb-power-strip',
    name: 'USB Power Strip with PD',
    category: 'power',
    price: 69.99,
    description: 'Desk power strip with four AC outlets, 65W USB-C PD, and two USB-A fast-charge ports.',
    image: 'images/products/usb-power-strip.jpg',
    featured: false
  },
  {
    id: 'usbc-cable-2m',
    name: 'USB-C to USB-C Cable 2m',
    category: 'connectivity',
    price: 19.99,
    description: 'Braided 100W PD cable with e-marker chip for fast charging laptops, tablets, and phones.',
    image: 'images/products/usbc-cable-2m.jpg',
    featured: false
  },
  {
    id: 'hdmi-cable-3m',
    name: 'HDMI 2.1 Cable 3m',
    category: 'connectivity',
    price: 24.99,
    description: '48Gbps certified cable supporting 8K@60Hz and 4K@120Hz with gold-plated connectors.',
    image: 'images/products/hdmi-cable-3m.jpg',
    featured: true
  },
  {
    id: 'cat6-ethernet-50ft',
    name: 'Cat6 Ethernet Cable 50ft',
    category: 'connectivity',
    price: 29.99,
    description: 'Snagless RJ45 patch cable with pure copper conductors and molded strain relief boots.',
    image: 'images/products/cat6-ethernet-50ft.jpg',
    featured: false
  },
  {
    id: 'braided-lightning-cable',
    name: 'Braided Lightning Cable 1.5m',
    category: 'connectivity',
    price: 17.99,
    description: 'MFi-certified nylon braided cable with reinforced connectors rated for 30,000+ bends.',
    image: 'images/products/braided-lightning-cable.jpg',
    featured: false
  },
  {
    id: 'displayport-hdmi-adapter',
    name: 'DisplayPort to HDMI Adapter',
    category: 'connectivity',
    price: 22.99,
    description: 'Compact 4K@60Hz adapter for connecting DisplayPort laptops to HDMI monitors and projectors.',
    image: 'images/products/displayport-hdmi-adapter.jpg',
    featured: false
  },
  {
    id: 'hard-shell-case-medium',
    name: 'Hard-Shell Equipment Case Medium',
    category: 'storage',
    price: 79.99,
    description: 'Impact-resistant ABS case with customizable foam insert, dual latches, and padlock eyelets.',
    image: 'images/products/hard-shell-case-medium.jpg',
    featured: true
  },
  {
    id: 'waterproof-case-large',
    name: 'Waterproof Protective Case Large',
    category: 'storage',
    price: 149.00,
    description: 'IP67-rated watertight case with pressure equalization valve and pick-and-pluck foam interior.',
    image: 'images/products/waterproof-case-large.jpg',
    featured: true
  },
  {
    id: 'cable-organizer-case',
    name: 'Cable Organizer Travel Case',
    category: 'storage',
    price: 34.99,
    description: 'Compact zippered case with elastic loops and mesh pockets for cables, adapters, and accessories.',
    image: 'images/products/cable-organizer-case.jpg',
    featured: false
  },
  {
    id: 'rack-mount-enclosure',
    name: 'Rack-Mount Equipment Enclosure',
    category: 'storage',
    price: 199.00,
    description: '2U steel rack drawer with ventilated front panel, lockable handle, and sliding rail system.',
    image: 'images/products/rack-mount-enclosure.jpg',
    featured: false
  },
  {
    id: 'tool-storage-box',
    name: 'Tool & Device Storage Box',
    category: 'storage',
    price: 59.99,
    description: 'Modular storage box with removable dividers, stackable design, and reinforced corner protection.',
    image: 'images/products/tool-storage-box.jpg',
    featured: false
  }
];

function getProductById(id) {
  return PRODUCTS.find(function (p) { return p.id === id; });
}

function getProductsByCategory(categoryId) {
  if (!categoryId) return PRODUCTS;
  return PRODUCTS.filter(function (p) { return p.category === categoryId; });
}

function getFeaturedProducts() {
  return PRODUCTS.filter(function (p) { return p.featured; });
}

function getCategoryById(id) {
  return CATEGORIES.find(function (c) { return c.id === id; });
}

function formatPrice(price) {
  return '$' + price.toFixed(2);
}
