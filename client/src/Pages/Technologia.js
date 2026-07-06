import styled from "styled-components";

import TechHeader from "../components/TechHeader";
import TechPrecisionGrid from "../components/TechPrecisionGrid";

const TechHeaderContainer = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  overflow: hidden;

  background: #000000;
`;

const TechPrecisionContainer = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  overflow: hidden;

  background: #030303;
`;

function Technologia() {
  return (
    <>
      <TechHeaderContainer>
        <TechHeader />
      </TechHeaderContainer>

      <TechPrecisionContainer>
        <TechPrecisionGrid />
      </TechPrecisionContainer>
    </>
  );
}

export default Technologia;