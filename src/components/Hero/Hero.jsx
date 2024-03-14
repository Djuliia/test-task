import { Btn } from 'components/Header/Header.styled';
import { Heading, Section, Text, Wrap } from './Hero.styled';

export const Hero = () => {
  return (
    <Section>
      <Wrap>
        <Heading>Test assignment for front-end developer</Heading>
        <Text>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </Text>
        <Btn href="#post">Sign up</Btn>
      </Wrap>
    </Section>
  );
};
