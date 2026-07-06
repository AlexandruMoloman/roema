import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

import bigliaImage from "../assets/img/biglia.png";
import doosanImage from "../assets/img/doosan.png";
import gasImage from "../assets/img/1.jpg";
import measuringImage from "../assets/img/8.JPG";
import checkIcon from "../assets/png/check_circle.png";

const showSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Section = styled.section`
  width: 100%;
  height: clamp(430px, 32vw, 560px);
  overflow: hidden;
  background: #050505;

  @media (max-width: 880px) {
    height: 790px;
  }

  @media (max-width: 480px) {
    height: 760px;
  }
`;

const SliderLayout = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(380px, 0.95fr);

  background:
    radial-gradient(circle at 80% 45%, rgba(188, 8, 15, 0.22), transparent 38%),
    #050505;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    grid-template-rows: 280px minmax(0, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-rows: 230px minmax(0, 1fr);
  }
`;

const ImageSide = styled.div`
  position: relative;
  min-height: 0;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${({ $fit }) => ($fit === "contain" ? "34px" : "0")};

  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.72)),
    radial-gradient(circle at 35% 48%, rgba(218, 18, 27, 0.22), transparent 52%),
    #111111;

  @media (max-width: 880px) {
    padding: ${({ $fit }) => ($fit === "contain" ? "24px" : "0")};
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;

  display: block;
  object-fit: ${({ $fit }) => $fit};
  object-position: center;

  filter: ${({ $fit }) =>
    $fit === "cover"
      ? "grayscale(0.15) contrast(1.1) brightness(0.78)"
      : "drop-shadow(0 25px 28px rgba(0, 0, 0, 0.72))"};

  animation: ${showSlide} 0.5s ease both;
`;

const ImageGlow = styled.div`
  position: absolute;
  inset: auto 0 0;

  height: 35%;

  background: linear-gradient(transparent, rgba(0, 0, 0, 0.82));
  pointer-events: none;
`;

const SlideNumber = styled.div`
  position: absolute;
  top: 22px;
  left: 24px;

  color: rgba(255, 255, 255, 0.45);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 2px;

  @media (max-width: 480px) {
    top: 16px;
    left: 18px;
    font-size: 9px;
  }
`;

const ContentSide = styled.div`
  position: relative;
  min-height: 0;
  overflow: hidden;

  padding: clamp(38px, 4vw, 78px) clamp(30px, 5vw, 92px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #ffffff;

  @media (max-width: 880px) {
    padding: 34px 28px 70px;
  }

  @media (max-width: 480px) {
    padding: 28px 20px 66px;
  }
`;

const ContentAnimation = styled.div`
  animation: ${showSlide} 0.5s ease both;
`;

const Label = styled.p`
  margin: 0 0 10px;

  color: #e51c24;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 2.4px;
`;

const Title = styled.h2`
  max-width: 610px;
  margin: 0;

  color: #ffffff;
  font-size: clamp(28px, 3.1vw, 52px);
  font-weight: 900;
  letter-spacing: -1.7px;
  line-height: 1.04;
`;

const Description = styled.p`
  max-width: 580px;
  margin: 16px 0 0;

  color: rgba(255, 255, 255, 0.72);
  font-size: clamp(13px, 1vw, 16px);
  line-height: 1.55;
`;

const Criteria = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px 24px;

  margin-top: 27px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const CriteriaItem = styled.div`
  min-width: 0;

  display: flex;
  align-items: center;
  gap: 9px;

  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(11px, 0.9vw, 14px);
  font-weight: 700;
  line-height: 1.3;
`;

const CriteriaIcon = styled.img`
  width: 16px;
  height: 16px;
  flex: 0 0 auto;

  object-fit: contain;
`;

const Button = styled.a`
  width: fit-content;
  min-height: 42px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin-top: 30px;
  padding: 0 18px;

  border: 1px solid #df1921;
  border-radius: 5px;

  color: #ffffff;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;

  transition: 0.22s ease;

  &:hover {
    background: #df1921;
    transform: translateY(-3px);
  }
`;

const Controls = styled.div`
  position: absolute;
  right: clamp(30px, 5vw, 92px);
  bottom: clamp(28px, 3vw, 52px);

  display: flex;
  align-items: center;
  gap: 11px;

  @media (max-width: 480px) {
    position: static;
    margin-top: 26px;
  }
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? "22px" : "7px")};
  height: 7px;
  padding: 0;

  border: 0;
  border-radius: 10px;

  background: ${({ $active }) => ($active ? "#e31c24" : "#5a2528")};

  cursor: pointer;
  transition: 0.25s ease;
