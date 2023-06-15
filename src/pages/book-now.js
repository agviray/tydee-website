import React from 'react';
import {
  StyledBookNow,
  StyledFormContainer,
} from '../components/styles/BookNow.styled';
import Layout from '../components/Layout';

const BookNowPage = () => {
  return (
    <Layout>
      <section>
        <StyledBookNow>
          <div>
            <h2>Book Online</h2>
            <p>Let's get started by entering your postal code.</p>
            <StyledFormContainer>
              <form>
                <div className="formContent">
                  <label htmlFor="FormPostalCode"></label>
                  <span>icon</span>
                  <input
                    id="FormPostalCode"
                    name="postalCode"
                    type="text"
                    placeholder="Postal Code"
                  />
                  <button>
                    <span>arrow icon</span>
                  </button>
                </div>
              </form>
            </StyledFormContainer>
          </div>
        </StyledBookNow>
      </section>
    </Layout>
  );
};

export default BookNowPage;
