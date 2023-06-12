import React, { useEffect, useRef } from 'react';
import {
  StyledDetailedService,
  StyledCard,
  StyledGridContainer,
  StyledAreaOfFocus,
  StyledBookNowButton,
  StyledDivider,
} from '../components/styles/DetailedService.styled';
import Layout from '../components/Layout';

// *** IMPORTANT ***
// - Each cardId property in this object, MUST match the hashToFullDetails property in cardContents object located in pricing.js page.
const cardContents = [
  {
    cardId: `home-cleaning`,
    heading: `HOME CLEANING`,
    headingText: `Whether you're looking for a general or deep clean, we provide dependable and affordable home cleaning services by professionals in your neighborhood. Our home cleaning packages provide personalized service for a thorough an effective clean throughout all common areas of your home.`,
    columnOneLists: [
      {
        listHeading: `ENTRYWAY`,
        listItems: [
          `Vacuum and Mop Floors`,
          `Light Switches and Doorknobs`,
          `Shoe and Jacket Stowaway`,
        ],
      },
      {
        listHeading: `KITCHEN`,
        listItems: [
          `Vacuum and Mop Floors`,
          `Load/Unload Dishwasher`,
          `Countertops and Backsplash`,
          `Inside Microwave`,
          `Stove Top and Sink`,
          `Appliance Exterior and Cabinet Fronts`,
          `Empty Garbage Bin`,
        ],
      },
      {
        listHeading: `BATHROOMS`,
        listItems: [
          `Vacuum and Mop Floors`,
          `Inside and Outside of Toilets`,
          `Bathtub and Shower Enclosures`,
          `Mirrors and Countertops`,
          `Light Switches and Doorknobs`,
          `Empty Garbage Bin`,
        ],
      },
    ],
    columnTwoLists: [
      {
        listHeading: `LIVING & DINING ROOM`,
        listItems: [
          `Dust and Clean All Surfaces, Mirrors, and Ornaments`,
          `Vacuum and Mop Floors`,
          `General Organization`,
        ],
      },
      {
        listHeading: `BEDROOMS`,
        listItems: [
          `Dust All Surfaces and Ornaments`,
          `Clean Mirrors`,
          `Vacuum and Mop Floors`,
          `Bed Making`,
          `Changing of Linens`,
          `General Organization`,
        ],
      },
      {
        listHeading: `LAUNDRY ROOM`,
        listItems: [`General Organization`, `Clearn Lint Trap`],
      },
    ],
  },
  {
    cardId: `move-in-out`,
    heading: `MOVE-IN / MOVE-OUT`,
    headingText: `Whether you're moving in or out of your home, this cleaning package will cover every inch for a deep clean. 
    This service is designed for empty spaces, with added focus around dirt and grime, to ensure your home is looking brand new. Our Move-in/Move-out cleaning is also ideal for real estate agents or home owners preparing for a showing or new tenant.`,
    columnOneLists: [
      {
        listHeading: `ENTRYWAY`,
        listItems: [
          `Vacuum and Mop Floors`,
          `Disinfect Light Switches and Doorknobs`,
          `Baseboards and Doorframes`,
          `Light Detail of Walls`,
        ],
      },
      {
        listHeading: `KITCHEN`,
        listItems: [
          `Inside Fridge, Oven, and Microwave`,
          `Inside Cabinets and Drawers`,
          `Dishwasher Sanitization Cycle`,
          `Countertops and Backsplash`,
          `Stove Top and Sink`,
          `Appliance Exterior and Cabinet Fronts`,
          `Baseboards and Window Ledges`,
          `Vacuum and Mop Floors`,
        ],
      },
      {
        listHeading: `BATHROOMS`,
        listItems: [
          `Vacuum and Mop Floors`,
          `Inside and Outside of Toilets`,
          `Bathtub and Shower Enclosures`,
          `Mirrors and Countertops`,
          `Shelving Units`,
          `Disinfect Light Switches and Doorknobs`,
          `Baseboards and Doorframes`,
        ],
      },
    ],
    columnTwoLists: [
      {
        listHeading: `LIVING & DINING ROOM`,
        listItems: [
          `Dust and Clean All Surfaces, Blinds, and Window Ledges`,
          `Baseboards and Doorframes`,
          `Vacuum and Mop Floors`,
          `Disinfect Light Switches and Door Knobs`,
          `Light Detailing of Walls`,
        ],
      },
      {
        listHeading: `BEDROOMS`,
        listItems: [
          `Dust and Clean All Surfaces, Blinds, and Window Ledges`,
          `Baseboards and Doorframes`,
          `Vacuum and Mop Floors`,
          `Closet Shelves`,
          `Disinfect Light Switches and Door Knobs`,
          `Light Detailing of Walls`,
        ],
      },
      {
        listHeading: `LAUNDRY ROOM`,
        listItems: [
          `Washing Machine Sanitization Cycle`,
          `Clear Lint Trap`,
          `Vacuum and Mop Floors`,
        ],
      },
    ],
  },
  {
    cardId: `short-term-rental`,
    heading: `SHORT-TERM RENTAL`,
    headingText: `Save time and hassle out of your day while knowing your guests are taken care of. Designed for AirBnB and rental hosts, our short-term rental cleaning service focuses on the overall cleanliness of your space, with hospitality standards in mind for an enhanced cleaning process.`,
    columnOneLists: [
      {
        listHeading: `ENTRYWAY`,
        listItems: [
          `Vacuum and Mop Floors`,
          `Disinfect Light Switches and Doorknobs`,
          `Shoe and Jacket Stowaway`,
        ],
      },
      {
        listHeading: `KITCHEN`,
        listItems: [
          `Vacuum and Mop Floors`,
          `Load/Unload Dishwasher`,
          `Countertops and Backsplash`,
          `Inside Microwave`,
          `Stove Top and Sink`,
          `Appliance Exterior and Cabinet Fronts`,
          `Empty Garbage Bin`,
        ],
      },
      {
        listHeading: `BATHROOMS`,
        listItems: [
          `Vacuum and Mop Floors`,
          `Inside and Outside of Toilets`,
          `Bathtub and Shower Enclosures`,
          `Mirrors and Countertops`,
          `Disinfect Light Switches and Doorknobs`,
          `Restock Bathroom Essentials`,
          `Empty Garbage Bin`,
        ],
      },
    ],
    columnTwoLists: [
      {
        listHeading: `LIVING & DINING ROOM`,
        listItems: [
          `Dust and Clean All Surfaces, Mirrors, and Ornaments`,
          `Vacuum and Mop Floors`,
          `General Organization`,
        ],
      },
      {
        listHeading: `BEDROOMS`,
        listItems: [
          `Dust All Surfaces and Ornaments`,
          `Clean Mirrors`,
          `Vacuum and Mop Floors`,
          `Machine Wash of Linens`,
          `Bed Making`,
          `General Organization`,
        ],
      },
      {
        listHeading: `LAUNDRY ROOM`,
        listItems: [`General Organization`, `Clear Lint Trap`],
      },
    ],
  },
  {
    cardId: `balcony-cleaning`,
    heading: `BALCONY CLEANING`,
    headingText: `Enjoy the outdoors and expand your living space by reviving your balcony or patio with cleaning that abides by condo and building regulations. Using specialized equipment for water reclamation, we're able to provide a deep clean while preventing any water spillage off the edge. Services are offered on a seasonal basis.`,
    columnOneLists: [
      {
        listHeading: `BALCONY AND PATIO`,
        listItems: [
          `Pressure Wash of Balcony or Patio Floors`,
          `Cobwebs`,
          `Patio Tiles`,
          `Patio furniture`,
          `Rail glass and Windows`,
          `Sliding Door Tracks`,
          `Balcony Screens`,
        ],
      },
    ],
    columnTwoLists: [
      {
        listHeading: `ADD-ONS`,
        listItems: [
          `Tile Removal`,
          `Spider Deterrent Spray`,
          `Patio Furniture Removal`,
        ],
      },
    ],
  },
];
const DetailedService = ({ location }) => {
  // - Smooth scroll to intended detailed service info, from clicking on See Full Details button in pricing.js page.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = location.state.hash;
      if (hash) {
        const element = document.querySelector(hash);
        const topOffset = element.offsetTop;
        window.scrollBy({ top: topOffset, behavior: 'smooth' });
      }
    }
  }, [location]);

  const renderCard = (content) => {
    const { cardId, heading, headingText, columnOneLists, columnTwoLists } =
      content;
    return (
      <article id={`${cardId}`} key={cardId}>
        <StyledCard>
          <section>
            <h3>{heading}</h3>
            <p>{headingText}</p>
          </section>
          <section>
            <div className="subheadingContainer">
              <h3>AREAS OF FOCUS</h3>
            </div>
            <StyledGridContainer>
              <div className="columnOneLists">
                <div>
                  {columnOneLists.map(({ listHeading, listItems }, index) => (
                    <StyledAreaOfFocus
                      key={`${cardId}-columnOne-${listHeading}-${index}`}
                    >
                      <h4>{listHeading}</h4>
                      <ul>
                        {listItems.map((item, index) => (
                          <li key={`${cardId}-${listHeading}-item-${index}`}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </StyledAreaOfFocus>
                  ))}
                </div>
              </div>
              <div className="columnTwoLists">
                <div>
                  {columnTwoLists.map(({ listHeading, listItems }, index) => (
                    <StyledAreaOfFocus
                      key={`${cardId}-columneTwo-${listHeading}-${index}`}
                    >
                      <h4>{listHeading}</h4>
                      <ul>
                        {listItems.map((item, index) => (
                          <li key={`${cardId}-${listHeading}-item-${index}`}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </StyledAreaOfFocus>
                  ))}
                </div>
              </div>
            </StyledGridContainer>
          </section>
          <StyledBookNowButton>Book Now</StyledBookNowButton>
        </StyledCard>
      </article>
    );
  };

  return (
    <Layout>
      <section>
        <StyledDetailedService>
          <div className="innerWrapper">
            <div className="headingContainer">
              <h2>DETAILED SERVICES</h2>
            </div>
            <div>
              {cardContents.map((content, index) => (
                <div key={index}>
                  <>{renderCard(content)}</>
                  <StyledDivider></StyledDivider>
                </div>
              ))}
            </div>
          </div>
        </StyledDetailedService>
      </section>
    </Layout>
  );
};

export default DetailedService;
