import React, { useState, useEffect } from 'react';
import RealEstateMap from './RealEstateMap';
import client, { urlFor } from '../../client';
import Modal from './Modal';
import { Link } from 'react-router-dom';
import './RealEstatePage.css';

const RealEstatePage = () => {
  const [listings, setListings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    client.fetch(`*[_type == "listing"]{
      ...,
      agent-> { name, bio, image }
    }`).then(data => {
      setListings(data);
    });
  }, []);

  const handleListingClick = (listing) => {
    setModalContent(listing);
    setShowBio(false);
    setIsModalOpen(true);
  };

  const toggleBioVisibility = () => {
    setShowBio(!showBio);
  };

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
            <div key={listing._id} className="sale-item" onClick={() => handleListingClick(listing)}>
              <img src={urlFor(listing.image).url()} alt={listing.title} />
              <h3>{listing.title}</h3>
              <p>Price: ${listing.price.toLocaleString()}</p>
              {listing.agent && <p>Agent: {listing.agent.name}</p>}
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
        <p className="real-estate-description">
          Visit our <Link to="/blog" className="real-estate-link">Real Estate Blog</Link> for more information.
        </p>      
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent && (
          <div>
            <h2>{modalContent.title}</h2>
            <img src={urlFor(modalContent.image).url()} alt={modalContent.title} />
            <p>Price: ${modalContent.price.toLocaleString()}</p>
            {modalContent.agent && (
              <>
                <h3 onClick={toggleBioVisibility} className="agent-bio">
                  {modalContent.agent.name}
                </h3>
                {showBio && (
                  <div className="agent-info">
                    {modalContent.agent.image && (
                      <img src={urlFor(modalContent.agent.image).url()} alt={modalContent.agent.name} />
                    )}
                    <p>{modalContent.agent.bio}</p>
                  </div>
                )}
              </>
            )}
            <p>{modalContent.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default RealEstatePage;
