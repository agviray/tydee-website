import React, { useState, useEffect, useRef } from 'react';
import GlobalFonts from '../components/styles/GlobalFonts';
import GlobalStyles from '../components/styles/GlobalStyles';
import { StyledLayout } from './styles/Layout.styled';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [navigationHeight, setNavigationHeight] = useState(null);
  const [prevScrollYPos, setPrevScrollYPos] = useState(0);
  const [isNavigationShown, setIsNavigationShown] = useState(true);
  const headerRef = useRef(null);

  // - Get height of the header on initial render of Layout, and
  //   update the navigationHeight state value.
  useEffect(() => {
    if (!navigationHeight) {
      setNavigationHeight(headerRef.current.offsetHeight);
    }
  }, []);

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

    // - When the value of navigationHeight is not null, assign toggleNavigationDisplay
    //   as the handler to the scroll event on window.
    if (navigationHeight) {
      window.addEventListener('scroll', toggleNavigationDisplay);
    }

    return () => {
      window.removeEventListener('scroll', toggleNavigationDisplay);
    };
  }, [prevScrollYPos]);

  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <StyledLayout isNavigationShown={isNavigationShown}>
        <header ref={headerRef}>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <h2>Footer Content</h2>
        </footer>
      </StyledLayout>
    </>
  );
};

export default Layout;
