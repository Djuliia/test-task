import { TextField } from '@mui/material';
import { Field, Form, ErrorMessage } from 'formik';
import styled from 'styled-components';
import { theme } from 'theme';

export const Section = styled.section`
  padding: 0px 16px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 328px;
  @media screen and (min-width: 768px) {
    width: 380px;
  }

  p {
    font-size: 12px;
    line-height: 1.167;
    color: ${theme.colors.secodaryText};
    align-self: flex-start;
    margin-left: 16px;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 100%;
  padding: 14px 16px;
  border-radius: 4px;
  color: ${theme.colors.secondaryText};
  font-family: Nunito;
  outline: none;
  &:not(:last-of-type) {
    margin-top: 50px;
  }

  .Mui-error .MuiOutlinedInput-notchedOutline {
    border: ${props =>
      props.error ? '2px solid #F8F8F8' : '1px solid #d0cfcf'};
  }

  .MuiOutlinedInput-root {
    border: #d0cfcf;
    color: ${theme.colors.primaryText};
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border: 1px solid #d0cfcf;
    }

    .MuiFormHelperText-root {
      color: ${theme.colors.secondaryText};
      font-size: 12px;
      line-height: 1.167;
    }
  }

  .Mui-focused .MuiInputLabel-root {
    color: ${theme.colors.primaryText};
  }

  & label.Mui-focused {
    color: #7e7e7e;
  }

  .MuiFormLabel-root {
    color: #7e7e7e;
    font-size: 16px;
    line-height: 1.625;
  }
`;

export const RadioField = styled(Field)`
  position: relative;
  height: 22px;
  width: 22px;
  margin-right: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #d0cfcf;
    transform: translate(-50%, -50%);
  }

  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${theme.colors.secondary};
    transform: translate(-50%, -50%);
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${theme.colors.secondary};
    transform: translate(-50%, -50%);
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: ${theme.colors.error};
  font-size: 12px;
  margin-left: 16px;
  margin-top: 4px;
`;

export const Legend = styled.legend`
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.625;
  margin-bottom: 11px;
`;

export const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const RadioContainer = styled.div`
  margin-top: 43px;
  margin-bottom: 50px;
`;

export const RadioBox = styled.div``;

export const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UploadButton = styled.button`
  padding: 14px 15px;
  border-radius: 4px 0px 0px 4px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
  background-color: ${theme.colors.bg};
  &.error {
    border: 2px solid ${theme.colors.error};
  }
`;

export const Label = styled.div`
  padding: 14px 15px;
  width: 297px;
  border: 1px solid #d0cfcf;
  border-left: none;
  border-radius: 0px 4px 4px 0px;
  color: ${theme.colors.secodaryText};
  &.error {
    border: 2px solid ${theme.colors.error};
    border-left: none;
  }
`;

export const BtnSubmit = styled.button`
  text-align: center;
  padding: 4px;
  width: 100px;
  line-height: 1.625;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.primaryText};
  border-radius: 80px;
  border: none;
  margin: 0 auto;
  margin-top: 50px;
  transition: background-color 0.3 ease;

  &:hover {
    background-color: #ffe302;
  }

  &:disabled {
    background-color: #b4b4b4;
    color: #fff;
  }
`;
