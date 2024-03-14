import { GlobalStyle } from './GlobalStyle';
import { GetSection } from './GetSection/GetSection';
import { Header } from './Header/Header';
import { MainContainer } from './Header/Header.styled';
import { Hero } from './Hero/Hero';
import { PostSection } from './PostSection/PostSection';

export const App = () => {
  return (
    <>
      <MainContainer>
        <Header />
        <main>
          <Hero />
          <GetSection />
          <PostSection />
        </main>
      </MainContainer>
      <GlobalStyle />
    </>
  );
};
