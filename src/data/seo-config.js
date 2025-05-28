export const seoConfig = {
  // Primary LED modules keywords for all pages
  primaryKeywords: {
    ledModules: "LED modules UAE, LED module lights Dubai, high power LED module supplier UAE, buy LED modules Dubai",
    displays: "interactive panels Dubai, smart boards Dubai, LED displays UAE, LCD displays Dubai",
    monitors: "CCTV monitors Dubai, video wall monitors UAE, security monitors Dubai",
    general: "display solutions Dubai, commercial displays UAE, digital signage Dubai"
  },
  
  // Local SEO terms
  locationKeywords: "Dubai, UAE, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain",
  
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
    const base = seoConfig.primaryKeywords[pageType] || seoConfig.primaryKeywords.general;
    const location = "Dubai, UAE";
    const specific = specificTerms.length > 0 ? specificTerms.join(", ") : "";
    
    if (specific) {
      return `${base}, ${specific}, ${location}`;
    }
    return `${base}, ${location}`;
  }
};