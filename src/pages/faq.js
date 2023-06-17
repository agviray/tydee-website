import React from 'react';
import {
  StyledFaq,
  StyledContentContainer,
  StyledFlexContainer,
} from '../components/styles/Faq.styled';
import Layout from '../components/Layout';
import Accordion from '../components/Accordion';

const faqContent = [
  {
    heading: 'How much do your home cleaning and organizing services cost?',
    bodyText: [
      {
        hasLink: false,
        text: 'We want to be upfront with our pricing and keep things super simple.',
      },
    ],
    list: [
      '- $40 per hour for one-time service, per cleaner',
      '- $35 per hour for recurring service, per cleaner',
    ],
  },
  {
    heading: 'Do I need to provide the cleaners with any supplies?',
    bodyText: [
      {
        hasLink: false,
        text: 'We provide our own supplies. We ask that you provide a vacuum and mop as most of the cleaners take public transit. If you require us to provide a vacuum and mop at an additional cost, please let us know.',
      },
    ],
  },
  {
    heading: 'Do I need to be home?',
    bodyText: [
      {
        hasLink: false,
        text: 'Although not required, it is recommended that someone is home to let the cleaner in. It helps if you are present to let the cleaner know what areas and tasks to focus on. If you wish to be away from the home during the service, just let the cleaner know, or you may write it in the notes section before booking.',
      },
    ],
  },
  {
    heading: 'Do you provide a checklist for your cleaners?',
    bodyText: [
      {
        hasLink: false,
        text: `It may sound silly, but no! We don't provide a checklist. We realized that many of our clients prefer our fully customizable services to clean and organize your home.`,
      },
      {
        hasLink: false,
        text: `You point, we clean. It really is that simple!`,
      },
    ],
  },
  {
    heading: 'Will I get the same cleaner each time?',
    bodyText: [
      {
        hasLink: false,
        text: `We strive to provide consistent and reliable cleaning services.  This includes helping you find the right cleaner!  Our easy to use booking service allows you to choose between a specific cleaner, or the soonest available.  So if you'd like to see one of our cleaners on a regular basis, it is totally possible (subject to availability, of course).`,
      },
      {
        hasLink: true,
        linkText: 'here',
        linkHref: '/',
        text: `You can request a cleaner by name when booking here.`,
      },
    ],
  },
  {
    heading: `How many cleaners will be assigned?`,
    bodyText: [
      {
        hasLink: false,
        text: `We provide one to two cleaners depending on the size of the property. You will be billed for the total man hours.`,
      },
    ],
  },
  {
    heading: `What areas do you service?`,
    bodyText: [
      {
        hasLink: false,
        text: `Tydee is local to Toronto Proper. We currently service as far West as Etobicoke and as far East as Scarborough. Any postal code, starting with M is in our service area!`,
      },
      {
        hasLink: false,
        text: `*** New service areas will be available soon! ***`,
      },
    ],
  },
  {
    heading: `Are you available on evenings and weekends?`,
    bodyText: [
      {
        hasLink: true,
        linkText: 'HERE',
        linkHref: '/',
        text: `Yes! Book a cleaning service HERE to see if the time slot is available.`,
      },
    ],
  },
];

const Faq = () => {
  return (
    <Layout>
      <section>
        <StyledFaq>
          <div className="innerWrapper">
            <div className="headingContainer">
              <h2>FAQ</h2>
              <p>The Ins And Outs of How We Do Business</p>
            </div>
            <StyledContentContainer>
              <StyledFlexContainer>
                {faqContent.map((content, index) => (
                  <Accordion key={index} content={content} />
                ))}
              </StyledFlexContainer>
            </StyledContentContainer>
          </div>
        </StyledFaq>
      </section>
    </Layout>
  );
};

export default Faq;
