/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_Xa69k-w6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_WXF9Gq1p.mjs';
export { renderers } from '../../renderers.mjs';

const seoConfig = {
  // Primary LED modules keywords for all pages
   
  
  // Business info for schema
  businessInfo: {
    name: "UNV LED Modules UAE | Lovosis Display",
    phone: "+971 50 916 2488",
    email: "sales@lovosis.com",
    address: "Dubai Silicon Oasis, Dubai, UAE",
    latitude: "25.2048",
    longitude: "55.2708"
  },
  
  // Generate page-specific keywords
  generateKeywords: (pageType, specificTerms = []) => {
    const base = seoConfig.primaryKeywords.ledModules;
    const location = "Dubai, UAE";
    const specific = specificTerms.join(", ");
    return `${base}, ${specific}, ${location}`;
  }
};

const $$LedModules = createComponent(($$result, $$props, $$slots) => {
  const title = "LED Modules UAE | Buy LED Module Lights Dubai | High Power LED Module Supplier";
  const description = "Premium LED modules in UAE - buy high-quality LED module lights in Dubai. Leading LED module supplier offering energy-efficient, long-lasting lighting solutions for signs, displays, and commercial applications across UAE.";
  const keywords = seoConfig.generateKeywords("ledModules", [
    "LED module lights Dubai",
    "buy LED modules Dubai",
    "high power LED module supplier UAE",
    "commercial LED modules",
    "LED lighting modules UAE"
  ]);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "LED Modules UAE | LED Module Lights Dubai",
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "UNV LED Modules"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "AED",
      "lowPrice": "25",
      "highPrice": "500",
      "availability": "https://schema.org/InStock"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "keywords": keywords, "sd": schema }, { "default": ($$result2) => renderTemplate`  ` })}`;
}, "C:/Users/USER/Desktop/display-main/src/pages/Products/led-modules.astro", void 0);

const $$file = "C:/Users/USER/Desktop/display-main/src/pages/Products/led-modules.astro";
const $$url = "/Products/led-modules";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LedModules,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
