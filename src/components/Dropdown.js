import React from 'react';
import { StyledLabel, StyledDropdown } from './styles/Dropdown.styled';

const Dropdown = ({
  dropdownLabel,
  options,
  value,
  onSelectedDropdownValueChange,
}) => {
  const updateSelectValue = (value) => {
    onSelectedDropdownValueChange(value);
  };

  return (
    <>
      <StyledLabel htmlFor="ApplicationFormDesiredPosition">
        {dropdownLabel}
      </StyledLabel>
      <StyledDropdown
        id="ApplicationFormDesiredPosition"
        name="position"
        value={value}
        onChange={(e) => updateSelectValue(e.target.value)}
      >
        {options.map(({ label, value }) => (
          <option key={label} value={value}>
            {label}
          </option>
        ))}
      </StyledDropdown>
    </>
  );
};

export default Dropdown;
