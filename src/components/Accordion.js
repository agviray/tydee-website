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

  // - Renders content in list form.
  // - Will render regular list item text, or list item link.
  const renderList = (list) => {
    return list.map((listItem, index) =>
      !listItem.href ? (
        <li key={index}>{listItem.text}</li>
      ) : (
        <li key={index}>
          <a href={listItem.href} target="_blank">
            {listItem.text}
          </a>
        </li>
      )
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

  const renderAccordionContent = (accordionContent) => {
    return (
      <>
        {accordionContent.bodyText
          ? renderBodyText(accordionContent.bodyText)
          : null}
        {accordionContent.list ? (
          <ul>{renderList(accordionContent.list)}</ul>
        ) : null}
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
        {renderAccordionContent(content)}
      </StyledContent>
    </StyledAccordion>
  );
};

export default Accordion;
