/* empty css                                  */
import { c as createComponent, m as maybeRenderHead, d as renderScript, b as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_Xa69k-w6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_WXF9Gq1p.mjs';
export { renderers } from '../renderers.mjs';

const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const images = [
    {
      src: "/Carousel image 12/bill boards 3.png",
      alt: "Slide 1",
      title: "Innovative Display Solutions",
      description: "Transforming spaces with cutting-edge visual technology"
    },
    {
      src: "/Carousel image 12/Business bill boards 1.png",
      alt: "Slide 2",
      title: "Seamless Integration",
      description: "Connect and control your displays with ease"
    },
    {
      src: "/Carousel image 12/Business bill boards 3.png",
      alt: "Slide 3",
      title: "Crystal Clear Quality",
      description: "Experience visuals in stunning detail and clarity"
    },
    {
      src: "/Carousel image 12/Display 01 (LED).png",
      alt: "Slide 4",
      title: "Interactive Educational Boards",
      description: "Enhance learning experiences with interactive educational boards"
    },
    {
      src: "/Carousel image 12/Display 02 (LCD).png",
      alt: "Slide 5",
      title: "Digital Billboards",
      description: "Boost brand visibility with digital billboards"
    },
    {
      src: "/Carousel image 12/Display 03 (LED).png",
      alt: "Slide 6",
      title: "Seamless Integration",
      description: "Connect and control your displays with ease"
    },
    {
      src: "/Carousel image 12/Display 4 (LCD).png",
      alt: "Slide 7",
      title: "Crystal Clear Quality",
      description: "Experience visuals in stunning detail and clarity"
    },
    {
      src: "/Carousel image 12/Display 5 (LED).png",
      alt: "Slide 8",
      title: "Interactive Educational Boards",
      description: "Enhance learning experiences with interactive educational boards"
    },
    {
      src: "/Carousel image 12/Display 6 (LCD).png",
      alt: "Slide 9",
      title: "Digital Billboards",
      description: "Boost brand visibility with digital billboards"
    },
    {
      src: "/Carousel image 12/Educational Monitors 1.png",
      alt: "Slide 10",
      title: "Seamless Integration",
      description: "Connect and control your displays with ease"
    },
    {
      src: "/Carousel image 12/Educational Monitors 2.png",
      alt: "Slide 11",
      title: "Crystal Clear Quality",
      description: "Experience visuals in stunning detail and clarity"
    },
    {
      src: "/Carousel image 12/Educational Monitors 3.png",
      alt: "Slide 12",
      title: "Interactive Educational Boards",
      description: "Enhance learning experiences with interactive educational boards"
    }
  ];
  return renderTemplate`<!-- Improved mobile-responsive container -->${maybeRenderHead()}<div class="relative overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] mx-auto rounded-xl shadow-2xl my-4 sm:my-6 max-w-[98%] sm:max-w-[95%] mt-6 sm:mt-10" id="carousel-container" data-astro-cid-wfe7xcno> <!-- Carousel container with subtle pattern overlay --> <div class="carousel-container relative h-full" data-astro-cid-wfe7xcno> <!-- Pattern overlay --> <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyIC44IDIgMnYyYzAgMS4yLS44IDItMiAycy0yLS44LTItMnYtMmMwLTEuMi44LTIgMi0ybTAgMTBjMS4yIDAgMiAuOCAyIDJ2MmMwIDEuMi0uOCAyLTIgMnMtMi0uOC0yLTJ2LTJjMC0xLjIuOC0yIDItMm0tMTAtMTBjMS4yIDAgMiAuOCAyIDJ2MmMwIDEuMi0uOCAyLTIgMnMtMi0uOC0yLTJ2LTJjMC0xLjIuOC0yIDItMm0wIDEwYzEuMiAwIDIgLjggMiAydjJjMCAxLjItLjggMi0yIDJzLTItLjgtMi0ydi0yYzAtMS4yLjgtMiAyLTJtLTEwLTEwYzEuMiAwIDIgLjggMiAydjJjMCAxLjItLjggMi0yIDJzLTItLjgtMi0ydi0yYzAtMS4yLjgtMiAyLTJtMCAxMGMxLjIgMCAyIC44IDIgMnYyYzAgMS4yLS44IDItMiAycy0yLS44LTItMnYtMmMwLTEuMi44LTIgMi0yIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-overlay pointer-events-none" data-astro-cid-wfe7xcno></div> ${images.map((image, index) => renderTemplate`<div class="carousel-slide absolute inset-0 opacity-0 transition-all duration-1000 ease-out transform translate-x-full"${addAttribute(index, "data-index")} data-astro-cid-wfe7xcno> <!-- Image container with enhanced effects --> <div class="relative h-full overflow-hidden" data-astro-cid-wfe7xcno> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-contain object-center scale-105 transition-transform duration-7000 carousel-image"${addAttribute(index < 2 ? "eager" : "lazy", "loading")} onerror="this.onerror=null; this.src='/placeholder-image.jpg'; console.error('Failed to load: ' + this.src);" data-astro-cid-wfe7xcno> <!-- Advanced gradient overlay with texture --> <div class="absolute inset-0 to-transparent" data-astro-cid-wfe7xcno></div> <!-- Content overlay with animated entry - Adding titles and descriptions back --> <div class="absolute inset-0 flex flex-col justify-end px-4 sm:px-8 md:px-16 lg:px-24 pb-10 sm:pb-16 slide-content opacity-0" data-astro-cid-wfe7xcno> <div class="bg-black/40 backdrop-blur-sm p-3 sm:p-4 rounded-lg max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto sm:mx-0" data-astro-cid-wfe7xcno> <h3 class="text-white text-base sm:text-xl md:text-2xl font-bold" data-astro-cid-wfe7xcno>${image.title}</h3> <p class="text-white/80 text-xs sm:text-base mt-1" data-astro-cid-wfe7xcno>${image.description}</p> </div> </div> </div> </div>`)} </div> <!-- Always-visible navigation arrows for mobile --> <button class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/40 nav-prev touch-action-manipulation z-20" aria-label="Previous slide" data-astro-cid-wfe7xcno> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-wfe7xcno> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-wfe7xcno></path> </svg> </button> <button class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20 opacity-70 sm:opacity-0 sm:group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white/40 nav-next touch-action-manipulation z-20" aria-label="Next slide" data-astro-cid-wfe7xcno> <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-wfe7xcno> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-wfe7xcno></path> </svg> </button> <!-- Simplified navigation dots for mobile --> <div class="absolute bottom-3 sm:bottom-6 left-0 right-0 flex items-center justify-center" data-astro-cid-wfe7xcno> <div class="flex space-x-1 sm:space-x-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10" data-astro-cid-wfe7xcno> <span class="text-white/70 text-xs sm:text-sm mr-1 sm:mr-2 slide-counter" data-astro-cid-wfe7xcno>1/${images.length}</span> <div class="flex space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar max-w-[60vw] sm:max-w-none" data-astro-cid-wfe7xcno> ${images.map((_, index) => renderTemplate`<button class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white/30 hover:bg-white transition-all duration-200 nav-dot hover:scale-125 flex-shrink-0"${addAttribute(index, "data-index")}${addAttribute(`Go to slide ${index + 1}`, "aria-label")} data-astro-cid-wfe7xcno></button>`)} </div> </div> </div> <!-- Progress bar --> <div class="absolute bottom-0 left-0 right-0 h-1" data-astro-cid-wfe7xcno> <div class="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 progress-bar w-0 transition-all duration-2000" data-astro-cid-wfe7xcno></div> </div> </div> ${renderScript($$result, "C:/Users/USER/Desktop/display-main/src/components/Carousel.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/USER/Desktop/display-main/src/components/Carousel.astro", void 0);

const $$NewProducts = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      id: 1,
      title: "Video Conferencing",
      description: "Video Conferencing Products",
      image: "/Product Carousel 6/Video Conferencing.jpeg",
      link: "/Products/conferencing-products"
    },
    {
      id: 2,
      title: "LED Display",
      description: "0.9mm pixel pitch mini LED",
      image: "/Product Carousel 6/LED Display.png",
      link: "/Products/led-display"
    },
    {
      id: 3,
      title: "LCD Video Wall",
      description: "Ultra Narrow Bezel Video Wall",
      image: "/Product Carousel 6/LCD Video wall.png",
      link: "/Products/lcd-video"
    },
    {
      id: 4,
      title: "Monitors",
      description: "LED Monitor",
      image: "/Product Carousel 6/Monitors.png",
      link: "/Products/monitors-video"
    },
    {
      id: 5,
      title: "Controller",
      description: "Professional Video Wall Controller",
      image: "/Product Carousel 6/Controllers.png",
      link: "/Products/wall-controller"
    },
    {
      id: 6,
      title: "Corporate Display",
      description: "Corporate Display Products",
      image: "/Product Carousel 6/CorporateDisplay.jpeg",
      link: "/solutions/corporate"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-white" data-astro-cid-yjhcno76> <div class="max-w-7xl mx-auto px-4" data-astro-cid-yjhcno76> <h2 class="text-4xl font-bold text-center text-gray-900 mb-12" data-astro-cid-yjhcno76>
Our Latest Products
<span class="block w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mt-4" data-astro-cid-yjhcno76></span> </h2> <div class="flex overflow-x-hidden" data-astro-cid-yjhcno76> <div class="flex animate-scroll" data-astro-cid-yjhcno76> ${products.map((product) => renderTemplate`<div class="min-w-[300px] mx-4" data-astro-cid-yjhcno76> <div class="bg-white rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105" data-astro-cid-yjhcno76> <div class="relative overflow-hidden group" data-astro-cid-yjhcno76> <img${addAttribute(product.image, "src")}${addAttribute(product.title, "alt")} class="w-full h-64 object-contain transform transition-transform duration-500 group-hover:scale-110" loading="lazy" data-astro-cid-yjhcno76> <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-yjhcno76></div> </div> <div class="p-6" data-astro-cid-yjhcno76> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-yjhcno76>${product.title}</h3> <p class="text-gray-600 mb-4" data-astro-cid-yjhcno76>${product.description}</p> <a${addAttribute(product.link, "href")} class="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25" data-astro-cid-yjhcno76>
Read More
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yjhcno76> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-yjhcno76></path> </svg> </a> </div> </div> </div>`)}  ${products.map((product) => renderTemplate`<div class="min-w-[300px] mx-4" data-astro-cid-yjhcno76> <div class="bg-white rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105" data-astro-cid-yjhcno76> <div class="relative overflow-hidden group" data-astro-cid-yjhcno76> <img${addAttribute(product.image, "src")}${addAttribute(product.title, "alt")} class="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110" data-astro-cid-yjhcno76> <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-yjhcno76></div> </div> <div class="p-6" data-astro-cid-yjhcno76> <h3 class="text-xl font-semibold text-gray-900 mb-2" data-astro-cid-yjhcno76>${product.title}</h3> <p class="text-gray-600 mb-4" data-astro-cid-yjhcno76>${product.description}</p> <a${addAttribute(product.link, "href")} class="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25" data-astro-cid-yjhcno76>
Read More
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-yjhcno76> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-yjhcno76></path> </svg> </a> </div> </div> </div>`)} </div> </div> </div> </section> `;
}, "C:/Users/USER/Desktop/display-main/src/components/NewProducts.astro", void 0);

