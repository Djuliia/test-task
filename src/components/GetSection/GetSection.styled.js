import styled from 'styled-components';
import { theme } from 'theme';

export const Section = styled.section`
  padding: 140px 16px;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin: 50px 0px;

    @media screen and (min-width: 768px) {
      gap: 16px;
    }

    @media screen and (min-width: 1024px) {
      gap: 29px;
    }
  }

  li {
    padding: 20px;
    width: 328px;
    display: inline-block;
    border-radius: 10px;
    background: ${theme.colors.white};
    @media screen and (min-width: 768px) {
      width: 344px;
    }

    @media screen and (min-width: 1024px) {
      width: 282px;
    }

    @media screen and (min-width: 2560px) {
      width: 370px;
    }
  }

  img {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  p {
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;

    &:first-of-type {
      margin-bottom: 20px;
    }
  }
`;

export const BtnShow = styled.button`
  display: block;
  margin: 0 auto;
  padding: 4px;
  width: 120px;
  border-radius: 80px;
  border: none;
  line-height: 1.625;
  background-color: ${theme.colors.primary};
  transition: background-color 0.3 ease;
  &:hover {
    background-color: #ffe302;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  color: ${theme.colors.mainText};
`;
