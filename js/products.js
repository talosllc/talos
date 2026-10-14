const CATEGORIES = [
  { id: 'ventilation', name: 'Ventilation & Cooling', slug: 'ventilation', image: 'images/categories/industrial-fans.jpg' },
  { id: 'custom-pcb', name: 'Custom PCB', slug: 'custom-pcb', image: 'images/categories/custom-pcb.jpg' },
  { id: 'moulded', name: 'Moulded Parts', slug: 'moulded', image: 'images/categories/rubber-moulded-parts.jpg' },
  { id: 'hvac', name: 'HVAC and Climate Control', slug: 'hvac', image: 'images/categories/hvac-parts.jpg' },
  { id: 'aluminium', name: 'Aluminium Extrusions', slug: 'aluminium', image: 'images/categories/aluminium-extrusions.jpg' },
  { id: 'fabrication', name: 'Fabrication & CNC', slug: 'fabrication', image: 'images/categories/cast-stainless-steel-parts.jpg' }
];

const PRODUCTS = [
  {
    id: 'ladder-anti-slip-feet',
    name: 'Ladder Anti-Slip Feet',
    category: 'moulded',
    price: null,
    description: 'Durable rubber anti-slip feet designed for step ladders. Provides secure grip on floors and reduces slip risk during use. Available for OEM and replacement supply.',
    image: 'images/products/rubber-moulded-parts-01.jpg',
    featured: true
  },
  {
    id: 'ladder-weld-clip-feet',
    name: 'Light Grey Ladder Weld Clip Feet',
    category: 'moulded',
    price: null,
    description: 'Light grey moulded feet that clip over welds on step ladders. Quick-fit design for secure attachment without complex assembly. Ideal for ladder manufacturers and maintenance stock.',
    image: 'images/products/rubber-moulded-parts-02.jpg',
    featured: false
  },
  {
    id: 'bathroom-cubicle-feet',
    name: 'Dark Grey Bathroom Cubicle Feet',
    category: 'moulded',
    price: null,
    description: 'Dark grey moulded feet for bathroom cubicles and partition systems. Stable, moisture-resistant base components for commercial washroom installations.',
    image: 'images/products/rubber-moulded-parts-03.jpg',
    featured: false
  },
  {
    id: 'injection-moulded-parts',
    name: 'Custom Injection Moulded Parts',
    category: 'moulded',
    price: null,
    description: 'Precision injection moulded components produced to your drawings. From tooling support through to end production supply for industrial and OEM applications.',
    image: 'images/products/injection-moulded-parts-01.jpg',
    featured: true
  },
  {
    id: 'nylon-cnc-parts',
    name: 'Nylon CNC Machining Parts',
    category: 'moulded',
    price: null,
    description: 'CNC machined nylon parts for wear-resistant and low-friction applications. Suitable for bushings, spacers, guides, and custom engineering components.',
    image: 'images/products/nylon-cnc-machining-01.jpg',
    featured: false
  },
  {
    id: 'industrial-fans',
    name: 'Industrial Fans',
    category: 'ventilation',
    price: null,
    description: 'Industrial-grade fans for ventilation and cooling in commercial and manufacturing environments. Built for reliable airflow and continuous operation.',
    image: 'images/products/industrial-fans-01.jpg',
    featured: true
  },
  {
    id: 'residential-hvac-climate',
    name: 'HVAC and Climate Control Systems',
    category: 'hvac',
    price: null,
    description: 'HVAC and climate control solutions for apartments and residential housing. Components and assemblies for efficient heating, cooling, and air management.',
    image: 'images/products/hvac-parts-01.jpg',
    featured: true
  },
  {
    id: 'pvc-hvac-tooling',
    name: 'PVC Tooling for HVAC Ventilation',
    category: 'hvac',
    price: null,
    description: 'PVC tooling and end production supply for HVAC ventilation systems. From tooling support to finished parts for ducting and ventilation assemblies.',
    image: 'images/products/hvac-parts-02.jpg',
    featured: false
  },
  {
    id: 'epp-foam-cases',
    name: 'EPP Foam Protective Cases',
    category: 'hvac',
    price: null,
    description: 'Expanded polypropylene (EPP) foam cases for protecting HVAC components and industrial parts during storage and transport. Lightweight, impact-resistant, and reusable.',
    image: 'images/products/epp-foam-cases-01.jpg',
    featured: false
  },
  {
    id: 'custom-pcb',
    name: 'Custom PCB Design & Manufacture',
    category: 'custom-pcb',
    price: null,
    description: 'We design, manufacture, and test custom PCBs to your specifications. Prototype through production volumes with quality inspection before dispatch.',
    image: 'images/products/custom-pcb-01.jpg',
    featured: true
  },
  {
    id: 'aluminium-extrusion-services',
    name: 'Aluminium Extrusion Design & Fabrication',
    category: 'aluminium',
    price: null,
    description: 'Aluminium extrusion die design, production, cutting, and fabrication supply. Full-facility support from profile design through to finished extrusion assemblies.',
    image: 'images/products/aluminium-extrusions-01.jpg',
    featured: true
  },
  {
    id: 'aluminium-punch-tooling',
    name: 'Aluminium Extrusion Punch Tooling',
    category: 'aluminium',
    price: null,
    description: 'High-grade machine tooling for punching aluminium extrusions. Precision tooling production for accurate, repeatable hole patterns and cut-outs.',
    image: 'images/products/aluminium-extrusions-02.jpg',
    featured: false
  },
  {
    id: 'hf-welded-aluminium-tube',
    name: 'HF Continuous Welded Aluminium Tube',
    category: 'aluminium',
    price: null,
    description: 'High-frequency continuous welded aluminium tube for ski and snowboard equipment, ladders, and car radiator industry applications. Consistent weld quality for demanding structural and thermal uses.',
    image: 'images/products/high-frequency-continuous-welded-aluminium-tube-01.jpg',
    featured: true
  },
  {
    id: 'stainless-cnc-cast-parts',
    name: 'CNC Machined & Cast Stainless Steel Parts',
    category: 'fabrication',
    price: null,
    description: 'CNC machined and cast stainless steel part production for industrial and OEM use. Corrosion-resistant components manufactured to drawing with tight tolerances.',
    image: 'images/products/cast-stainless-steel-parts-01.jpg',
    featured: true
  },
  {
    id: 'mild-steel-fabrication',
    name: 'Mild Steel Fabrication & Welding',
    category: 'fabrication',
    price: null,
    description: 'Mild steel fabrication and welding of custom parts. From brackets and frames to welded assemblies — cut, formed, and finished to your requirements.',
    image: 'images/products/mild-steel-fabrication-parts-01.jpg',
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
  return 'POA';
}
