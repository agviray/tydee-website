import React from 'react';
import {
  StyledBecomeATydeePro,
  StyledApplyNowButtonContainer,
  StyledApplyNowButton,
  StyledInnerContainer,
  StyledWhyGrid,
  StyledWhoGrid,
  StyledCard,
  StyledDivider,
  StyledApplicationSection,
  StyledForm,
} from '../components/styles/BecomeATydeePro.styled';
import Layout from '../components/Layout';
import FormItem from '../components/FormItem';

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
                <StyledApplyNowButton>
                  <span>Apply Now</span>
                </StyledApplyNowButton>
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
            <StyledInnerContainer>
              <h3>IS THIS YOU?</h3>
              <StyledApplicationSection>
                <p>Apply today and we'll be in touch!</p>
                <div className="formContainer">
                  <StyledForm onSubmit={(e) => e.preventDefault()}>
                    <h3>APPLY HERE</h3>
                    <div className="contentWrapper">
                      <div className="flexContainer">
                        <div className="formItemContainer textItemContainer">
                          <FormItem>
                            <label htmlFor="">First Name</label>
                            <div className="textFormItem">
                              <input type="text" />
                            </div>
                          </FormItem>
                        </div>
                        <div className="formItemContainer textItemContainer">
                          <FormItem>
                            <label htmlFor="">Last Name</label>
                            <div className="textFormItem">
                              <input type="text" />
                            </div>
                          </FormItem>
                        </div>
                      </div>
                      <div className="flexContainer">
                        <div className="formItemContainer textItemContainer">
                          <FormItem>
                            <label htmlFor="">Email</label>
                            <div className="textFormItem">
                              <input type="text" />
                            </div>
                          </FormItem>
                        </div>
                        <div className="formItemContainer textItemContainer">
                          <FormItem>
                            <label htmlFor="">Phone</label>
                            <div className="textFormItem">
                              <input type="text" />
                            </div>
                          </FormItem>
                        </div>
                      </div>
                      <div className="singleContainer">
                        <div className="formItemContainer dropdownItemContainer">
                          <FormItem>
                            <label htmlFor="">Desired Position</label>
                            <select name="" id="">
                              <option value="select an option">
                                -- Choose an option --
                              </option>
                              <option value="home cleaner">Home Cleaner</option>
                              <option value="balcony cleaner">
                                Balcony Cleaner
                              </option>
                              <option value="window cleaner">
                                Window Cleaner
                              </option>
                            </select>
                          </FormItem>
                        </div>
                      </div>
                      <div className="singleContainer">
                        <div className="formItemContainer textItemContainer">
                          <FormItem>
                            <label htmlFor="">Work Experience</label>
                            <div className="textFormItem">
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                              ></textarea>
                            </div>
                          </FormItem>
                        </div>
                      </div>
                      <div className="singleContainer">
                        <div className="formItemContainer textItemContainer">
                          <FormItem>
                            <label htmlFor="">Availability</label>
                            <div className="textFormItem">
                              <input type="text" />
                            </div>
                          </FormItem>
                        </div>
                      </div>
                      <div className="singleContainer">
                        <input
                          type="button"
                          value="Apply Now"
                          onClick={(e) => e.preventDefault()}
                        />
                      </div>
                    </div>
                  </StyledForm>
                </div>
              </StyledApplicationSection>
            </StyledInnerContainer>
          </section>
        </StyledBecomeATydeePro>
      </section>
    </Layout>
  );
};

export default BecomeATydeePro;
