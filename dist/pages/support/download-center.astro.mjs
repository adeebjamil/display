/* empty css                                     */
import { c as createComponent, r as renderComponent, d as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Xa69k-w6.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_WXF9Gq1p.mjs';
export { renderers } from '../../renderers.mjs';

const $$DownloadCenter = createComponent(($$result, $$props, $$slots) => {
  const title = "Display Technology Downloads | LED, LCD & Interactive Display Resources | Lovosis Display";
  const description = "Access our comprehensive collection of display technology resources including LED display datasheets, LCD video wall manuals, interactive panel guides, and product installation documentation.";
  const keywords = "display technology downloads, LED display datasheets, LCD video wall manuals, interactive panel guides, product installation documentation";
  const sd = {
    "@context": "https://schema.org",
    "@type": "DataDownload",
    "name": "Display Technology Resources",
    "description": "Collection of technical documentation for professional display products including LED panels, LCD video walls, and interactive displays",
    "encodingFormat": "application/pdf",
    "contentUrl": "https://lovosisdisplay.com/download-center",
    "dateModified": "2025-03-04",
    "publisher": {
      "@type": "Organization",
      "name": "Lovosis Display",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lovosisdisplay.com/logo.png"
      }
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0.00",
      "highPrice": "100.00",
      "offerCount": "50",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
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
        "name": "Emily Davis"
      },
      "datePublished": "2025-01-20",
      "reviewBody": "The Lovosis educational display solutions have revolutionized our classrooms. The interactive LED boards and digital learning screens are incredibly engaging for students and have significantly improved the teaching experience. The installation was smooth, and the support team has been outstanding."
    }
  };
  const downloads = {
    Datasheet: {
      IFPD: [
        {
          title: "Conference Display Centralized Control Platform",
          size: "2.5 MB",
          date: "2024-02-20",
          url: "/downloads/datasheet/ifpd/conference-display-platform.pdf"
        },
        {
          title: "UNV HB-4365 Smart Interactive Display",
          size: "3.1 MB",
          date: "2024-02-18",
          url: "/downloads/datasheet/ifpd/hb-4365-manual.pdf"
        },
        {
          title: "UNV HB-7099-M I5 Processor OPS Computer",
          size: "1.8 MB",
          date: "2024-02-15",
          url: "/downloads/datasheet/ifpd/hb-7099m-datasheet.pdf"
        }
      ],
      "LED Display": [
        {
          title: "UNV MW7209-E-U LED Full-Color Display Unit",
          size: "2.2 MB",
          date: "2024-02-22",
          url: "/downloads/datasheet/led/mw7209-e-u.pdf"
        },
        {
          title: "UNV MW7719-FI 1.9mm Indoor Fixed LED Display Unit",
          size: "2.4 MB",
          date: "2024-02-21",
          url: "/downloads/datasheet/led/mw7719-fi.pdf"
        },
        {
          title: "UNV MW7719-RI 1.9mm Indoor Rental LED Display",
          size: "2.3 MB",
          date: "2024-02-20",
          url: "/downloads/datasheet/led/mw7719-ri.pdf"
        },
        {
          title: "UNV MW7726-FI 2.6mm Indoor Fixed LED Display Unit",
          size: "2.5 MB",
          date: "2024-02-19",
          url: "/downloads/datasheet/led/mw7726-fi.pdf"
        }
      ],
      "LCD Video Wall": [
        {
          title: "UNV MW-A46-B3-E 46 inches 1.7mm Bezel Width Video Wall",
          size: "2.8 MB",
          date: "2024-02-19",
          url: "/downloads/datasheet/lcd/mw-a46-b3-e.pdf"
        },
        {
          title: "UNV MW-A46-B5-E 46 inches 0.88mm Bezel Width Video Wall",
          size: "2.7 MB",
          date: "2024-02-18",
          url: "/downloads/datasheet/lcd/mw-a46-b5-e.pdf"
        }
      ],
      "Controller": [
        {
          title: "UNV ADU87XX-E-V3 Series High Definition Video Decoder",
          size: "1.9 MB",
          date: "2024-02-17",
          url: "/downloads/datasheet/controller/adu87xx-e-v3.pdf"
        },
        {
          title: "UNV DC55XX-E-V2 Series High Definition Video Decoder",
          size: "1.8 MB",
          date: "2024-02-16",
          url: "/downloads/datasheet/controller/dc55xx-e-v2.pdf"
        },
        {
          title: "UNV DC5601 1-CH HD Video Decoder",
          size: "1.7 MB",
          date: "2024-02-15",
          url: "/downloads/datasheet/controller/dc5601.pdf"
        }
      ],
      "Monitors": [
        {
          title: "MW3222-L-DT LED Monitor",
          size: "2.1 MB",
          date: "2024-02-14",
          url: "/downloads/datasheet/monitors/mw3222-l-dt.pdf"
        },
        {
          title: "MW3222-V-DT LED Monitor",
          size: "2.0 MB",
          date: "2024-02-13",
          url: "/downloads/datasheet/monitors/mw3222-v-dt.pdf"
        },
        {
          title: "MW-LC24-E 24 inches IT Monitor",
          size: "1.9 MB",
          date: "2024-02-12",
          url: "/downloads/datasheet/monitors/mw-lc24-e.pdf"
        },
        {
          title: "UNV HB-4022-E Wall-hanging Mounts",
          size: "1.6 MB",
          date: "2024-02-11",
          url: "/downloads/datasheet/monitors/hb-4022-e.pdf"
        }
      ]
    },
    "Product Installation": {
      "Quick Guide": [
        {
          title: "ADU87XX-E-V3-High Definition Video Decoder Quick Guide",
          size: "1.5 MB",
          date: "2024-02-22",
          url: "/downloads/installation/quickguide/adu87xx-e-v3-guide.pdf"
        },
        {
          title: "DC55XX-E-V2-Video Decoders Quick Guide",
          size: "1.3 MB",
          date: "2024-02-21",
          url: "/downloads/installation/quickguide/dc55xx-e-v2-guide.pdf"
        },
        {
          title: "DC5601-High Definition Video Decoder Quick Guide",
          size: "1.2 MB",
          date: "2024-02-20",
          url: "/downloads/installation/quickguide/dc5601-guide.pdf"
        }
      ],
      "User Manual": [
        {
          title: "ADU&DC&DC5601-Video Decoder User Manual",
          size: "3.5 MB",
          date: "2024-02-19",
          url: "/downloads/installation/manual/video-decoder-manual.pdf"
        },
        {
          title: "EMCS-Centralized Control Platform User Manual",
          size: "4.2 MB",
          date: "2024-02-18",
          url: "/downloads/installation/manual/emcs-platform-manual.pdf"
        }
      ],
      "Suppliers Declaration": [
        {
          title: "Supplier's Declaration of Conformity-Display&Control",
          size: "0.8 MB",
          date: "2024-02-17",
          url: "/downloads/installation/declaration/display-control-conformity.pdf"
        }
      ]
    },
    "Brochures": {
      "Product Leaflet & Fold": [
        {
          title: "100Hz IT Monitor",
          size: "3.2 MB",
          date: "2024-02-22",
          url: "/downloads/brochures/product-leaflet/100hz-it-monitor.pdf"
        },
        {
          title: "2025 Display Product Guide",
          size: "5.1 MB",
          date: "2024-02-21",
          url: "/downloads/brochures/product-leaflet/2025-display-guide.pdf"
        },
        {
          title: "75Hz IT Monitor",
          size: "2.8 MB",
          date: "2024-02-20",
          url: "/downloads/brochures/product-leaflet/75hz-it-monitor.pdf"
        },
        {
          title: "Certificates for Interactive Display",
          size: "1.5 MB",
          date: "2024-02-19",
          url: "/downloads/brochures/product-leaflet/interactive-display-certificates.pdf"
        },
        {
          title: "Display Product Guide 2024",
          size: "4.8 MB",
          date: "2024-02-18",
          url: "/downloads/brochures/product-leaflet/2024-display-guide.pdf"
        }
      ]
    }
  };
  const categories = Object.keys(downloads);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "sd": sd, "keywords": keywords }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-gray-50 py-12"> <div class="container mx-auto px-4"> <h1 class="text-4xl font-bold text-gray-900 mb-8">Download Center</h1> <!-- Filters Section --> <div class="bg-white rounded-xl shadow-sm p-6 mb-8"> <div class="grid grid-cols-1 md:grid-cols-2 gap-4"> <!-- Category Filter --> <div> <label class="block text-sm font-medium text-gray-700 mb-2">Category</label> <select id="categoryFilter" class="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Select Category</option> ${categories.map((category) => renderTemplate`<option${addAttribute(category, "value")}>${category}</option>`)} </select> </div> <!-- Product Filter - Initially Hidden --> <div id="subCategoryContainer" class="hidden"> <label class="block text-sm font-medium text-gray-700 mb-2">Sub Category</label> <select id="productFilter" class="w-full py-3 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"> <option value="">Select Sub Category</option> </select> </div> </div> </div> <!-- Downloads List --> <div id="downloadsList" class="bg-white rounded-xl shadow-sm hidden"> <div class="p-6"> <div class="space-y-4" id="downloadsContainer"> <!-- Downloads will be populated here via JavaScript --> </div> </div> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/USER/Desktop/display-main/src/pages/support/download-center.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/display-main/src/pages/support/download-center.astro", void 0);

const $$file = "C:/Users/USER/Desktop/display-main/src/pages/support/download-center.astro";
const $$url = "/support/download-center";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DownloadCenter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