`;

const ArrowButton = styled.button`
  width: 32px;
  height: 32px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;

  background: transparent;
  color: #ffffff;

  cursor: pointer;
  font-size: 17px;

  transition: 0.2s ease;

  &:hover {
    border-color: #e31c24;
    background: #e31c24;
  }
`;

const slides = [
  {
    id: "precision",
    image: bigliaImage,
    fit: "contain",
    label: "LE NOSTRE MACCHINE",
    title: "Lavorazioni ad alta precisione",
    description:
      "Utilizziamo macchine CNC di ultima generazione per offrire soluzioni affidabili e di qualità superiore.",
    criteria: [
      "Tornitura CNC",
      "Fresatura CNC",
      "Foratura e maschiatura",
      "Filettatura",
      "Componenti complessi",
      "Produzione in serie e su misura",
    ],
  },
  {
    id: "sectors",
    image: doosanImage,
    fit: "contain",
    label: "SETTORI APPLICATIVI",
    title: "Oliodinamica, Pneumatica, Automotive, Varia",
    description:
      "Produciamo componenti meccanici su disegno destinati a diversi settori industriali.",
    criteria: [
      "Componenti oleodinamici",
      "Parti per sistemi pneumatici",
      "Lavorazioni per automotive",
      "Componenti su disegno",
      "Produzioni speciali",
      "Controllo qualità finale",
    ],
  },
  {
    id: "gas",
    image: gasImage,
    fit: "cover",
    label: "SETTORE GAS",
    title: "Gas",
    description:
      "Componenti lavorati con precisione per applicazioni tecniche dove tenuta, filettature e tolleranze sono fondamentali.",
    criteria: [
      "Raccordi e adattatori",
      "Corpi valvola",
      "Filettature di precisione",
      "Controllo delle tenute",
      "Lavorazioni su disegno",
      "Verifica dimensionale",
    ],
  },
  {
    id: "measurement",
    image: measuringImage,
    fit: "cover",
    label: "CONTROLLO QUALITÀ",
    title: "Misurazioni precise",
    description:
      "Ogni componente viene controllato nelle dimensioni principali prima della consegna.",
    criteria: [
      "Controllo dimensionale",
      "Micrometri e calibri",
      "Verifica diametri",
      "Controllo profondità",
      "Controllo filettature",
      "Verifica tolleranze da disegno",
    ],
  },
];

const MachineSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = slides[activeSlide];

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 7000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
  <Section id="prodotti">
    <SliderLayout>
        <ImageSide $fit={currentSlide.fit}>
          <SlideNumber>
            0{activeSlide + 1} / 0{slides.length}
          </SlideNumber>

          <SlideImage
            key={currentSlide.id}
            src={currentSlide.image}
            alt={currentSlide.title}
            $fit={currentSlide.fit}
          />

          <ImageGlow />
        </ImageSide>

        <ContentSide>
          <ContentAnimation key={currentSlide.id}>
            <Label>{currentSlide.label}</Label>

            <Title>{currentSlide.title}</Title>

            <Description>{currentSlide.description}</Description>

            <Criteria>
              {currentSlide.criteria.map((item) => (
                <CriteriaItem key={item}>
                  <CriteriaIcon src={checkIcon} alt="" />
                  {item}
                </CriteriaItem>
              ))}
            </Criteria>

            <Button href="#contatti">Scopri la tecnologia</Button>
          </ContentAnimation>

          <Controls>
            <ArrowButton
              type="button"
              onClick={previousSlide}
              aria-label="Slide precedente"
            >
              ←
            </ArrowButton>

            <Dots>
              {slides.map((slide, index) => (
                <Dot
                  key={slide.id}
                  type="button"
                  $active={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Apri slide ${index + 1}`}
                />
              ))}
            </Dots>

            <ArrowButton
              type="button"
              onClick={nextSlide}
              aria-label="Slide successiva"
            >
              →
            </ArrowButton>
          </Controls>
        </ContentSide>
      </SliderLayout>
    </Section>
  );
};

export default MachineSlider;