import { useState, useEffect } from 'react';

// - Used for getting window dimensions whenever user resizes the browser.
// - Useful as a 'flag' for determining when to alter content on a page,
//   based on screen sizes.
const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({});

  // - Track inner dimensions of window whenever user
  //   resizes the browser.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const updateDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };

  return dimensions;
};

export default useWindowDimensions;
