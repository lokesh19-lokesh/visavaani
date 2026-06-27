import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { countriesData } from '../data/countriesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');
const envPath = path.resolve(rootDir, '.env');

// Load environment variables manually
dotenv.config({ path: envPath });

const SITE_URL = 'https://visavaani.com';

const staticRoutes = [
  '/',
  '/countries',
  '/visas',
  '/advisor',
  '/auth',
  '/eligibility',
  '/compare',
  '/guides',
  '/news',
  '/checklists',
  '/faqs',
  '/blog',
  '/contact',
  '/expert',
  '/feedback',
  '/privacy',
  '/terms',
  '/about',
  '/resources',
  '/payments'
];

async function fetchBlogs() {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    console.warn("Supabase credentials not found in .env, skipping blog URLs.");
    return [];
  }

  try {
    const res = await fetch(`${supabaseUrl}/rest/v1/blogs?select=id`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      }
    });
    
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    return data.map(blog => `/blog/${blog.id}`);
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
    return [];
  }
}

async function generateSitemap() {
  console.log("Generating sitemap...");
  const urls = [...staticRoutes];

  // Add country and visa routes
  for (const country of countriesData) {
    urls.push(`/countries/${country.id}`);
    if (country.keyVisas) {
      for (const visa of country.keyVisas) {
        const visaSlug = visa.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        urls.push(`/countries/${country.id}/visa/${visaSlug}`);
      }
    }
  }

  // Add blog routes
  const blogRoutes = await fetchBlogs();
  urls.push(...blogRoutes);

  // Generate XML
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${url === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${url === '/' ? '1.0' : url.startsWith('/countries/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

  const publicDir = path.resolve(rootDir, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(path.resolve(publicDir, 'sitemap.xml'), sitemapContent);
  console.log(`Successfully generated sitemap.xml with ${urls.length} URLs!`);
}

generateSitemap().catch(console.error);
