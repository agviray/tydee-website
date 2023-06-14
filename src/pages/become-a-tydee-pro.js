import React from 'react';
import { Link } from 'gatsby';
import {
  StyledBecomeATydeePro,
  StyledApplyNowButtonContainer,
  StyledApplyNowButton,
  StyledInnerContainer,
  StyledWhyGrid,
  StyledWhoGrid,
  StyledCard,
  StyledDivider,
} from '../components/styles/BecomeATydeePro.styled';
import Layout from '../components/Layout';
import Application from '../components/Application';

const whyCards = [
  {
    id: `set-hours`,
    heading: `Set Your Own Hours`,
    textGroup: [
      `Work how, when and where you want.`,
      `Offer customers with any of our services.`,
      `You can set a flexible schedule and work area.`,
    ],
  },
  {
    id: `great-pay`,
    heading: `Great Pay`,
    textGroup: [
      `Earn up to $50/hr and keep 100% of the tips!`,
      `Get a weekly payout directly to your bank account.`,
    ],
  },
  {
    id: `grow-business`,
    heading: `Grow Your Own Business`,
    textGroup: [
      `Manage your clientele using our intuitive platform.`,
      `We take care of the marketing, sales and operations so you can focus on what you do best.`,
    ],
  },
  {
    id: `no-fees`,
    heading: `No Upfront Fees`,
    textGroup: [
      `It’s absolutely free to join Tydee. We only charge a nominal finders fee from each job you fulfill.`,
    ],
  },
];

const whoCards = [
  {
    id: `requirements`,
    heading: `Requirements`,
    textGroup: [
      `You are at least 18 years of age, have access to a form of transportation, have a smartphone with a data plan and a chequing account. You must also be legally authorized to work in Canada.`,
    ],
  },
  {
    id: `love-cleaning`,
    heading: `Have A Love For Cleaning`,
    textGroup: [
      `Do you find cleaning as satisfying as we do? Do you take take pride in your work and pay attention to little details? If so, you may be just the person we are looking for.`,
    ],
  },
  {
    id: `positive-attitude`,
    heading: `Have A Positive Attitude`,
    textGroup: [
      `You are friendly, reliable, and strive to provide the best customer experience possible.`,
    ],
  },
];

const BecomeATydeePro = () => {
  const renderCards = (cards) => {
    return cards.map(({ id, heading, textGroup }, index) => (
      <StyledCard key={id}>
        <h4>{heading}</h4>
        <ul>
          {textGroup.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </StyledCard>
    ));
  };

  return (
    <Layout>
      <section>
        <StyledBecomeATydeePro>
          <div className="innerWrapper">
            <div className="headingContainer">
              <h2>CLEANING JOBS AT YOUR FINGERTIPS</h2>
              <p>
                Find local jobs that fit your skills and schedule. With Tydee,
                you have the freedom to be your own boss.
              </p>
              <StyledApplyNowButtonContainer>
                <Link to="#application">
                  <StyledApplyNowButton>
                    <span>Apply Now</span>
                  </StyledApplyNowButton>
                </Link>
              </StyledApplyNowButtonContainer>
            </div>
          </div>
          <section>
            <StyledInnerContainer>
              <h3>WHY WORK FOR TYDEE?</h3>
              <StyledWhyGrid>{renderCards(whyCards)}</StyledWhyGrid>
              <StyledDivider></StyledDivider>
            </StyledInnerContainer>
          </section>
          <section>
            <StyledInnerContainer>
              <h3>WHO ARE WE LOOKING FOR?</h3>
              <StyledWhoGrid>{renderCards(whoCards)}</StyledWhoGrid>
            </StyledInnerContainer>
          </section>
          <section>
            <StyledInnerContainer id="application">
              <h3>IS THIS YOU?</h3>
              <Application />
            </StyledInnerContainer>
          </section>
        </StyledBecomeATydeePro>
      </section>
    </Layout>
  );
};

export default BecomeATydeePro;
