import React, { useState } from 'react';
import { urlFor } from '../../client';
import styles from './Modal.module.css';

const ListingModal = ({ isOpen, onClose, listing }) => {
  const [showListingAgentBio, setShowListingAgentBio] = useState(false);
  const [showBuyersAgentBio, setShowBuyersAgentBio] = useState(false);

  const toggleListingAgentBioVisibility = () => {
    setShowListingAgentBio(!showListingAgentBio);
  };

  const toggleBuyersAgentBioVisibility = () => {
    setShowBuyersAgentBio(!showBuyersAgentBio);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>X</button>
        {listing && (
          <div>
            <h2>{listing.title}</h2>
            <img src={urlFor(listing.image).url()} alt={listing.title} className={styles.listingImage} />
            <p>Price: ${listing.salePrice ? listing.salePrice.toLocaleString() : 'N/A'}</p>
            <p>{listing.description}</p>
            <div className={styles.additionalInfo}>
              <p>Bedrooms: {listing.bedrooms}</p>
              <p>Bathrooms: {listing.bathrooms}</p>
              <p>Square Feet: {listing.sqft}</p>
              <p>Lot Size: {listing.lotSize} acres</p>
              <p>Year Built: {listing.yearBuilt}</p>
              <p>Property Type: {listing.propertyType}</p>
              <p>Property Category: {listing.propertyCategory}</p>
              <p>MLS Number: {listing.mlsNumber}</p>
              <p>Date Listed: {listing.dateListed}</p>
              <p>Date Sold: {listing.dateSold}</p>
            </div>
            {listing.listingAgent && (
              <>
                <h3 onClick={toggleListingAgentBioVisibility} className={styles.agentBio}>
                  Listing Agent: {listing.listingAgent.name}
                </h3>
                {showListingAgentBio && (
                  <div className={styles.agentInfo}>
                    {listing.listingAgent.image && (
                      <img src={urlFor(listing.listingAgent.image).url()} alt={listing.listingAgent.name} className={styles.agentImage} />
                    )}
                    <p>{listing.listingAgent.bio}</p>
                  </div>
                )}
              </>
            )}
            {listing.buyersAgent && (
              <>
                <h3 onClick={toggleBuyersAgentBioVisibility} className={styles.agentBio}>
                  Buyer's Agent: {listing.buyersAgent.name}
                </h3>
                {showBuyersAgentBio && (
                  <div className={styles.agentInfo}>
                    {listing.buyersAgent.image && (
                      <img src={urlFor(listing.buyersAgent.image).url()} alt={listing.buyersAgent.name} className={styles.agentImage} />
                    )}
                    <p>{listing.buyersAgent.bio}</p>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingModal;
