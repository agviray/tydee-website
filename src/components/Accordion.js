import React, { useState } from 'react';
import {
  StyledAccordion,
  StyledHeading,
  StyledContent,
} from './styles/Accordion.styled';

const Accordion = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // - Renders main body text.
  const renderBodyText = (bodyTextDetails) => {
    const bodyText = [...bodyTextDetails];

    return bodyText.map(({ hasLink, text }, index) =>
      hasLink ? (
        <p key={index}>Render text with link!</p>
      ) : (
        <p key={index}>{text}</p>
      )
    );
  };

  // - Renders lists if necessary.
  const renderList = (listText) => {
    return (
      <ul>
        {listText.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    );
  };
  return (
    <StyledAccordion>
      <StyledHeading isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <p>{content.heading}</p>
        <div>
          <span></span>
        </div>
      </StyledHeading>
      <StyledContent isOpen={isOpen}>
        {renderBodyText(content.bodyText)}
        <>{content.list ? renderList(content.list) : null}</>
      </StyledContent>
    </StyledAccordion>
  );
};

export default Accordion;
