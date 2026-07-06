import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

import TechToolsImg from "../assets/png/utensili.png";

const TechHero = styled.section`
  position: relative;
  z-index: 1;
  isolation: isolate;

  min-height: clamp(520px, 72vh, 780px);
  overflow: hidden;

  display: flex;
  align-items: center;

  padding: clamp(110px, 11vw, 170px) clamp(24px, 7vw, 130px)
    clamp(62px, 7vw, 110px);

  background:
    radial-gradient(
      circle at 88% 48%,
      rgba(124, 0, 0, 0.32) 0%,
      rgba(46, 0, 0, 0.18) 28%,
      transparent 58%
    ),
    linear-gradient(
      90deg,
      #020202 0%,
      #030303 42%,
      #100000 72%,
      #050000 100%
    );

  &::before {
    content: "";
    position: absolute;
    z-index: 0;
    inset: 0;

    pointer-events: none;

    background:
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.98) 0%,
        rgba(0, 0, 0, 0.9) 35%,
        rgba(0, 0, 0, 0.38) 62%,
        rgba(0, 0, 0, 0.1) 100%
      ),
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.12) 0%,
        transparent 46%,
        rgba(0, 0, 0, 0.76) 100%
      );
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 1;

    top: 50%;
    right: clamp(-230px, -9vw, -80px);

    width: min(64vw, 1120px);
    aspect-ratio: 1;

    border: 1px solid rgba(220, 0, 0, 0.42);
    border-radius: 50%;

    box-shadow:
      0 0 0 72px rgba(196, 0, 0, 0.055),
      0 0 0 144px rgba(196, 0, 0, 0.027);

    transform: translateY(-50%);
    pointer-events: none;
  }

  @media (max-width: 900px) {
    min-height: 640px;
    align-items: flex-end;
  }

  @media (max-width: 560px) {
    min-height: 665px;
    padding: 102px 20px 42px;
  }
`;

const TechToolsScene = styled.div`
  position: absolute;
  z-index: 2;
  inset: 0;

  overflow: hidden;
  pointer-events: none;
`;

const TechToolsGlow = styled.div`
  position: absolute;
  top: 50%;
  right: -10%;

  width: min(58vw, 1040px);
  aspect-ratio: 1;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(236, 0, 0, 0.2) 0%,
    rgba(170, 0, 0, 0.08) 42%,
    transparent 70%
  );

  filter: blur(28px);
  transform: translateY(-50%);

  @media (max-width: 700px) {
    right: -48%;
    width: 130vw;
    opacity: 0.72;
  }
`;

const TechToolsImage = styled.img`
  position: absolute;
  z-index: 2;

  top: clamp(78px, -25vw, 120px);
  right: clamp(-110px, 0vw, -25px);

  width: min(55vw, 920px);
  height: auto;

  object-fit: contain;
  opacity: 0.98;

  mix-blend-mode: screen;

  filter:
    contrast(1.13)
    saturate(1.04)
    drop-shadow(0 24px 40px rgba(0, 0, 0, 0.9))
    drop-shadow(0 0 26px rgba(224, 0, 0, 0.22));

  @media (max-width: 1150px) {
    top: 16%;
    right: -12%;

    width: min(62vw, 730px);
    opacity: 0.85;
  }

  @media (max-width: 700px) {
    top: 7%;
    right: -34%;

    width: 117vw;
    opacity: 0.36;
  }
`;

const TechContent = styled.div`
  position: relative;
  z-index: 4;

  width: min(100%, 610px);
`;

const TechKicker = styled.p`
  margin: 0 0 14px;

  color: #df0000;
  font-size: clamp(10px, 0.8vw, 13px);
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
`;

const TechTitle = styled.h1`
  margin: 0;

  color: #ffffff;
  font-size: clamp(42px, 5.2vw, 88px);
  font-weight: 400;
  line-height: 0.88;
  letter-spacing: -0.055em;
  text-transform: uppercase;

  span {
    display: block;
    font-weight: 800;
  }

  @media (max-width: 560px) {
    font-size: clamp(39px, 12vw, 62px);
    line-height: 0.91;
  }
`;

const TechDescription = styled.p`
  max-width: 470px;
  margin: 28px 0 0;

  color: rgba(255, 255, 255, 0.72);
  font-size: clamp(13px, 1vw, 16px);
  line-height: 1.65;

  @media (max-width: 560px) {
    margin-top: 22px;
    font-size: 13px;
    line-height: 1.55;
  }
`;

const TechActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 34px;

  @media (max-width: 560px) {
    margin-top: 26px;
    gap: 10px;
  }
`;

const TechButton = styled(Link)`
  min-height: 46px;
  padding: 0 18px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border: 1px solid
    ${({ $outline }) =>
      $outline ? "rgba(255, 255, 255, 0.22)" : "#d90000"};

  background: ${({ $outline }) =>
    $outline ? "rgba(0, 0, 0, 0.34)" : "#d90000"};

  color: #ffffff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.045em;
  text-decoration: none;
  text-transform: uppercase;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;

  svg {
    font-size: 15px;
    transition: transform 0.25s ease;
  }

  &:hover {
    transform: translateY(-3px);
    border-color: #ef1b1b;

    background: ${({ $outline }) =>
      $outline ? "rgba(218, 0, 0, 0.24)" : "#ef1b1b"};

    svg {
      transform: translate(2px, -2px);
    }
  }

  @media (max-width: 560px) {
    flex: 1;

    min-height: 44px;
    padding: 0 13px;

    font-size: 9px;
  }
`;

const TechBottomLine = styled.div`
  position: absolute;
  z-index: 5;

  right: clamp(24px, 7vw, 130px);
  bottom: 28px;
  left: clamp(24px, 7vw, 130px);

  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.14),
    rgba(255, 255, 255, 0.03)
  );

  @media (max-width: 560px) {
    right: 20px;
    bottom: 18px;
    left: 20px;
  }
`;

function TechHeader() {
  return (
    <TechHero>
      <TechToolsScene aria-hidden="true">
        <TechToolsGlow />
        <TechToolsImage src={TechToolsImg} alt="" />
      </TechToolsScene>

      <TechContent>
        <TechKicker>Tecnologia</TechKicker>

        <TechTitle>
          La nostra
          <span>tecnologia</span>
        </TechTitle>

        <TechDescription>
          La precisione è la nostra filosofia. Dalla lavorazione CNC al
          controllo dimensionale, ogni dettaglio è progettato per garantire
          qualità, affidabilità e prestazioni superiori.
        </TechDescription>

        <TechActions>
          <TechButton to="/technologia#macchinari">
            Scopri la tecnologia <FiArrowUpRight />
          </TechButton>

          <TechButton $outline to="/contatti">
            Richiedi preventivo <FiArrowUpRight />
          </TechButton>
        </TechActions>
      </TechContent>

      <TechBottomLine />
    </TechHero>
  );
}

export default TechHeader;