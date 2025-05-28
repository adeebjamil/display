import { c as createComponent, m as maybeRenderHead, b as addAttribute, d as renderScript, r as renderComponent, F as Fragment, a as renderTemplate, e as createAstro, s as spreadAttributes, u as unescapeHTML, f as renderSlot, g as renderHead } from './astro/server_Xa69k-w6.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const logo = new Proxy({"src":"/_astro/logo (1).CiBfglF4.svg","width":57,"height":34,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USER/Desktop/display-main/public/logo (1).svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/USER/Desktop/display-main/public/logo (1).svg");
							return target[name];
						}
					});

const img1 = new Proxy({"src":"/_astro/img1.yBisbiUl.jpg","width":2000,"height":2000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USER/Desktop/display-main/public/Navbar/img1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/USER/Desktop/display-main/public/Navbar/img1.jpg");
							return target[name];
						}
					});

const img2 = new Proxy({"src":"/_astro/img2.z1qi36dT.jpg","width":7373,"height":4147,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USER/Desktop/display-main/public/Navbar/img2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/USER/Desktop/display-main/public/Navbar/img2.jpg");
							return target[name];
						}
					});

const img3 = new Proxy({"src":"/_astro/img3.By5AbDkM.jpg","width":3000,"height":2000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USER/Desktop/display-main/public/Navbar/img3.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/USER/Desktop/display-main/public/Navbar/img3.jpg");
							return target[name];
						}
					});

