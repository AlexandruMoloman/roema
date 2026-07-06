import React from "react";
import styled from "styled-components";

import ProdPiecesImg from "../assets/png/pezzi_prodotti.png";
import PrecisionIcon from "../assets/png/snipe.png";
import QualityIcon from "../assets/png/protection.png";
import SolutionsIcon from "../assets/png/star.png";

const ProdHeadSection = styled.section`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  min-height: max(
    620px,
    calc(100svh - (var(--page-gap, 0px) * 2))
  );

  background:
    linear-gradient(
      90deg,
      #020202 0%,
      #050505 32%,
      #160101 68%,
      #090000 100%
    );

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;

    background:
      radial-gradient(
        circle at 76% 44%,
        rgba(224, 14, 20, 0.5) 0%,
        rgba(132, 0, 0, 0.22) 23%,
        transparent 50%
      ),
      radial-gradient(
        circle at 94% 8%,
        rgba(154, 0, 0, 0.3) 0%,
        transparent 35%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.025) 0%,
        transparent 35%
      );
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;

    pointer-events: none;
    opacity: 0.88;

    background-image:
      radial-gradient(circle at 66% 27%, #ff2c31 0 1px, transparent 2px),
      radial-gradient(circle at 71% 38%, #f11b20 0 1px, transparent 2px),
      radial-gradient(circle at 76% 18%, #ff3a3f 0 1px, transparent 2px),
      radial-gradient(circle at 81% 46%, #e6161b 0 1px, transparent 2px),
      radial-gradient(circle at 85% 28%, #ff393d 0 1px, transparent 2px),
      radial-gradient(circle at 90% 53%, #d70b10 0 1px, transparent 2px),
      radial-gradient(circle at 94% 16%, #ff353a 0 1px, transparent 2px),
      radial-gradient(circle at 96% 42%, #d4090d 0 1px, transparent 2px),
      radial-gradient(circle at 74% 65%, #cf080c 0 1px, transparent 2px),
      radial-gradient(circle at 89% 71%, #e60a10 0 1px, transparent 2px);
  }

  @media (max-width: 760px) {
    min-height: auto;
  }
`;

const ProdHeadContainer = styled.div`
  position: relative;
  z-index: 2;

  box-sizing: border-box;
  width: min(100%, 1680px);
  min-height: inherit;
  margin: 0 auto;
  padding:
    clamp(106px, 7.5vw, 150px)
    clamp(28px, 7vw, 128px)
    clamp(54px, 5vw, 90px);

  display: grid;
  grid-template-columns: minmax(280px, 0.86fr) minmax(420px, 1.14fr);
  grid-template-areas:
    "copy artwork"
    "meta artwork";
  align-content: center;
  align-items: center;
  column-gap: clamp(28px, 3.5vw, 72px);

  @media (max-width: 1180px) {
    grid-template-columns: minmax(260px, 0.9fr) minmax(380px, 1.1fr);

    padding-right: clamp(28px, 5vw, 72px);
    padding-left: clamp(28px, 5vw, 72px);
  }

  @media (max-width: 760px) {
    min-height: auto;
    padding:
      clamp(104px, 20vw, 138px)
      20px
      34px;

    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "copy"
      "artwork"
      "meta";
    row-gap: 0;
  }

  @media (max-width: 370px) {
    padding:
      96px
      15px
      28px;
  }
`;

const ProdHeadCopy = styled.div`
  grid-area: copy;

  width: 100%;
  max-width: 560px;
  align-self: end;

  @media (max-width: 760px) {
    max-width: none;
  }
`;

const ProdEyebrow = styled.p`
  margin: 0 0 clamp(12px, 1vw, 18px);

  color: #e51d22;
  font-size: clamp(10px, 0.74vw, 14px);
  font-weight: 700;
  letter-spacing: 0.2em;
  line-height: 1.25;

  @media (max-width: 480px) {
    max-width: 190px;
    font-size: 9px;
    letter-spacing: 0.16em;
  }
`;

const ProdTitle = styled.h1`
  margin: 0;

  color: #f5f5f5;
  font-size: clamp(52px, 5.15vw, 94px);
  font-weight: 700;
  letter-spacing: -0.065em;
  line-height: 0.88;
  white-space: nowrap;

  span {
    display: block;
    margin-top: clamp(6px, 0.55vw, 10px);

    color: #db171d;
  }

  @media (max-width: 760px) {
    font-size: clamp(48px, 12.8vw, 68px);
  }

  @media (max-width: 370px) {
    font-size: 43px;
  }
`;

const ProdArtwork = styled.div`
  position: relative;
  isolation: isolate;

  grid-area: artwork;

  width: 100%;
  height: clamp(290px, 30vw, 500px);

  display: grid;
  place-items: center;

  pointer-events: none;

  @media (max-width: 1180px) {
    height: clamp(270px, 29vw, 420px);
  }

  @media (max-width: 760px) {
    height: clamp(190px, 55vw, 330px);
    margin: clamp(14px, 4vw, 28px) 0 clamp(14px, 3vw, 22px);
  }

  @media (max-width: 370px) {
    height: 180px;
  }
`;

