import React, { useState } from 'react';
import {
  StyledApplication,
  StyledForm,
  StyledApplicationInputButton,
} from './styles/Application.styled';
import FormItem from '../components/FormItem';
import Dropdown from '../components/Dropdown';

const dropdown = {
  label: `Desired position`,
  options: [
    {
      label: `Choose an option`,
      value: `default value`,
    },
    {
      label: `Home Cleaner`,
      value: `home cleaner`,
    },
    {
      label: `Balcony Cleaner`,
      value: `balcony cleaner`,
    },
    {
      label: `Window Cleaner`,
      value: `window cleaner`,
    },
  ],
};

const Application = () => {
  const [selectedDropdownValue, setSelectedDropdownValue] = useState(
    dropdown.options[0].value
  );
  return (
    <StyledApplication>
      <p>Apply today and we'll be in touch!</p>
      <div className="formContainer">
        <StyledForm
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h3>APPLY HERE</h3>
          <div className="contentWrapper">
            <div className="flexContainer">
              <div className="formItemContainer textItemContainer">
                <FormItem>
                  <label htmlFor="ApplicationFormFirstName">First Name</label>
                  <div className="textFormItem">
                    <input
                      id="ApplicationFormFirstName"
                      name="firstName"
                      type="text"
                    />
                  </div>
                </FormItem>
              </div>
              <div className="formItemContainer textItemContainer">
                <FormItem>
                  <label htmlFor="ApplicationFormLastName">Last Name</label>
                  <div className="textFormItem">
                    <input
                      id="ApplicationFormLastName"
                      name="lastName"
                      type="text"
                    />
                  </div>
                </FormItem>
              </div>
            </div>
            <div className="flexContainer">
              <div className="formItemContainer textItemContainer">
                <FormItem>
                  <label htmlFor="ApplicationFormEmail">Email</label>
                  <div className="textFormItem">
                    <input id="ApplicationFormEmail" name="email" type="text" />
                  </div>
                </FormItem>
              </div>
              <div className="formItemContainer textItemContainer">
                <FormItem>
                  <label htmlFor="ApplicationFormPhone">Phone</label>
                  <div className="textFormItem">
                    <input id="ApplicationFormPhone" name="phone" type="text" />
                  </div>
                </FormItem>
              </div>
            </div>
            <div className="formItemContainer dropdownItemContainer">
              <FormItem>
                <Dropdown
                  dropdownLabel={dropdown.label}
                  options={dropdown.options}
                  value={selectedDropdownValue}
                  onSelectedDropdownValueChange={setSelectedDropdownValue}
                />
              </FormItem>
            </div>
            <div className="formItemContainer textItemContainer">
              <FormItem>
                <label htmlFor="ApplicationFormWorkExperience">
                  Work Experience
                </label>
                <div className="textFormItem">
                  <textarea
                    id="ApplicationFormWorkExperience"
                    name="workExperience"
                    rows="7"
                  ></textarea>
                </div>
              </FormItem>
            </div>
            <div className="formItemContainer textItemContainer">
              <FormItem>
                <label htmlFor="ApplicationFormAvailability">
                  Availability
                </label>
                <div className="textFormItem">
                  <input
                    id="ApplicationFormAvailability"
                    name="availability"
                    placeholder="eg. Mon - Fri 9am - 5pm"
                    type="text"
                  />
                </div>
              </FormItem>
            </div>
            <StyledApplicationInputButton>
              <input
                type="button"
                className="applicationButton"
                value="Submit Application"
                onClick={(e) => e.preventDefault()}
              />
            </StyledApplicationInputButton>
          </div>
        </StyledForm>
      </div>
    </StyledApplication>
  );
};

export default Application;
