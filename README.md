# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).














---
import Layout from '../../layouts/Layout.astro';
// SEO-optimized title and description targeting display technology keywords
const title = "Airport Digital Signage Solutions | LED Display Walls & LCD Screens | Digital Billboards"
const description = "Transform airport communication with high-brightness LED displays, LCD video walls, and digital billboard solutions. Professional DOOH technology for check-in areas, terminals, and gate information displays."

// Structured data for better search visibility
const sd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Airport Digital Signage Solutions",
  "description": "Professional LED displays, LCD screens, and digital billboard solutions designed specifically for airport environments",
  "brand": {
    "@type": "Brand",
    "name": "Lovosis Display",
    "logo": "https://www.lovosisdisplay.com/logo.png"
  },
  "category": "Digital Display Technology",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "image": "https://img.freepik.com/free-photo/modern-airport-terminal-with-digital-displays_53876-123995.jpg",
  "applicationCategory": "Airport Information Systems",
  "audience": {
    "@type": "Audience",
    "audienceType": "Airport Operators"
  },
  "isRelatedTo": [
    {
      "@type": "Product",
      "name": "LED Video Wall Display Systems",
      "description": "High-brightness LED display solutions for airport terminals and concourses"
    },
    {
      "@type": "Product",
      "name": "LCD Information Screens",
      "description": "Ultra-narrow bezel LCD display panels for flight information and wayfinding"
    },
    {
      "@type": "Product",
      "name": "Digital Billboard Systems",
      "description": "Large format digital advertising displays for airports"
    }
  ]
}


const features = [
  {
    title: "LCD Display Walls",
    description: "Ultra-thin bezels for seamless information delivery",
    image: "https://img.freepik.com/free-photo/digital-information-board-airport_53876-129456.jpg",
    specs: [
      { icon: "resolution", text: "4K Resolution" },
      { icon: "brightness", text: "1000+ nits Brightness" },
      { icon: "bezel", text: "0.88mm Ultra Narrow Bezel" }
    ],
    gradient: "from-blue-600 to-cyan-400"
  },
  {
    title: "LED Video Walls",
    description: "Fine pixel pitch for stunning visual impact",
    image: "https://img.freepik.com/free-photo/led-wall-display-airport-terminal_53876-125789.jpg",
    specs: [
      { icon: "pixel", text: "1.2mm Pixel Pitch" },
      { icon: "brightness", text: "6000 nits Brightness" },
      { icon: "contrast", text: "10000:1 Contrast Ratio" }
    ],
    gradient: "from-purple-600 to-pink-400"
  }
];

const locations = [
  {
    title: "Check-in Areas",
    description: "Flight information and wayfinding displays for seamless passenger flow",
    image: "https://img.freepik.com/free-photo/check-counter-with-digital-displays_53876-127834.jpg",
    stats: { displays: "50+", coverage: "100%" }
  },
  {
    title: "Terminal Concourse",
    description: "Large format LED walls for advertising and passenger engagement",
    image: "https://img.freepik.com/free-photo/airport-terminal-concourse-led-display_53876-124567.jpg",
    stats: { displays: "100+", engagement: "85%" }
  },
  {
    title: "Gate Areas",
    description: "Real-time flight information and targeted advertising displays",
    image: "https://img.freepik.com/free-photo/gate-information-display-airport_53876-126789.jpg",
    stats: { displays: "200+", accuracy: "99.9%" }
  }
];
---

