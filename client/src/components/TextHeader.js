import { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../assets/logo/logo.png";
import experience from "../assets/png/experience.png";
import checkCircle from "../assets/png/check_circle.png";
import azienda from "../assets/png/azienda.png";

const HeroCopy = styled.div`
  position: absolute;
  top: clamp(145px, 22%, 250px);
  left: clamp(38px, 6vw, 112px);
  z-index: 4;

  width: min(43vw, 600px);

  @media (max-width: 980px) {
    top: 150px;
    left: 5vw;
    width: min(50vw, 500px);
  }

  @media (max-width: 820px) {
    top: 112px;
    left: 24px;
    right: 24px;
    width: auto;
  }

  @media (max-width: 480px) {
    top: 92px;
    left: 20px;
    right: 20px;
  }
`;

const HeroLogo = styled.img`
  width: clamp(205px, 21vw, 380px);
  height: auto;
  display: block;

  filter: drop-shadow(0 14px 24px rgba(0, 0, 0, 0.5));

  @media (max-width: 480px) {
    width: min(76vw, 260px);
  }
`;

const Description = styled.p`
  max-width: 455px;
  margin: 22px 0 0;

  color: rgba(255, 255, 255, 0.93);
  font-size: clamp(13px, 1vw, 17px);
  font-weight: 500;
  line-height: 1.6;

  @media (max-width: 480px) {
    margin-top: 16px;
    font-size: 12px;
  }
`;

const HeroActions = styled.div`
  display: flex;
  gap: 13px;
  margin-top: 24px;

  @media (max-width: 370px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const ActionButton = styled.a`
  min-height: 42px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 0 18px;
  border-radius: 6px;

  color: #ffffff;
  font-size: 10px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  white-space: nowrap;

  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    min-height: 38px;
    padding: 0 12px;
    font-size: 8px;
  }
`;

const PrimaryButton = styled(ActionButton)`
  background: linear-gradient(135deg, #ed2931, #a0060b);
  box-shadow: 0 10px 24px rgba(214, 14, 23, 0.3);
`;

const SecondaryButton = styled(ActionButton)`
  border: 1px solid rgba(229, 31, 40, 0.9);
  background: rgba(0, 0, 0, 0.28);

  &:hover {
    background: rgba(217, 18, 27, 0.2);
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(10px, 1.5vw, 24px);

  max-width: 560px;
  margin-top: 29px;

  @media (max-width: 480px) {
    gap: 8px;
    margin-top: 22px;
  }
`;

const Stat = styled.div`
  min-width: 0;

  display: grid;
  grid-template-columns: clamp(22px, 2vw, 34px) minmax(0, 1fr);
  gap: clamp(7px, 0.8vw, 11px);
  align-items: center;
`;

const StatIcon = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`;

const StatText = styled.div`
  min-width: 0;

  strong {
    display: block;

    color: #ffffff;
    font-size: clamp(12px, 1.35vw, 21px);
    font-weight: 900;
    line-height: 1.05;
    white-space: nowrap;
  }

  span {
    display: block;
    margin-top: 4px;

    color: rgba(255, 255, 255, 0.75);
    font-size: clamp(8px, 0.78vw, 12px);
    font-weight: 600;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    strong {
      font-size: 11px;
    }

    span {
      margin-top: 2px;
      font-size: 7px;
    }
  }
`;

const TextHeader = () => {
  const [numbers, setNumbers] = useState({
    experience: 0,
    pieces: 0,
    area: 0,
  });

  useEffect(() => {
    const duration = 1900;
    let animationFrame;

    const startTime = performance.now();

    const animateNumbers = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Плавное замедление перед финальным числом
      const smoothProgress = 1 - Math.pow(1 - progress, 4);

      setNumbers({
        experience: Math.round(30 * smoothProgress),
        pieces: Math.round(250000 * smoothProgress),
        area: Math.round(1500 * smoothProgress),
      });

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animateNumbers);
      }
    };

    animationFrame = requestAnimationFrame(animateNumbers);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <HeroCopy>
      <HeroLogo src={logo} alt="Officine ROEMA" />

      <Description>
        Lavorazioni meccaniche su disegno, con tecnologie CNC avanzate e
        controllo qualità in ogni fase.
      </Description>

      <HeroActions>
        <PrimaryButton href="#tecnologia">
          Scopri le lavorazioni
        </PrimaryButton>

        <SecondaryButton href="#contatti">
          Richiedi preventivo
        </SecondaryButton>
      </HeroActions>

      <Stats>
        <Stat>
          <StatIcon src={experience} alt="" />

          <StatText>
            <strong>{numbers.experience}+</strong>
            <span>Anni di esperienza</span>
          </StatText>
        </Stat>

        <Stat>
          <StatIcon src={checkCircle} alt="" />

          <StatText>
            <strong>+{numbers.pieces.toLocaleString("it-IT")}</strong>
            <span>Pezzi prodotti annualmente</span>
          </StatText>
        </Stat>

        <Stat>
          <StatIcon src={azienda} alt="" />

          <StatText>
            <strong>+{numbers.area.toLocaleString("it-IT")} MQ</strong>
            <span>Azienda</span>
          </StatText>
        </Stat>
      </Stats>
    </HeroCopy>
  );
};

export default TextHeader;