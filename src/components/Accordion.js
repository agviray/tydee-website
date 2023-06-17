import React, { useState } from 'react';
import { Link } from 'gatsby';
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

    return bodyText.map(({ hasLink, linkText, linkHref, text }, index) =>
      hasLink ? (
        <p key={index}>{renderTextWithLink(linkText, linkHref, text)}</p>
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

  // - Used to render text with a link inside.
  const renderTextWithLink = (link, pageToLink, fullText) => {
    const textArray = fullText.split(link);
    const stringA = textArray[0];
    const stringB = textArray[1];
    return (
      <>
        {stringA}{' '}
        <Link to={pageToLink}>
          <em>{link}</em>
        </Link>
        {stringB.split('')[0] === '.' ? stringB : ` ${stringB}`}
      </>
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
