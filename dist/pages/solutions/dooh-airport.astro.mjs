/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_Xa69k-w6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_WXF9Gq1p.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

const $$DoohAirport = createComponent(($$result, $$props, $$slots) => {
  const title = "Airport Display Solutions | Official Distributor of LED & LCD Systems | Lovosis";
  const description = "Authorized distributor of premium digital displays for airports. Offering flight information screens, wayfinding kiosks, and advertising LED walls with nationwide delivery and installation support.";
  const keywords = "airport display solutions, airport digital signage, airport LED walls, airport LCD screens, airport wayfinding kiosks";
  const featuredProducts = [
    {
      id: "AP-LED-4K-01",
      name: "AirView Pro 4K LED Wall",
      category: "LED Video Wall",
      description: "High-brightness modular LED wall optimized for main terminal areas and high-traffic zones",
      price: "",
      minOrder: "10 panels",
      deliveryTime: "2-3 weeks",
      inStock: true,
      image: "/airport/img2.jpg",
      specs: [
        "1.2mm pixel pitch",
        "4K support with controller",
        "5000 nits brightness",
        "IP54 rated for dust protection"
      ]
    },
    {
      id: "AP-LCD-UNB-02",
      name: "FlightInfo Ultra LCD",
      category: "Information Display",
      description: "Ultra-narrow bezel LCD panels designed for FIDS (Flight Information Display Systems)",
      price: "",
      minOrder: "5 units",
      deliveryTime: "1-2 weeks",
      inStock: true,
      image: "/airport/img3.jpg",
      specs: [
        '55" 4K UHD display',
        "0.88mm combined bezel",
        "Anti-glare coating",
        "24/7 rated operation"
      ]
    },
    {
      id: "AP-KSK-TCH-03",
      name: "NavPoint Wayfinding Kiosk",
      category: "Interactive Kiosk",
      description: "Touch-enabled wayfinding kiosk with multi-language support and accessibility features",
      price: "",
      minOrder: "2 units",
      deliveryTime: "3-4 weeks",
      inStock: false,
      backorderTime: "2 weeks",
      image: "/airport/img4.jpg",
      specs: [
        '55" 4K touchscreen',
        "Hardened glass surface",
        "Integrated PC",
        "ADA compliant design"
      ]
    }
  ];
  const distributorBenefits = [
    {
      icon: "truck",
      title: "Nationwide Distribution",
      description: "Fast delivery to any airport in the country with white-glove logistics services"
    },
    {
      icon: "shield-check",
      title: "Extended Warranty",
      description: "All products come with 3-year distributor warranty and 24/7 technical support"
    },
    {
      icon: "currency-dollar",
      title: "Volume Pricing",
      description: "Tiered pricing structure for large-scale airport deployment projects"
    },
    {
      icon: "academic-cap",
      title: "Certified Technicians",
      description: "On-site installation and maintenance by airport-certified display specialists"
    }
  ];
  const sd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lovosis Display Solutions",
    "description": "Authorized distributor of digital display solutions for airports",
    "url": "https://www.lovosisdisplay.com",
    "logo": "https://www.lovosisdisplay.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2500 Airport Boulevard",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60666",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0123",
      "contactType": "sales",
      "availableLanguage": ["English", "Spanish"]
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "highPrice": "50000",
      "lowPrice": "1200",
      "offerCount": "10"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "200"
    },
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "John Doe"
      },
      "datePublished": "2025-02-15",
      "reviewBody": "The Lovosis airport display solutions have significantly improved our passenger experience. The LED walls and wayfinding kiosks are incredibly clear and reliable. Installation was quick, and the support team has been fantastic."
    }
  };
  const icons = {
    truck: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />`,
    "shield-check": `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`,
    "currency-dollar": `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />`,
    "academic-cap": `<path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />`
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "sd": sd, "keywords": keywords, "data-astro-cid-4uxo3i5n": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-white" data-astro-cid-4uxo3i5n> <!-- Hero Section --> <section class="relative bg-white border-b border-gray-200" data-astro-cid-4uxo3i5n> <div class="container mx-auto px-4 py-12 md:py-24" data-astro-cid-4uxo3i5n> <div class="flex flex-col md:flex-row items-center" data-astro-cid-4uxo3i5n> <div class="md:w-1/2 mb-12 md:mb-0 md:pr-12" data-astro-cid-4uxo3i5n> <div class="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6" data-astro-cid-4uxo3i5n>
OFFICIAL AUTHORIZED DISTRIBUTOR
</div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-astro-cid-4uxo3i5n>
Airport Display <span class="text-blue-600" data-astro-cid-4uxo3i5n>Distribution Solutions</span> </h1> <p class="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl" data-astro-cid-4uxo3i5n>
The largest selection of flight information displays, wayfinding kiosks, and advertising LED walls specifically designed for airport environments.
</p> <div class="mt-8 flex items-center text-gray-500" data-astro-cid-4uxo3i5n> <span class="flex items-center mr-6" data-astro-cid-4uxo3i5n> <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4uxo3i5n> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-4uxo3i5n></path> </svg>
In-stock products
</span> <span class="flex items-center" data-astro-cid-4uxo3i5n> <svg class="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4uxo3i5n> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-4uxo3i5n></path> </svg>
Nationwide delivery
</span> </div> <div class="mt-4" data-astro-cid-4uxo3i5n> <div class="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-md text-sm" data-astro-cid-4uxo3i5n> <span class="w-2 h-2 bg-green-500 rounded-full mr-2" data-astro-cid-4uxo3i5n></span>
Authorized distributor for 15+ premium display manufacturers
</div> </div> </div> <div class="md:w-1/2" data-astro-cid-4uxo3i5n> <div class="bg-gray-100 p-2 rounded-xl shadow-lg" data-astro-cid-4uxo3i5n> <img src="/airport/img1.jpg" alt="Airport Display Solutions" class="w-full rounded-lg" width="600" height="400" data-astro-cid-4uxo3i5n> </div> <div class="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200" data-astro-cid-4uxo3i5n> <div class="flex items-center mb-2" data-astro-cid-4uxo3i5n> <span class="w-3 h-3 bg-green-500 rounded-full mr-2" data-astro-cid-4uxo3i5n></span> <span class="font-medium text-gray-700" data-astro-cid-4uxo3i5n>Available for next-day shipping</span> </div> <p class="text-sm text-gray-500" data-astro-cid-4uxo3i5n>Most products ship directly from our distribution centers with tracking and installation support available.</p> </div> </div> </div> </div> </section> <!-- Trusted By Section --> <section class="py-12 bg-gray-50" data-astro-cid-4uxo3i5n> <div class="container mx-auto px-4" data-astro-cid-4uxo3i5n> <div class="text-center mb-10" data-astro-cid-4uxo3i5n> <h2 class="text-xl font-medium text-gray-600" data-astro-cid-4uxo3i5n>
TRUSTED BY MAJOR AIRPORTS ACROSS THE COUNTRY
</h2> </div> <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16" data-astro-cid-4uxo3i5n> <img src="/airport/L1.jpg" alt="JFK Airport" class="h-12 opacity-70 hover:opacity-100 transition-opacity" data-astro-cid-4uxo3i5n> <img src="/airport/L2.jpg" alt="LAX Airport" class="h-12 opacity-70 hover:opacity-100 transition-opacity" data-astro-cid-4uxo3i5n> <img src="/airport/L3.png" alt="O'Hare Airport" class="h-12 opacity-70 hover:opacity-100 transition-opacity" data-astro-cid-4uxo3i5n> <img src="/airport/L4.jpg" alt="Atlanta Airport" class="h-12 opacity-70 hover:opacity-100 transition-opacity" data-astro-cid-4uxo3i5n> <img src="/airport/L5.png" alt="Dallas Fort Worth Airport" class="h-12 opacity-70 hover:opacity-100 transition-opacity" data-astro-cid-4uxo3i5n> </div> </div> </section> <!-- Featured Products Section --> <section id="products" class="py-16 md:py-24 bg-white" data-astro-cid-4uxo3i5n> <div class="container mx-auto px-4" data-astro-cid-4uxo3i5n> <div class="text-center mb-16" data-astro-cid-4uxo3i5n> <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4" data-astro-cid-4uxo3i5n>
FEATURED PRODUCTS
</span> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-astro-cid-4uxo3i5n>
Best-Selling Airport Displays
</h2> <p class="text-gray-600 text-lg max-w-3xl mx-auto" data-astro-cid-4uxo3i5n>
High-quality display solutions engineered specifically for the demanding environment of modern airports
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-4uxo3i5n> ${featuredProducts.map((product) => renderTemplate`<div class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-astro-cid-4uxo3i5n> <div class="relative" data-astro-cid-4uxo3i5n> <img${addAttribute(product.image, "src")}${addAttribute(product.name, "alt")} class="w-full h-64 object-cover" loading="lazy" data-astro-cid-4uxo3i5n> <div class="absolute top-4 right-4" data-astro-cid-4uxo3i5n> ${product.inStock ? renderTemplate`<span class="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full" data-astro-cid-4uxo3i5n>In Stock</span>` : renderTemplate`<span class="inline-block bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full" data-astro-cid-4uxo3i5n>Backorder: ${product.backorderTime}</span>`} </div> <div class="absolute bottom-4 left-4 bg-blue-600 text-white text-xs uppercase tracking-wider font-semibold px-2 py-1 rounded" data-astro-cid-4uxo3i5n>
Official Distributor
</div> </div> <div class="p-6" data-astro-cid-4uxo3i5n> <div class="text-sm text-blue-600 font-medium mb-2" data-astro-cid-4uxo3i5n>${product.category}</div> <h3 class="text-xl font-bold text-gray-900 mb-2" data-astro-cid-4uxo3i5n>${product.name}</h3> <p class="text-gray-600 mb-4" data-astro-cid-4uxo3i5n>${product.description}</p> <div class="mb-6" data-astro-cid-4uxo3i5n> <div class="text-lg font-bold text-gray-900 mb-1" data-astro-cid-4uxo3i5n>${product.price}</div> <div class="text-sm text-gray-500" data-astro-cid-4uxo3i5n>
Min Order: ${product.minOrder} • Delivery: ${product.deliveryTime} </div> </div> <div class="mb-6" data-astro-cid-4uxo3i5n> <h4 class="text-sm font-semibold text-gray-900 mb-2" data-astro-cid-4uxo3i5n>SPECIFICATIONS</h4> <ul class="space-y-1" data-astro-cid-4uxo3i5n> ${product.specs.map((spec) => renderTemplate`<li class="text-sm text-gray-600 flex items-center" data-astro-cid-4uxo3i5n> <svg class="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4uxo3i5n> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-4uxo3i5n></path> </svg> ${spec} </li>`)} </ul> </div> <div class="flex gap-2" data-astro-cid-4uxo3i5n> <button class="px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-colors" data-astro-cid-4uxo3i5n> <a href="/company/contact-us" class="bg-blue-500 hover:bg-purple-600 text-white" data-astro-cid-4uxo3i5n>Request Quote</a> </button> </div> </div> </div>`)} </div> </div> </section> <!-- Distributor Benefits Section --> <section id="distribution-network" class="py-16 md:py-24 bg-gray-50" data-astro-cid-4uxo3i5n> <div class="container mx-auto px-4" data-astro-cid-4uxo3i5n> <div class="text-center mb-16" data-astro-cid-4uxo3i5n> <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4" data-astro-cid-4uxo3i5n>
WHY CHOOSE US
</span> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-astro-cid-4uxo3i5n>
Premier Airport Display Distributor
</h2> <p class="text-gray-600 text-lg max-w-3xl mx-auto" data-astro-cid-4uxo3i5n>
We provide comprehensive distribution services tailored specifically for airport environments
</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-astro-cid-4uxo3i5n> ${distributorBenefits.map((benefit) => renderTemplate`<div class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow" data-astro-cid-4uxo3i5n> <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6" data-astro-cid-4uxo3i5n> <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4uxo3i5n> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icons[benefit.icon])}` })} </svg> </div> <h3 class="text-lg font-bold text-gray-900 mb-3" data-astro-cid-4uxo3i5n>${benefit.title}</h3> <p class="text-gray-600" data-astro-cid-4uxo3i5n>${benefit.description}</p> </div>`)} </div> <div class="mt-12 text-center" data-astro-cid-4uxo3i5n> <a href="/company/contact-us" class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors" data-astro-cid-4uxo3i5n>
Contact Sales Team
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4uxo3i5n> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-4uxo3i5n></path> </svg> </a> </div> </div> </section> <!-- Distribution Map Section (NEW) --> <section class="py-16 md:py-24 bg-white" data-astro-cid-4uxo3i5n> <div class="container mx-auto px-4" data-astro-cid-4uxo3i5n> <div class="flex flex-col lg:flex-row items-center gap-12" data-astro-cid-4uxo3i5n> <div class="lg:w-1/2" data-astro-cid-4uxo3i5n> <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4" data-astro-cid-4uxo3i5n>
NATIONWIDE COVERAGE
</span> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6" data-astro-cid-4uxo3i5n>
Comprehensive Distribution Network
</h2> <p class="text-gray-600 text-lg mb-6" data-astro-cid-4uxo3i5n>
Our extensive distribution network ensures timely delivery and installation support across the country.
</p> <ul class="space-y-4" data-astro-cid-4uxo3i5n> <li class="flex items-center text-gray-600" data-astro-cid-4uxo3i5n> <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4uxo3i5n> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-4uxo3i5n></path> </svg>
24/7 customer support
</li> <li class="flex items-center text-gray-600" data-astro-cid-4uxo3i5n> <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4uxo3i5n> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-4uxo3i5n></path> </svg>
On-site installation services
</li> <li class="flex items-center text-gray-600" data-astro-cid-4uxo3i5n> <svg class="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4uxo3i5n> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" data-astro-cid-4uxo3i5n></path> </svg>
Nationwide logistics support
</li> </ul> </div> <div class="lg:w-1/2" data-astro-cid-4uxo3i5n> <img src="/airport/img5.jpg" alt="Distribution Map" class="w-full rounded-lg shadow-lg" width="600" height="400" data-astro-cid-4uxo3i5n> </div> </div> </div> </section> <!-- CTA Section --> <section class="relative py-24 overflow-hidden" data-astro-cid-4uxo3i5n> <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" data-astro-cid-4uxo3i5n></div> <div class="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10" data-astro-cid-4uxo3i5n></div> <div class="relative container mx-auto px-4 text-center" data-astro-cid-4uxo3i5n> <h2 class="text-4xl md:text-5xl font-bold text-white mb-8" data-astro-cid-4uxo3i5n>
Ready to Transform Your Airport?
</h2> <p class="text-xl text-white/80 mb-12 max-w-2xl mx-auto" data-astro-cid-4uxo3i5n>
Download our comprehensive product catalog or schedule a consultation with our experts
</p> <div class="flex flex-wrap justify-center gap-6" data-astro-cid-4uxo3i5n> <a href="/catalogs/airport-dooh-solutions.pdf" class="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center" download data-astro-cid-4uxo3i5n> <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-4uxo3i5n> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" data-astro-cid-4uxo3i5n></path> </svg>
Download Catalog
</a> </div> </div> </section> </main> ` })} `;
}, "C:/Users/USER/Desktop/display-main/src/pages/solutions/dooh-airport.astro", void 0);

const $$file = "C:/Users/USER/Desktop/display-main/src/pages/solutions/dooh-airport.astro";
const $$url = "/solutions/dooh-airport";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DoohAirport,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
