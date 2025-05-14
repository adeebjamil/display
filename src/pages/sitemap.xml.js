export async function get() {
  // Base URL of the site
  const baseUrl = "https://unv-ledmodules.com";
  
  // Get the current date
  const today = new Date().toISOString().split('T')[0];
  
  // Define routes
  const pages = [
    // Main pages
    { url: "/", lastmod: today, priority: "1.0", changefreq: "weekly" },
    { url: "/about", lastmod: today, priority: "0.8", changefreq: "monthly" },
    { url: "/products", lastmod: today, priority: "0.9", changefreq: "weekly" },
    { url: "/solutions", lastmod: today, priority: "0.9", changefreq: "weekly" },
    { url: "/company/contact-us", lastmod: today, priority: "0.8", changefreq: "monthly" },
    
    // Product pages
    { url: "/products/interactive-display", lastmod: today, priority: "0.8", changefreq: "weekly" },
    { url: "/products/led-display", lastmod: today, priority: "0.8", changefreq: "weekly" },
    { url: "/products/lcd-video", lastmod: today, priority: "0.8", changefreq: "weekly" },
    { url: "/products/monitors-video", lastmod: today, priority: "0.8", changefreq: "weekly" },
    { url: "/products/wall-controller", lastmod: today, priority: "0.8", changefreq: "weekly" },
    { url: "/products/conferencing-products", lastmod: today, priority: "0.8", changefreq: "weekly" },
    
    // Solution pages
    { url: "/solutions/retail", lastmod: today, priority: "0.8", changefreq: "monthly" },
    { url: "/solutions/corporate", lastmod: today, priority: "0.8", changefreq: "monthly" },
    { url: "/solutions/education", lastmod: today, priority: "0.8", changefreq: "monthly" },
    { url: "/solutions/control-room", lastmod: today, priority: "0.8", changefreq: "monthly" },
    { url: "/solutions/dooh-airport", lastmod: today, priority: "0.8", changefreq: "monthly" },
    { url: "/solutions/video-conferencing", lastmod: today, priority: "0.8", changefreq: "monthly" },
    
    // Support pages
    { url: "/support/download-center", lastmod: today, priority: "0.7", changefreq: "monthly" },
    { url: "/support/how-to", lastmod: today, priority: "0.7", changefreq: "monthly" },
    
    // Company pages
    { url: "/company/about-us", lastmod: today, priority: "0.7", changefreq: "monthly" },
    { url: "/company/partners", lastmod: today, priority: "0.7", changefreq: "monthly" }
  ];
  
  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`).join('')}
</urlset>`;
  
  return {
    body: sitemap,
    headers: {
      "Content-Type": "application/xml"
    }
  };
}