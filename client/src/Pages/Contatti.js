import styled from "styled-components";

import ContHead from "../components/ContHead";
import ContContactSection from "../components/ContContactSection";
import ContMapSection from "../components/ContMapSection";


const ContattiPage = styled.main`
  position: relative;
  z-index: 0;

  width: 100%;
  min-width: 0;
  overflow: hidden;

  background: #020202;
`;

const ContHeadContainer = styled.section`
  position: relative;
  z-index: 0;

  width: 100%;
  min-width: 0;
`;

const ContContactContainer = styled.section`
  position: relative;
  z-index: 2;

  width: 100%;
  min-width: 0;

  margin-top: clamp(-138px, -9vw, -76px);

  @media (max-width: 760px) {
    margin-top: clamp(-56px, -10vw, -34px);
  }
`;

const ContMapContainer = styled.section`
  position: relative;
  z-index: 1;

  width: 100%;
  min-width: 0;

  margin-top: clamp(24px, 3vw, 44px);
`;



function Contatti() {
  return (
    <ContattiPage>
      <ContHeadContainer>
        <ContHead />
      </ContHeadContainer>

      <ContContactContainer>
        <ContContactSection />
      </ContContactContainer>

      <ContMapContainer>
        <ContMapSection />
      </ContMapContainer>

      
    </ContattiPage>
  );
}

export default Contatti;