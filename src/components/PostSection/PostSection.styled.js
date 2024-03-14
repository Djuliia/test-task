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

export const StyledField = styled(Field)`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid rgb(208, 207, 207);
  border-radius: 4px;
  color: ${theme.colors.secodaryText};
  &:not(:last-of-type) {
    margin-bottom: 50px;
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
  color: red;
  font-size: 12px;
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
  margin-bottom: 50px;
`;

export const UploadButton = styled.label`
  padding: 14px 15px;
  border-radius: 4px 0px 0px 4px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
`;

export const Label = styled.div`
  padding: 14px 15px;
  width: 297px;
  border: 1px solid #d0cfcf;
  border-left: none;
  border-radius: 0px 4px 4px 0px;
  color: ${theme.colors.secodaryText};
`;

export const FileField = styled(Field)`
  display: none;
`;
