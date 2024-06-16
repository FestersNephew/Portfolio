// RealEstatePage.js
import React from 'react';
import RealEstateMap from './RealEstateMap';
import './RealEstatePage.css';

const recentSales = [
  { id: 1, title: "Charming Farmhouse", description: "A beautiful 3-bedroom farmhouse on 10 acres.", imageUrl: "farmhouse.jpg" },
  { id: 2, title: "Modern Ski Chalet", description: "A luxurious chalet near the ski slopes.", imageUrl: "chalet.jpg" },
  // Add more sales as needed
];

const RealEstatePage = () => {
  return (
    <div>
      <section className="section">
        <h1 className="real-estate-header">Explore Southern Vermont Real Estate</h1>
        <RealEstateMap />
      </section>

      <section className="section">
        <h2>Recent Sales</h2>
        <div className="sales-grid">
          {recentSales.map(sale => (
            <div key={sale.id} className="sale-item">
              <img src={sale.imageUrl} alt={sale.title} />
              <h3>{sale.title}</h3>
              <p>{sale.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Wohler Realty Group</h2>
        <p className="real-estate-description">Visit our company website for more information and listings.</p>
        <a href="https://www.wohlerrealtygroup.com/" target="_blank" rel="noopener noreferrer" className="real-estate-link">Wohler Realty Group Website</a>
      </section>

      <section className="section">
        <h2>Real Estate Blog</h2>
        <p className="real-estate-description">Stay updated with the latest news and tips in the real estate market. Our blog covers topics like:</p>
        <ul className="real-estate-blog">
          <li>Vermont Real Estate Trends</li>
          <li>Ski Mountain Properties</li>
          <li>Farm and Agricultural Listings</li>
          <li>Charming Town Homes</li>
        </ul>
        <p className="real-estate-description">Visit our <a href="https://blog.companywebsite.com" target="_blank" rel="noopener noreferrer" className="real-estate-link">Real Estate Blog</a> for more information.</p>
      </section>
    </div>
  );
};

export default RealEstatePage;
