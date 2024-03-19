import styled from 'styled-components';
import { theme } from 'theme';

export const MainContainer = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 360px) {
    min-width: 360px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1024px;
  }
  @media screen and (min-width: 2560px) {
    max-width: 1170px;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 16px;

  @media screen and (min-width: 768px) {
    padding: 13px 32px;
  }

  @media screen and (min-width: 1040px) {
    padding: 13px 60px;
  }

  @media screen and (min-width: 2560px) {
    padding: 13px 0;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export const Btn = styled.a`
  text-align: center;
  padding: 4px;
  width: 100px;
  line-height: 1.625;
  background-color: ${theme.colors.primary};
  border-radius: 80px;
  transition: background-color 0.3 ease;
  &:hover {
    background-color: #ffe302;
  }
`;
