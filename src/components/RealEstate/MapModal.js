import React from 'react';
import styles from './Modal.module.css';

const MapModal = ({ isOpen, onClose, mapInfo }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={onClose}>X</button>
        {mapInfo && (
          <div>
            <h2>{mapInfo.title}</h2>
            <p>{mapInfo.description}</p>
            {/* Add more map-related info here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapModal;
