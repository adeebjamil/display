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