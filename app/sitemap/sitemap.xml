
import { GetServerSideProps } from 'next';

const EXTERNAL_DATA_URL = 'https://www.drhertzeg.hr';

const SITEMAP_URLS = [
  { url: '/', priority: 1.0 },
  { url: '/cajevi', priority: 0.8 },
  { url: '/cajevi/smokvin-list-caj', priority: 0.7 },
  { url: '/cajevi/caj-od-slatkog-pelina', priority: 0.7 },
  { url: '/cajevi/energija-jutra-caj', priority: 0.7 },
  { url: '/cajevi/detox-caj', priority: 0.7 },
  { url: '/cajevi/immuno-caj', priority: 0.7 },
  { url: '/kozmetika', priority: 0.8 },
  { url: '/kozmetika/calming-gel', priority: 0.7 },
  { url: '/kozmetika/hair-boost', priority: 0.7 },
  { url: '/kozmetika/smiljolat', priority: 0.7 },
  { url: '/kozmetika/lavandolat', priority: 0.7 },
  { url: '/kozmetika/serum-od-smilja', priority: 0.7 },
  { url: '/kozmetika/care-and-massage-oil', priority: 0.7 },
  { url: '/kozmetika/vitamin-night-cream', priority: 0.7 },
  { url: '/kozmetika/hydrating-day-cream', priority: 0.7 },
  { url: '/blog', priority: 0.6 },
  { url: '/blog/slatki-pelin-povijest-i-suvremena-istrazivanja', priority: 0.6 },
  { url: '/blog/hidrolati-prirodna-carolija-za-savrsenu-kozu', priority: 0.6 },
  { url: '/blog/prirodna-kosmetika-i-organski-cajevi-trendovi-koji-ocaravaju-svijet', priority: 0.6 },
  { url: '/ljekovite-kreme', priority: 0.6 },
  { url: '/kontakt', priority: 0.5 },
  { url: '/faq', priority: 0.5 },
  { url: '/uvjeti-kupovine', priority: 0.5 },
];

const generateSiteMap = () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${SITEMAP_URLS.map((item) => {
      return `
        <url>
          <loc>${EXTERNAL_DATA_URL}${item.url}</loc>
          <priority>${item.priority}</priority>
        </url>
      `;
    }).join('')}
  </urlset>`;
};

function SiteMap() {
  // This component doesn't need to render anything
  return null;
}

// Correctly exporting getServerSideProps
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Generate the sitemap XML
  const sitemap = generateSiteMap();

  // Set the header to return XML
  res.setHeader('Content-Type', 'text/xml');
  // Write the sitemap XML to the response
  res.write(sitemap);
  // End the response
  res.end();

  // Return an empty object for props
  return {
    props: {}, // Return an empty props object
  };
};

// Export the SiteMap component
export default SiteMap;