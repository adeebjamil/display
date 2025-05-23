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
        "name": "Mark Johnson"
      },
      "datePublished": "2023-11-15",
      "reviewBody": "The interactive display has transformed our classroom teaching. The touch response is incredibly accurate and the built-in software makes lesson planning much easier."
    }
  ]
}
</script>













Product.js


export const productData = [

  
  
  // LED VIDEO WALLS :- 6

 // ...existing code...
  {
    slug: "xeb-series-p15",
    name: "MW7815-FI-EB",
    type: "",
    shortDescription: "High-Performance Fine Pitch LED Display",
    keyFeature: "fine pitch LED technology for outstanding clarity and energy efficiency",
    primaryUse: "mission-critical control rooms, executive boardrooms, and advanced digital signage",
    secondaryFeature: "robust build quality and long-term reliability",
    description: "The MW7815-FI-EB from Lovosis Technology features fine pitch LED technology for outstanding clarity and energy efficiency, making it ideal for mission-critical control rooms, executive boardrooms, and advanced digital signage. With its P1.5 pixel pitch, this display delivers sharp, vibrant images and is engineered for seamless integration and reliable, low-maintenance operation.",
    extendedDescription: "The MW7815-FI-EB LED display sets a new standard for fine pitch technology, delivering precise, detailed visuals and smooth gradients even at close viewing distances. Its robust construction and advanced energy-saving features make it a top choice for demanding professional environments.",
    image: "/LED Displays/MW7815-FI-EB.jpg",
    price: "1000",
    category: "Products/led-display",
    categoryName: "LED Display",
    features: [
      "Fine pitch LED display",
      "Energy-efficient operation",
      "Robust build quality",
      "Seamless integration",
      "Long-term reliability"
    ],
    highlights: [
      "P1.5 fine pitch for outstanding clarity",
      "Ideal viewing distance of 1.5-10 meters",
      "Uniform brightness and color",
      "Advanced energy-saving technology",
      "Multiple connectivity options",
      "Engineered for 24/7 operation"
    ],
    specifications: [
      { name: "Model", value: "MW7815-FI-EB" },
      { name: "Pixel Pitch", value: "1.5mm" },
      { name: "Resolution", value: "160,000 pixels/m²" },
      { name: "Brightness", value: "800 nits" },
      { name: "Contrast Ratio", value: "6000:1" },
      { name: "Viewing Angle", value: "160° horizontal, 160° vertical" },
      { name: "Refresh Rate", value: "3840Hz" },
      { name: "Cabinet Material", value: "Die-cast aluminum" },
      { name: "Cabinet Size", value: "500 x 500mm" }
    ],
    applications: [
      {
        name: "Control Rooms",
        description: "Mission-critical monitoring with MW7815-FI-EB",
        iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      },
      {
        name: "Executive Boardrooms",
        description: "Premium presentations with MW7815-FI-EB",
        iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      },
      {
        name: "Digital Signage",
        description: "Advanced signage solutions with MW7815-FI-EB",
        iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
      }
    ],
    rating: "4.9",
    reviewCount: "32",
    ratingDistribution: [
      { stars: 5, percentage: 90 },
      { stars: 4, percentage: 8 },
      { stars: 3, percentage: 2 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 }
    ],
    reviews: [
      {
        name: "James Wilson",
        date: "December 14, 2023",
        rating: 5,
        review: "We installed the MW7815-FI-EB in our boardroom and the clarity is outstanding. The fine pitch delivers sharp images even up close. Presentations and video conferences look professional and impressive."
      },
      {
        name: "Alexander Chen",
        date: "November 18, 2023",
        rating: 5,
        review: "As a studio manager, I've worked with many LED displays, but the MW7815-FI-EB stands out for its color accuracy and detail. The display has performed flawlessly for months of continuous operation."
      },
      {
        name: "Sophia Rahman",
        date: "October 25, 2023",
        rating: 5,
        review: "Our control room needed displays with impeccable detail and reliability. The MW7815-FI-EB has exceeded our expectations. Even the smallest text is perfectly legible, and the low heat emission is a plus."
      }
    ],
    relatedProducts: [
      {
        name: "XEB Series P1.2",
        description: "Ultra-high-definition LED display with P1.2 pixel pitch, ensuring crystal-clear visuals and precise image detail for the most demanding applications",
        image: "/LED Displays/img2.jpeg",
        slug: "xeb-series-p12",
        features: ["Ultra-high-definition", "P1.2 pixel pitch", "Crystal-clear visuals"]
      },
      {
        name: "XEB Series P1.8",
        description: "High-resolution LED display with P1.8 pixel pitch, providing sharp visuals and excellent clarity for business presentations and digital advertising",
        image: "/LED Displays/img3.jpeg",
        slug: "xeb-series-p18",
        features: ["High-resolution", "P1.8 pixel pitch", "Sharp visuals"]
      }
    ]
  },
// ...existing code...
 // ...existing code...
{
  slug: "xeb-series-p12",
  name: "MW7812-FI-EB",
  type: "",
  shortDescription: "Ultra-Fine Pitch LED Display for Professional Applications",
  keyFeature: "P1.2 ultra-fine pixel pitch for exceptional image clarity and detail",
  primaryUse: "mission-critical control rooms, high-end boardrooms, broadcast studios, and luxury retail environments",
  secondaryFeature: "advanced color calibration and robust build for 24/7 operation",
  description: "The MW7812-FI-EB is Lovosis Technology’s flagship ultra-fine pitch LED display, featuring a P1.2mm pixel pitch for outstanding image clarity and detail. Designed for environments where visual precision is paramount, this model is ideal for control rooms, executive boardrooms, broadcast studios, and luxury retail spaces. Its advanced color calibration ensures true-to-life color reproduction, while the robust die-cast aluminum cabinet guarantees reliability and seamless integration.",
  extendedDescription: "Engineered for the most demanding professional applications, the MW7812-FI-EB delivers ultra-high-definition visuals with a pixel pitch of just 1.2mm, making it perfect for close viewing distances. The display supports HDR content, offers superior brightness uniformity, and features smart power management for energy efficiency. Its modular design allows for easy installation and maintenance, while the advanced signal processing ensures flicker-free, smooth video playback. The MW7812-FI-EB is trusted by industry leaders for its reliability, color accuracy, and premium build quality.",
  image: "/LED Displays/MW7815-FI-EB.jpg",
  price: " 1000",
  category: "Products/led-display",
  categoryName: "LED Display",
  features: [
    "Ultra-fine P1.2mm pixel pitch for exceptional clarity",
    "True-to-life color reproduction with advanced calibration",
    "HDR support for enhanced dynamic range",
    "Superior brightness uniformity across panels",
    "Smart power management for energy efficiency",
    "Robust die-cast aluminum cabinet",
    "Seamless integration for large video walls",
    "Modular design for easy installation and maintenance",
    "Flicker-free, high refresh rate video playback",
    "24/7 operation capability",
    "Comprehensive connectivity options",
    "Front and rear service access",
    "Low heat emission for extended operation",
    "Advanced signal processing",
    "Long lifespan with minimal maintenance",
    "Flexible configuration for custom installations",
    "Anti-glare surface for optimal viewing",
    "Lightweight and slim profile",
    "Silent operation with fanless design",
    "Uniform color and brightness calibration",
    "Compatible with major control systems"
  ],
  highlights: [
    "P1.2 ultra-fine pixel pitch for superior image detail",
    "Ideal for close viewing distances (1.2-8 meters)",
    "HDR and advanced color calibration",
    "Robust, lightweight die-cast aluminum cabinet",
    "Energy-efficient and reliable for 24/7 use",
    "Seamless splicing for large-scale video walls"
  ],
  specifications: [
    { name: "Model", value: "MW7812-FI-EB" },
    { name: "Pixel Pitch", value: "1.2mm" },
    { name: "Resolution", value: "694,444 pixels/m²" },
    { name: "Brightness", value: "850 nits" },
    { name: "Contrast Ratio", value: "7000:1" },
    { name: "Viewing Angle", value: "170° horizontal, 170° vertical" },
    { name: "Refresh Rate", value: "3840Hz" },
    { name: "Cabinet Material", value: "Die-cast aluminum" },
    { name: "Cabinet Size", value: "500 x 500mm" }
  ],
  applications: [
    {
      name: "Control Rooms",
      description: "Mission-critical monitoring with MW7812-FI-EB",
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      name: "Executive Boardrooms",
      description: "Premium presentations with MW7812-FI-EB",
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      name: "Broadcast Studios",
      description: "Ultra-HD backdrops and sets with MW7812-FI-EB",
      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      name: "Luxury Retail",
      description: "High-end digital signage with MW7812-FI-EB",
      iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    },
    {
      name: "Conference Centers",
      description: "Large-scale event displays with MW7812-FI-EB",
      iconPath: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
    }
  ],
  rating: "5.0",
  reviewCount: "24",
  ratingDistribution: [
    { stars: 5, percentage: 95 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ],
  reviews: [
    { 
      name: "Thomas Reynolds",
      date: "February 8, 2024",
      rating: 5,
      review: "The MW7812-FI-EB is the best LED display we've ever used in our broadcast studio. The clarity and color accuracy are unmatched, and the ultra-fine pitch makes our on-camera visuals look stunning."
    },
    { 
      name: "Linda Park",
      date: "January 22, 2024",
      rating: 5,
      review: "We chose the MW7812-FI-EB for our control room upgrade. The detail and reliability are exactly what we needed for 24/7 mission-critical monitoring. Highly recommended for any professional environment."
    },
    { 
      name: "Richard Martinez",
      date: "December 10, 2023",
      rating: 5,
      review: "Our luxury retail store uses the MW7812-FI-EB for digital signage, and the impact on customer engagement has been incredible. The visuals are so sharp and vibrant that they truly elevate our brand."
    }
  ],
  relatedProducts: [
    {
      name: "XEB Series P1.5",
      description: "Fine pixel pitch LED display with exceptional clarity, ideal for professional environments requiring high-definition visuals",
      image: "/LED Displays/img1.webp",
      slug: "xeb-series-p15",
      features: ["Fine pixel pitch", "Professional-grade", "HD visuals"]
    },
    {
      name: "XEB Series P1.8",
      description: "High-resolution LED display with P1.8 pixel pitch, providing sharp visuals for business presentations and digital advertising",
      image: "/LED Displays/img3.jpeg",
      slug: "xeb-series-p18",
      features: ["High-resolution", "P1.8 pixel pitch", "Sharp visuals"]
    }
  ]
},
// ...existing code...
  
  // New product: XEB Series P1.8
  // ...existing code...
{
  slug: "xeb-series-p18",
  name: "MW7818-FI-EB",
  type: "",
  shortDescription: "High-Definition Fine Pitch LED Display for Professional Environments",
  keyFeature: "P1.8 fine pixel pitch for sharp, vibrant, and detailed visuals",
  primaryUse: "corporate boardrooms, control rooms, digital signage, broadcast studios, and retail environments",
  secondaryFeature: "energy-efficient operation and robust build for 24/7 reliability",
  description: "The MW7818-FI-EB is a high-definition fine pitch LED display from Lovosis Technology, featuring a P1.8mm pixel pitch for sharp, vibrant, and detailed visuals. Designed for professional environments such as corporate boardrooms, control rooms, digital signage, broadcast studios, and retail spaces, this model delivers exceptional image clarity and color accuracy. Its robust construction and energy-efficient design ensure reliable 24/7 operation, making it ideal for mission-critical and high-visibility applications.",
  extendedDescription: "Engineered for versatility and performance, the MW7818-FI-EB combines advanced LED technology with a fine 1.8mm pixel pitch to deliver crisp, seamless visuals even at close viewing distances. The display supports HDR content, offers uniform brightness, and features advanced color calibration for true-to-life images. Its modular, lightweight design allows for easy installation and maintenance, while the high refresh rate ensures smooth video playback. The MW7818-FI-EB is trusted by professionals for its durability, low heat emission, and flexible configuration options, making it a top choice for demanding commercial and control environments.",
  image: "/LED Displays/img3.jpeg",
  price: "1000",
  category: "Products/led-display",
  categoryName: "LED Display",
  features: [
    "Fine P1.8mm pixel pitch for sharp, detailed images",
    "Advanced color calibration for true-to-life visuals",
    "HDR support for enhanced dynamic range",
    "Uniform brightness across all panels",
    "Energy-efficient operation for reduced costs",
    "Robust die-cast aluminum cabinet",
    "Seamless splicing for large video walls",
    "Modular design for easy installation and maintenance",
    "High refresh rate for flicker-free video",
    "24/7 operation capability",
    "Comprehensive connectivity options",
    "Front and rear service access",
    "Low heat emission for continuous use",
    "Flexible configuration for custom installations",
    "Anti-glare surface for optimal viewing",
    "Lightweight and slim profile",
    "Silent, fanless operation",
    "Long lifespan with minimal maintenance",
    "Compatible with major control systems",
    "Smart power management",
    "Supports multiple input sources",
    "Ideal for close viewing distances"
  ],
  highlights: [
    "P1.8 fine pitch for high-definition clarity",
    "Perfect for boardrooms, control rooms, and signage",
    "HDR and advanced color calibration",
    "Robust, lightweight die-cast aluminum cabinet",
    "Energy-efficient and reliable for 24/7 use",
    "Seamless integration for large-scale video walls"
  ],
  specifications: [
    { name: "Model", value: "MW7818-FI-EB" },
    { name: "Pixel Pitch", value: "1.8mm" },
    { name: "Resolution", value: "277,778 pixels/m²" },
    { name: "Brightness", value: "700 nits" },
    { name: "Contrast Ratio", value: "5000:1" },
    { name: "Viewing Angle", value: "160° horizontal, 160° vertical" },
    { name: "Refresh Rate", value: "3840Hz" },
    { name: "Cabinet Material", value: "Die-cast aluminum" },
    { name: "Cabinet Size", value: "500 x 500mm" }
  ],
  applications: [
    {
      name: "Corporate Boardrooms",
      description: "Professional presentations and meetings with MW7818-FI-EB",
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      name: "Control Rooms",
      description: "Mission-critical monitoring with MW7818-FI-EB",
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      name: "Digital Signage",
      description: "High-impact advertising and information displays with MW7818-FI-EB",
      iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
    },
    {
      name: "Broadcast Studios",
      description: "Ultra-HD backdrops and sets with MW7818-FI-EB",
      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      name: "Retail Environments",
      description: "Engaging customer experiences with MW7818-FI-EB",
      iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    }
  ],
  rating: "4.8",
  reviewCount: "41",
  ratingDistribution: [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ],
  reviews: [
    { 
      name: "Robert Lewis",
      date: "January 30, 2024",
      rating: 5,
      review: "We installed the MW7818-FI-EB in our company's main conference room and have been thoroughly impressed with the performance. The image quality is excellent for our presentations, and the price point made it possible to outfit multiple meeting spaces. A great balance of quality and value."
    },
    { 
      name: "Julia Garcia",
      date: "December 18, 2023",
      rating: 4,
      review: "Our retail store upgraded to the MW7818-FI-EB for our digital product showcases, and customer engagement has noticeably increased. The display is bright, clear, and really makes our product images pop. Setup was straightforward, and we appreciate the energy efficiency."
    },
    { 
      name: "Daniel Kim",
      date: "November 5, 2023",
      rating: 5,
      review: "As a digital signage integrator, I've installed many MW7818-FI-EB displays for clients, and they consistently perform exceptionally well. The build quality is solid, the panels align perfectly for seamless walls, and the color calibration is spot-on out of the box."
    }
  ],
  relatedProducts: [
    {
      name: "XEB Series P1.2",
      description: "Ultra-high-definition LED display with P1.2 pixel pitch for environments requiring exceptional visual precision",
      image: "/LED Displays/img2.jpeg",
      slug: "xeb-series-p12",
      features: ["Ultra-high-definition", "P1.2 pixel pitch", "Unmatched precision"]
    },
    {
      name: "XEB Series P1.5",
      description: "Fine pixel pitch LED display delivering superior clarity and precision for professional environments",
      image: "/LED Displays/img1.webp",
      slug: "xeb-series-p15",
      features: ["Fine pixel pitch", "Superior clarity", "Professional grade"]
    }
  ]
},
// ...existing code...
  
  // New product: U Series P0.9
  {
    slug: "u-series-p09",
    name: "MW7809-FI-CF",
    type: "",
    shortDescription: "Premium Ultra-HD Display",
    keyFeature: "ultra-fine P0.9 pixel pitch for unmatched visual detail",
    primaryUse: "mission-critical control rooms, high-end broadcasting, and luxury retail environments",
    secondaryFeature: "industry-leading visual performance and color accuracy",
    description: "The MW7809-FI-CF from Lovosis Technology offers unmatched clarity with its ultra-fine P0.9 pixel pitch, delivering breathtaking visual precision for high-end control rooms, broadcasting, and premium digital signage. Its ultra-high-definition display ensures that even the smallest details are rendered with sharp accuracy, providing a seamless viewing experience for the most demanding applications.",
    extendedDescription: "The MW7809-FI-CF represents the pinnacle of LED display technology, engineered for scenarios where absolute visual perfection is required. At an astonishing 0.9mm pixel pitch, this display achieves near-retina quality visuals even at close viewing distances. Developed with advanced micro-LED architecture, the MW7809-FI-CF delivers exceptional brightness uniformity, remarkable color accuracy, and industry-leading contrast ratios that make it the preferred choice for mission-critical installations.",
    image: "/LED Displays/MW7809-FI-CF.jpg",
    price: "1000",
    category: "Products/led-display",
    categoryName: "LED Display",
    features: ["Ultra-fine P0.9 pixel pitch", "Micro-LED architecture", "Near-retina visual quality", "Superior color accuracy", "Premium build quality"],
    highlights: [
      "P0.9 ultra-fine pixel pitch for unparalleled clarity",
      "Ideal viewing distance of 0.9-7 meters",
      "Superior HDR content support",
      "Advanced factory calibration for perfect panel matching",
      "Comprehensive signal processing capabilities",
      "Premium material construction for extended lifespan"
    ],
    specifications: [
      { name: "Model", value: "MW7809-FI-CF" },
      { name: "Pixel Pitch", value: "0.9mm" },
      { name: "Resolution", value: "1,111,111 pixels/m²" },
      { name: "Brightness", value: "800 nits" },
      { name: "Contrast Ratio", value: "8000:1" },
      { name: "Viewing Angle", value: "170° horizontal, 170° vertical" },
      { name: "Refresh Rate", value: "7680Hz" },
      { name: "Cabinet Material", value: "Premium die-cast aluminum" },
      { name: "Cabinet Size", value: "500 x 500mm" }
    ],
    applications: [
      {
        name: "Mission-Critical Control",
        description: "Ultra-precise monitoring with MW7809-FI-CF",
        iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      },
      {
        name: "Premium Broadcasting",
        description: "State-of-the-art studio visuals with MW7809-FI-CF",
        iconPath: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      },
      {
        name: "Luxury Retail",
        description: "Exceptional brand showcases with MW7809-FI-CF",
        iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
      }
    ],
    rating: "5.0",
    reviewCount: "18",
    ratingDistribution: [
      { stars: 5, percentage: 100 },
      { stars: 4, percentage: 0 },
      { stars: 3, percentage: 0 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 }
    ],
    reviews: [
      { 
        name: "Dr. Elizabeth Matthews",
        date: "March 5, 2024",
        rating: 5,
        review: "As the lead designer for a space agency control center, we required displays with absolute precision. The MW7809-FI-CF exceeds all expectations. The clarity is remarkable - operators can view complex telemetry data without any eyestrain, even during 12-hour shifts. The color accuracy is critical for our status indicators, and the MW7809-FI-CF reproduces our calibrated palette perfectly."
      },
      { 
        name: "Victor Nguyen",
        date: "February 12, 2024",
        rating: 5,
        review: "Our broadcast studio produces content for major fashion brands, and we installed the MW7809-FI-CF as our main on-camera backdrop. The pixel density is so fine that there's absolutely no moiré effect when cameras pan across the display. Our clients are amazed by the color reproduction accuracy and the ability to showcase their products with perfect fidelity."
      },
      { 
        name: "Jonathan Price",
        date: "January 8, 2024",
        rating: 5,
        review: "Our flagship jewelry store installed the MW7809-FI-CF for displaying our premium collection, and the results are spectacular. The display's ability to render the subtle nuances in gemstone colors and metallics is unprecedented. The investment was substantial, but the increased customer engagement and time spent viewing our digital catalog has translated directly to higher sales of our luxury items."
      }
    ],
    relatedProducts: [
      {
        name: "U Series P1.2",
        description: "Premium LED display with P1.2 pixel pitch, offering exceptional clarity for professional applications",
        image: "/LED Displays/img5.jpg",
        slug: "u-series-p12",
        features: ["Premium display", "P1.2 pixel pitch", "Professional applications"]
      },
      {
        name: "XEB Series P1.2",
        description: "Ultra-high-definition LED display with exceptional visual performance for demanding environments",
        image: "/LED Displays/img2.jpeg",
        slug: "xeb-series-p12",
        features: ["Ultra-high-definition", "P1.2 pixel pitch", "Crystal-clear visuals"]
      }
    ]
  },
  
  // New product: U Series P1.2
  {
    slug: "u-series-p12",
    name: "MW7812-FI-CF",
    type: "",
    shortDescription: "Professional Precision Display",
    keyFeature: "P1.2 pixel pitch combining high performance and reliability",
    primaryUse: "corporate environments, control rooms, and high-end retail displays",
    secondaryFeature: "advanced visual processing and flexible installation options",
    description: "The MW7812-FI-CF from Lovosis Technology is a precision-engineered display with a P1.2 pixel pitch, offering sharp visuals and excellent clarity for business presentations, control rooms, and premium digital signage. The ultra-high-definition display ensures detailed content visibility, making it ideal for environments that require accurate image representation.",
    extendedDescription: "The MW7812-FI-CF delivers exceptional visual performance with its 1.2mm pixel pitch technology, providing businesses and organizations with remarkably detailed imagery that maintains clarity even at close viewing distances. Developed using Lovosis's advanced U-Series architecture, this display combines premium image quality with operational reliability, ensuring continued performance in demanding 24/7 environments where visual communication is critical to success.",
    image: "/LED Displays/MW7809-FI-CF.jpg",
    price: "1000",
    category: "Products/led-display",
    categoryName: "LED Display",
    features: ["Professional P1.2 pixel pitch", "Advanced image processing", "High reliability design", "Flexible installation", "24/7 operation capability"],
    highlights: [
      "P1.2 pixel pitch for detailed imagery",
      "Ideal viewing distance of 1.2-9 meters",
      "Advanced heat dissipation system for extended operation",
      "Front and rear service access options",
      "Comprehensive connectivity with redundancy options",
      "Intelligent brightness adjustment for optimal viewing"
    ],
    specifications: [
      { name: "Model", value: "MW7812-FI-CF" },
      { name: "Pixel Pitch", value: "1.2mm" },
      { name: "Resolution", value: "694,444 pixels/m²" },
      { name: "Brightness", value: "800 nits" },
      { name: "Contrast Ratio", value: "6500:1" },
      { name: "Viewing Angle", value: "160° horizontal, 160° vertical" },
      { name: "Refresh Rate", value: "3840Hz" },
      { name: "Cabinet Material", value: "Die-cast aluminum" },
      { name: "Cabinet Size", value: "500 x 500mm" }
    ],
    applications: [
      {
        name: "Corporate Headquarters",
        description: "Executive-level presentation displays with MW7812-FI-CF",
        iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      },
      {
        name: "Control Centers",
        description: "Reliable information displays with MW7812-FI-CF",
        iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      },
      {
        name: "Premium Retail",
        description: "Elevated shopping experiences with MW7812-FI-CF",
        iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      }
    ],
    rating: "4.8",
    reviewCount: "35",
    ratingDistribution: [
      { stars: 5, percentage: 85 },
      { stars: 4, percentage: 10 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 }
    ],
    reviews: [
      { 
        name: "Maria Santos",
        date: "February 20, 2024",
        rating: 5,
        review: "We installed the MW7812-FI-CF in our executive briefing center, and it's transformed our client presentations. The clarity is exceptional even when displaying detailed financial data and technical specifications. The display's ability to maintain consistent brightness throughout long meetings has been particularly valuable. The MW7812-FI-CF was a significant investment that's already paying dividends in client engagement."
      },
      { 
        name: "Andrew Jackson",
        date: "January 15, 2024",
        rating: 5,
        review: "Our emergency operations center operates around the clock, and the MW7812-FI-CF has proven to be exceptionally reliable. The visual clarity ensures that critical information is always legible, and the redundant power systems have prevented any downtime during our operations. The heat management is impressive - even after continuous operation, the display remains at optimal temperature."
      },
      { 
        name: "Sophia Williams",
        date: "December 5, 2023",
        rating: 4,
        review: "Our high-end department store installed the MW7812-FI-CF at our main entrance, and it's creating a stunning first impression for customers. The vibrant colors and crisp imagery showcase our seasonal collections beautifully. Installation was straightforward, though we needed some additional assistance with the control software setup. Overall, the display quality exceeds expectations and has enhanced our store's premium atmosphere."
      }
    ],
    relatedProducts: [
      {
        name: "U Series P0.9",
        description: "Ultra-premium LED display with P0.9 pixel pitch for environments requiring the absolute finest visual detail",
        image: "/LED Displays/img4.webp",
        slug: "u-series-p09",
        features: ["Ultra-fine pixel pitch", "Unmatched detail", "Premium quality"]
      },
      {
        name: "U Series P1.5",
        description: "Professional LED display balancing visual clarity and value for business and retail applications",
        image: "/LED Displays/img6.jpeg",
        slug: "u-series-p15",
        features: ["Professional display", "P1.5 pixel pitch", "Business solutions"]
      }
    ]
  },
  
  // New product: U Series P1.5
 {
  slug: "u-series-p15",
  name: "MW7815-FI-CF",
  type: "",
  shortDescription: "Versatile Business Display",
  keyFeature: "P1.5 pixel pitch balancing performance and value",
  primaryUse: "business environments, retail displays, and educational settings",
  secondaryFeature: "reliability and ease of maintenance",
  description: "The MW7815-FI-CF by Lovosis Technology delivers high-quality visuals with its P1.5 pixel pitch, offering outstanding clarity and vivid color accuracy. Perfect for control rooms, meeting spaces, and advertising displays, this display provides clear, crisp visuals for professional environments that demand the best in image quality.",
  extendedDescription: "The MW7815-FI-CF provides businesses with an ideal balance of visual performance and value. With its 1.5mm pixel pitch, this versatile display delivers sharp, clear imagery at standard viewing distances while remaining accessible for organizations seeking quality visual solutions. The MW7815-FI-CF features Lovosis's trusted display technology that emphasizes reliability, simplified maintenance, and versatile application across various commercial and educational environments.",
  image: "/LED Displays/MW7809-FI-CF.jpg",
  price: "1000",
  category: "Products/led-display",
  categoryName: "LED Display",
  features: ["High-quality P1.5 display", "Balanced performance", "Business-oriented", "Simplified maintenance", "Versatile application"],
  highlights: [
    "P1.5 pixel pitch for clear business messaging",
    "Ideal viewing distance of 1.5-12 meters",
    "Simplified installation and configuration",
    "User-friendly content management system",
    "Robust build for commercial environments",
    "Energy-efficient operation for reduced costs"
  ],
  specifications: [
    { name: "Model", value: "MW7815-FI-CF" },
    { name: "Pixel Pitch", value: "1.5mm" },
    { name: "Resolution", value: "444,444 pixels/m²" },
    { name: "Brightness", value: "700 nits" },
    { name: "Contrast Ratio", value: "5500:1" },
    { name: "Viewing Angle", value: "160° horizontal, 160° vertical" },
    { name: "Refresh Rate", value: "3840Hz" },
    { name: "Cabinet Material", value: "Die-cast aluminum" },
    { name: "Cabinet Size", value: "500 x 500mm" }
  ],
  applications: [
    {
      name: "Business Environments",
      description: "Effective corporate communications with MW7815-FI-CF",
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      name: "Retail Solutions",
      description: "Engaging customer experiences with MW7815-FI-CF",
      iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    },
    {
      name: "Educational Facilities",
      description: "Enhanced learning environments with MW7815-FI-CF",
      iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13c-1.168-.775-2.754-1.253-4.5-1.253-1.746 0-3.332.477-4.5 1.253"
    }
  ],
  rating: "4.7",
  reviewCount: "53",
  ratingDistribution: [
    { stars: 5, percentage: 75 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ],
  reviews: [
    { 
      name: "Michael Bradley",
      date: "March 10, 2024",
      rating: 5,
      review: "We deployed MW7815-FI-CF displays across our corporate campus for digital signage and meeting room installations. The image quality is excellent for our needs, and the setup was straightforward. What impressed us most is how easy these are to maintain - the modular design makes it simple to service if needed, though we haven't had any issues in six months of operation."
    },
    { 
      name: "Rebecca Chen",
      date: "February 2, 2024",
      rating: 4,
      review: "Our retail chain installed MW7815-FI-CF displays in our flagship stores, and they've significantly enhanced our in-store marketing. The displays are bright and clear, even in our sunlit locations. The content management system is intuitive enough for our marketing team to update messaging without technical assistance. Would give 5 stars if the included templates were more customizable."
    },
    { 
      name: "Professor Alan Thompson",
      date: "January 18, 2024",
      rating: 5,
      review: "Our university's business school equipped multiple lecture halls with the MW7815-FI-CF, and they've transformed our teaching capabilities. The displays provide perfect visibility from all seats, and the color accuracy is critical for our data visualization classes. The reliability has been excellent - no disruptions during important lectures or presentations. I highly recommend these displays for educational settings."
    }
  ],
  relatedProducts: [
    {
      name: "U Series P1.2",
      description: "Premium LED display with P1.2 pixel pitch for exceptional visual clarity in professional settings",
      image: "/LED Displays/img5.jpg",
      slug: "u-series-p12",
      features: ["Premium display", "P1.2 pixel pitch", "Professional clarity"]
    },
    {
      name: "XEB Series P1.5",
      description: "Fine pixel pitch LED display with superior clarity and precision for demanding environments",
      image: "/LED Displays/img1.webp",
      slug: "xeb-series-p15",
      features: ["Fine pixel pitch", "Superior clarity", "Professional grade"]
    }
  ]
},
// ...existing code...

  
 // LCD Video Wall Products :- 3

 {
  slug: "mw-a46-b3-e",
  name: "MW-A46-B3-E",
  type: "",
  shortDescription: "Ultra-Narrow Bezel Professional Display",
  keyFeature: "1.7mm ultra-narrow bezel for seamless multi-screen installations",
  primaryUse: "control rooms, corporate environments, and retail digital signage",
  secondaryFeature: "exceptional image quality with wide viewing angles",
  description: "The MW-A46-B3-E is a 46-inch LCD video wall display engineered for seamless, high-definition visuals in professional environments. Its ultra-narrow 1.7mm bezel allows for immersive multi-screen installations, making it ideal for control rooms, retail displays, and large-scale presentations. The advanced LCD panel delivers vibrant color, wide viewing angles, and reliable 24/7 operation.",
  extendedDescription: "The MW-A46-B3-E video wall combines innovative ultra-narrow bezel design with industrial-grade LCD technology for immersive, nearly seamless video wall configurations. With a combined bezel width of just 1.7mm, this 46-inch display is perfect for tiled installations where minimal gap between screens is essential. Engineered for mission-critical and commercial environments, it features advanced heat management, redundant signal paths, and robust components for reliable, continuous operation.",
  image: "/LCD Displays/MW-A55-B3-E.png",
  price: "1000",
  category: "Products/lcd-video",
  categoryName: "LCD Video Wall",
  features: ["1.7mm Bezel", "500nits Brightness", "Full HD Resolution", "178° Viewing Angle", "24/7 Operation"],
  highlights: [
    "Ultra-narrow 1.7mm bezel for seamless video walls",
    "Professional-grade LCD panel with 178° viewing angles",
    "Advanced color calibration for consistent cross-panel performance",
    "Intelligent heat management for extended operation",
    "Multiple connectivity options including HDMI, DVI, and DisplayPort",
    "Remote management capabilities for enterprise installations"
  ],
  specifications: [
    { name: "Model", value: "MW-A46-B3-E" },
    { name: "Screen Size", value: "46 inches" },
    { name: "Bezel Width", value: "1.7mm (0.85mm + 0.85mm)" },
    { name: "Resolution", value: "1920 × 1080 (Full HD)" },
    { name: "Brightness", value: "500 nits" },
    { name: "Contrast Ratio", value: "3500:1" },
    { name: "Viewing Angle", value: "178° horizontal, 178° vertical" },
    { name: "Response Time", value: "8ms" },
    { name: "Operating Hours", value: "24/7" },
    { name: "Input Ports", value: "HDMI, DVI-D, DisplayPort, VGA" }
  ],
  applications: [
    {
      name: "Control Rooms",
      description: "High-performance monitoring solutions with MW-A46-B3-E",
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      name: "Corporate Environments",
      description: "Impressive presentation displays with MW-A46-B3-E",
      iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    },
    {
      name: "Retail Signage",
      description: "Attention-grabbing digital displays with MW-A46-B3-E",
      iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    }
  ],
  rating: "4.8",
  reviewCount: "46",
  ratingDistribution: [
    { stars: 5, percentage: 85 },
    { stars: 4, percentage: 10 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ],
  reviews: [
    { 
      name: "Michael Thompson",
      date: "January 25, 2024",
      rating: 5,
      review: "We installed a 3x3 configuration of the MW-A46-B3-E displays in our security operations center, and the result has been transformative. The ultra-narrow bezels create a nearly seamless viewing experience that makes data monitoring much more effective. The displays have been running 24/7 for six months without any issues or signs of burn-in. Excellent color uniformity across all nine panels as well."
    },
    { 
      name: "Sarah Johnson",
      date: "December 8, 2023",
      rating: 5,
      review: "As the visual merchandising director for a retail chain, we needed a solution that would create impact while displaying our seasonal promotions. These video wall displays deliver exceptional image quality and the bezels are so thin that our customers often don't realize they're looking at multiple screens. The installation team mentioned these were some of the best panels they've worked with."
    },
    { 
      name: "David Chen",
      date: "November 15, 2023",
      rating: 4,
      review: "Our corporate boardroom upgrade to the MW-A46-B3-E video wall has significantly improved our client presentations and video conferences. The image quality is excellent and the viewing angles ensure everyone in the room gets the same experience. The only reason for 4 stars instead of 5 is that the included management software has a bit of a learning curve."
    }
  ],
  relatedProducts: [
    {
      name: "55\" 1.7mm Bezel Width Video Wall",
      description: "Larger professional video wall display with ultra-narrow 1.7mm bezel for creating impressive large-format display solutions",
      image: "/LCD Displays/P2.jpg",
      slug: "mw-a55-b3-e",
      features: ["1.7mm Bezel", "55-inch Display", "Professional Grade"]
    },
    {
      name: "55\" 0.88mm Bezel Width Video Wall",
      description: "Premium video wall solution with ultra-narrow 0.88mm bezel for creating virtually seamless large displays",
      image: "/LCD Displays/P3.jpg",
      slug: "mw-a55-b5-e",
      features: ["0.88mm Bezel", "Nearly Seamless", "Premium Quality"]
    }
  ]
 },

  {
    slug: "mw-a55-b3-e",
    name: "MW-A55-B3-E",
    type: "",
    shortDescription: "Large-Format Professional Display",
    keyFeature: "55-inch display with 1.7mm ultra-narrow bezel technology",
    primaryUse: "corporate lobbies, retail environments, and premium advertising displays",
    secondaryFeature: "high brightness and commercial-grade durability",
    description: "The 55-inch 1.7mm Bezel Width Video Wall delivers superior image quality and a nearly borderless display for impactful visual presentations. Designed for commercial use, this video wall is perfect for digital signage, conference rooms, and command centers. The ultra-narrow 1.7mm bezel creates a fluid and captivating display experience.",
    extendedDescription: "The MW-A55-B3-E represents the perfect balance of screen size and seamless integration for professional video wall installations. With its generous 55-inch display area and minimal 1.7mm bezel gap, this display maximizes visual impact while minimizing distractions. Engineered with commercial applications in mind, these panels feature enhanced brightness, anti-glare treatment, and specialized heat dissipation technology that ensures reliable operation in demanding environments.",
    image: "/LCD Displays/MW-A55-B3-E.png",
    price: "1000",
    category: "Products/lcd-video",
    categoryName: "LCD Video Wall",
    features: ["1.7mm Bezel", "500nits Brightness", "Commercial Grade", "Full HD Resolution", "24/7 Operation"],
    highlights: [
      "Ultra-narrow 1.7mm combined bezel width",
      "55-inch display for maximum visual impact",
      "High brightness of 500 nits for clear visibility in varied lighting",
      "Advanced calibration technology for perfect color matching",
      "Multiple input options for versatile integration",
      "Designed for 24/7 continuous operation"
    ],
    specifications: [
      { name: "Model", value: "MW-A55-B3-E" },
      { name: "Screen Size", value: "55 inches" },
      { name: "Bezel Width", value: "1.7mm (0.85mm + 0.85mm)" },
      { name: "Resolution", value: "1920 × 1080 (Full HD)" },
      { name: "Brightness", value: "500 nits" },
      { name: "Contrast Ratio", value: "4000:1" },
      { name: "Viewing Angle", value: "178° horizontal, 178° vertical" },
      { name: "Response Time", value: "8ms" },
      { name: "Operating Hours", value: "24/7" },
      { name: "Input Ports", value: "HDMI, DVI-D, DisplayPort, VGA" }
    ],
    applications: [
      {
        name: "Corporate Lobbies",
        description: "Impressive visual welcome with MW-A55-B3-E",
        iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      },
      {
        name: "Retail Environments",
        description: "Engaging shopping experiences with MW-A55-B3-E",
        iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      },
      {
        name: "Command Centers",
        description: "Critical information displays with MW-A55-B3-E",
        iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      }
    ],
    rating: "4.7",
    reviewCount: "35",
    ratingDistribution: [
      { stars: 5, percentage: 80 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 }
    ],
    reviews: [
      { 
        name: "Robert Williams",
        date: "February 12, 2024",
        rating: 5,
        review: "We chose the 55-inch model for our airport information displays, and the impact has been remarkable. The large screen size combined with the minimal bezels creates an impressive and immersive information system. The high brightness ensures visibility even in our sun-filled terminal areas, and the reliability has been excellent during our 24/7 operation schedule."
      },
      { 
        name: "Jennifer Lopez",
        date: "January 3, 2024",
        rating: 4,
        review: "Our marketing agency installed a 2x2 configuration for a luxury brand client, and the visual impact has exceeded expectations. The 55-inch size creates a commanding presence, and the image quality is superb. The only minor issue we encountered was with the initial color calibration across panels, though the manufacturer's support team helped us resolve this promptly."
      },
      { 
        name: "James Wilson",
        date: "November 28, 2023",
        rating: 5,
        review: "As the IT director for a financial services firm, I needed a reliable and impressive solution for our trading floor data displays. The MW-A55-B3-E delivers exceptional performance with crisp text readability and consistent color reproduction. The minimal bezels create an almost continuous surface for our critical market data, and the reliability has been flawless."
      }
    ],
    relatedProducts: [
      {
        name: "46\" 1.7mm Bezel Width Video Wall",
        description: "Compact professional video wall display with ultra-narrow 1.7mm bezel for versatile installation options",
        image: "/LCD Displays/P1.jpg",
        slug: "mw-a46-b3-e",
        features: ["1.7mm Bezel", "46-inch Display", "Versatile Installation"]
      },
      {
        name: "55\" 0.88mm Bezel Width Video Wall",
        description: "Premium video wall solution with ultra-narrow 0.88mm bezel for creating virtually seamless large displays",
        image: "/LCD Displays/P3.jpg",
        slug: "mw-a55-b5-e",
        features: ["0.88mm Bezel", "Nearly Seamless", "Premium Quality"]
      }
    ]
  },
//new products
  {
    slug: "mw-a55-b5-e",
    name: "MW-A55-B5-E",
    type: "",
    shortDescription: "Large-Format Professional Display",
    keyFeature: "55-inch display with 1.7mm ultra-narrow bezel technology",
    primaryUse: "corporate lobbies, retail environments, and premium advertising displays",
    secondaryFeature: "high brightness and commercial-grade durability",
    description: "The MW-A55-B5-E is a 55-inch LCD video wall display featuring a 1.7mm ultra-narrow bezel for seamless multi-screen installations. Designed for impactful visual presentations, this large-format display is ideal for digital signage, conference rooms, and command centers. Its commercial-grade panel delivers high brightness and durability for 24/7 operation.",
    extendedDescription: "The MW-A55-B5-E represents the perfect balance of screen size and seamless integration for professional video wall installations. With its generous 55-inch display area and minimal 1.7mm bezel gap, this display maximizes visual impact while minimizing distractions. Engineered for commercial applications, it features enhanced brightness, anti-glare treatment, and specialized heat dissipation technology for reliable operation in demanding environments.",
    image: "/LCD Displays/MW-A55-B3-E.png",
    price: "1000",
    category: "Products/lcd-video",
    categoryName: "LCD Video Wall",
    features: ["1.7mm Bezel", "500nits Brightness", "Commercial Grade", "Full HD Resolution", "24/7 Operation"],
    highlights: [
      "Ultra-narrow 1.7mm combined bezel width",
      "55-inch display for maximum visual impact",
      "High brightness of 500 nits for clear visibility in varied lighting",
      "Advanced calibration technology for perfect color matching",
      "Multiple input options for versatile integration",
      "Designed for 24/7 continuous operation"
    ],
    specifications: [
      { name: "Model", value: "MW-A55-B5-E" },
      { name: "Screen Size", value: "55 inches" },
      { name: "Bezel Width", value: "1.7mm (0.85mm + 0.85mm)" },
      { name: "Resolution", value: "1920 × 1080 (Full HD)" },
      { name: "Brightness", value: "500 nits" },
      { name: "Contrast Ratio", value: "4000:1" },
      { name: "Viewing Angle", value: "178° horizontal, 178° vertical" },
      { name: "Response Time", value: "8ms" },
      { name: "Operating Hours", value: "24/7" },
      { name: "Input Ports", value: "HDMI, DVI-D, DisplayPort, VGA" }
    ],
    applications: [
      {
        name: "Corporate Lobbies",
        description: "Impressive visual welcome with MW-A55-B5-E",
        iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      },
      {
        name: "Retail Environments",
        description: "Engaging shopping experiences with MW-A55-B5-E",
        iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      },
      {
        name: "Command Centers",
        description: "Critical information displays with MW-A55-B5-E",
        iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      }
    ],
    rating: "4.7",
    reviewCount: "35",
    ratingDistribution: [
      { stars: 5, percentage: 80 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 }
    ],
    reviews: [
      { 
        name: "Robert Williams",
        date: "February 12, 2024",
        rating: 5,
        review: "We chose the 55-inch model for our airport information displays, and the impact has been remarkable. The large screen size combined with the minimal bezels creates an impressive and immersive information system. The high brightness ensures visibility even in our sun-filled terminal areas, and the reliability has been excellent during our 24/7 operation schedule."
      },
      { 
        name: "Jennifer Lopez",
        date: "January 3, 2024",
        rating: 4,
        review: "Our marketing agency installed a 2x2 configuration for a luxury brand client, and the visual impact has exceeded expectations. The 55-inch size creates a commanding presence, and the image quality is superb. The only minor issue we encountered was with the initial color calibration across panels, though the manufacturer's support team helped us resolve this promptly."
      },
      { 
        name: "James Wilson",
        date: "November 28, 2023",
        rating: 5,
        review: "As the IT director for a financial services firm, I needed a reliable and impressive solution for our trading floor data displays. The MW-A55-B5-E delivers exceptional performance with crisp text readability and consistent color reproduction. The minimal bezels create an almost continuous surface for our critical market data, and the reliability has been flawless."
      }
    ],
    relatedProducts: [
      {
        name: "46\" 1.7mm Bezel Width Video Wall",
        description: "Compact professional video wall display with ultra-narrow 1.7mm bezel for versatile installation options",
        image: "/LCD Displays/P1.jpg",
        slug: "mw-a46-b3-e",
        features: ["1.7mm Bezel", "46-inch Display", "Versatile Installation"]
      },
      {
        name: "55\" 1.7mm Bezel Width Video Wall",
        description: "Large-format professional video wall with ultra-narrow 1.7mm bezel for creating impressive display solutions",
        image: "/LCD Displays/P2.jpg",
        slug: "mw-a55-b3-e",
        features: ["1.7mm Bezel", "55-inch Display", "Professional Grade"]
      }
    ]
  },
// New Products
{
    slug: "mw-a46-b1-e",
    name: "MW-A46-B1-E",
    type: "",
    shortDescription: "Professional 46-inch Video Wall Display",
    keyFeature: "46-inch display with 3.5mm ultra-narrow bezel for seamless video wall installations",
    primaryUse: "control rooms, retail signage, collaborative spaces, and professional environments",
    secondaryFeature: "high brightness, commercial-grade durability, and wide viewing angles",
    description: "The MW-A46-B1-E is a 46-inch LCD video wall display featuring a slim 3.5mm bezel for minimal screen gap, delivering a unified and immersive display. Designed for professional environments, this video wall is ideal for control rooms, retail signage, and collaborative spaces where clarity and reliability are essential.",
    extendedDescription: "The MW-A46-B1-E provides seamless large-scale visuals with its 46-inch display and ultra-narrow 3.5mm bezel, making it perfect for tiled video wall installations. Engineered for commercial use, it offers high brightness, anti-glare treatment, and robust heat dissipation for reliable 24/7 operation. The wide 178° viewing angle ensures clear visibility from any position, while multiple input options allow for versatile integration in demanding environments.",
    image: "/LCD Displays/MW-A55-B1-E.webp",
    price: "1000",
    category: "Products/lcd-video",
    categoryName: "LCD Video Wall",
    features: ["3.5mm Bezel", "500nits Brightness", "Commercial Grade", "Full HD Resolution", "178° Viewing Angle", "24/7 Operation"],
    highlights: [
      "Ultra-narrow 3.5mm combined bezel width for seamless video walls",
      "46-inch display for impactful visual presentations",
      "High brightness of 500 nits for clear visibility in various lighting",
      "Wide 178° viewing angle for consistent image quality",
      "Multiple input options for flexible integration",
      "Engineered for 24/7 continuous operation"
    ],
    specifications: [
      { name: "Model", value: "MW-A46-B1-E" },
      { name: "Screen Size", value: "46 inches" },
      { name: "Bezel Width", value: "3.5mm (combined)" },
      { name: "Resolution", value: "1920 × 1080 (Full HD)" },
      { name: "Brightness", value: "500 nits" },
      { name: "Contrast Ratio", value: "3500:1" },
      { name: "Viewing Angle", value: "178° horizontal, 178° vertical" },
      { name: "Response Time", value: "8ms" },
      { name: "Operating Hours", value: "24/7" },
      { name: "Input Ports", value: "HDMI, DVI-D, DisplayPort, VGA" }
    ],
    applications: [
      {
        name: "Control Rooms",
        description: "Seamless monitoring and data visualization with MW-A46-B1-E",
        iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      },
      {
        name: "Retail Signage",
        description: "Immersive digital displays for retail environments with MW-A46-B1-E",
        iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      },
      {
        name: "Collaborative Spaces",
        description: "Unified large-format visuals for professional collaboration with MW-A46-B1-E",
        iconPath: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      }
    ],
    rating: "4.7",
    reviewCount: "35",
    ratingDistribution: [
      { stars: 5, percentage: 80 },
      { stars: 4, percentage: 15 },
      { stars: 3, percentage: 5 },
      { stars: 2, percentage: 0 },
      { stars: 1, percentage: 0 }
    ],
    reviews: [
      { 
        name: "Robert Williams",
        date: "February 12, 2024",
        rating: 5,
        review: "We installed the 46-inch model for our control room video wall, and the seamless appearance is impressive. The slim bezels and high brightness make data visualization clear and effective, even in a brightly lit environment. Reliability has been excellent for 24/7 operation."
      },
      { 
        name: "Jennifer Lopez",
        date: "January 3, 2024",
        rating: 4,
        review: "Our retail store uses a 2x2 configuration of the MW-A46-B1-E for digital signage. The image quality is sharp, and the narrow bezels create a unified look. Setup was straightforward, and the displays have performed well since installation."
      },
      { 
        name: "James Wilson",
        date: "November 28, 2023",
        rating: 5,
        review: "As an AV integrator, I recommend the MW-A46-B1-E for collaborative spaces and control rooms. The wide viewing angle and robust build make it a reliable choice for demanding environments. The multiple input options are a plus for flexible integration."
      }
    ],
    relatedProducts: [
      {
        name: "46\" 1.7mm Bezel Width Video Wall",
        description: "Compact professional video wall display with ultra-narrow 1.7mm bezel for versatile installation options",
        image: "/LCD Displays/P1.jpg",
        slug: "mw-a46-b3-e",
        features: ["1.7mm Bezel", "46-inch Display", "Versatile Installation"]
      },
      {
        name: "55\" 1.7mm Bezel Width Video Wall",
        description: "Large-format professional video wall with ultra-narrow 1.7mm bezel for creating impressive display solutions",
        image: "/LCD Displays/P2.jpg",
        slug: "mw-a55-b3-e",
        features: ["1.7mm Bezel", "55-inch Display", "Professional Grade"]
      }
    ]
},
//New products
{
  slug: "mw-a46-b5-e2",
  name: "MW-A46-B5-E2",
  type: "",
  shortDescription: "46\" 0.88mm Bezel Width Video Wall",
  keyFeature: "0.88mm ultra-narrow bezel for nearly seamless multi-screen installations",
  primaryUse: "broadcast studios, high-end retail, control rooms, and precision display environments",
  secondaryFeature: "high brightness, commercial-grade durability, and wide viewing angles",
  description: "Achieve the ultimate visual impact with the 46 inch 0.88mm Bezel Width Video Wall. With an incredibly thin bezel, this video wall provides an almost invisible edge, resulting in a smooth and uninterrupted viewing experience. It’s the top choice for applications requiring precision and clarity, including broadcasting studios and high-end retail environments.",
  extendedDescription: "The MW-A46-B5-E2 is engineered for environments where seamless visuals and precision are paramount. Its ultra-narrow 0.88mm bezel creates a virtually continuous display surface, ideal for tiled video wall installations in control rooms, broadcast studios, and luxury retail. The commercial-grade panel delivers high brightness, anti-glare performance, and robust heat dissipation for reliable 24/7 operation. Multiple input options and a wide 178° viewing angle ensure flexible integration and consistent image quality from any position.",
  image: "/LCD Displays/P3.jpg",
  price: "1000",
  category: "Products/lcd-video",
  categoryName: "LCD Video Wall",
  features: ["0.88mm Bezel", "500nits Brightness", "Full HD Resolution", "178° Viewing Angle", "24/7 Operation"],
  highlights: [
    "Ultra-narrow 0.88mm bezel for nearly seamless video walls",
    "46-inch display for impactful visual presentations",
    "High brightness of 500 nits for clear visibility in various lighting",
    "Wide 178° viewing angle for consistent image quality",
    "Multiple input options for flexible integration",
    "Engineered for 24/7 continuous operation"
  ],
  specifications: [
    { name: "Model", value: "MW-A46-B5-E2" },
    { name: "Screen Size", value: "46 inches" },
    { name: "Bezel Width", value: "0.88mm (combined)" },
    { name: "Resolution", value: "1920 × 1080 (Full HD)" },
    { name: "Brightness", value: "500 nits" },
    { name: "Contrast Ratio", value: "3500:1" },
    { name: "Viewing Angle", value: "178° horizontal, 178° vertical" },
    { name: "Response Time", value: "8ms" },
    { name: "Operating Hours", value: "24/7" },
    { name: "Input Ports", value: "HDMI, DVI-D, DisplayPort, VGA" }
  ],
  applications: [
    {
      name: "Broadcast Studios",
      description: "Precision visuals for broadcast environments with MW-A46-B5-E2",
      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      name: "High-End Retail",
      description: "Luxury retail displays with MW-A46-B5-E2",
      iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    },
    {
      name: "Control Rooms",
      description: "Seamless monitoring and data visualization with MW-A46-B5-E2",
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }
  ],
  rating: "4.7",
  reviewCount: "35",
  ratingDistribution: [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ],
  reviews: [
    { 
      name: "Robert Williams",
      date: "February 12, 2024",
      rating: 5,
      review: "We installed the 46-inch 0.88mm bezel model for our broadcast studio, and the seamless appearance is outstanding. The ultra-thin bezels and high brightness make our content look flawless on camera, and the reliability has been excellent for continuous operation."
    },
    { 
      name: "Jennifer Lopez",
      date: "January 3, 2024",
      rating: 4,
      review: "Our luxury retail client uses a 2x2 configuration of the MW-A46-B5-E2 for digital signage. The image quality is sharp, and the nearly invisible bezels create a premium look. Setup was straightforward, and the displays have performed well since installation."
    },
    { 
      name: "James Wilson",
      date: "November 28, 2023",
      rating: 5,
      review: "As an AV integrator, I recommend the MW-A46-B5-E2 for control rooms and broadcast environments. The wide viewing angle and robust build make it a reliable choice for demanding applications. The multiple input options are a plus for flexible integration."
    }
  ],
  relatedProducts: [
    {
      name: "46\" 1.7mm Bezel Width Video Wall",
      description: "Compact professional video wall display with ultra-narrow 1.7mm bezel for versatile installation options",
      image: "/LCD Displays/P1.jpg",
      slug: "mw-a46-b3-e",
      features: ["1.7mm Bezel", "46-inch Display", "Versatile Installation"]
    },
    {
      name: "55\" 1.7mm Bezel Width Video Wall",
      description: "Large-format professional video wall with ultra-narrow 1.7mm bezel for creating impressive display solutions",
      image: "/LCD Displays/P2.jpg",
      slug: "mw-a55-b3-e",
      features: ["1.7mm Bezel", "55-inch Display", "Professional Grade"]
    }
  ]
},
//New products
{
  slug: "mw-a55-b5-e",
  name: "MW-A55-B5-E",
  type: "",
  shortDescription: "BNVHGCGFCXHMGDGFJGJGDYTD",
  keyFeature: "0.88mm ultra-narrow bezel for nearly seamless multi-screen installations",
  primaryUse: "broadcast studios, high-end retail, control rooms, and precision display environments",
  secondaryFeature: "high brightness, commercial-grade durability, and wide viewing angles",
  description: "Achieve the ultimate visual impact with the 46 inch 0.88mm Bezel Width Video Wall. With an incredibly thin bezel, this video wall provides an almost invisible edge, resulting in a smooth and uninterrupted viewing experience. It’s the top choice for applications requiring precision and clarity, including broadcasting studios and high-end retail environments.",
  extendedDescription: "The MW-A46-B5-E2 is engineered for environments where seamless visuals and precision are paramount. Its ultra-narrow 0.88mm bezel creates a virtually continuous display surface, ideal for tiled video wall installations in control rooms, broadcast studios, and luxury retail. The commercial-grade panel delivers high brightness, anti-glare performance, and robust heat dissipation for reliable 24/7 operation. Multiple input options and a wide 178° viewing angle ensure flexible integration and consistent image quality from any position.",
  image: "/LCD Displays/P3.jpg",
  price: "1000",
  category: "Products/lcd-video",
  categoryName: "LCD Video Wall",
  features: ["0.88mm Bezel", "500nits Brightness", "Full HD Resolution", "178° Viewing Angle", "24/7 Operation"],
  highlights: [
    "Ultra-narrow 0.88mm bezel for nearly seamless video walls",
    "46-inch display for impactful visual presentations",
    "High brightness of 500 nits for clear visibility in various lighting",
    "Wide 178° viewing angle for consistent image quality",
    "Multiple input options for flexible integration",
    "Engineered for 24/7 continuous operation"
  ],
  specifications: [
    { name: "Model", value: "MW-A46-B5-E2" },
    { name: "Screen Size", value: "46 inches" },
    { name: "Bezel Width", value: "0.88mm (combined)" },
    { name: "Resolution", value: "1920 × 1080 (Full HD)" },
    { name: "Brightness", value: "500 nits" },
    { name: "Contrast Ratio", value: "3500:1" },
    { name: "Viewing Angle", value: "178° horizontal, 178° vertical" },
    { name: "Response Time", value: "8ms" },
    { name: "Operating Hours", value: "24/7" },
    { name: "Input Ports", value: "HDMI, DVI-D, DisplayPort, VGA" }
  ],
  applications: [
    {
      name: "Broadcast Studios",
      description: "Precision visuals for broadcast environments with MW-A46-B5-E2",
      iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      name: "High-End Retail",
      description: "Luxury retail displays with MW-A46-B5-E2",
      iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    },
    {
      name: "Control Rooms",
      description: "Seamless monitoring and data visualization with MW-A46-B5-E2",
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }
  ],
  rating: "4.7",
  reviewCount: "35",
  ratingDistribution: [
    { stars: 5, percentage: 80 },
    { stars: 4, percentage: 15 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 }
  ],
  reviews: [
    { 
      name: "Robert Williams",
      date: "February 12, 2024",
      rating: 5,
      review: "We installed the 46-inch 0.88mm bezel model for our broadcast studio, and the seamless appearance is outstanding. The ultra-thin bezels and high brightness make our content look flawless on camera, and the reliability has been excellent for continuous operation."
    },
    { 
      name: "Jennifer Lopez",
      date: "January 3, 2024",
      rating: 4,
      review: "Our luxury retail client uses a 2x2 configuration of the MW-A46-B5-E2 for digital signage. The image quality is sharp, and the nearly invisible bezels create a premium look. Setup was straightforward, and the displays have performed well since installation."
    },
    { 
      name: "James Wilson",
      date: "November 28, 2023",
      rating: 5,
      review: "As an AV integrator, I recommend the MW-A46-B5-E2 for control rooms and broadcast environments. The wide viewing angle and robust build make it a reliable choice for demanding applications. The multiple input options are a plus for flexible integration."
    }
  ],
  relatedProducts: [
    {
      name: "46\" 1.7mm Bezel Width Video Wall",
      description: "Compact professional video wall display with ultra-narrow 1.7mm bezel for versatile installation options",
      image: "/LCD Displays/P1.jpg",
      slug: "mw-a46-b3-e",
      features: ["1.7mm Bezel", "46-inch Display", "Versatile Installation"]
    },
    {
      name: "55\" 1.7mm Bezel Width Video Wall",
      description: "Large-format professional video wall with ultra-narrow 1.7mm bezel for creating impressive display solutions",
      image: "/LCD Displays/P2.jpg",
      slug: "mw-a55-b3-e",
      features: ["1.7mm Bezel", "55-inch Display", "Professional Grade"]
    }
  ]
},


]



































---
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
    answer: "We offer outdoor LED billboards in various sizes from 2m² to 100m², with pixel pitches ranging from 4mm to 16mm. All displays feature high brightness (5500-8000 nits), IP65/IP54 weather protection, and automatic brightness adjustment for optimal visibility in any condition."
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
---

<section class="py-20 bg-gray-50">
  <div class="max-w-4xl mx-auto px-4">
    
    <div class="space-y-6">
      {faqs.map((faq, index) => (
        <div 
          class="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          x-data="{ open: false }"
        >
          <button
            class="flex justify-between items-center w-full text-left focus:outline-none"
            @click="open = !open"
          >
            <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {faq.question}
            </h3>
            <span class="ml-6 flex-shrink-0 text-blue-600">
              <svg 
                class="w-6 h-6 transform transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            class="mt-4 text-gray-600 hidden group-hover:block transition-all duration-300"
            x-show="open"
            x-collapse
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>

    <div class="mt-12 text-center">
      <a 
        href="/company/contact-us"
        class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
      >
        Still have questions?
        <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>

<script>
  // Option 1: Import as ESM module
  import Alpine from 'alpinejs'

  // Option 2: Import specific features
  import { data, bind } from 'alpinejs'

  declare global {
    interface Window {
      Alpine: typeof Alpine;
    }
  }

  window.Alpine = Alpine;
  Alpine.start();
  // Add Alpine.js for animations
  document.addEventListener('alpine:init', () => {
    Alpine.data('collapse', () => ({
      open: false,
      toggle() {
        this.open = !this.open;
      },
    }));
  });
</script>

<style>
  /* Optional: Add custom animations */
  @keyframes slideDown {
    from { transform: translateY(-10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .group:hover .group-hover\:block {
    animation: slideDown 0.3s ease-out forwards;
  }
</style>