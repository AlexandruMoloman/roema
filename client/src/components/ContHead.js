import styled from "styled-components";
import React from "react";
import TornioImg from "../assets/png/tornio.png";

const ContHeadSection = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  width: 100%;
  min-width: 0;
  min-height: clamp(540px, 48vw, 760px);

  padding:
    clamp(132px, 11vw, 170px)
    clamp(24px, 5vw, 88px)
    clamp(170px, 14vw, 235px);

  background: #020202;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(
        90deg,
        #020202 0%,
        rgba(2, 2, 2, 0.98) 22%,
        rgba(2, 2, 2, 0.89) 36%,
        rgba(2, 2, 2, 0.46) 53%,
        rgba(2, 2, 2, 0.08) 75%,
        rgba(2, 2, 2, 0.18) 100%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.38) 0%,
        transparent 34%,
        rgba(0, 0, 0, 0.52) 100%
      );
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;

    pointer-events: none;

    background:
      radial-gradient(
        circle at 60% 74%,
        rgba(236, 37, 23, 0.22) 0%,
        rgba(194, 20, 12, 0.09) 24%,
        transparent 52%
      ),
      linear-gradient(
        115deg,
        transparent 0%,
        transparent 49%,
        rgba(235, 37, 21, 0.11) 68%,
        transparent 84%
      );
  }

  @media (max-width: 760px) {
    min-height: clamp(470px, 126vw, 620px);

    padding:
      clamp(104px, 20vw, 135px)
      clamp(18px, 5vw, 28px)
      clamp(120px, 26vw, 165px);

    &::before {
      background:
        linear-gradient(
          90deg,
          #020202 0%,
          rgba(2, 2, 2, 0.96) 30%,
          rgba(2, 2, 2, 0.75) 56%,
          rgba(2, 2, 2, 0.3) 100%
        ),
        linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.28) 0%,
          transparent 44%,
          rgba(0, 0, 0, 0.62) 100%
        );
    }
  }
`;

const TornioBackground = styled.img`
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;

  display: block;

  width: min(76vw, 1250px);
  height: 100%;

  object-fit: cover;
  object-position: center right;

  filter:
    saturate(1.08)
    contrast(1.08)
    drop-shadow(0 20px 40px rgba(0, 0, 0, 0.52));

  pointer-events: none;

  @media (max-width: 760px) {
    right: -24%;
    width: 128%;

    object-position: center right;
    opacity: 0.92;
  }

  @media (max-width: 420px) {
    right: -32%;
    width: 142%;
  }
`;

const ContHeadInner = styled.div`
  position: relative;
  z-index: 2;

  width: min(100%, 620px);
`;

const Eyebrow = styled.p`
  margin: 0 0 clamp(12px, 1vw, 16px);

  color: #ff3a2e;
  font-size: clamp(9px, 0.78vw, 12px);
  font-weight: 800;
  letter-spacing: 0.16em;
  line-height: 1.2;
  text-transform: uppercase;
`;

const Title = styled.h1`
  margin: 0;

  color: #ffffff;
  font-size: clamp(46px, 5.45vw, 80px);
  font-weight: 800;
  letter-spacing: -0.06em;
  line-height: 0.95;
`;

const Description = styled.p`
  max-width: 520px;
  margin: clamp(17px, 1.7vw, 24px) 0 0;

  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(14px, 1.18vw, 17px);
  font-weight: 400;
  line-height: 1.58;

  @media (max-width: 760px) {
    max-width: 330px;
    font-size: 13px;
  }
`;

function ContHead() {
  return (
    <ContHeadSection>
      <TornioBackground src={TornioImg} alt="" aria-hidden="true" />

      <ContHeadInner>
        <Eyebrow>Siamo qui per te</Eyebrow>

        <Title>Contattaci</Title>

        <Description>
          Hai una domanda, un progetto o vuoi richiedere informazioni?
          Compila il modulo e ti risponderemo al più presto.
        </Description>
      </ContHeadInner>
    </ContHeadSection>
  );
}

export default ContHead;