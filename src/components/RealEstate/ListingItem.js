import React from 'react';
import { urlFor } from '../../client';
import styles from './ListingItem.module.css';

const ListingItem = ({ listing, onClick }) => (
  <div className={styles.saleItem} onClick={onClick}>
    <img src={urlFor(listing.image).url()} alt={listing.title} className={styles.listingImage} />
    <h3>{listing.title}</h3>
    <p>Price: ${listing.listPrice ? listing.listPrice.toLocaleString() : 'N/A'}</p>
    {listing.listingAgent && <p>Agent: {listing.listingAgent.name}</p>}
  </div>
);

export default ListingItem;
