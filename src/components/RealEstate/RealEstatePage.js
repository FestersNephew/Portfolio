import React, { useState, useEffect } from 'react';
import RealEstateMap from './RealEstateMap';
import client, { urlFor } from '../../client';  
import './RealEstatePage.css';

const RealEstatePage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type == "listing"]{
        _id,
        title,
        description,
        price,
        image,
        bedrooms,
        bathrooms,
        sqft,
        propertyType,
        "agent": agent->{
          name,
          bio,
          image
        }
      }
    `).then(data => {
      setListings(data);
    });
  }, []);

  return (
    <div>
      <section className="section">
        <h1 className="real-estate-header">Explore Southern Vermont Real Estate</h1>
        <RealEstateMap />
      </section>

      <section className="section">
        <h2>Recent Sales</h2>
        <div className="sales-grid">
          {listings.map(listing => (
            <div key={listing._id} className="sale-item">
              <img src={urlFor(listing.image).url()} alt={listing.title} />
              <h3>{listing.title}</h3>
              <p>{listing.description}</p>
              <p>Price: ${listing.price.toLocaleString()}</p>
              <p>Bedrooms: {listing.bedrooms}</p>
              <p>Bathrooms: {listing.bathrooms}</p>
              <p>Square Feet: {listing.sqft.toLocaleString()}</p>
              <p>Property Type: {listing.propertyType}</p>
              {listing.agent && (
                <div className="agent-info">
                  <h4>Agent: {listing.agent.name}</h4>
                  <img src={urlFor(listing.agent.image).url()} alt={listing.agent.name} />
                  <p>{listing.agent.bio}</p>
                </div>
              )}
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
