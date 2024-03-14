import styled from 'styled-components';
import bgM from '../../images/bg_mobile.jpg';
import bgT from '../../images/bg_tablet.jpg';
import bgD from '../../images/bg_desktop.jpg';
import bgB from '../../images/bg_big.jpg';
import { theme } from 'theme';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${bgM});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    height: 500px;
    background-image: url(${bgT});
  }

  @media screen and (min-width: 1024px) {
    height: 650px;
    background-image: url(${bgD});
  }

  @media screen and (min-width: 2560px) {
    background-image: url(${bgB});
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 328px;
  padding: 40px 16px 71px;

  @media screen and (min-width: 768px) {
    max-width: 380px;
  }
`;

export const Heading = styled.h1`
  font-size: 40px;
  font-weight: 400;
  line-height: 1;
  text-align: center;
  color: ${theme.colors.white};
  margin-bottom: 21px;
`;

export const Text = styled.p`
  line-height: 1.625;
  text-align: center;
  color: ${theme.colors.white};
  margin-bottom: 32px;
`;
