import React, { createContext, useState, useEffect, useContext, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Spaceship from './Spaceship';
import Door from './Door';
import Character from './Character';

const AnimationContext = createContext();

export const useAnimation = () => useContext(AnimationContext);

const AnimationProvider = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [doorClosed, setDoorClosed] = useState(true);
  const [characterVisible, setCharacterVisible] = useState(false);
  const location = useLocation();

  const startTransition = useCallback(() => {
    setCharacterVisible(false); // Character disappears first
    setTimeout(() => {
      setDoorClosed(true); // Door closes after character disappears
    }, 500);
  }, []);

  const endTransition = useCallback(() => {
    setTimeout(() => {
      setDoorClosed(false); // Door opens
      setTimeout(() => {
        setCharacterVisible(true); // Character reappears
      }, 500); // Delay for door opening
    }, 500); // Delay after route change before door opens
  }, []);

  useEffect(() => {
    startTransition();
    const timer = setTimeout(() => {
      endTransition();
    }, 1200); // Total duration of the transition including delays
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [location, startTransition, endTransition]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimationContext.Provider value={{ startTransition, endTransition }}>
      <Animation
        scrollPosition={scrollPosition}
        doorClosed={doorClosed}
        characterVisible={characterVisible}
        location={location.pathname} // Pass location to determine position
      />
      {children}
    </AnimationContext.Provider>
  );
};

const Animation = ({ scrollPosition, doorClosed, characterVisible, location }) => {
  const movementStyles = useMemo(() => {
    switch (location) {
      case '/':
        return { x: scrollPosition * 0.5, y: scrollPosition * 0.2 };
      case '/about':
        return { x: scrollPosition * -0.5, y: scrollPosition * 0.3 };
      case '/project':
        return { x: -scrollPosition * -0.5, y: scrollPosition * 0.3 };
      case '/resume':
        return { x: scrollPosition * 0.4, y: -scrollPosition * 0.4 };
      case '/farm':
        return { x: -scrollPosition * 0.3, y: scrollPosition * 0.3 };
      case '/realestate':
        return { x: scrollPosition * 0.5, y: -scrollPosition * 0.5 };
      case '/reiki':
        return { x: -scrollPosition * 0.4, y: scrollPosition * 0.2 };
      case '/family':
        return { x: -scrollPosition * 0.2, y: -scrollPosition * 0.3 };
      case '/ecotourism':
        return { x: scrollPosition * 0.3, y: scrollPosition * 0.2 };
      case '/blog':
        return { x: -scrollPosition * 0.6, y: scrollPosition * 0.4 };
      case '/post/:slug':
        return { x: -scrollPosition * 0.5, y: scrollPosition * 0.5 };
      default:
        return { x: 0, y: 0 }; // No scroll effect for default
    }
  }, [location, scrollPosition]);

  const initialPosition = useMemo(() => {
    const headerHeight = 80;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    switch (location) {
      case '/':
        return { x: screenWidth - 150, y: headerHeight + 20 };
      case '/about':
        return { x: 50, y: headerHeight + 30 };
      case '/project':
        return { x: screenWidth - 200, y: headerHeight + 50 };
      case '/resume':
        return { x: screenWidth - 150, y: headerHeight + 10 };
      case '/farm':
        return { x: 150, y: 50 };
      case '/realestate':
        return { x: screenWidth - 150, y: screenHeight / 2 - 50 };
      case '/reiki':
        return { x: 150, y:  100 };
      case '/family':
        return { x: 100, y: 50 };
      case '/ecotourism':
        return { x: screenWidth - 200, y: 150 };
      case '/blog':
        return { x: 0, y: screenHeight - 200 };
      case '/post/:slug':
        return { x: screenWidth - 200, y: 100 };
      default:
        return { x: 0, y: headerHeight + 20 };
    }
  }, [location]);

  const positionStyles = {
    position: 'fixed',
    zIndex: 10,
    width: '150px',
    height: '150px',
  };

  return (
    <motion.div
      className="animatedSpaceship"
      style={positionStyles}
      initial={{ opacity: 0, x: initialPosition.x, y: initialPosition.y }}
      animate={{
        opacity: 1,
        x: initialPosition.x + movementStyles.x,
        y: initialPosition.y + movementStyles.y,
      }}
      transition={{ type: "spring", stiffness: 50 }}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 3000 3000"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.g
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Spaceship />
        </motion.g>
        <motion.g
          initial={{ opacity: 1 }}
          animate={doorClosed ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Door />
        </motion.g>
        <motion.g
          initial={{ opacity: 0 }}
          animate={characterVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Character />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
};

export default AnimationProvider;
