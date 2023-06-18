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
import Accordion from '../components/Accordion';
import useWindowDimensions from '../components/hooks/useWindowDimensions';

const accordionContent = [
  {
    heading: 'For the Kitchen...',
    list: [
      {
        href: `https://www.amazon.ca/gp/product/B005MKY9LO/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=tydee-20&creative=330641&linkCode=as2&creativeASIN=B005MKY9LO&linkId=d74fdb6fb502dd9602aa14c52dafbeee&th=1`,
        text: `Weiman Cook Top Cleaning Kit`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B007BOEI88/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B007BOEI88&linkCode=as2&tag=tydee-20&linkId=4d6a8387606a999a51f7895c6a6fad40`,
        text: `Weiman Stainless Steel Cleaner`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B00E4X524S/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=tydee-20&creative=330641&linkCode=as2&creativeASIN=B00E4X524S&linkId=5db2d7a62e69b8f7cdc8a933f3375ff8`,
        text: `Goo Gone Oven and Grill Cleaner`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B002CQTXBC/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B002CQTXBC&linkCode=as2&tag=tydee-20&linkId=82a3e84ef6085a1de25616dde980cf3e&th=1`,
        text: `Scotch-Brite Steel Scouring Pad`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B00JQGVJ68/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B00JQGVJ68&linkCode=as2&tag=tydee-20&linkId=4d5cee9dcfe63296cae8a5b5bedb30b3`,
        text: `Scotch-Brite Scrub Sponge`,
      },
    ],
  },
  {
    heading: 'For the Bathrooms...',
    list: [
      {
        href: `https://www.amazon.ca/gp/product/B01HJM6AY6/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B01HJM6AY6&linkCode=as2&tag=tydee-20&linkId=b9a98df46ee4f554908f39d69871b48f`,
        text: `Dawn Platinum Powerwash Spray`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B00HHZ3QDE/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B00HHZ3QDE&linkCode=as2&tag=tydee-20&linkId=5eef692ae190c8a4d8aecbc6609d601f`,
        text: `Scrubbing Bubbles Shower Foamer`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B09MKJMSVT/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B09MKJMSVT&linkCode=as2&tag=tydee-20&linkId=55115954e96cc11d378a87ef34b737f7`,
        text: `Shower Scrubber for Cleaning`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B000CCDBRK/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B000CCDBRK&linkCode=as2&tag=tydee-20&linkId=30b85106b2c65d52a0461bed0bf4ad53`,
        text: `OXO All-Purpose Squeegee`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B07P2JCTCK/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B07P2JCTCK&linkCode=as2&tag=tydee-20&linkId=34f100e4813531ad39116f25f333c551`,
        text: `Vileda Toilet Brush`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B07XQWPD1P/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B07XQWPD1P&linkCode=as2&tag=tydee-20&linkId=cd8ea5e34940531d9e626c0a8df13656`,
        text: `Clorox Clinging Gel Cleaner`,
      },
    ],
  },
  {
    heading: 'Walls and Windows...',
    list: [
      {
        href: `https://www.amazon.ca/gp/product/B07MF3DY3C/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=tydee-20&creative=330641&linkCode=as2&creativeASIN=B07MF3DY3C&linkId=0d04f37118284af6e88d9551ae18144f`,
        text: `Mr. Clean Magic Erasers Original`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B084NWMPMP/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=tydee-20&creative=330641&linkCode=as2&creativeASIN=B084NWMPMP&linkId=70b075b020ddd091b597a56a20c36d16`,
        text: `Invisible Glass Premium Cleaner`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B001ATDY8U/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B001ATDY8U&linkCode=as2&tag=tydee-20&linkId=9fe6284659370f46e2a2a37314c17ef5`,
        text: `Windex Glass and Window Cleaner`,
      },
    ],
  },
  {
    heading: 'General Purpose...',
    list: [
      {
        href: `https://www.amazon.ca/gp/product/B01MZ6ZFDK/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=tydee-20&creative=330641&linkCode=as2&creativeASIN=B01MZ6ZFDK&linkId=52b371d46e323147236a3a43cdf7369d`,
        text: `Mrs. Meyer's Multi-Surface Spray`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B004BDOP8U/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B004BDOP8U&linkCode=as2&tag=tydee-20&linkId=07505cf45fb7043bdf717d8748ce4e6f`,
        text: `ATTITUDE Multipurpose Disinfectant`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B001TQ6IHS/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B001TQ6IHS&linkCode=as2&tag=tydee-20&linkId=224fe9f77874e26dd53af24d4b04fdcf`,
        text: `Swiffer 360 Dusters`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B08P2V5C5Q/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B08P2V5C5Q&linkCode=as2&tag=tydee-20&linkId=230b01f119883f8499a1ac60e7a2a4a7`,
        text: `Holikme 5 Pack Kitchen Brush Set`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B01NCB1UX3/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=tydee-20&creative=330641&linkCode=as2&creativeASIN=B01NCB1UX3&linkId=09c0fd42e929d68127bf0d854055fbf5`,
        text: `SimpleHouseware Microfiber Cloth`,
      },
    ],
  },
  {
    heading: 'Vacuums We Trust...',
    list: [
      {
        href: `https://www.amazon.ca/gp/product/B0764G4Y2V/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B0764G4Y2V&linkCode=as2&tag=tydee-20&linkId=a31dab9deef3b8de2c9eff1d0e724819`,
        text: `Shark Rocket Complete`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B01BD1BP7G/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=tydee-20&creative=330641&linkCode=as2&creativeASIN=B01BD1BP7G&linkId=7fdbee53cd24ecfce97249ae1f927cc4`,
        text: `Shark Rocket Ultra-Light Vacuum`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B07TSPB7L6/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B07TSPB7L6&linkCode=as2&tag=tydee-20&linkId=cc9fa782812f73032e54cbd00e37b375`,
        text: `Shark Rocket Pro Cordless Vacuum`,
      },
    ],
  },
  {
    heading: 'Mops We Love...',
    list: [
      {
        href: `https://www.amazon.ca/gp/product/B01KU4BSGK/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=tydee-20&creative=330641&linkCode=as2&creativeASIN=B01KU4BSGK&linkId=79b225eba00c2d95a6743b453f1d6378`,
        text: `Shark Genius Steam Pocket Mop`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B00H7I060M/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B00H7I060M&linkCode=as2&tag=tydee-20&linkId=18e1287b7d676f2618f3c8cc349ff925`,
        text: `Vileda Spin Mop & Bucket`,
      },
      {
        href: `https://www.amazon.ca/gp/product/B06X1FQ38K/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B06X1FQ38K&linkCode=as2&tag=tydee-20&linkId=67e248d6c03179b1e1f3802e2935e236`,
        text: `Vileda ProMist Microfibre Spray Mop`,
      },
    ],
  },
];

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
  const renderedAccordions = accordionContent.map((content, index) => {
    return (
      <article key={index}>
        <Accordion content={content} />
      </article>
    );
  });

  return (
    <Layout>
      <section>
        <StyledSupplies>
          <div className="innerWrapper">
            <StyledContentContainer>
              <StyledContentBlockOne>
                <h2>NEED HELP WITH SUPPLIES?</h2>
                <p>
                  We provide our own supplies, however some clients prefer for
                  us to use their own supplies to prevent cross contamination.
                  So we curated a list of items both we and our clients love!
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
              <StyledContentBlockTwo>
                <section>{renderedAccordions}</section>
              </StyledContentBlockTwo>
            </StyledContentContainer>
          </div>
        </StyledSupplies>
      </section>
    </Layout>
  );
};

export default Supplies;
