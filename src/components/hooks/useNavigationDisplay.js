import { useState, useEffect } from 'react';

const useNavigationDisplay = (windowWidth) => {
  // - navigationHeight based off of <header> element height value in Layout.styled.js.
  // - navigationHeight value must always match Layout's <header> element height.
  const navigationHeight = 100;
  const [prevScrollYPos, setPrevScrollYPos] = useState(0);
  const [isNavigationShown, setIsNavigationShown] = useState(true);

  useEffect(() => {
    // - Determines whether or not to display the website navigation by
    //   tracking scrollY position and toggling isNavigationShown.
    const toggleNavigationDisplay = () => {
      let currentScrollYPos = window.scrollY;
      if (typeof window !== 'undefined') {
        // - Show navigation once the current scroll position passes
        //   the height of the website navigation.
        if (currentScrollYPos < navigationHeight) {
          setIsNavigationShown(true);
          setPrevScrollYPos(currentScrollYPos);
          return;
        }
        // - If the user's scroll position is past the height of the website
        //   navigation, toggle the navigation display based on whether the
        //   user is scrolling up or down.
        if (currentScrollYPos < prevScrollYPos) {
          // - Show navigation if user scrolls up.
          setIsNavigationShown(true);
        } else if (currentScrollYPos > prevScrollYPos) {
          // - Hide navigation if user scrolls down.
          setIsNavigationShown(false);
        }
        // - Always update the scroll y position.
        setPrevScrollYPos(currentScrollYPos);
      }
    };

    window.addEventListener('scroll', toggleNavigationDisplay);

    return () => {
      window.removeEventListener('scroll', toggleNavigationDisplay);
    };
  }, [prevScrollYPos, isNavigationShown]);

  return windowWidth >= 900 ? true : isNavigationShown;
};

export default useNavigationDisplay;
