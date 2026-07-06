import styled from "styled-components";

import FresaImg from "../assets/png/fresa.png";

const NotHeadSection = styled.section`
  position: relative;
  z-index: 0;
  isolation: isolate;
  overflow: hidden;

  width: 100%;
  min-width: 0;
  height: 100svh;
  min-height: 100svh;

  border-radius: 0px 0px 50px 50px;

  background:
    radial-gradient(
      circle at 82% 36%,
      rgba(166, 0, 8, 0.34) 0%,
      rgba(98, 0, 5, 0.16) 27%,
      transparent 58%
    ),
    linear-gradient(
      90deg,
      #010101 0%,
      #030303 48%,
      #0c0001 78%,
      #210002 100%
    );

  border-top: 1px solid rgba(132, 0, 0, 0.38);
  border-bottom: 1px solid rgba(131, 0, 0, 0.42);

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.98) 28%,
        rgba(0, 0, 0, 0.78) 47%,
        rgba(0, 0, 0, 0.32) 69%,
        rgba(0, 0, 0, 0.06) 100%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.1) 0%,
        transparent 48%,
        rgba(0, 0, 0, 0.34) 100%
      );
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;

    opacity: 0.38;
    pointer-events: none;

    background:
      repeating-linear-gradient(
        126deg,
        transparent 0,
        transparent 54px,
        rgba(193, 0, 8, 0.17) 55px,
        transparent 56px,
        transparent 100px
      ),
      linear-gradient(
        90deg,
        transparent 55%,
        rgba(154, 0, 7, 0.14) 100%
      );
  }

  @media (max-width: 900px) {
    margin-bottom: -78px;
  }

  @media (max-width: 700px) {
    height: 100svh;
    min-height: 100svh;

    margin-bottom: -46px;
  }
`;

const NotHeadContainer = styled.div`
  position: relative;
  z-index: 2;

  box-sizing: border-box;

  width: min(100% - clamp(32px, 9vw, 146px), 1440px);
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;

  padding-top: clamp(46px, 5.4vw, 102px);

  @media (max-width: 700px) {
    padding-top: clamp(42px, 13vw, 78px);
  }
`;

const TextBlock = styled.div`
  width: min(100%, 610px);

  @media (max-width: 700px) {
    width: min(100%, 470px);
  }
`;

const Eyebrow = styled.p`
  margin: 0 0 15px;

  color: #e40a0e;

  font-size: clamp(9px, 0.7vw, 11px);
  font-weight: 800;
  letter-spacing: 0.2em;
  line-height: 1.2;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;

  color: #f6f6f6;

  font-size: clamp(40px, 3.25vw, 64px);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 0.98;

  @media (max-width: 700px) {
    font-size: clamp(38px, 11vw, 52px);
    line-height: 1;
  }
`;

const Description = styled.p`
  max-width: 560px;
  margin: clamp(18px, 1.6vw, 25px) 0 0;

  color: rgba(255, 255, 255, 0.82);

  font-size: clamp(12px, 0.92vw, 14px);
  font-weight: 400;
  line-height: 1.55;

  @media (max-width: 700px) {
    max-width: 390px;

    font-size: 12px;
    line-height: 1.6;
  }
`;

const MachineBackground = styled.div`
  position: absolute;
  z-index: 0;
  inset: 0;

  overflow: hidden;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;

    background:
      radial-gradient(
        circle at 76% 40%,
        rgba(188, 0, 10, 0.27),
        transparent 37%
      ),
      linear-gradient(
        90deg,
        #030303 0%,
        rgba(3, 3, 3, 0.88) 22%,
        rgba(3, 3, 3, 0.3) 54%,
        transparent 100%
      );

    pointer-events: none;
  }

  @media (max-width: 700px) {
    opacity: 0.42;

    &::before {
      background: linear-gradient(
        90deg,
        rgba(3, 3, 3, 0.96) 0%,
        rgba(3, 3, 3, 0.72) 45%,
        rgba(3, 3, 3, 0.16) 100%
      );
    }
  }
`;

const MachineImage = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: 82% center;

  filter: contrast(1.14) saturate(1.04) brightness(0.78);

  @media (max-width: 900px) {
    object-position: 74% center;
    transform: scale(1.08);
  }

  @media (max-width: 700px) {
    object-position: 68% center;
    transform: scale(1.22);
  }
`;

function NotHead() {
  return (
    <NotHeadSection>
      <MachineBackground aria-hidden="true">
        <MachineImage src={FresaImg} alt="" />
      </MachineBackground>

      <NotHeadContainer>
        <TextBlock>
          <Eyebrow>News &amp; Approfondimenti</Eyebrow>

          <Title>Le nostre Notizie</Title>

          <Description>
            Approfondimenti tecnici, aggiornamenti dall&apos;azienda e novità dal
            mondo della meccanica di precisione CNC.
            <br />
            Condividiamo competenza, innovazione e passione per la qualità.
          </Description>
        </TextBlock>
      </NotHeadContainer>
    </NotHeadSection>
  );
}

export default NotHead;