// sitemap/page.jsx
'use client';
import Link from 'next/link';
import React from 'react';
import "./_style.scss";

const sitemapLinks = [
  // Prvi stupac - Opšti linkovi
  { url: '/', title: 'Homepage' },
  { url: '/kontakt', title: 'Contact' },
  { url: '/faq', title: 'Frequently Asked Questions' },
  { url: '/uvjeti-kupovine', title: 'Conditions of Purchase' },
  { url: '/blog', title: 'Blog' },
  { url: '/sitemap', title: 'Sitemap' }, // Dodao sam Sitemap link

  // Drugi stupac - Čajevi
  { url: '/cajevi', title: 'Teas' },
  { url: '/cajevi/smokvin-list-caj', title: 'Fig Leaf Tea' },
  { url: '/cajevi/caj-od-slatkog-pelina', title: 'Sweet Wormwood Tea' },
  { url: '/cajevi/energija-jutra-caj', title: 'Morning Energy Tea' },
  { url: '/cajevi/detox-caj', title: 'Detox Tea' },
  { url: '/cajevi/immuno-caj', title: 'Immuno Tea' },

  // Treći stupac - Kozmetika
  { url: '/kozmetika', title: 'Cosmetics' },
  { url: '/kozmetika/calming-gel', title: 'Calming Gel' },
  { url: '/kozmetika/hair-boost', title: 'Hair Boost' },
  { url: '/kozmetika/smiljolat', title: 'Smiljolat' },
  { url: '/kozmetika/lavandolat', title: 'Lavandorat' },
  { url: '/kozmetika/serum-od-smilja', title: 'Immortelle Serum' },
  { url: '/kozmetika/care-and-massage-oil', title: 'Care and Massage Oil' },
  { url: '/kozmetika/vitamin-night-cream', title: 'Vitamin Night Cream' },
  { url: '/kozmetika/hydrating-day-cream', title: 'Hydrating Day Cream' },
];

const SiteMapPage = () => {
  return (
    <div className="sitemap">
        <div className="sitemap-container">
            <h2>Sitemap</h2>
            <div className="links-container">
                {/* Prvi stupac */}
                <div className="column">
                    <h4>General Links</h4>
                    <ul>
                        <li><Link href="/"><p>Homepage</p></Link></li>
                        <li><Link href="/kontakt"><p>Contact</p></Link></li>
                        <li><Link href="/faq"><p>Frequently Asked Questions</p></Link></li>
                        <li><Link href="/uvjeti-kupovine"><p>Conditions of Purchase</p></Link></li>
                        <li><Link href="/blog"><p>Blog</p></Link></li>
                        <li><Link href="/sitemap"><p>Sitemap</p></Link></li>
                    </ul>
                </div>

                {/* Drugi stupac */}
                <div className="column">
                    <h4>Teas</h4>
                    <ul>
                        <li><Link href="/cajevi"><p>Teas</p></Link></li>
                        <li><Link href="/cajevi/smokvin-list-caj"><p>Fig Leaf Tea</p></Link></li>
                        <li><Link href="/cajevi/caj-od-slatkog-pelina"><p>Sweet Wormwood </p></Link></li>
                        <li><Link href="/cajevi/energija-jutra-caj"><p>Morning Energy Tea</p></Link></li>
                        <li><Link href="/cajevi/detox-caj"><p>Detox Tea</p></Link></li>
                        <li><Link href="/cajevi/immuno-caj"><p>Immuno Tea</p></Link></li>
                    </ul>
                </div>

                {/* Treći stupac */}
                <div className="column">
                    <h4>Cosmetics</h4>
                    <ul>
                        <li><Link href="/kozmetika"><p>Cosmetics</p></Link></li>
                        <li><Link href="/kozmetika/calming-gel"><p>Calming Gel</p></Link></li>
                        <li><Link href="/kozmetika/hair-boost"><p>Hair Boost</p></Link></li>
                        <li><Link href="/kozmetika/smiljolat"><p>Smiljolat</p></Link></li>
                        <li><Link href="/kozmetika/lavandolat"><p>Lavandorat</p></Link></li>
                        <li><Link href="/kozmetika/serum-od-smilja"><p>Immortelle Serum</p></Link></li>
                        <li><Link href="/kozmetika/care-and-massage-oil"><p>Care and Massage Oil</p></Link></li>
                        <li><Link href="/kozmetika/vitamin-night-cream"><p>Vitamin Night Cream</p></Link></li>
                        <li><Link href="/kozmetika/hydrating-day-cream"><p>Hydrating Day Cream</p></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

  );
};

export default SiteMapPage;
