import React, { useState, useEffect } from 'react';
import {
  StyledAccordion,
  StyledHeading,
  StyledContent,
} from './styles/Accordion.styled';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledAccordion>
      <StyledHeading isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <p>Accordion Heading</p>
        <span isOpen={isOpen}></span>
      </StyledHeading>
      <StyledContent isOpen={isOpen}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut in tenetur
          sunt. Accusamus, repellendus magnam? Impedit excepturi corrupti sequi
          corporis?
        </p>
      </StyledContent>
    </StyledAccordion>
  );
};

export default Accordion;