const $$NewsAndEvents = createComponent(($$result, $$props, $$slots) => {
  const successCases = [
    {
      title: "UNV Smart Interactive Display for Al-Amal International School, Yemen",
      category: "Education",
      description: "Al-Amal International School, established in 1997, is focused on the Kg-Primary-Secondary education in Yemen.",
      image: "/Success case/1.png"
    },
    {
      title: "LED Displays Enhancing Visuals at Sheikh Zayed Festival",
      category: "Corporate",
      description: "The Sheikh Zayed Festival, a significant cultural event in Abu Dhabi, brings together Emirati heritage, arts, and traditions for global visitors. To elevate the visual experience during the 2024 festival, UNV LED displays were chosen to create stunning and immersive presentations.",
      image: "/Success case/2.png"
    },
    {
      title: "UNV LCD Display for the Institute of Technology, Cambodia",
      category: "Corporate",
      description: "The Institute of Technology of Cambodia is a higher education institution in Cambodia. Enrollment is approximately 3,500 undergraduate students and 200 graduate students.",
      image: "/Success case/3.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 px-4 bg-white" data-astro-cid-3dccpauo> <div class="max-w-7xl mx-auto" data-astro-cid-3dccpauo> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-3dccpauo> ${successCases.map((item, index) => renderTemplate`<a class="group bg-white shadow-lg rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"${addAttribute(`animation-delay: ${index * 200}ms`, "style")} data-astro-cid-3dccpauo> <div class="relative h-[250px] overflow-hidden" data-astro-cid-3dccpauo> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" data-astro-cid-3dccpauo> <div class="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium" data-astro-cid-3dccpauo> ${item.category} </div> </div> <div class="p-6" data-astro-cid-3dccpauo> <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300" data-astro-cid-3dccpauo> ${item.title} </h3> <p class="text-gray-600 mb-6 line-clamp-3" data-astro-cid-3dccpauo> ${item.description} </p> </div> </a>`)} </div> </div> </section> `;
}, "C:/Users/USER/Desktop/display-main/src/components/NewsAndEvents.astro", void 0);

const $$FAQS = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "What are the advantages of LED displays over traditional billboards?",
      answer: "LED displays offer superior brightness, dynamic content capability, real-time updates, energy efficiency, and longer lifespan. They provide better visibility in all lighting conditions, allow for scheduled content changes, and offer significant long-term cost savings through reduced maintenance and power consumption."
    },
    {
      question: "How do your LCD video walls enhance control room operations?",
      answer: "Our LCD video walls deliver 24/7 reliability, ultra-narrow bezels for seamless viewing, superior color accuracy, and advanced control capabilities. They feature built-in redundancy, multiple input options, and specialized software for efficient control room management and real-time data visualization."
    },
    {
      question: "What makes your digital education boards ideal for classrooms?",
      answer: "Our interactive education boards feature 4K resolution, anti-glare surfaces, multi-touch capability, and specialized education software. They support wireless screen sharing, come with built-in teaching tools, and offer seamless integration with popular learning management systems."
    },
    {
      question: "What sizes and resolutions are available for outdoor LED billboards?",
      answer: "We offer outdoor LED billboards in various sizes from 2m\xB2 to 100m\xB2, with pixel pitches ranging from 4mm to 16mm. All displays feature high brightness (5500-8000 nits), IP65/IP54 weather protection, and automatic brightness adjustment for optimal visibility in any condition."
    },
    {
      question: "How long do your LED displays typically last?",
      answer: "Our LED displays are built for longevity, with an average lifespan of 100,000 hours (11+ years of continuous operation). They come with comprehensive warranties ranging from 3-5 years and maintain consistent brightness levels throughout their lifecycle with proper maintenance."
    },
    {
      question: "What maintenance is required for LCD video walls?",
      answer: "LCD video walls require minimal maintenance, including regular cleaning, temperature monitoring, and periodic calibration checks. We provide preventive maintenance schedules, remote monitoring capabilities, and quick-response support to ensure optimal performance."
    },
    {
      question: "Can your displays be integrated with third-party control systems?",
      answer: "Yes, our displays support various integration protocols including RS232, IP control, and HDMI-CEC. They're compatible with major control systems like Crestron, AMX, and Extron, allowing seamless integration into existing AV infrastructures."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-20 bg-gray-50"> <div class="max-w-4xl mx-auto px-4"> <div class="space-y-6"> ${faqs.map((faq, index) => renderTemplate`<div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300" x-data="{ open: false }"> <button class="flex justify-between items-center w-full text-left focus:outline-none" @click="open = !open"> <h3 class="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors" :class="{'text-blue-600': open}"> ${faq.question} </h3> <span class="ml-6 flex-shrink-0 text-blue-600"> <svg class="w-6 h-6 transform transition-transform duration-300" :class="{'rotate-180': open}" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </span> </button> <div class="mt-4 text-gray-600" x-show="open" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 transform -translate-y-4" x-transition:enter-end="opacity-100 transform translate-y-0" x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 transform translate-y-0" x-transition:leave-end="opacity-0 transform -translate-y-4" style="display: none;"> <p>${faq.answer}</p> </div> </div>`)} </div> <div class="mt-12 text-center"> <a href="/company/contact-us" class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
Still have questions?
<svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </section> ${renderScript($$result, "C:/Users/USER/Desktop/display-main/src/components/FAQS.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/display-main/src/components/FAQS.astro", void 0);

const $$LogoCloud = createComponent(($$result, $$props, $$slots) => {
  const logos = [
    {
      id: 1,
      name: "Tech Corp",
      image: "https://img.freepik.com/free-vector/abstract-company-logo_53876-120501.jpg?w=740&t=st=1708610436"
    },
    {
      id: 2,
      name: "Innovation Labs",
      image: "https://img.freepik.com/free-vector/gradient-technology-logo_52683-8741.jpg?w=740&t=st=1708610436"
    },
    {
      id: 3,
      name: "Digital Solutions",
      image: "https://img.freepik.com/free-vector/abstract-logo-flame-shape_1043-44.jpg?w=740&t=st=1708610436"
    },
    {
      id: 4,
      name: "Smart Systems",
      image: "https://img.freepik.com/free-vector/elegant-circle-logo-icon_126523-971.jpg?w=740&t=st=1708610436"
    },
    {
      id: 5,
      name: "Future Tech",
      image: "https://img.freepik.com/free-vector/abstract-logo-with-colorful-leaves_1017-2593.jpg?w=740&t=st=1708610436"
    },
    {
      id: 6,
      name: "Next Gen",
      image: "https://img.freepik.com/free-vector/gradient-abstract-logo_52683-8428.jpg?w=740&t=st=1708610436"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-8 sm:py-12 bg-white overflow-hidden" data-astro-cid-t6nyhj7k> <div class="max-w-7xl mx-auto px-4" data-astro-cid-t6nyhj7k> <h2 class="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6 sm:mb-8" data-astro-cid-t6nyhj7k>
Trusted by Industry Leaders
<span class="block w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-3 sm:mt-4" data-astro-cid-t6nyhj7k></span> </h2> <div class="relative w-full" data-astro-cid-t6nyhj7k> <!-- Gradient Overlays - Adjusted for mobile --> <div class="absolute left-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-r from-white to-transparent z-10" data-astro-cid-t6nyhj7k></div> <div class="absolute right-0 top-0 bottom-0 w-12 sm:w-40 bg-gradient-to-l from-white to-transparent z-10" data-astro-cid-t6nyhj7k></div> <!-- Logo Scroll Container --> <div class="flex overflow-hidden touch-pan-y" data-astro-cid-t6nyhj7k> <div class="flex animate-scroll space-x-6 sm:space-x-16 py-4 sm:py-8" data-astro-cid-t6nyhj7k> ${logos.map((logo) => renderTemplate`<div class="flex-none w-24 sm:w-32 md:w-48 h-16 sm:h-20 md:h-24 bg-white rounded-lg shadow-md p-2 sm:p-4 transform transition-transform hover:scale-110 touch-action-manipulation" data-astro-cid-t6nyhj7k> <img${addAttribute(logo.image, "src")}${addAttribute(logo.name, "alt")} class="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" data-astro-cid-t6nyhj7k> </div>`)}  ${logos.map((logo) => renderTemplate`<div class="flex-none w-24 sm:w-32 md:w-48 h-16 sm:h-20 md:h-24 bg-white rounded-lg shadow-md p-2 sm:p-4 transform transition-transform hover:scale-110 touch-action-manipulation" data-astro-cid-t6nyhj7k> <img${addAttribute(logo.image, "src")}${addAttribute(logo.name, "alt")} class="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300" loading="lazy" data-astro-cid-t6nyhj7k> </div>`)} </div> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/USER/Desktop/display-main/src/components/LogoCloud.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/display-main/src/components/LogoCloud.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const keywords = "LED modules UAE, LED module lights Dubai, buy LED modules Dubai, high power LED module supplier UAE, smart boards Dubai, interactive panels Dubai, CCTV monitors Dubai, digital signage UAE, commercial displays Dubai";
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lovosis Display Dubai",
    "url": "https://unv-ledmodules.com",
    "logo": "https://unv-ledmodules.com/logo.png",
    "description": "Leading distributor of premium LED displays, smart boards, interactive panels, CCTV monitors and keyboards in Dubai & UAE. Innovative display solutions for businesses & educational institutions across Dubai.",
    "telephone": "+971 50 916 2488",
    "email": "sales@lovosis.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dubai Silicon Oasis",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "United Arab Emirates"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "50000",
      "description": "Serving all areas across Dubai and UAE"
    },
    "sameAs": [
      "https://www.facebook.com/unv-ledmodules",
      "https://twitter.com/unv-ledmodules",
      "https://www.linkedin.com/company/unv-ledmodules"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Display Products in Dubai",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "LED Displays",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Commercial LED Video Walls in Dubai",
                "description": "High-resolution LED video walls for commercial spaces across Dubai with superior brightness and contrast"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Outdoor LED Billboards Dubai",
                "description": "Weather-resistant high-brightness LED billboards for outdoor advertising in Dubai's climate"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "LCD Displays",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "CCTV Monitors in Dubai",
                "description": "Professional-grade CCTV display monitors for security installations across Dubai and UAE"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Interactive Touch Displays Dubai",
                "description": "Touch-enabled LCD screens for interactive experiences in Dubai businesses and retail"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Educational Products",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Smart Boards in Dubai",
                "description": "Digital educational smart boards with touch interactivity for modern classrooms across Dubai"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Interactive Panels for Dubai Schools",
                "description": "Advanced interactive panels designed for educational institutions in Dubai and UAE"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Computer Peripherals",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Commercial Keyboards in Dubai",
                "description": "High-quality keyboards for business and professional use throughout Dubai"
              }
            }
          ]
        }
      ]
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LED Modules UAE | Smart Boards Dubai | Interactive Panels & Displays | UNV LED Modules", "description": "Leading LED module supplier in UAE. Buy premium LED modules Dubai, smart boards, interactive panels & CCTV monitors. High power LED module lights with fast delivery across UAE. Call +971 50 916 2488", "keywords": keywords, "sd": homepageSchema, "siteName": "Lovosis Display Dubai", "site": "https://unv-ledmodules.com", "image": {
    url: "/images/homepage-hero.jpg",
    alt: "Smart Boards and Interactive Panels in Dubai - Lovosis Display Solutions"
  }, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero-section" data-astro-cid-j7pv25f6> <h1 class="visually-hidden" data-astro-cid-j7pv25f6>Smart Boards and Interactive Panels in Dubai - Premium Display Solutions</h1> ${renderComponent($$result2, "Carousel", $$Carousel, { "data-astro-cid-j7pv25f6": true })} </section> <section id="featured-products" class="featured-section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>LED Modules UAE & Premium Display Solutions Dubai</h2> <p class="section-description" data-astro-cid-j7pv25f6>Discover our high-quality LED modules, LED module lights, Smart Boards, Interactive Panels, and CCTV Monitors available across Dubai and UAE with professional installation.</p> ${renderComponent($$result2, "NewProducts", $$NewProducts, { "data-astro-cid-j7pv25f6": true })} </div> </section> <section id="faqs" class="faq-section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>LED Modules UAE - Frequently Asked Questions</h2> <p class="section-description" data-astro-cid-j7pv25f6>Get answers about LED modules, LED module lights, smart boards, and display solutions available in Dubai and UAE.</p> ${renderComponent($$result2, "FAQS", $$FAQS, { "data-astro-cid-j7pv25f6": true })} </div> </section> <section id="news" class="news-section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "NewsAndEvents", $$NewsAndEvents, { "data-astro-cid-j7pv25f6": true })} </div> </section> <section id="partners" class="partners-section" data-astro-cid-j7pv25f6> <div class="container" data-astro-cid-j7pv25f6> <h2 class="section-title" data-astro-cid-j7pv25f6>Our Partners in Dubai</h2> <p class="section-description" data-astro-cid-j7pv25f6>Working with Dubai's top businesses and educational institutions</p> ${renderComponent($$result2, "LogoCloud", $$LogoCloud, { "data-astro-cid-j7pv25f6": true })} </div> </section> ` })} `;
}, "C:/Users/USER/Desktop/display-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/USER/Desktop/display-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
