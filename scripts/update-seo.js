import fs from 'fs';
import path from 'path';

const pagesDir = './src/pages';
const ledModuleKeywords = "LED modules UAE, LED module lights Dubai, high power LED module supplier UAE, buy LED modules Dubai";

// Function to update each page
function updatePageSEO(filePath, pageType) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update title tags to include LED modules
  content = content.replace(
    /title="([^"]+)"/g, 
    (match, title) => {
      if (!title.includes('LED modules') && !title.includes('LED module')) {
        return `title="${title} | LED Modules UAE"`;
      }
      return match;
    }
  );
  
  // Update descriptions to include LED modules
  content = content.replace(
    /description="([^"]+)"/g,
    (match, desc) => {
      if (!desc.includes('LED modules') && desc.length < 140) {
        return `description="${desc} Premium LED modules UAE and LED module lights Dubai available."`;
      }
      return match;
    }
  );
  
  fs.writeFileSync(filePath, content);
}

// Run the script
console.log('Starting SEO updates...');
// Add logic to process all .astro files