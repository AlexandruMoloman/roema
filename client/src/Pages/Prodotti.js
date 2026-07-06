import React from "react";
import styled from "styled-components";

import ProdHead from "../components/ProdHead";
import ProdHero from "../components/ProdHero";

const ProdottiPage = styled.main`
  position: relative;
  z-index: 0;

  width: 100%;
  min-width: 0;

  background: #030303;
`;

const ProdHeadContainer = styled.div`
  position: relative;

  width: 100%;
  min-width: 0;
  overflow: hidden;
`;

const ProdHeroContainer = styled.div`
  position: relative;

  width: 100%;
  min-width: 0;
  overflow: hidden;
`;

function Prodotti() {
  return (
    <ProdottiPage>
      <ProdHeadContainer>
        <ProdHead />
      </ProdHeadContainer>

      <ProdHeroContainer>
        <ProdHero />
      </ProdHeroContainer>
    </ProdottiPage>
  );
}

export default Prodotti;