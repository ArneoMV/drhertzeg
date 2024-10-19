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
  
  export default async function sitemap() {
    const baseUrl = 'https://drhertzeg.hr';
  
    const links = SITEMAP_URLS.map((item) => ({
      url: `${baseUrl}${item.url}`,
      lastModified: new Date().toISOString(), // Sets current date as lastModified
      priority: item.priority,
    }));
  
    return links;
  }
  