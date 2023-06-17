import React from 'react';
import {
  StyledSupplies,
  StyledContentContainer,
  StyledContentBlockOne,
  StyledContentBlockTwo,
  StyledList,
  StyledSampleList,
} from '../components/styles/Supplies.styled';
import Layout from '../components/Layout';
import useWindowDimensions from '../components/hooks/useWindowDimensions';

const sampleListColumnOne = [
  'Vacuum',
  'Mop',
  'Toilet Brush',
  'Degreaser',
  'Oven/Stove Cleaner',
  'Glass Cleaner',
  'All Purpose Cleaner',
];
const sampleListColumnTwo = [
  'Toilet Bowl Cleaner',
  'Mop Cleaning Solution',
  'Dawn Soap',
  'Duster',
  'Sponge',
  'Scouring Pads',
  'Paper Towels',
];

const Supplies = () => {
  const windowWidth = useWindowDimensions().width;
  return (
    <Layout>
      <section>
        <StyledSupplies>
          <div className="innerWrapper">
            <StyledContentBlockOne>
              <h2>NEED HELP WITH SUPPLIES?</h2>
              <p>
                We provide our own supplies, however some clients prefer for us
                to use their own supplies to prevent cross contamination. So we
                curated a list of items both we and our clients love!
              </p>
              <StyledSampleList>
                <h3>SAMPLE LIST</h3>
                <div>
                  <StyledList>
                    {sampleListColumnOne.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </StyledList>
                  <StyledList>
                    {sampleListColumnTwo.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                  </StyledList>
                </div>
              </StyledSampleList>
            </StyledContentBlockOne>
          </div>
        </StyledSupplies>
      </section>
    </Layout>
  );
};

export default Supplies;