<Layout title={title} description={description} sd={sd}>
  <main class="overflow-hidden bg-white">
    <!-- Hero Section -->
    <section class="relative h-[70vh] bg-white">
      <div class="h-full flex flex-col">
        {/* Header Image */}
        <div class="relative h-full">
          <img 
            src="https://img.freepik.com/free-photo/modern-airport-terminal-with-digital-displays_53876-123995.jpg" 
            alt="Airport Terminal with Digital Displays"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
          
          {/* Content Overlay */}
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center px-4">
              <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up">
                Revolutionize Airport
                <span class="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  Visual Communication
                </span>
              </h1>
              <p class="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 animate-fade-up animation-delay-200">
                Transform passenger experience with next-generation digital display solutions
              </p>
              <div class="flex flex-wrap justify-center gap-6 animate-fade-up animation-delay-400">
                <a href="#solutions" class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all">
                  Explore Solutions
                </a>
                <a href="#contact" class="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all">
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Display Solutions -->
    <section id="solutions" class="py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Display Solutions
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p class="text-xl text-gray-600">
            State-of-the-art display technology designed for airport environments
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          {features.map(feature => (
            <div class="group relative bg-gray-800 rounded-2xl p-1 overflow-hidden">
              <div class={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              <div class="relative p-8">
                <div class="aspect-video rounded-xl overflow-hidden mb-8">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p class="text-gray-400 mb-8">{feature.description}</p>
                <div class="grid grid-cols-3 gap-4">
                  {feature.specs.map(spec => (
                    <div class="flex items-center space-x-3 p-4 bg-gray-700/50 rounded-lg">
                      <span class="text-gray-300">{spec.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <!-- Implementation Showcase -->
    <section class="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Strategic Implementations
          </h2>
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p class="text-xl text-gray-400">
            Optimized display placement for maximum impact and efficiency
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          {locations.map(location => (
            <div class="group bg-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm">
              <div class="relative aspect-video">
                <img 
                  src={location.image} 
                  alt={location.title}
                  class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>
              <div class="p-8">
                <h3 class="text-xl font-bold text-white mb-4">{location.title}</h3>
                <p class="text-gray-400 mb-6">{location.description}</p>
                <div class="grid grid-cols-2 gap-4">
                  {Object.entries(location.stats).map(([key, value]) => (
                    <div class="text-center p-4 bg-gray-700/30 rounded-lg">
                      <div class="text-2xl font-bold text-white mb-1">{value}</div>
                      <div class="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      <div class="absolute inset-0 bg-[url('/patterns/circuit-board.svg')] opacity-10"></div>
      
      <div class="relative container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to Transform Your Airport?
        </h2>
        <p class="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Download our comprehensive product catalog or schedule a consultation with our experts
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <a 
            href="/catalogs/airport-dooh-solutions.pdf" 
            class="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center"
            download
          >
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download Catalog
          </a>
          <a 
            href="#contact" 
            class="px-8 py-4 bg-white/10 text-white rounded-full font-semibold backdrop-blur-sm hover:bg-white/20 transition-all flex items-center"
          >
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  </main>
</Layout>

<style>
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-up {
    animation: fadeUp 1s ease-out forwards;
  }

  .animation-delay-200 {
    animation-delay: 200ms;
  }

  .animation-delay-400 {
    animation-delay: 400ms;
  }

  /* Add smooth scrolling */
  html {
    scroll-behavior: smooth;
  }

  /* Optimize animations for reduced motion preference */
  @media (prefers-reduced-motion: reduce) {
    .animate-fade-up {
      animation: none;
      opacity: 1;
    }
  }
</style>








---
// No need for icon import now
---

<footer class="bg-gradient-to-b from-purple-400 to-blue-500">
  <!-- Newsletter Section -->
  <div class="max-w-7xl mx-auto px-4 pt-16 pb-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 border-b border-gray-700 pb-12">
      <div class="space-y-4">
        <h3 class="text-2xl font-bold text-black">Newsletter</h3>
        <p class="text-gray-800 font-medium">Enter your email address to receive the latest news & products information</p>
        <form class="flex gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Submit
          </button>
        </form>
      </div>
    </div>

    <!-- Main Footer Links -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <!-- Products Column -->
      <div class="space-y-4">
        <h4 class="text-lg font-bold text-black">Products</h4>
        <ul class="space-y-2">
          <li><a href="/Products/interactive-display" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Interactive Display</a></li>
          <li><a href="/Products/led-display" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">LED Display</a></li>
          <li><a href="/Products/lcd-video" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">LCD Video Wall</a></li>
          <li><a href="/Products/wall-controller" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Controller</a></li>
          <li><a href="/Products/monitors-video" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Monitors</a></li>
          <li><a href="/Products/conferencing-products" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Video Conferencing Products</a></li>
          <li><a href="/Products/Overview" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Special</a></li>
        </ul>
      </div>

      <!-- Solutions Column -->
      <div class="space-y-4">
        <h4 class="text-lg font-bold text-black">Solutions</h4>
        <ul class="space-y-2">
          <li><a href="/solutions/retail" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Retail</a></li>
          <li><a href="/solutions/corporate" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Corporate</a></li>
          <li><a href="/solutions/education" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Education</a></li>
          <li><a href="/solutions/control-room" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Control Room</a></li>
          <li><a href="/solutions/dooh-airport" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">DOOH Airport</a></li>
        </ul>
      </div>

      <!-- Support Column -->
      <div class="space-y-4">
        <h4 class="text-lg font-bold text-black">Support</h4>
        <ul class="space-y-2">
          <li><a href="/support/download-center" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Download Center</a></li>
        </ul>
      </div>

      <!-- Company Column -->
      <div class="space-y-4">
        <h4 class="text-lg font-bold text-black">Company</h4>
        <ul class="space-y-2">
          <li><a href="/company/about-us" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">About us</a></li>
          <li><a href="/company/contact-us" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Contact us</a></li>
          <li><a href="/company/partners" class="text-gray-800 font-medium hover:text-blue-700 transition-colors">Partner</a></li>
        </ul>
      </div>
    </div>

    <!-- Social Links & Copyright -->
    <div class="border-t border-gray-700 pt-8">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <!-- Social Media Icons -->
        <div class="flex space-x-8">
          <!-- Facebook -->
          <a href="#" class="text-gray-800 hover:text-blue-600 transition-colors">
            <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>

          <!-- Twitter -->
          <a href="#" class="text-gray-800 hover:text-blue-400 transition-colors">
            <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>

          <!-- Instagram -->
          <a href="#" class="text-gray-800 hover:text-pink-600 transition-colors">
            <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>

          <!-- LinkedIn -->
          <a href="#" class="text-gray-800 hover:text-blue-700 transition-colors">
            <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <!-- Gmail -->
          <a href="mailto:your-email@example.com" class="text-gray-800 hover:text-red-600 transition-colors">
            <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
            </svg>
          </a>

          <!-- Message/Chat -->
          <a href="#" class="text-gray-800 hover:text-green-600 transition-colors">
            <svg class="w-6 h-6 hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            </svg>
          </a>
        </div>

        <div class="text-center">
          <p class="text-gray-800 font-medium text-sm">Copyright 2011-2022 Zhejiang Uniview Technologies Co.,Ltd. All rights reserved.</p>
          <div class="flex justify-center space-x-4 mt-2">
            <a href="/privacy-policy" class="text-gray-800 hover:text-blue-700 text-sm">Privacy Policy</a>
            <span class="text-gray-800">|</span>
            <a href="/cookie-policy" class="text-gray-800 hover:text-blue-700 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

<style>
  footer a:hover {
    text-decoration: underline;
  }
</style>

























PoP-Up Modal Code.


<!-- Product Modal (SAVE FOR LATER USE) -->
<div id="productModal" class="fixed inset-0 bg-black/50 hidden z-50">
  <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl bg-white rounded-2xl shadow-2xl">
    <div class="relative p-8 max-h-[90vh] overflow-y-auto">
      <!-- Logo in top left -->
      <div class="absolute top-6 left-6">
        <img 
          src="/logo (1).svg" 
          alt="Lovosis Display Logo" 
          class="h-10 w-auto"
        />
      </div>
      
      <!-- Close Button -->
      <button class="close-modal absolute top-6 right-6 text-gray-500 hover:text-gray-700">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Modal Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        <div>
          <img id="modalImage" src="" alt="" class="w-full rounded-xl shadow-xl mb-6">
          
          <!-- Reviews Section -->
          <div class="bg-gray-50 rounded-xl p-6 mt-6">
            <div class="flex items-center justify-between mb-4">
              <h4 class="text-xl font-semibold text-gray-900">Customer Reviews</h4>
              <div class="flex items-center gap-1">
                <div class="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span class="text-lg font-bold text-gray-900">4.8</span>
                <span class="text-gray-600">(124 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div>
            <h3 id="modalTitle" class="text-4xl font-bold text-gray-900 mb-4"></h3>
            <p id="modalDescription" class="text-gray-600 text-lg mb-6"></p>
            
            <!-- Price with Badge -->
            <div class="mb-8">
              <div class="p-4 bg-blue-50 rounded-xl">
                <p class="text-gray-800 leading-relaxed">
                  <span class="font-semibold text-blue-600">Powerful collaboration tool</span> with advanced touch precision and 
                  intelligent interactive features for seamless professional engagement.
                </p>
              </div>
            </div>

            <!-- Features -->
            <div class="mb-8">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
              <div id="modalFeatures" class="space-y-3"></div>
            </div>

            <!-- Contact Options -->
            <div class="space-y-4">
              <h4 class="text-xl font-semibold text-gray-900 mb-4">Contact Us</h4>
              <div class="grid grid-cols-2 gap-4">
                <a href="tel:+918409528159" class="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span class="font-semibold">+91 8409528159</span>
                </a>
                <a href="https://wa.me/918409528159" target="_blank" class="flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z"/>
                  </svg>
                  <span class="font-semibold">WhatsApp</span>
                </a>
              </div>
              <a 
                href="mailto:adeebjamil0707@gmail.com" 
                class="w-full px-6 py-4 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="font-semibold">adeebjamil0707@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

















































































interactive-dislayy
---
import Layout from '../../layouts/Layout.astro';
// SEO-optimized title and description
const title = "Interactive LED & LCD Displays | Smart Educational Boards | Lovosis Display"
const description = "Premium interactive LED displays and LCD touchscreens for education and business. Experience smart educational boards with real-time collaboration, digital whiteboard capabilities, and seamless digital billboard integration from Lovosis Display."
const keywords = "interactive display, interactive LED display, interactive LCD display, smart educational board, digital whiteboard, digital billboard, Lovosis Display"
import InteractiveDisplaySchema from '../../components/Schema/InteractiveDisplaySchema.astro';

// Structured data for better SEO - UPDATED WITH REQUIRED FIELDS
const sd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Interactive Display Solutions by Lovosis Display",
  "description": "Collection of premium interactive LED displays, LCD touchscreens, and educational smart boards",
  "url": "https://lovosisDisplay.com/products/interactive-display/",
  "numberOfItems": 9,
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "U-E Series 65\" Interactive LED Display",
      "description": "Smart Interactive LED Display with 4K Resolution for classrooms and meeting rooms",
      "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "offers": {
        "@type": "Offer",
        "price": "4999.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "brand": {
        "@type": "Brand",
        "name": "Lovosis Display"
      }
    },
    {
      "@type": "Product",
      "position": 2,
      "name": "DeepHub 75\" Interactive Educational Board",
      "description": "Professional Collaboration Display with touch capabilities for educational institutions",
      "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800",
      "offers": {
        "@type": "Offer",
        "price": "5999.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "brand": {
        "@type": "Brand",
        "name": "Lovosis Display"
      }
    },
    {
      "@type": "Product",
      "position": 3,
      "name": "Interactive Panel 86\" Digital Billboard Solution",
      "description": "Enterprise Interactive Solution for large-format digital signage applications",
      "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      "offers": {
        "@type": "Offer",
        "price": "6999.00",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "brand": {
        "@type": "Brand",
        "name": "Lovosis Display"
      }
    }
  ]
}

const highlights = [
  {
    id: "01",
    title: "Collaboration in work",
    content: "TIn today's fast-paced business environment, collaboration plays a pivotal role in achieving organizational success. With the right tools, teams can work seamlessly across departments, boosting both productivity and innovation. Our company provides advanced LCD and LED displays, along with Education Smart Boards that allow real-time data sharing and enhanced visualization, making team collaboration more engaging and effective.Interactive Smart Boards revolutionize team meetings by providing shared digital spaces where ideas can be mapped out and edited in real-time. Whether it’s a business billboard presentation or a collaborative session, our LED displays offer crystal-clear visuals that help communicate complex ideas more effectively.",
    image: "/Interactive Displays/Collaboration in work.png"
  },
  {
    id: "02",
    title: "Inspiration in teaching",
    content: "Inspiring the next generation requires more than just knowledge—it demands engaging tools that capture students’ attention and foster active learning. Our Education Smart Boards are designed to transform traditional teaching methods, bringing lessons to life with interactive displays, dynamic content, and real-time collaboration. Teachers can use LCD and LED displays to present multimedia content that stimulates creativity and curiosity in students, encouraging them to think critically and engage more deeply with the material. With our smart boards, educators can adapt to various learning styles, making teaching more flexible and impactful. Whether it’s demonstrating complex science concepts or fostering group discussions, these tools create an environment where inspiration in teaching becomes the norm, not the exception.",
    image: "/Interactive Displays/Inspiration in Teaching.png"
  },
  {
    id: "03",
    title: "Real writing",
    content: "In the age of digital communication, real writing—the ability to craft authentic, clear, and creative messages—is more crucial than ever. Whether you're working on presentations, reports, or creative projects, having the right tools can elevate your writing process. Our Education Smart Boards and LCD displays offer an innovative platform for real-time content creation and collaboration, allowing writers, students, and professionals to brainstorm, edit, and present their ideas with enhanced clarity. With interactive displays, teams can write, annotate, and visualize their ideas together, bringing real writing into the modern workspace. For educational settings, these tools help teachers encourage students to develop stronger writing skills through interactive lessons and collaborative projects. Incorporating business billboards and ads boards allows companies to present written content professionally, helping businesses convey their message effectively in marketing and branding efforts.",
    image: "/Interactive Displays/Real Writing.png"
  },
  {
    id: "04",
    title: "Spark ideas",
    content: "Innovation begins with a single spark of inspiration. Whether you’re in a classroom or a boardroom, the ability to spark ideas is essential for driving progress and growth. Our LED displays and Education Smart Boards are designed to stimulate creativity, providing an interactive platform for brainstorming, visual collaboration, and idea sharing. These tools allow teams and students alike to explore concepts, sketch out strategies, and bring ideas to life in real-time. By integrating business billboards and ads boards, businesses can foster innovation, sparking new ways to engage with customers and display content that captures attention. Whether it's for teaching or corporate settings, our displays provide the foundation for sparking ideas that lead to breakthroughs.",
    image: "/Interactive Displays/Spark Ideas, Get Started Easily.png"
  },
  {
    id: "05",
    title: "Get started easily",
    content: "Whether you're setting up a classroom or a business meeting, getting started with our LCD displays, LED displays, and Education Smart Boards is quick and hassle-free. Our products are designed for easy integration, ensuring that users can get started easily with minimal setup. From plug-and-play business billboards to intuitive smart boards, our solutions help streamline your workflow, making it simple to present, collaborate, and teach with confidence. With our ads boards and interactive displays, teams can quickly launch presentations, lessons, or advertisements, driving instant productivity without the need for extensive technical knowledge. Designed for both educators and business professionals, our tools are built to deliver powerful results from the moment you start using them.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "06",
    title: "Tap to share content",
    content: "In today’s fast-paced environment, the ability to tap to share content instantly can make all the difference in meetings, classrooms, or presentations. With our Education Smart Boards, LED displays, and business billboards, sharing ideas and visuals has never been easier. Simply tap to display content from your device, allowing for real-time collaboration, enhanced engagement, and seamless communication. Our interactive displays enable quick content sharing between team members, students, or clients, making it ideal for brainstorming sessions, presentations, and interactive learning. With the convenience of tap to share, you can quickly switch between presenters, allowing for dynamic and flexible discussions that keep everyone engaged.",
    image: "/Interactive Displays/Tap to Share Content.png"
  },
  {
    id: "07",
    title: "Captivating audiovisuals",
    content: "In the world of presentations and advertisements, captivating audiovisuals are key to grabbing attention and leaving a lasting impression. Our LED displays, LCD screens, and ads boards deliver crisp, clear visuals paired with immersive sound, ensuring your audience stays engaged and connected. Whether for educational settings or business presentations, our Education Smart Boards and business billboards provide an all-in-one solution for displaying vibrant audiovisual content that captivates viewers. From stunning visuals to crystal-clear audio, our products are engineered to deliver an unparalleled experience, helping businesses and educators alike communicate their messages with impact and precision.",
    image: "/Interactive Displays/Captivating Audiovisuals.png",
  },
  {
    id: "08",
    title: "Elegant design",
    content: "Our LED displays, Education Smart Boards, and business billboards are not just powerful tools—they also boast an elegant design that complements any space. Whether in a classroom, conference room, or office, the sleek lines and modern look of our products enhance the aesthetic of your environment while providing high functionality. Designed with both form and function in mind, these displays offer seamless integration with your workspace while delivering top-tier performance. From ads boards to smart boards, our range of products is crafted to deliver both beauty and practicality, ensuring you make a lasting impression in any setting.",
    image: "/Interactive Displays/Elegant Design.png"
  },
  {
    id: "09",
    title: "MDM software",
    content: "Managing multiple devices across an organization or educational institution can be a challenge, but with our MDM software (Mobile Device Management), it becomes a breeze. Our MDM solutions are designed to help IT administrators and educators monitor, manage, and secure all connected LED displays, Education Smart Boards, and other devices from a single dashboard. This ensures consistent updates, centralized control, and enhanced security, making it easier than ever to keep your network of devices running smoothly. Whether you're managing business billboards or classroom devices, our MDM software simplifies the process, enabling you to deploy and control content across all displays effortlessly.",
    image: "/Interactive Displays/MDM Software.png"
  }
];
---

<Layout title={title} description={description} sd={sd} keywords={keywords}>
  <div class="bg-white" x-data="{ activeSection: '01' }">
    <!-- Header Image -->
    <div class="relative h-[60vh] overflow-hidden">
      <img
        src="/Interactive Displays/secretary-preparing-schedule_274689-3423.jpg"
        alt="Interactive Display Header"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 class="text-5xl font-bold text-white text-center">
          Interactive Displays
          <span class="block text-2xl mt-4 font-normal">Transform the way you collaborate and communicate</span>
        </h1>
      </div>
    </div>

    <!-- Highlights Section -->
    <div class="max-w-7xl mx-auto px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-16 relative">
        Highlights
      </h2>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Sidebar Navigation -->
        <div class="lg:w-1/4">
          <div class="sticky top-8">
            <nav class="space-y-2">
              {highlights.map((item) => (
                <button
                  class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  id={`nav-${item.id}`}
                  data-section={item.id}
                >
                  <span class="text-blue-600 font-semibold">{item.id}</span>
                  <span class="ml-2 text-gray-700">{item.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        <!-- Content Section - Only shows active content -->
        <div class="lg:w-3/4">
          {highlights.map((item) => (
            <div 
              id={`content-${item.id}`} 
              class="hidden opacity-0 transition-opacity duration-300"
              style={item.id === "01" ? "display: block; opacity: 1;" : ""}
            >
              <div class="grid md:grid-cols-2 gap-8 items-center">
                <div class="order-2 md:order-1">
                  <span class="text-blue-600 text-lg font-semibold">{item.id}</span>
                  <h3 class="text-2xl font-bold text-gray-900 mt-2 mb-4">{item.title}</h3>
                  <p class="text-gray-600 leading-relaxed">{item.content}</p>
                </div>
                <div class="order-1 md:order-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    class="rounded-xl shadow-lg w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <!-- Products Section -->
    <div class="max-w-7xl mx-auto px-4 py-16 bg-gray-50">
      <h2 class="text-3xl font-bold text-center mb-16">
        Our Products
      </h2>

      <section class="interactive-display-section" x-data="{
        activeFilter: 'all',
        categories: {
          instahub: true,
          education: false,
          accessories: false,
          software: false
        }
      }">
        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Sidebar Menu -->
          <div class="w-full lg:w-64 flex-shrink-0">
            <div class="bg-white rounded-lg shadow-md p-4 sticky top-8">
              <h3 class="text-xl font-semibold mb-4">Interactive Display</h3>
              
              <!-- Instahub Category -->
              <div class="mb-4" x-data="{ categories: { instahub: true, education: false, accessories: false, software: false }}">
                <!-- Category Button Template -->
                <template x-for="(isOpen, category) in categories" :key="category">
                  <div>
                    <button 
                      class="flex items-center justify-between w-full text-left font-medium p-2 hover:bg-gray-50 rounded"
                      @click="categories[category] = !categories[category]"
                    >
                      <span x-text="category.charAt(0).toUpperCase() + category.slice(1)"></span>
                      <svg 
                        class="w-4 h-4 transform transition-transform duration-300"
                        :class="categories[category] ? 'rotate-90' : ''"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <div 
                      x-show="categories[category]" 
                      x-transition
                      class="pl-4 mt-2 space-y-2"
                    >
                      <!-- Category specific content goes here -->
                      <div class="text-sm text-gray-600">
                        <!-- Add subcategory items here -->
                      </div>
                    </div>
                  </div>
                </template>
              </div>

              <!-- Other Categories -->
              {['Education', 'Accessories', 'Software'].map(category => (
                <div class="mb-4">
                  <button 
                    class="flex items-center justify-between w-full text-left font-medium p-2 hover:bg-gray-50 rounded"
                    @click={`categories['${category.toLowerCase()}'] = !categories['${category.toLowerCase()}']`}
                  >
                    <span>{category}</span>
                    <svg 
                      class="w-4 h-4 transform transition-transform duration-300"
                      :class={`categories['${category.toLowerCase()}'] ? 'rotate-90' : ''`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <!-- Product Grid -->
          <div class="flex-1">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "U-E Series 65\"",
                  description: "With Lovosis Technology, you can trust that you're getting top-tier display technology that combines durability, performance, and elegant design. The U-E Series 65 delivers crystal-clear images and smooth visuals, ensuring that your audience is always engaged, whether in a classroom or a business setting. Ready to take your displays to the next level? Contact us today and see how the U-E Series 65 can transform your visual presentations.",
                  image: "/Interactive Displays/U-E Series 65.jpg",
                  category: "u-e",
                  slug: "u-e-series-65",
                  features: ["4K UHD", "20-Point Touch", "Wireless Casting", "Smart Whiteboard"],
                  price: "$4,999"
                },
                {
                  name: "DeepHub 75\"",
                  description: "At Lovosis Technology, the leading distributor of interactive displays, we proudly present the DeepHub 75—a powerful 75-inch smart board designed to enhance collaboration in both business and education. With an ultra-responsive touch interface, 4K UHD resolution, and seamless content sharing, the DeepHub 75 transforms the way teams and students interact with visual content. Whether for meetings, presentations, or lessons, the DeepHub 75 offers a platform for real-time collaboration. Its sleek design and cutting-edge technology make it an ideal choice for boosting communication and engagement. Trust Lovosis Technology for display innovation. Contact us today to see how the DeepHub 75 can transform your space.",
                  image: "/Interactive Displays/DeepHub 75.png",
                  category: "u-e",
                  slug: "deephub-75",
                  features: ["4K UHD", "20-Point Touch", "Wireless Casting", "Smart Whiteboard"],
                  price: "$5,999"
                },
                {
                  name: "Interactive Panel 86\"",
                  description: "Lovosis Technology, we proudly present the Interactive Panel 86 inch, our largest and most powerful smart display. Ideal for businesses, schools, and advertising, this 86-inch panel offers 4K resolution and a multi-touch interface for effortless collaboration and real-time content sharing. Its sleek design ensures durability, making it the perfect solution for enhancing engagement and communication in any setting. Contact us at Lovosis Technology to transform the way you present, teach, and collaborate.",
                  image: "/Interactive Displays/Interactive Panel 86.jpg",
                  category: "u-e",
                  slug: "interactive-panel-86",
                  features: ["4K UHD", "20-Point Touch", "Wireless Casting", "Smart Whiteboard"],
                  price: "$6,999"
                }
              ].map(product => (
                <div 
                  x-show="activeFilter === 'all' || activeFilter === product.category"
                  x-transition:enter="transition ease-out duration-300"
                  x-transition:enter-start="opacity-0 transform translate-y-4"
                  x-transition:enter-end="opacity-100 transform translate-y-0"
                  class="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                >
                  <!-- New Badge -->
                  <div class="absolute top-4 left-4 z-20">
                    <span class="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      New
                    </span>
                  </div>

                  <!-- Image Section -->
                  <div class="relative h-72 overflow-hidden group-hover:h-64 transition-all duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img 
                      src={product.image}
                      alt={product.name}
                      class="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                      loading="lazy"
                    />
                  </div>

                  <!-- Content Section -->
                  <div class="relative p-6 bg-white group-hover:bg-gray-50 transition-colors duration-300">
                    <!-- Title and Description -->
                    <div class="mb-4">
                      <h3 class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p class="text-gray-600 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
                        {product.description}
                      </p>
                    </div>

                    <!-- Features List -->
                    <div class="mb-6 flex flex-wrap gap-2">
                      {product.features.map(feature => (
                        <span class="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium group-hover:bg-blue-100 transition-colors duration-300">
                          <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          {feature}
                        </span>
                      ))}
                    </div>

                    <!-- Action Button -->
                    <div class="relative">
                      <a 
                        href={`/Product/${product.slug}`} 
                        class="w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <span>View More</span>
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Product Modal -->
    <div id="productModal" class="fixed inset-0 bg-black/50 hidden z-50">
      <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl bg-white rounded-2xl shadow-2xl">
        <div class="relative p-8 max-h-[90vh] overflow-y-auto">
          <!-- Logo in top left -->
          <div class="absolute top-6 left-6">
            <img 
              src="/logo (1).svg" 
              alt="Lovosis Display Logo" 
              class="h-10 w-auto"
            />
          </div>
          
          <!-- Close Button -->
          <button class="close-modal absolute top-6 right-6 text-gray-500 hover:text-gray-700">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Modal Content -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            <div>
              <img id="modalImage" src="" alt="" class="w-full rounded-xl shadow-xl mb-6">
              
              <!-- Reviews Section -->
              <div class="bg-gray-50 rounded-xl p-6 mt-6">
                <div class="flex items-center justify-between mb-4">
                  <h4 class="text-xl font-semibold text-gray-900">Customer Reviews</h4>
                  <div class="flex items-center gap-1">
                    <div class="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                    <span class="text-lg font-bold text-gray-900">4.8</span>
                    <span class="text-gray-600">(124 reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="space-y-8">
              <div>
                <h3 id="modalTitle" class="text-4xl font-bold text-gray-900 mb-4"></h3>
                <p id="modalDescription" class="text-gray-600 text-lg mb-6"></p>
                
                <!-- Price with Badge -->
                <div class="mb-8">
                  <div class="p-4 bg-blue-50 rounded-xl">
                    <p class="text-gray-800 leading-relaxed">
                      <span class="font-semibold text-blue-600">Powerful collaboration tool</span> with advanced touch precision and 
                      intelligent interactive features for seamless professional engagement.
                    </p>
                  </div>
                </div>

                <!-- Features -->
                <div class="mb-8">
                  <h4 class="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                  <div id="modalFeatures" class="space-y-3"></div>
                </div>

                <!-- Contact Options -->
                <div class="space-y-4">
                  <h4 class="text-xl font-semibold text-gray-900 mb-4">Contact Us</h4>
                  <div class="grid grid-cols-2 gap-4">
                    <a href="tel:+971 55 946 2214" class="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      <span class="font-semibold">+971 55 946 2214</span>
                    </a>
                    <a href="https://wa.me/+971 55 946 2214" target="_blank" class="flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z"/>
                      </svg>
                      <span class="font-semibold">WhatsApp</span>
                    </a>
                  </div>
                  <a 
                    href="mailto:adeebjamil0707@gmail.com" 
                    class="w-full px-6 py-4 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <span class="font-semibold">adeebjamil0707@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </div>
</Layout>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('[data-section]');
    const sections = document.querySelectorAll('[id^="content-"]');
    
    // Add click handlers to all buttons
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        switchSection(sectionId);
      });
    });

    function switchSection(id: string | null) {
      // First, fade out all sections
      sections.forEach(section => {
        if (section instanceof HTMLElement) {
          section.style.opacity = '0';
        }
      });

      // Remove active class from all buttons
      buttons.forEach(btn => {
        btn.classList.remove('bg-blue-50');
      });

      // After fade out, hide all sections and show the selected one
      setTimeout(() => {
        sections.forEach(section => {
          if (section instanceof HTMLElement) {
            section.style.display = 'none';
          }
        });

        const selectedSection = document.getElementById(`content-${id}`);
        const selectedButton = document.querySelector(`[data-section="${id}"]`);

        if (selectedSection instanceof HTMLElement) {
          selectedSection.style.display = 'block';
          // Force reflow
          selectedSection.offsetHeight;
          selectedSection.style.opacity = '1';
        }

        if (selectedButton) {
          selectedButton.classList.add('bg-blue-50');
        }
      }, 300);
    }

    // Show first section by default
    const firstButton = document.querySelector('[data-section="01"]');
    if (firstButton) {
      firstButton.classList.add('bg-blue-50');
    }
  });

  // Modal functionality
  /**
   * @typedef {Object} Product
   * @property {string} name
   * @property {string} description
   * @property {string} image
   * @property {string} category
   * @property {string} slug
   * @property {string[]} features
   * @property {string} price
   */

  /**
   * @param {Product} product
   */
  function showProductDetails(product: { 
    image: any; 
    name: string | null; 
    description: string | null; 
    features: any[]; 
  }) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage') as HTMLImageElement;
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');

    if (modal && modalImage && modalTitle && modalDescription && modalFeatures) {
      modalImage.src = product.image;
      modalImage.alt = product.name || '';
      modalTitle.textContent = product.name;
      modalDescription.textContent = product.description;
      modalFeatures.innerHTML = product.features
        .map((feature: any) => `
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span>${feature}</span>
          </div>
        `)
        .join('');

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  // Close modal when clicking outside or on close button
  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-modal');

    if (modal && closeBtn) {
      const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      };

      closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });
    }
  });
</script>

<script is:inline>
  // Make showProductDetails available globally
  window.showProductDetails = function(product) {
    const modal = document.getElementById('productModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');

    if (modal && modalImage && modalTitle && modalDescription && modalFeatures) {
      modalImage.src = product.image;
      modalImage.alt = product.name || '';
      modalTitle.textContent = product.name;
      modalDescription.textContent = product.description;
      modalFeatures.innerHTML = product.features
        .map(feature => `
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span>${feature}</span>
          </div>
        `)
        .join('');

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  // Add event listeners for product buttons
  document.addEventListener('DOMContentLoaded', () => {
    // Add click handlers for product buttons
    document.querySelectorAll('[data-product]').forEach(button => {
      button.addEventListener('click', () => {
        const product = JSON.parse(button.dataset.product);
        showProductDetails(product);
      });
    });

    // Modal close functionality
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-modal');

    if (modal && closeBtn) {
      const closeModal = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      };

      closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
          closeModal();
        }
      });
    }
  });
</script>

<style>
  html {
    scroll-behavior: smooth;
  }

  .fade-content {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  [id^="content-"] {
    transition: opacity 0.3s ease-in-out;
  }

  .bg-blue-50 {
    background-color: rgb(239 246 255);
  }

  .aspect-w-16 {
    position: relative;
    padding-bottom: 56.25%;
    background-color: #f8fafc;
  }

  .aspect-w-16 img {
    object-fit: contain;
    background-color: white;
  }

  .form-radio {
    appearance: none;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    border: 2px solid #cbd5e0;
    transition: all 0.2s ease-in-out;
  }

  .form-radio:checked {
    border-color: #2563eb;
    background-color: #2563eb;
  }

  .form-radio:focus {
    outline: none;
    ring: 2px solid #93c5fd;
  }

  .section-title {
    position: relative;
    padding-bottom: 1rem;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #e5e7eb;
    border-radius: 3px;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }

  .group:hover .group-hover\:h-64 {
    height: 16rem;
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  .group:hover .group-hover\:animate-float {
    animation: float 3s ease-in-out infinite;
  }
</style>

<!-- filepath: c:\Users\Adeeb\OneDrive - K L University\Desktop\office\yaay\display2025\src\components\SEO\InteractiveDisplaySchema.astro -->
---
// Import any necessary dependencies here
---

<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Interactive Touch Displays",
  "description": "Touch-enabled LCD screens for interactive experiences. Our interactive displays feature 4K resolution, multi-touch capability, and integrated Android systems for seamless collaboration and presentation.",
  "image": "https://lovosisdisplay.com/images/interactive-display.jpg",
  "brand": {
    "@type": "Brand",
    "name": "Lovosis Display"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "1499",
    "highPrice": "5999",
    "offerCount": "8",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.7",
    "reviewCount": "28"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "viewBody": "The interactive display has transformed our classroom teaching. The touch response is incredibly accurate and the built-in software makes lesson planning much easier."
    }
  ]
}
</script>name": "Mark Johnson"
      },
      "datePublished": "2023-11-15",
      "re



























































    