import React from "react";
import styled from "styled-components";

import NotHead from "../components/NotHead";
import NotContent from "../components/NotContent";

const NotiziePage = styled.main`
  position: relative;
  z-index: 0;
  isolation: isolate;

  width: 100%;
  min-width: 0;
  min-height: 100svh;
  overflow-x: clip;

  background: #030303;
`;

const NotHeadContainer = styled.section`
  position: relative;
  z-index: 0;

  width: 100%;
  min-width: 0;
`;

const NotContentContainer = styled.section`
  position: relative;
  z-index: 2;
  top: -150px;
  width: 100%;
  min-width: 0;

  margin-top: clamp(-88px, -5vw, -36px);

  @media (max-width: 700px) {
    margin-top: clamp(-56px, -8vw, -30px);
  }
`;

function Notizie() {
  return (
    <NotiziePage>
      <NotHeadContainer>
        <NotHead />
      </NotHeadContainer>

      <NotContentContainer>
        <NotContent />
      </NotContentContainer>
    </NotiziePage>
  );
}

export default Notizie;