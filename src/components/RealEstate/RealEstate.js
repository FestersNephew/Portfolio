import React, { useState } from 'react';
import MapSVG from './MapSVG';
import Modal from './Modal';

const townInfo = {
  windham: {
      name: "Windham",
      description: "Windham is known for its historic significance, with roots dating back to the 1600s. It's home to the Windham Textile and History Museum, which showcases the town's rich industrial past. Windham also offers plenty of outdoor recreation opportunities in its picturesque landscapes&#8203;:citation[oaicite:14]{index=14}&#8203;&#8203;:citation[oaicite:13]{index=13}&#8203;.",
  },
  weston: {
      name: "Weston",
      description: "Weston is celebrated for its charming village and historic sites. It is home to the renowned Weston Playhouse and offers beautiful landscapes perfect for outdoor activities like hiking and skiing&#8203;:citation[oaicite:12]{index=12}&#8203;.",
  },
  londonderry: {
      name: "Londonderry",
      description: "Londonderry is known for its scenic beauty and outdoor recreational activities. It's a gateway to popular ski resorts and offers hiking, fishing, and stunning views year-round&#8203;:citation[oaicite:11]{index=11}&#8203;.",
  },
  jamaica: {
      name: "Jamaica",
      description: "Jamaica is famous for Jamaica State Park, which offers hiking, camping, and picnicking along the scenic West River. The park is a popular spot for leaf-peeping during the fall&#8203;:citation[oaicite:10]{index=10}&#8203;.",
  },
  wardsboro: {
      name: "Wardsboro",
      description: "Wardsboro is a quaint town known for its close-knit community and the annual Gilfeather Turnip Festival, celebrating the town's unique local vegetable&#8203;:citation[oaicite:9]{index=9}&#8203;.",
  },
  dover: {
      name: "Dover",
      description: "Dover is home to Mount Snow, a major ski resort in Vermont, making it a popular destination for winter sports enthusiasts&#8203;:citation[oaicite:8]{index=8}&#8203;.",
  },
  somerset: {
      name: "Somerset",
      description: "Somerset is a quiet town known for its outdoor activities, including hiking and exploring the Somerset Reservoir, a peaceful spot for fishing and boating&#8203;:citation[oaicite:7]{index=7}&#8203;.",
  },
  stratton: {
      name: "Stratton",
      description: "Stratton is famous for the Stratton Mountain Resort, which offers skiing, snowboarding, and year-round outdoor activities&#8203;:citation[oaicite:6]{index=6}&#8203;.",
  },
  winhall: {
      name: "Winhall",
      description: "Winhall is known for its proximity to Stratton Mountain and its beautiful natural surroundings, making it a great place for outdoor recreation&#8203;:citation[oaicite:5]{index=5}&#8203;.",
  },
  langrove: {
      name: "Langrove",
      description: "Langrove, though lesser-known, offers a peaceful retreat with its natural beauty and small-town charm&#8203;:citation[oaicite:4]{index=4}&#8203;.",
  },
  sunderland: {
      name: "Sunderland",
      description: "Sunderland is recognized for its scenic landscapes and outdoor activities, including hiking and fishing in the Battenkill River&#8203;:citation[oaicite:3]{index=3}&#8203;.",
  },
  peru: {
      name: "Peru",
      description: "Peru is a small town known for the Bromley Mountain Resort, which offers skiing in the winter and adventure parks in the summer&#8203;:citation[oaicite:2]{index=2}&#8203;.",
  },
  mttabor: {
      name: "Mount Tabor",
      description: "Mount Tabor offers stunning views and outdoor activities like hiking in the Green Mountain National Forest&#8203;:citation[oaicite:1]{index=1}&#8203;.",
  },
  glastonbury: {
      name: "Glastonbury",
      description: "Glastonbury is known for its mysterious unincorporated town status and ghost town legends, attracting curious visitors&#8203;:citation[oaicite:0]{index=0}&#8203;.",
  },
};

const RealEstate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleClick = (event) => {
    const townId = event.target.id;
    console.log('Town clicked:', townId);
    if (townInfo[townId]) {
      setModalContent(townInfo[townId]);
      setIsModalOpen(true);
    }
  };

  return (
    <div>
      <h1>Real Estate Map</h1>
      <div onClick={handleClick}>
        <MapSVG />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent && (
          <div>
            <h2>{modalContent.name}</h2>
            <p>{modalContent.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default RealEstate;