const img4 = new Proxy({"src":"/_astro/img4.DD4i-xhe.jpg","width":626,"height":355,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/USER/Desktop/display-main/public/Navbar/img4.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/USER/Desktop/display-main/public/Navbar/img4.jpg");
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 shadow-lg" data-astro-cid-5blmo7yk> <!-- Top accent bar with gradient --> <div class="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" data-astro-cid-5blmo7yk></div> <!-- Main navbar with glass effect --> <div class="glass dark:glass-dark" data-astro-cid-5blmo7yk> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-5blmo7yk> <div class="flex justify-between items-center h-16" data-astro-cid-5blmo7yk> <!-- Logo with subtle animation --> <a href="/" class="flex items-center group" data-astro-cid-5blmo7yk> <div class="relative overflow-hidden rounded-full" data-astro-cid-5blmo7yk> <img${addAttribute(logo.src, "src")} alt="Company Logo" class="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform duration-300" data-astro-cid-5blmo7yk> <div class="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-5blmo7yk></div> </div> </a> <!-- Mobile menu button - improved tap target --> <button id="mobile-menu-button" aria-label="Open menu" aria-expanded="false" class="lg:hidden p-3 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500" data-astro-cid-5blmo7yk> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" data-astro-cid-5blmo7yk></path> </svg> </button> <!-- Desktop Navigation --> <div class="hidden lg:flex lg:items-center" data-astro-cid-5blmo7yk> <div class="flex items-center space-x-1" data-astro-cid-5blmo7yk> <!-- Products Dropdown --> <div class="relative group menu-item" data-astro-cid-5blmo7yk> <button class="flex items-center px-4 py-2 text-lg text-gray-700 dark:text-gray-200 font-medium rounded-full group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk>Products</span> <svg class="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-5blmo7yk></path> </svg> </button> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-blue-600 transition-all duration-300 menu-indicator rounded-full" data-astro-cid-5blmo7yk></div> <!-- Products Dropdown Menu --> <div class="absolute left-0 mt-3 w-80 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-3 z-50" data-astro-cid-5blmo7yk> <div class="bg-white dark:bg-gray-900 shadow-xl rounded-xl ring-1 ring-gray-200 dark:ring-gray-800" data-astro-cid-5blmo7yk> <div class="relative" data-astro-cid-5blmo7yk> <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" data-astro-cid-5blmo7yk></div> <div class="pt-4" data-astro-cid-5blmo7yk> <img${addAttribute(img1.src, "src")} alt="Products" class="w-full h-40 object-contain" data-astro-cid-5blmo7yk> <div class="px-4 py-5 space-y-3" data-astro-cid-5blmo7yk> <a href="/Products/interactive-display" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Interactive Display</a> <a href="/Products/led-display" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>LED Display</a> <a href="/Products/lcd-video" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>LCD Video</a> <a href="/Products/wall-controller" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Wall Controller</a> <a href="/Products/monitors-video" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Monitors Video</a> <a href="/Products/conferencing-products" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Conferencing Products</a> <a href="/Products/Overview" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Overview</a> </div> </div> </div> </div> </div> </div> <!-- Solutions Dropdown --> <div class="relative group menu-item" data-astro-cid-5blmo7yk> <button class="flex items-center px-4 py-2 text-lg text-gray-700 dark:text-gray-200 font-medium rounded-full group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk>Solutions</span> <svg class="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-5blmo7yk></path> </svg> </button> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-blue-600 transition-all duration-300 menu-indicator rounded-full" data-astro-cid-5blmo7yk></div> <!-- Solutions Dropdown Menu --> <div class="absolute left-0 mt-3 w-80 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-3 z-50" data-astro-cid-5blmo7yk> <div class="bg-white dark:bg-gray-900 shadow-xl rounded-xl ring-1 ring-gray-200 dark:ring-gray-800" data-astro-cid-5blmo7yk> <div class="relative" data-astro-cid-5blmo7yk> <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500" data-astro-cid-5blmo7yk></div> <div class="pt-4" data-astro-cid-5blmo7yk> <img${addAttribute(img2.src, "src")} alt="Solutions" class="w-full h-40 object-cover" data-astro-cid-5blmo7yk> <div class="px-4 py-5 space-y-3" data-astro-cid-5blmo7yk> <a href="/solutions/retail" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Retail</a> <a href="/solutions/corporate" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Corporate</a> <a href="/solutions/education" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Education</a> <a href="/solutions/control-room" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Control Room</a> <a href="/solutions/dooh-airport" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>DOOH Airport</a> </div> </div> </div> </div> </div> </div> <!-- Support Dropdown --> <div class="relative group menu-item" data-astro-cid-5blmo7yk> <button class="flex items-center px-4 py-2 text-lg text-gray-700 dark:text-gray-200 font-medium rounded-full group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk>Support</span> <svg class="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-5blmo7yk></path> </svg> </button> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-blue-600 transition-all duration-300 menu-indicator rounded-full" data-astro-cid-5blmo7yk></div> <!-- Support Dropdown Menu --> <div class="absolute left-0 mt-3 w-80 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-3 z-50" data-astro-cid-5blmo7yk> <div class="bg-white dark:bg-gray-900 shadow-xl rounded-xl ring-1 ring-gray-200 dark:ring-gray-800" data-astro-cid-5blmo7yk> <div class="relative" data-astro-cid-5blmo7yk> <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500" data-astro-cid-5blmo7yk></div> <div class="pt-4" data-astro-cid-5blmo7yk> <img${addAttribute(img3.src, "src")} alt="Support" class="w-full h-40 object-cover" data-astro-cid-5blmo7yk> <div class="px-4 py-5 space-y-3" data-astro-cid-5blmo7yk> <a href="/support/download-center" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Download Center</a> <a href="/support/how-to" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>How To</a> </div> </div> </div> </div> </div> </div> <!-- Company Dropdown --> <div class="relative group menu-item" data-astro-cid-5blmo7yk> <button class="flex items-center px-4 py-2 text-lg text-gray-700 dark:text-gray-200 font-medium rounded-full group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk>Company</span> <svg class="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-5blmo7yk></path> </svg> </button> <div class="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-blue-600 transition-all duration-300 menu-indicator rounded-full" data-astro-cid-5blmo7yk></div> <!-- Company Dropdown Menu --> <div class="absolute left-0 mt-3 w-80 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-3 z-50" data-astro-cid-5blmo7yk> <div class="bg-white dark:bg-gray-900 shadow-xl rounded-xl ring-1 ring-gray-200 dark:ring-gray-800" data-astro-cid-5blmo7yk> <div class="relative" data-astro-cid-5blmo7yk> <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500" data-astro-cid-5blmo7yk></div> <div class="pt-4" data-astro-cid-5blmo7yk> <img${addAttribute(img4.src, "src")} alt="Company" class="w-full h-40 object-cover" data-astro-cid-5blmo7yk> <div class="px-4 py-5 space-y-3" data-astro-cid-5blmo7yk> <a href="/company/about-us" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>About Us</a> <a href="/company/contact-us" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Contact Us</a> <a href="/company/partners" class="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:translate-x-1 transition-all" data-astro-cid-5blmo7yk>Partners</a> </div> </div> </div> </div> </div> </div> <!-- Contact Us Button --> <a href="/company/contact-us" class="ml-4 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-indigo-500/20 hover:scale-105 transition-all duration-300" data-astro-cid-5blmo7yk>
Get in Touch
</a> </div> </div> </div> </div> </div> <!-- Mobile Menu Overlay --> <div id="mobile-menu-overlay" class="fixed inset-0 bg-black bg-opacity-50 z-40 opacity-0 pointer-events-none transition-opacity duration-300 lg:hidden backdrop-blur-sm" data-astro-cid-5blmo7yk></div> <!-- Mobile Menu Panel with improved styling for mobile --> <div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu" class="fixed top-0 right-0 w-[90%] sm:w-[85%] max-w-sm h-full bg-white dark:bg-gray-900 z-50 transform translate-x-full transition-all duration-300 ease-in-out lg:hidden overflow-hidden shadow-2xl" data-astro-cid-5blmo7yk> <div class="h-full overflow-y-auto pb-24" data-astro-cid-5blmo7yk> <!-- Mobile Menu Header with gradient --> <div class="bg-gradient-to-r from-blue-600 to-indigo-800 p-4 sm:p-5 sticky top-0 z-10" data-astro-cid-5blmo7yk> <div class="flex justify-between items-center" data-astro-cid-5blmo7yk> <img${addAttribute(logo.src, "src")} alt="Company Logo" class="h-8 sm:h-10 w-auto" data-astro-cid-5blmo7yk> <button id="close-mobile-menu" aria-label="Close menu" class="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50" data-astro-cid-5blmo7yk> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-5blmo7yk></path> </svg> </button> </div> </div> <!-- Mobile Menu Content with improved styling for touch targets --> <div class="p-4 sm:p-5 space-y-3 sm:space-y-5" data-astro-cid-5blmo7yk> ${["products", "solutions", "support", "company"].map((section) => renderTemplate`<div class="mb-4" data-astro-cid-5blmo7yk> <button${addAttribute(`mobile-${section}-button`, "id")} aria-expanded="false" class="flex items-center justify-between w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200" data-astro-cid-5blmo7yk> <span class="text-base sm:text-lg font-semibold capitalize text-gray-800 dark:text-gray-200" data-astro-cid-5blmo7yk> ${section} </span> <svg class="w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-5blmo7yk></path> </svg> </button> <div${addAttribute(`mobile-${section}-menu`, "id")} class="hidden mt-2" data-astro-cid-5blmo7yk> <div class="ml-3 sm:ml-4 p-3 sm:p-4 space-y-3 border-l-2 border-blue-500" data-astro-cid-5blmo7yk> ${section === "products" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` <a href="/Products/interactive-display" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-blue-500 rounded-full" data-astro-cid-5blmo7yk></span>
Interactive Display
</span> </a> <a href="/Products/led-display" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-blue-500 rounded-full" data-astro-cid-5blmo7yk></span>
LED Display
</span> </a> <a href="/Products/lcd-video" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-blue-500 rounded-full" data-astro-cid-5blmo7yk></span>
LCD Video
</span> </a> <a href="/Products/wall-controller" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-blue-500 rounded-full" data-astro-cid-5blmo7yk></span>
Wall Controller
</span> </a> <a href="/Products/monitors-video" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-blue-500 rounded-full" data-astro-cid-5blmo7yk></span>
Monitors Video
</span> </a> <a href="/Products/conferencing-products" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-blue-500 rounded-full" data-astro-cid-5blmo7yk></span>
Conferencing Products
</span> </a> <a href="/Products/Overview" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-blue-500 rounded-full" data-astro-cid-5blmo7yk></span>
Overview
</span> </a> ` })}`} ${section === "solutions" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` <a href="/solutions/retail" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-green-500 rounded-full" data-astro-cid-5blmo7yk></span>
Retail
</span> </a> <a href="/solutions/corporate" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-green-500 rounded-full" data-astro-cid-5blmo7yk></span>
Corporate
</span> </a> <a href="/solutions/education" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-green-500 rounded-full" data-astro-cid-5blmo7yk></span>
Education
</span> </a> <a href="/solutions/control-room" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-green-500 rounded-full" data-astro-cid-5blmo7yk></span>
Control Room
</span> </a> <a href="/solutions/dooh-airport" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-green-500 rounded-full" data-astro-cid-5blmo7yk></span>
DOOH Airport
</span> </a> ` })}`} ${section === "support" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` <a href="/support/download-center" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-purple-500 rounded-full" data-astro-cid-5blmo7yk></span>
Download Center
</span> </a> <a href="/support/how-to" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-purple-500 rounded-full" data-astro-cid-5blmo7yk></span>
How To
</span> </a> ` })}`} ${section === "company" && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` <a href="/company/about-us" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-orange-500 rounded-full" data-astro-cid-5blmo7yk></span>
About Us
</span> </a> <a href="/company/contact-us" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-orange-500 rounded-full" data-astro-cid-5blmo7yk></span>
Contact Us
</span> </a> <a href="/company/partners" class="block py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" data-astro-cid-5blmo7yk> <span class="flex items-center gap-2" data-astro-cid-5blmo7yk> <span class="w-2 h-2 bg-orange-500 rounded-full" data-astro-cid-5blmo7yk></span>
Partners
</span> </a> ` })}`} </div> </div> </div>`)} </div> <!-- Quick Actions with improved styling for mobile --> <div class="fixed bottom-0 left-0 right-0 p-4 sm:p-5 bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] safe-bottom" data-astro-cid-5blmo7yk> <div class="grid grid-cols-2 gap-4" data-astro-cid-5blmo7yk> <a href="/company/contact-us" class="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all" data-astro-cid-5blmo7yk> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-5blmo7yk></path> </svg>
Contact Us
</a> <a href="/company/about-us" class="flex items-center justify-center gap-2 p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all" data-astro-cid-5blmo7yk> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-5blmo7yk></path> </svg>
About Us
</a> </div> </div> </div> </div> </nav> ${renderScript($$result, "C:/Users/USER/Desktop/display-main/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/display-main/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gradient-to-b from-purple-400 to-blue-500" data-astro-cid-sz7xmlte> <!-- Newsletter Section --> <div class="max-w-7xl mx-auto px-4 pt-10 sm:pt-16 pb-6 sm:pb-8" data-astro-cid-sz7xmlte> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 border-b border-gray-700 pb-8 sm:pb-12" data-astro-cid-sz7xmlte> <div class="space-y-3 sm:space-y-4" data-astro-cid-sz7xmlte> <h3 class="text-xl sm:text-2xl font-bold text-black" data-astro-cid-sz7xmlte>Newsletter</h3> <p class="text-gray-800 font-medium text-sm sm:text-base" data-astro-cid-sz7xmlte>Enter your email address to receive the latest news & products information</p> <form class="flex flex-col sm:flex-row gap-2" data-astro-cid-sz7xmlte> <input type="email" placeholder="Enter your email" class="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white" data-astro-cid-sz7xmlte> <button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors sm:flex-shrink-0" data-astro-cid-sz7xmlte>
Submit
</button> </form> </div> </div> <!-- Main Footer Links - Collapsible on mobile --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8 mb-8 sm:mb-12" data-astro-cid-sz7xmlte> <!-- Products Column --> <div class="border-b md:border-b-0 border-gray-700 md:border-0" data-astro-cid-sz7xmlte> <details class="group md:open" open data-astro-cid-sz7xmlte> <summary class="list-none flex justify-between items-center cursor-pointer py-2 md:cursor-default" data-astro-cid-sz7xmlte> <h4 class="text-lg font-bold text-black" data-astro-cid-sz7xmlte>Products</h4> <svg class="w-5 h-5 md:hidden transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-sz7xmlte></path> </svg> </summary> <ul class="space-y-2 pb-4 md:pt-4" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/Products/interactive-display" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Interactive Display</a></li> <li data-astro-cid-sz7xmlte><a href="/Products/led-display" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>LED Display</a></li> <li data-astro-cid-sz7xmlte><a href="/Products/lcd-video" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>LCD Video Wall</a></li> <li data-astro-cid-sz7xmlte><a href="/Products/wall-controller" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Controller</a></li> <li data-astro-cid-sz7xmlte><a href="/Products/monitors-video" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Monitors</a></li> <li data-astro-cid-sz7xmlte><a href="/Products/conferencing-products" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Video Conferencing Products</a></li> <li data-astro-cid-sz7xmlte><a href="/Products/Overview" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Special</a></li> </ul> </details> </div> <!-- Solutions Column --> <div class="border-b md:border-b-0 border-gray-700 md:border-0" data-astro-cid-sz7xmlte> <details class="group md:open" open data-astro-cid-sz7xmlte> <summary class="list-none flex justify-between items-center cursor-pointer py-2 md:cursor-default" data-astro-cid-sz7xmlte> <h4 class="text-lg font-bold text-black" data-astro-cid-sz7xmlte>Solutions</h4> <svg class="w-5 h-5 md:hidden transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-sz7xmlte></path> </svg> </summary> <ul class="space-y-2 pb-4 md:pt-4" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/solutions/retail" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Retail</a></li> <li data-astro-cid-sz7xmlte><a href="/solutions/corporate" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Corporate</a></li> <li data-astro-cid-sz7xmlte><a href="/solutions/education" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Education</a></li> <li data-astro-cid-sz7xmlte><a href="/solutions/control-room" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Control Room</a></li> <li data-astro-cid-sz7xmlte><a href="/solutions/dooh-airport" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>DOOH Airport</a></li> <li data-astro-cid-sz7xmlte><a href="/solutions/video-conferencing" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Video Conferencing</a></li> </ul> </details> </div> <!-- Support Column --> <div class="border-b md:border-b-0 border-gray-700 md:border-0" data-astro-cid-sz7xmlte> <details class="group md:open" open data-astro-cid-sz7xmlte> <summary class="list-none flex justify-between items-center cursor-pointer py-2 md:cursor-default" data-astro-cid-sz7xmlte> <h4 class="text-lg font-bold text-black" data-astro-cid-sz7xmlte>Support</h4> <svg class="w-5 h-5 md:hidden transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-sz7xmlte></path> </svg> </summary> <ul class="space-y-2 pb-4 md:pt-4" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/support/download-center" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Download Center</a></li> <li data-astro-cid-sz7xmlte><a href="/support/how-to" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>How To</a></li> </ul> </details> </div> <!-- Company Column --> <div class="border-b md:border-b-0 border-gray-700 md:border-0" data-astro-cid-sz7xmlte> <details class="group md:open" open data-astro-cid-sz7xmlte> <summary class="list-none flex justify-between items-center cursor-pointer py-2 md:cursor-default" data-astro-cid-sz7xmlte> <h4 class="text-lg font-bold text-black" data-astro-cid-sz7xmlte>Company</h4> <svg class="w-5 h-5 md:hidden transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-sz7xmlte></path> </svg> </summary> <ul class="space-y-2 pb-4 md:pt-4" data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="/company/about-us" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>About us</a></li> <li data-astro-cid-sz7xmlte><a href="/company/contact-us" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Contact us</a></li> <li data-astro-cid-sz7xmlte><a href="/company/partners" class="text-gray-800 font-medium hover:text-blue-700 transition-colors block pl-2 md:pl-0" data-astro-cid-sz7xmlte>Partner</a></li> </ul> </details> </div> </div> <!-- Social Links & Copyright --> <div class="border-t border-gray-700 pt-6 sm:pt-8" data-astro-cid-sz7xmlte> <div class="flex flex-col md:flex-row justify-between items-center gap-4" data-astro-cid-sz7xmlte> <!-- Social Media Icons - Scrollable on small screens --> <div class="flex space-x-4 sm:space-x-8 overflow-x-auto w-full justify-center md:justify-start pb-2 no-scrollbar" data-astro-cid-sz7xmlte> <!-- Facebook --> <a href="#" class="text-gray-800 hover:text-blue-600 transition-colors flex-shrink-0" data-astro-cid-sz7xmlte> <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" data-astro-cid-sz7xmlte></path> </svg> </a> <!-- Twitter --> <a href="#" class="text-gray-800 hover:text-blue-400 transition-colors flex-shrink-0" data-astro-cid-sz7xmlte> <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" data-astro-cid-sz7xmlte></path> </svg> </a> <!-- Instagram --> <a href="#" class="text-gray-800 hover:text-pink-600 transition-colors flex-shrink-0" data-astro-cid-sz7xmlte> <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" data-astro-cid-sz7xmlte></path> </svg> </a> <!-- LinkedIn --> <a href="#" class="text-gray-800 hover:text-blue-700 transition-colors flex-shrink-0" data-astro-cid-sz7xmlte> <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-sz7xmlte></path> </svg> </a> <!-- Gmail --> <a href="mailto:your-email@example.com" class="text-gray-800 hover:text-red-600 transition-colors flex-shrink-0" data-astro-cid-sz7xmlte> <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" data-astro-cid-sz7xmlte></path> </svg> </a> <!-- Message/Chat --> <a href="#" class="text-gray-800 hover:text-green-600 transition-colors flex-shrink-0" data-astro-cid-sz7xmlte> <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-sz7xmlte> <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" data-astro-cid-sz7xmlte></path> </svg> </a> </div> <div class="text-center mt-2 md:mt-0" data-astro-cid-sz7xmlte> <p class="text-gray-800 font-medium text-xs sm:text-sm" data-astro-cid-sz7xmlte>Copyright 2011-2022 Zhejiang Uniview Technologies Co.,Ltd. All rights reserved.</p> <div class="flex justify-center space-x-2 sm:space-x-4 mt-2" data-astro-cid-sz7xmlte> <a href="/privacy-policy" class="text-gray-800 hover:text-blue-700 text-xs sm:text-sm" data-astro-cid-sz7xmlte>Privacy Policy</a> <span class="text-gray-800" data-astro-cid-sz7xmlte>|</span> <a href="/cookie-policy" class="text-gray-800 hover:text-blue-700 text-xs sm:text-sm" data-astro-cid-sz7xmlte>Cookie Policy</a> </div> </div> </div> <div class="text-center mt-4 text-sm text-gray-600" data-astro-cid-sz7xmlte> <a href="/sitemap" class="hover:text-blue-700 transition-colors" data-astro-cid-sz7xmlte>Sitemap</a> </div> </div> </div> </footer> `;
}, "C:/Users/USER/Desktop/display-main/src/components/Footer.astro", void 0);

