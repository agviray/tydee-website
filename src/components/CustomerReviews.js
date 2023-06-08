import React from 'react';
import {
  StyledCustomerReviews,
  StyledReviewContainer,
  StyledReviewCard,
} from './styles/CustomerReviews.styled';
import stars from '../images/home-page/stars-tydee.svg';

const customerReviews = [
  {
    reviewParagraphs: [
      `I recently had my balcony cleaned with Tydee and simply put - incredible experience from start to finish. Communication was so quick and booking was super easy. Joel is extremely respectful of your space (and even brought shoes for indoor use only!). My balcony hadn't been cleaned since it was built so this was much needed - amazing and very thorough clean!! Would most definitely recommend as I'll be using these services again myself 😀.`,
    ],
    reviewerName: 'Brittany A.',
  },
  {
    reviewParagraphs: [
      `My husband and I moved into a two bedroom plus den. We both have hectic schedules and barely had time to unpack let alone clean. I have had awful experiences with cleaning companies so I was hesitant to drop a few hundred dollars. I reached out to Tydee, and was pleasantly surprised at how quick the communication was and easy to book. Our place was a mess when they arrived so I asked them to focus on the floors and bathrooms. Hours later, I came out of my office to a place I did not recognize. I was absolutely blown away at how tidy, clean and more importantly it felt like a home. They don’t just do the bare minimum which was my issue with other cleaning companies. They are my go to now and will be cleaning my place on a regular basis.`,
    ],
    reviewerName: 'Ann S.',
  },
  {
    reviewParagraphs: [
      `Our balcony has been unused because it’s been unloved for so long. We gave these folks a call and they have made it an inviting space again!`,
      `Very detailed with their deep cleaning, everything from the floor, the rails, the screen door and even our patio furniture were meticulously washed with care. Friendly as well!`,
      `Thank you! I would highly recommend hiring Tydee`,
    ],
    reviewerName: 'Traci C.',
  },
];

const CustomerReviews = () => {
  return (
    <StyledCustomerReviews>
      <div className="innerWrapper">
        <div className="headingContainer">
          <h2>CUSTOMER REVIEWS</h2>
        </div>
        <StyledReviewContainer>
          {customerReviews.map((review, index) => (
            <StyledReviewCard key={index}>
              <div className="starRating">
                <span>
                  <img src={stars} alt="Five star rating" />
                </span>
              </div>
              <div className="review">
                {review.reviewParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <span className="reviewer">
                <p>{review.reviewerName}</p>
              </span>
            </StyledReviewCard>
          ))}
        </StyledReviewContainer>
      </div>
    </StyledCustomerReviews>
  );
};

export default CustomerReviews;
