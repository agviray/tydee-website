import React, { useState } from 'react';
import {
  StyledBookNow,
  StyledFormContainer,
  StyledMessage,
} from '../components/styles/BookNow.styled';
import Layout from '../components/Layout';
import locationDot from '../images/book-now-page/location-dot-solid.svg';

const BookNowPage = () => {
  const [message, setMessage] = useState('');

  const submitPostalCode = (e) => {
    e.preventDefault();
    setMessage(
      `This is a demo page only. Booking handled by third party. Your postal code will not be submitted.`
    );
  };

  return (
    <Layout>
      <section>
        <StyledBookNow>
          <div>
            <h2>Book Online</h2>
            <p>Let's get started by entering your postal code.</p>
            <StyledFormContainer>
              <form onSubmit={(e) => e.submitPostalCode()}>
                <div className="formContent">
                  <label htmlFor="FormPostalCode"></label>
                  <span>
                    <img src={locationDot} alt="Location icon" />
                  </span>
                  <input
                    id="FormPostalCode"
                    name="postalCode"
                    type="text"
                    placeholder="Postal Code"
                  />
                  <button onClick={(e) => submitPostalCode(e)}>
                    <span>
                      <span></span>
                    </span>
                  </button>
                </div>
              </form>
            </StyledFormContainer>
          </div>
          <StyledMessage>
            <p>{message}</p>
          </StyledMessage>
        </StyledBookNow>
      </section>
    </Layout>
  );
};

export default BookNowPage;
