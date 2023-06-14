import React from 'react';
import { StyledFormItem } from './styles/FormItem.styled';

const FormItem = ({ children }) => {
  return <StyledFormItem>{children}</StyledFormItem>;
};

export default FormItem;
