import styled from "styled-components";

import technologyImage from "../assets/img/0.JPG";
import precisionImage from "../assets/img/lb-15.jpg";
import automationImage from "../assets/img/pro.jpg";
import productionImage from "../assets/img/5.jpg";

import cncIcon from "../assets/png/cnc.png";
import precisionIcon from "../assets/png/snipe.png";
import automationIcon from "../assets/png/robot.png";
import productionIcon from "../assets/png/production_misure.png";

const Section = styled.section`
  width: 100%;
`;

const SectionContainer = styled.div`
  width: min(100% - clamp(28px, 7vw, 130px), 1680px);
  margin: 0 auto;

  @media (max-width: 560px) {
    width: min(100% - 28px, 1680px);
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(14px, 1.4vw, 24px);

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const Card = styled.article`
  min-height: clamp(210px, 17vw, 275px);
  display: flex;
  overflow: hidden;

  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: clamp(12px, 1.2vw, 18px);

  background: #ffffff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1);

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 22px 38px rgba(0, 0, 0, 0.16);
  }

  @media (max-width: 560px) {
    min-height: 150px;
    flex-direction: row-reverse;
  }
`;

const CardContent = styled.div`
  width: 64%;
  min-width: 0;
  padding: clamp(16px, 1.6vw, 27px);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 560px) {
    width: 64%;
    padding: 18px;
  }
`;

const CardIcon = styled.img`
  width: clamp(25px, 2.1vw, 38px);
  height: clamp(25px, 2.1vw, 38px);

  object-fit: contain;

  @media (max-width: 560px) {
    width: 27px;
    height: 27px;
  }
`;

const CardTitle = styled.h3`
  margin: clamp(14px, 1.5vw, 23px) 0 0;

  color: #111111;
  font-size: clamp(10px, 0.9vw, 15px);
  font-weight: 900;
  line-height: 1.15;
  text-transform: uppercase;

  @media (max-width: 560px) {
    margin-top: 11px;
    font-size: 11px;
  }
`;

const CardText = styled.p`
  margin: clamp(10px, 1vw, 16px) 0 0;

  color: #656565;
  font-size: clamp(9px, 0.72vw, 12px);
  font-weight: 500;
  line-height: 1.45;

  @media (max-width: 560px) {
    margin-top: 7px;
    font-size: 9px;
  }
`;

const CardLink = styled.a`
  margin-top: auto;

  display: inline-flex;
  align-items: center;
  gap: 7px;

  color: #df1820;
  font-size: clamp(8px, 0.68vw, 11px);
  font-weight: 900;
  text-transform: uppercase;

  span {
    font-size: 15px;
    line-height: 1;
    transition: transform 0.2s ease;
  }

  &:hover span {
    transform: translateX(4px);
  }

  @media (max-width: 560px) {
    margin-top: 10px;
    font-size: 8px;
  }
`;

const CardMedia = styled.div`
  width: 36%;
  min-width: 36%;

  background-color: #121212;
  background-image:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.08),
      rgba(0, 0, 0, 0.42)
    ),
    url(${({ $image }) => $image});

  background-position: ${({ $position }) => $position};
  background-repeat: no-repeat;
  background-size: cover;

  filter: grayscale(1) contrast(1.08) brightness(0.8);

  transition: filter 0.25s ease, transform 0.25s ease;
`;

const FirstSection = () => {
  const cards = [
    {
      title: "Tecnologia CNC",
      text: "Centri di lavoro CNC per garantire massima precisione e ripetibilità.",
      icon: cncIcon,
      image: technologyImage,
      position: "center center",
    },
    {
      title: "Precisione e qualità",
      text: "Controllo dimensionale e finitura di dettaglio per ogni componente.",
      icon: precisionIcon,
      image: precisionImage,
      position: "center center",
    },
    {
      title: "Automazione",
      text: "Processi automatizzati per ridurre tempi, errori e costi.",
      icon: automationIcon,
      image: automationImage,
      position: "center center",
    },
    {
      title: "Produzione su misura",
      text: "Dalla richiesta tecnica al pezzo finito, su disegno del cliente.",
      icon: productionIcon,
      image: productionImage,
      position: "center center",
    },
  ];

  return (
    <Section id="tecnologia">
      <SectionContainer>
        <CardsGrid>
          {cards.map((card) => (
            <Card key={card.title}>
              <CardContent>
                <CardIcon src={card.icon} alt="" />

                <CardTitle>{card.title}</CardTitle>

                <CardText>{card.text}</CardText>

                <CardLink href="#contatti">
                  Scopri di più <span>→</span>
                </CardLink>
              </CardContent>

              <CardMedia
                $image={card.image}
                $position={card.position}
              />
            </Card>
          ))}
        </CardsGrid>
      </SectionContainer>
    </Section>
  );
};

export default FirstSection;