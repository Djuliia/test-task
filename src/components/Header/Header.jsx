import { ReactComponent as Logo } from '../../images/logo.svg';
import { Btn, BtnWrap, StyledHeader } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <BtnWrap>
        <Btn href="#get">Users</Btn>
        <Btn href="#post">Sign up</Btn>
      </BtnWrap>
    </StyledHeader>
  );
};
