import styled from "styled-components";

import HeaderImg from "../assets/img/headImg.png";
import HomeDecoration from "../components/HomeDecoration";
import TextHeader from "../components/TextHeader";
import FirstSection from "../components/FirstSection";
import MachineSlider from "../components/MachineSlider";
import CompanySectionComponent from "../components/CompanySection";
import SiteFooter from "../components/SiteFooter";

const HomePage = styled.main`
  min-height: 100%;
  background: #000000;
`;

const Hero = styled.section`
  position: relative;
  z-index: 1;

  width: 100%;
  height: calc(100svh - (var(--page-gap) * 2));
  min-height: calc(100svh - (var(--page-gap) * 2));

  overflow: hidden;
  isolation: isolate;

  background-color: #050505;
  background-image:
    linear-gradient(90deg, rgba(0, 0, 0, 0.42), transparent 60%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.12), transparent 44%),
    url(${HeaderImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 820px) {
    height: max(760px, calc(100svh - (var(--page-gap) * 2)));
    min-height: max(760px, calc(100svh - (var(--page-gap) * 2)));
    background-position: 60% center;
  }

  @media (max-width: 480px) {
    height: max(710px, calc(100svh - (var(--page-gap) * 2)));
    min-height: max(710px, calc(100svh - (var(--page-gap) * 2)));
    background-position: 63% center;
  }
`;

const FirstUnderHeroSection = styled.section`
  position: relative;
  z-index: 2;

  width: 100%;
  overflow: hidden;

  padding: clamp(24px, 3vw, 48px) 0;
  background: #f5f5f3;

  @media (max-width: 560px) {
    padding: 18px 0;
  }
`;

const MachineContainer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #050505;
`;

const CompanyContainer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #090909;
`;



const Home = () => {
  return (
    <HomePage>
      <Hero>
        <TextHeader />
        <HomeDecoration />
      </Hero>

      <FirstUnderHeroSection>
        <FirstSection />
      </FirstUnderHeroSection>

      <MachineContainer>
        <MachineSlider />
      </MachineContainer>

      <CompanyContainer>
        <CompanySectionComponent />
      </CompanyContainer>

      
    </HomePage>
  );
};

export default Home;