const ProdGlow = styled.div`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 50%;

  width: 72%;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  background: rgba(225, 0, 0, 0.46);
  filter: blur(80px);

  @media (max-width: 760px) {
    width: 76%;
    filter: blur(56px);
  }
`;

const ProdPieces = styled.img`
  position: relative;
  z-index: 1;

  display: block;
  width: 100%;
  height: 100%;

  object-fit: contain;
  object-position: center center;

  filter:
    drop-shadow(0 28px 24px rgba(0, 0, 0, 0.76))
    drop-shadow(0 0 26px rgba(224, 0, 0, 0.27));

  user-select: none;
`;

const ProdHeadMeta = styled.div`
  grid-area: meta;

  width: 100%;
  max-width: 545px;
  align-self: start;

  @media (max-width: 760px) {
    max-width: none;
  }
`;

const ProdDescription = styled.p`
  max-width: 420px;
  margin: clamp(24px, 2.3vw, 38px) 0 0;

  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(15px, 1.05vw, 20px);
  font-weight: 400;
  line-height: 1.52;

  @media (max-width: 760px) {
    max-width: 340px;
    margin-top: 0;
    font-size: 15px;
  }

  @media (max-width: 370px) {
    max-width: 270px;
    font-size: 13px;
  }
`;

const AdvantagesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  width: 100%;
  margin-top: clamp(34px, 4vw, 64px);

  @media (max-width: 760px) {
    max-width: 460px;
    margin-top: 28px;
  }
`;

const AdvantageItem = styled.article`
  display: flex;
  align-items: center;
  gap: clamp(8px, 0.8vw, 14px);

  min-width: 0;
  padding: 0 clamp(9px, 1.5vw, 24px);

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  &:not(:last-child) {
    border-right: 1px solid rgba(255, 255, 255, 0.24);
  }

  @media (max-width: 540px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 6px;

    padding: 0 6px;
    text-align: center;
  }

  @media (max-width: 370px) {
    padding: 0 4px;
  }
`;

const AdvantageIcon = styled.img`
  flex: 0 0 auto;

  width: clamp(28px, 2.05vw, 42px);
  height: clamp(28px, 2.05vw, 42px);

  object-fit: contain;

  @media (max-width: 540px) {
    width: 27px;
    height: 27px;
  }

  @media (max-width: 370px) {
    width: 23px;
    height: 23px;
  }
`;

const AdvantageText = styled.div`
  display: grid;
  gap: 3px;

  min-width: 0;

  strong {
    color: #ffffff;
    font-size: clamp(8px, 0.64vw, 12px);
    font-weight: 700;
    line-height: 1.05;
    white-space: nowrap;
  }

  span {
    color: rgba(255, 255, 255, 0.68);
    font-size: clamp(8px, 0.61vw, 11px);
    line-height: 1.05;
    white-space: nowrap;
  }

  @media (max-width: 540px) {
    strong,
    span {
      font-size: 8px;
    }
  }

  @media (max-width: 370px) {
    strong,
    span {
      font-size: 7px;
    }
  }
`;

const advantages = [
  {
    icon: PrecisionIcon,
    title: "PRECISIONE",
    text: "Assoluta",
  },
  {
    icon: QualityIcon,
    title: "QUALITÀ",
    text: "Certificata",
  },
  {
    icon: SolutionsIcon,
    title: "SOLUZIONI",
    text: "Su misura",
  },
];

function ProdHead() {
  return (
    <ProdHeadSection>
      <ProdHeadContainer>
        <ProdHeadCopy>
          <ProdEyebrow>PRODOTTI CNC DI PRECISIONE</ProdEyebrow>

          <ProdTitle>
            I NOSTRI
            <span>PRODOTTI</span>
          </ProdTitle>
        </ProdHeadCopy>

        <ProdArtwork aria-hidden="true">
          <ProdGlow />

          <ProdPieces
            src={ProdPiecesImg}
            alt=""
            draggable="false"
          />
        </ProdArtwork>

        <ProdHeadMeta>
          <ProdDescription>
            Componenti meccanici di alta qualità, realizzati con tecnologie
            avanzate e massima precisione.
          </ProdDescription>

          <AdvantagesList>
            {advantages.map((item) => (
              <AdvantageItem key={item.title}>
                <AdvantageIcon src={item.icon} alt="" />

                <AdvantageText>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </AdvantageText>
              </AdvantageItem>
            ))}
          </AdvantagesList>
        </ProdHeadMeta>
      </ProdHeadContainer>
    </ProdHeadSection>
  );
}

export default ProdHead;