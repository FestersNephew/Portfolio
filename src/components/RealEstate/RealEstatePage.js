import React, { useState, useEffect } from 'react';
import RealEstateMap from './RealEstateMap';
import client from '../../client';
import ListingItem from './ListingItem';
import ListingModal from './ListingModal';
import MapModal from './MapModal';
import styles from './RealEstatePage.module.css';

const RealEstatePage = () => {
  const [listings, setListings] = useState([]);
  const [isListingModalOpen, setIsListingModalOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [selectedMapInfo, setSelectedMapInfo] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "listing"]{
      title,
      description,
      listPrice,
      salePrice,
      address,
      city,
      state,
      zipCode,
      image,
      bedrooms,
      bathrooms,
      sqft,
      sqftFinished,
      daysOnMarket,
      propertyType,
      propertyCategory,
      listingAgent-> { name, bio, image },
      buyersAgent-> { name, bio, image },
      yearBuilt,
      lotSize,
      mlsNumber,
      dateListed,
      dateSold,
      pricePerSqft
    }`).then(data => {
      setListings(data);
    });
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.homebotapp.com/lgw/v1/widget.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.Homebot === 'function') {
        window.Homebot('#homebot_homeowner', '0c98807d5f7d09467f52eab7f86558da8823675d6e543be0', { 'theme': 'dark-mode-theme' });
      } else {
        console.error('Homebot is not a function');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleListingClick = (listing) => {
    setSelectedListing(listing);
    setIsListingModalOpen(true);
  };

  const handleMapClick = (mapInfo) => {
    setSelectedMapInfo(mapInfo);
    setIsMapModalOpen(true);
  };

  return (
    <div className={styles.realEstatePage}>
      <section className={styles.section}>
        <h1 className={styles.realEstateHeader}>Explore Southern Vermont Real Estate</h1>
        <RealEstateMap onMapClick={handleMapClick} />
      </section>

      <section className={styles.section}>
        <h2>Recent Sales</h2>
        <div className={styles.salesGrid}>
          {listings.map(listing => (
            <ListingItem 
              key={listing._id} 
              listing={listing} 
              onClick={() => handleListingClick(listing)} 
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Wohler Realty Group</h2>
        <p className={styles.realEstateDescription}>Visit our company website for more information and listings.</p>
        <a href="https://www.wohlerrealtygroup.com/" target="_blank" rel="noopener noreferrer" className={styles.realEstateLink}>Wohler Realty Group Website</a>
      </section>

      <section className={styles.section}>
        <h2>Real Estate Blog</h2>
        <p className={styles.realEstateDescription}>Stay updated with the latest news and tips in the real estate market. Our blog covers topics like:</p>
        <ul className={styles.realEstateBlog}>
          <li>Vermont Real Estate Trends</li>
          <li>Ski Mountain Properties</li>
          <li>Farm and Agricultural Listings</li>
          <li>Charming Town Homes</li>
        </ul>
        <p className={styles.realEstateDescription}>
          Visit our <a href="/blog" className={styles.realEstateLink}>Real Estate Blog</a> for more information.
        </p>
      </section>

      <section className={styles.section}>
        <h2>How Much is My House Worth?</h2>
        <div id="homebot_homeowner"></div>
      </section>

      {isListingModalOpen && (
        <ListingModal
          isOpen={isListingModalOpen}
          onClose={() => setIsListingModalOpen(false)}
          listing={selectedListing}
        />
      )}

      {isMapModalOpen && (
        <MapModal
          isOpen={isMapModalOpen}
          onClose={() => setIsMapModalOpen(false)}
          mapInfo={selectedMapInfo}
        />
      )}
    </div>
  );
};

export default RealEstatePage;