const $$Astro$8 = createAstro("https://unv-ledmodules.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "C:/Users/USER/Desktop/display-main/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$7 = createAstro("https://unv-ledmodules.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "C:/Users/USER/Desktop/display-main/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$6 = createAstro("https://unv-ledmodules.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "C:/Users/USER/Desktop/display-main/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$5 = createAstro("https://unv-ledmodules.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "C:/Users/USER/Desktop/display-main/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$4 = createAstro("https://unv-ledmodules.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "C:/Users/USER/Desktop/display-main/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$3 = createAstro("https://unv-ledmodules.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "C:/Users/USER/Desktop/display-main/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$2 = createAstro("https://unv-ledmodules.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "C:/Users/USER/Desktop/display-main/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$1 = createAstro("https://unv-ledmodules.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "C:/Users/USER/Desktop/display-main/node_modules/astro-seo/src/SEO.astro", void 0);

const $$LoadingBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed top-0 left-0 w-full z-[9999]"> <!-- Linear Progress Bar --> <div class="relative h-1 bg-gray-200 dark:bg-gray-700"> <div id="progress-bar" class="h-full bg-gradient-to-r from-blue-600 to-blue-800 transform scale-x-0 origin-left transition-transform duration-300"></div> </div> <!-- Circular Progress Indicator --> <div id="loading-indicator" class="fixed right-4 top-20 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg transform translate-y-[-20px] opacity-0"> <div class="relative w-10 h-10"> <svg class="w-full h-full transform -rotate-90"> <circle cx="20" cy="20" r="16" stroke-width="3" stroke="currentColor" fill="none" class="text-gray-200 dark:text-gray-700"></circle> <circle id="progress-circle" cx="20" cy="20" r="16" stroke-width="3" stroke="currentColor" fill="none" stroke-dasharray="100.53" stroke-dashoffset="100.53" class="text-blue-600 dark:text-blue-400" stroke-linecap="round"></circle> </svg> <div class="absolute inset-0 flex items-center justify-center"> <span id="progress-text" class="text-xs font-bold text-gray-900 dark:text-white">0%</span> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/USER/Desktop/display-main/src/components/LoadingBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/USER/Desktop/display-main/src/components/LoadingBar.astro", void 0);

const $$EquiryButton = createComponent(($$result, $$props, $$slots) => {
  const contactInfo = {
    email: "sales@lovosis.com",
    whatsapp: "971509162488",
    // Format for WhatsApp API
    // Add greeting message
    whatsappGreeting: "Hello! \u{1F44B} Thank you for contacting UNV Display Solutions. How can we assist you today?"
  };
  return renderTemplate`${maybeRenderHead()}<div class="fixed bottom-8 left-8 z-50" data-astro-cid-k76fdk7f> <!-- Main Button --> <div class="relative group" data-astro-cid-k76fdk7f> <button id="enquiryBtn" class="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50" data-astro-cid-k76fdk7f> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-k76fdk7f> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" data-astro-cid-k76fdk7f></path> </svg> </button> <!-- Options Menu --> <div id="optionsMenu" class="absolute bottom-full left-0 mb-4 transform scale-0 opacity-0 transition-all duration-300 origin-bottom-left" data-astro-cid-k76fdk7f> <div class="flex flex-col gap-3 items-end" data-astro-cid-k76fdk7f> <!-- Email Option --> <a${addAttribute(`mailto:${contactInfo.email}`, "href")} class="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl group" data-astro-cid-k76fdk7f> <span class="text-gray-700 font-medium" data-astro-cid-k76fdk7f>Email Us</span> <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center" data-astro-cid-k76fdk7f> <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-k76fdk7f> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-k76fdk7f></path> </svg> </div> </a> <!-- WhatsApp Option --> <a${addAttribute(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(contactInfo.whatsappGreeting)}`, "href")} target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl" data-astro-cid-k76fdk7f> <span class="text-gray-700 font-medium" data-astro-cid-k76fdk7f>WhatsApp</span> <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center" data-astro-cid-k76fdk7f> <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-k76fdk7f> <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" data-astro-cid-k76fdk7f></path> </svg> </div> </a> </div> </div> </div> </div> ${renderScript($$result, "C:/Users/USER/Desktop/display-main/src/components/EquiryButton.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/USER/Desktop/display-main/src/components/EquiryButton.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$NewsletterPopUp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<div id="newsletter-popup" class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none opacity-0" aria-modal="true" role="dialog" aria-labelledby="newsletter-title"> <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300" id="popup-backdrop"></div> <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 transform translate-y-8 opacity-0 transition-all duration-500" id="popup-content"> <!-- Close button --> <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" id="close-popup" aria-label="Close popup"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Content --> <div class="text-center mb-6"> <h2 id="newsletter-title" class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
Join Our Newsletter
</h2> <p class="text-gray-600 dark:text-gray-300">
Stay updated with the latest display technology news and exclusive offers
</p> </div> <!-- Form --> <form id="newsletter-form" class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Name
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Your name"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Email
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="your@email.com"> </div> <button type="submit" id="submit-btn" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center">
Subscribe
</button> </form> <p class="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
By subscribing, you agree to our privacy policy and consent to receive updates from our company.
</p> </div> </div> <!-- Original form template to use when resetting the form --> <template id="newsletter-form-template"> <form id="newsletter-form" class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Name
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Your name"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Email
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="your@email.com"> </div> <button type="submit" id="submit-btn" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center">
Subscribe
</button> </form> </template> <!-- EmailJS SDK --> <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"><\/script> <script>
  document.addEventListener('DOMContentLoaded', () => {
    // Only show on index/home page
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
      return;
    }
    
    // Initialize EmailJS with your public key
    try {
      emailjs.init("DHGhwlwVcSClBJ_ZC");
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
    }
    
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem('newsletterPopupShown');
    
    if (!hasSeenPopup) {
      const popup = document.getElementById('newsletter-popup');
      const popupContent = document.getElementById('popup-content');
      const closeButton = document.getElementById('close-popup');
      const popupBackdrop = document.getElementById('popup-backdrop');
      const newsletterForm = document.getElementById('newsletter-form');
      const formTemplate = document.getElementById('newsletter-form-template');
      const submitButton = document.getElementById('submit-btn');
      
      // Show popup after 3 seconds
      const popupTimer = setTimeout(() => {
        // First make the container visible with pointer events
        popup.classList.remove('opacity-0');
        popup.classList.add('opacity-100');
        popup.classList.remove('pointer-events-none');
        
        // Then animate in the backdrop and content
        setTimeout(() => {
          popupBackdrop.classList.add('opacity-100');
          popupContent.classList.remove('opacity-0', 'translate-y-8');
        }, 50);
        
        // Set flag in localStorage
        localStorage.setItem('newsletterPopupShown', 'true');
      }, 3000); // 3 seconds
      
      // Close popup function
      const closePopup = () => {
        popupBackdrop.classList.remove('opacity-100');
        popupContent.classList.add('opacity-0', 'translate-y-8');
        
        setTimeout(() => {
          popup.classList.add('opacity-0');
          popup.classList.add('pointer-events-none');
        }, 300);
      };
      
      // Close button event
      closeButton.addEventListener('click', closePopup);
      
      // Close when clicking backdrop
      popupBackdrop.addEventListener('click', closePopup);
      
      // Form submission handler
      function handleFormSubmission(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        
        if (!nameInput || !emailInput) {
          console.error('Form inputs not found');
          return;
        }
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        
        // Validate inputs
        if (!name || !email) {
          alert('Please fill in all fields');
          return;
        }
        
        // Show loading state
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = \`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Subscribing...
          \`;
        }
        
        // KEY FIX: Changed parameter names to use "to" which is likely what EmailJS expects
        // For user email template - this sends thank you to the user
        const userParams = {
          to: email,  // CHANGED: Using "to" instead of "to_email" or "email"
          to_name: name,
          from_name: "Lovosis Display",
          reply_to: "info@lovosisdisplay.com",
          subject: "Welcome to Lovosis Display Newsletter",
          message: "Thank you for subscribing to our newsletter."
        };

        // For admin notification template - this sends user info to admin
        const adminParams = {
          to: "adeebjamil0707@gmail.com",  // CHANGED: Using "to" instead of other variations
          from_name: "Newsletter Subscription",
          user_name: name,      
          user_email: email,    
          subject: "New Newsletter Subscription",
          message: \`\${name} (\${email}) has subscribed to the Lovosis Display newsletter.\`,
          reply_to: email
        };
        
        console.log('Trying to send admin notification with params:', adminParams);
        
        // First send only the admin notification as that's most important
        emailjs.send('service_gnaft8r', 'template_wjkc7le', adminParams)
          .then(function(response) {
            console.log('Admin notification SUCCESS!', response.status, response.text);
            
            // Then try to send user email
            return emailjs.send('service_gnaft8r', 'template_j1j4uaq', userParams);
          })
          .then(function(response) {
            console.log('User email also SUCCESS!', response.status, response.text);
            
            // Both emails sent successfully - show thank you message
            popupContent.innerHTML = \`
              <div class="text-center py-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                <p class="text-gray-600 dark:text-gray-300">You've been successfully subscribed to our newsletter.</p>
                <p class="text-gray-600 dark:text-gray-300 mt-2">Please check your inbox at <span class="font-semibold">\${email}</span> for your confirmation email.</p>
                <button 
                  class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                  id="close-thank-you"
                >
                  Close
                </button>
              </div>
            \`;
            
            document.getElementById('close-thank-you').addEventListener('click', closePopup);
          })
          .catch(function(error) {
            console.error('FAILED...', error);
            
            // Even if email failed, still save subscription data locally
            const savedSubscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
            savedSubscriptions.push({ name, email, date: new Date().toISOString() });
            localStorage.setItem('newsletter_subscriptions', JSON.stringify(savedSubscriptions));
            
            // Show error message with fallback success
            popupContent.innerHTML = \`
              <div class="text-center py-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                <p class="text-gray-600 dark:text-gray-300">Your subscription has been recorded.</p>
                <p class="text-xs text-gray-500 mt-2">Note: There was a small hiccup with our email system, but we've saved your information.</p>
                <button 
                  class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                  id="close-thank-you"
                >
                  Close
                </button>
              </div>
            \`;
            
            document.getElementById('close-thank-you').addEventListener('click', closePopup);
          });
        }
        
        // Initial form submission event listener
        if (newsletterForm) {
          newsletterForm.addEventListener('submit', handleFormSubmission);
        }
        
        // Close with Escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && !popup.classList.contains('pointer-events-none')) {
            closePopup();
          }
        });
      }
    });
<\/script>`], ["", `<div id="newsletter-popup" class="fixed inset-0 flex items-center justify-center z-50 pointer-events-none opacity-0" aria-modal="true" role="dialog" aria-labelledby="newsletter-title"> <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300" id="popup-backdrop"></div> <div class="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 transform translate-y-8 opacity-0 transition-all duration-500" id="popup-content"> <!-- Close button --> <button class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" id="close-popup" aria-label="Close popup"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <!-- Content --> <div class="text-center mb-6"> <h2 id="newsletter-title" class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
Join Our Newsletter
</h2> <p class="text-gray-600 dark:text-gray-300">
Stay updated with the latest display technology news and exclusive offers
</p> </div> <!-- Form --> <form id="newsletter-form" class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Name
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Your name"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Email
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="your@email.com"> </div> <button type="submit" id="submit-btn" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center">
Subscribe
</button> </form> <p class="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
By subscribing, you agree to our privacy policy and consent to receive updates from our company.
</p> </div> </div> <!-- Original form template to use when resetting the form --> <template id="newsletter-form-template"> <form id="newsletter-form" class="space-y-4"> <div> <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Name
</label> <input type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="Your name"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
Email
</label> <input type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white" placeholder="your@email.com"> </div> <button type="submit" id="submit-btn" class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center">
Subscribe
</button> </form> </template> <!-- EmailJS SDK --> <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"><\/script> <script>
  document.addEventListener('DOMContentLoaded', () => {
    // Only show on index/home page
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
      return;
    }
    
    // Initialize EmailJS with your public key
    try {
      emailjs.init("DHGhwlwVcSClBJ_ZC");
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
    }
    
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem('newsletterPopupShown');
    
    if (!hasSeenPopup) {
      const popup = document.getElementById('newsletter-popup');
      const popupContent = document.getElementById('popup-content');
      const closeButton = document.getElementById('close-popup');
      const popupBackdrop = document.getElementById('popup-backdrop');
      const newsletterForm = document.getElementById('newsletter-form');
      const formTemplate = document.getElementById('newsletter-form-template');
      const submitButton = document.getElementById('submit-btn');
      
      // Show popup after 3 seconds
      const popupTimer = setTimeout(() => {
        // First make the container visible with pointer events
        popup.classList.remove('opacity-0');
        popup.classList.add('opacity-100');
        popup.classList.remove('pointer-events-none');
        
        // Then animate in the backdrop and content
        setTimeout(() => {
          popupBackdrop.classList.add('opacity-100');
          popupContent.classList.remove('opacity-0', 'translate-y-8');
        }, 50);
        
        // Set flag in localStorage
        localStorage.setItem('newsletterPopupShown', 'true');
      }, 3000); // 3 seconds
      
      // Close popup function
      const closePopup = () => {
        popupBackdrop.classList.remove('opacity-100');
        popupContent.classList.add('opacity-0', 'translate-y-8');
        
        setTimeout(() => {
          popup.classList.add('opacity-0');
          popup.classList.add('pointer-events-none');
        }, 300);
      };
      
      // Close button event
      closeButton.addEventListener('click', closePopup);
      
      // Close when clicking backdrop
      popupBackdrop.addEventListener('click', closePopup);
      
      // Form submission handler
      function handleFormSubmission(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        
        if (!nameInput || !emailInput) {
          console.error('Form inputs not found');
          return;
        }
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        
        // Validate inputs
        if (!name || !email) {
          alert('Please fill in all fields');
          return;
        }
        
        // Show loading state
        const submitBtn = document.getElementById('submit-btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = \\\`
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Subscribing...
          \\\`;
        }
        
        // KEY FIX: Changed parameter names to use "to" which is likely what EmailJS expects
        // For user email template - this sends thank you to the user
        const userParams = {
          to: email,  // CHANGED: Using "to" instead of "to_email" or "email"
          to_name: name,
          from_name: "Lovosis Display",
          reply_to: "info@lovosisdisplay.com",
          subject: "Welcome to Lovosis Display Newsletter",
          message: "Thank you for subscribing to our newsletter."
        };

        // For admin notification template - this sends user info to admin
        const adminParams = {
          to: "adeebjamil0707@gmail.com",  // CHANGED: Using "to" instead of other variations
          from_name: "Newsletter Subscription",
          user_name: name,      
          user_email: email,    
          subject: "New Newsletter Subscription",
          message: \\\`\\\${name} (\\\${email}) has subscribed to the Lovosis Display newsletter.\\\`,
          reply_to: email
        };
        
        console.log('Trying to send admin notification with params:', adminParams);
        
        // First send only the admin notification as that's most important
        emailjs.send('service_gnaft8r', 'template_wjkc7le', adminParams)
          .then(function(response) {
            console.log('Admin notification SUCCESS!', response.status, response.text);
            
            // Then try to send user email
            return emailjs.send('service_gnaft8r', 'template_j1j4uaq', userParams);
          })
          .then(function(response) {
            console.log('User email also SUCCESS!', response.status, response.text);
            
            // Both emails sent successfully - show thank you message
            popupContent.innerHTML = \\\`
              <div class="text-center py-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                <p class="text-gray-600 dark:text-gray-300">You've been successfully subscribed to our newsletter.</p>
                <p class="text-gray-600 dark:text-gray-300 mt-2">Please check your inbox at <span class="font-semibold">\\\${email}</span> for your confirmation email.</p>
                <button 
                  class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                  id="close-thank-you"
                >
                  Close
                </button>
              </div>
            \\\`;
            
            document.getElementById('close-thank-you').addEventListener('click', closePopup);
          })
          .catch(function(error) {
            console.error('FAILED...', error);
            
            // Even if email failed, still save subscription data locally
            const savedSubscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
            savedSubscriptions.push({ name, email, date: new Date().toISOString() });
            localStorage.setItem('newsletter_subscriptions', JSON.stringify(savedSubscriptions));
            
            // Show error message with fallback success
            popupContent.innerHTML = \\\`
              <div class="text-center py-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-yellow-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Thank You!</h3>
                <p class="text-gray-600 dark:text-gray-300">Your subscription has been recorded.</p>
                <p class="text-xs text-gray-500 mt-2">Note: There was a small hiccup with our email system, but we've saved your information.</p>
                <button 
                  class="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                  id="close-thank-you"
                >
                  Close
                </button>
              </div>
            \\\`;
            
            document.getElementById('close-thank-you').addEventListener('click', closePopup);
          });
        }
        
        // Initial form submission event listener
        if (newsletterForm) {
          newsletterForm.addEventListener('submit', handleFormSubmission);
        }
        
        // Close with Escape key
        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && !popup.classList.contains('pointer-events-none')) {
            closePopup();
          }
        });
      }
    });
<\/script>`])), maybeRenderHead());
}, "C:/Users/USER/Desktop/display-main/src/components/NewsletterPop-up.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://unv-ledmodules.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    meta,
    lang = "en",
    siteName,
    publishedTime,
    description,
    site,
    sd,
    image,
    disableIndexing = false,
    type = "website"
  } = Astro2.props;
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://lovosisDisplay.com/#organization",
    "name": "Lovosis Display",
    "url": "https://lovosisDisplay.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lovosisDisplay.com/logo.png",
      "width": 600,
      "height": 180
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971 50 000 0000",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://facebook.com/LovosisDisplay",
      "https://twitter.com/LovosisDisplay",
      "https://linkedin.com/company/lovosis-display",
      "https://instagram.com/LovosisDisplay"
    ]
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://lovosisDisplay.com/#website",
    "url": "https://lovosisDisplay.com",
    "name": "Lovosis Display",
    "description": description || "Premium LED, LCD & Digital Signage Solutions",
    "publisher": {
      "@id": "https://lovosisDisplay.com/#organization"
    }
  };
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": Astro2.url.href,
    "url": Astro2.url.href,
    "name": title,
    "description": description,
    "isPartOf": {
      "@id": "https://lovosisDisplay.com/#website"
    },
    "about": {
      "@id": "https://lovosisDisplay.com/#organization"
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lovosisDisplay.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": Astro2.url.href
      }
    ]
  };
  let finalSchema;
  if (sd) {
    finalSchema = [defaultSchema, websiteSchema, sd];
  } else {
    finalSchema = [defaultSchema, websiteSchema, pageSchema, breadcrumbSchema];
  }
  return renderTemplate(_a || (_a = __template(["<html", '> <head><script type="application/ld+json">', "<\/script>", '<meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="keywords" content="LED display, LCD display, educational boards, digital billboards, commercial displays, interactive screens, outdoor LED billboards, indoor LED displays, touch screen displays, video walls, digital signage, display technology distributor"><meta name="robots" content="index, follow"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml" type="application/xml"><meta name="generator"', "><title>", "</title>", "</head> <body> ", " ", " ", " ", " <main> ", " </main> ", ' <footer> <p>Looking for more technology solutions? Visit our partner: <a href="https://lovosis.com" target="_blank">Lovosis Technology PVT LTD</a></p> </footer> </body></html>'])), addAttribute(lang, "lang"), unescapeHTML(JSON.stringify(finalSchema)), renderComponent($$result, "SEO", $$SEO, { "title": title ?? "Lovosis Display - Premium LED, LCD & Digital Signage Solutions", "description": description ?? "Lovosis Display - Leading distributor of high-quality LED displays, LCD screens, educational boards & digital billboards. Innovative display solutions for businesses & educational institutions.", "noindex": disableIndexing, "nofollow": disableIndexing, "openGraph": {
    basic: {
      title: title ?? "Lovosis Display - Commercial LED & LCD Display Solutions",
      type: "website",
      image: image?.url ?? "/default-image.jpg"
    },
    image: {
      width: 1200,
      height: 628,
      alt: image?.alt ?? "Premium Display Solutions - LED, LCD & Digital Signage"
    },
    optional: {
      siteName: siteName ?? "Lovosis Display",
      description: description ?? "Top quality LED displays, LCD screens, educational smart boards, and digital billboards from the leading display technology distributor in the region."
    },
    article: {
      publishedTime: publishedTime ?? (/* @__PURE__ */ new Date()).toISOString()
    }
  }, "twitter": {
    card: "summary_large_image",
    site: site ?? "https://lovosisDisplay.com",
    creator: "@LovosisDisplay",
    title: title ?? "Lovosis Display - Premium LED & LCD Solutions",
    description: description ?? "Discover our extensive range of LED displays, LCD screens, interactive educational boards & digital billboards. Superior quality, competitive prices & expert support.",
    image: image?.url ?? "/default-twitter-image.jpg",
    imageAlt: "Lovosis Display - Premium Display Technology"
  } }), addAttribute(Astro2.generator, "content"), title ?? "Lovosis Display - Premium LED & LCD Display Solutions | Educational Boards | Digital Billboards", renderHead(), renderComponent($$result, "LoadingBar", $$LoadingBar, {}), renderComponent($$result, "Navbar", $$Navbar, {}), renderComponent($$result, "EquiryButton", $$EquiryButton, {}), renderComponent($$result, "NewsletterPopUp", $$NewsletterPopUp, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/USER/Desktop/display-main/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
