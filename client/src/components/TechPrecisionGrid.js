import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";

import TechConcentricityImg from "../assets/img/pre.jpg";
import TechAxisImg from "../assets/img/pro.jpg";
import TechDiameterImg from "../assets/img/caliper.png";
import TechPrecisionImg from "../assets/img/micrometro.jpg";

const techItems = [
  {
    number: "01",
    title: "CONCENTRICITÀ",
    image: TechConcentricityImg,
    alt: "Controllo della concentricità meccanica",
    reverse: false,
    description:
      "La concentricità garantisce che un componente ruoti attorno a un asse comune in modo uniforme. È un parametro fondamentale per evitare vibrazioni, usura irregolare e perdite di precisione durante la lavorazione.",
    features: [
      "Uniformità di rotazione",
      "Riduzione dell’usura",
      "Massima stabilità",
      "Prestazioni elevate",
    ],
  },
  {
    number: "02",
    title: "L’ASSE",
    image: TechAxisImg,
    alt: "Lavorazione CNC su più assi",
    reverse: true,
    description:
      "In una macchina CNC ogni asse controlla il movimento dell’utensile o del pezzo. Più assi disponibili significano lavorazioni più complesse, rapide e precise anche per geometrie difficili.",
    features: [
      "Movimenti controllati",
      "Lavorazioni complesse",
      "Alta precisione",
      "Tempo ridotto",
    ],
  },
  {
    number: "03",
    title: "DIAMETRO",
    image: TechDiameterImg,
    alt: "Misurazione del diametro con calibro digitale",
    reverse: false,
    description:
      "Un diametro preciso è essenziale per il corretto assemblaggio dei componenti meccanici. Il controllo dimensionale assicura intercambiabilità, qualità costante e affidabilità del pezzo finito.",
    features: [
      "Precisione dimensionale",
      "Intercambiabilità",
      "Assemblaggio perfetto",
      "Riduzione scarti",
    ],
  },
  {
    number: "04",
    title: "PRECISIONE",
    image: TechPrecisionImg,
    alt: "Misurazione con micrometro digitale",
    reverse: true,
    description:
      "Il micrometro consente di misurare variazioni minime con estrema accuratezza. È uno strumento indispensabile nella meccanica di precisione per verificare ogni dettaglio prima della consegna.",
    features: [
      "Misure al micrometro",
      "Dettagli minimi",
      "Qualità garantita",
      "Controllo costante",
    ],
  },
];

const TechPrecisionSection = styled.section`
  position: relative;
  overflow: hidden;

  padding: clamp(30px, 4vw, 68px) clamp(20px, 7vw, 130px)
    clamp(70px, 8vw, 130px);

  background:
    radial-gradient(
      circle at 88% 7%,
      rgba(139, 0, 0, 0.16),
      transparent 24%
    ),
    #030303;

  &::before {
    content: "";
    position: absolute;
    inset: 0;

    opacity: 0.18;
    pointer-events: none;

    background-image:
      linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);

    background-size: 80px 80px;
    mask-image: linear-gradient(
      90deg,
      transparent 0%,
      #000 40%,
      transparent 100%
    );
  }
`;

const TechPrecisionInner = styled.div`
  position: relative;
  z-index: 1;

  width: min(100%, 1400px);
  margin: 0 auto;

  display: grid;
  gap: 12px;
`;

const TechDetailRow = styled.article`
  display: grid;
  grid-template-columns: ${({ $reverse }) =>
    $reverse
      ? "minmax(0, 1.48fr) minmax(250px, 0.9fr)"
      : "minmax(250px, 0.9fr) minmax(0, 1.48fr)"};
  gap: 12px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const TechImageCard = styled.div`
  position: relative;
  min-height: clamp(158px, 13vw, 218px);
  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 12px;

  background: #0b0b0b;
  box-shadow:
    inset 0 0 36px rgba(0, 0, 0, 0.56),
    0 14px 34px rgba(0, 0, 0, 0.22);

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;

    background:
      linear-gradient(
        90deg,
        rgba(0, 0, 0, 0.22),
        transparent 55%,
        rgba(0, 0, 0, 0.18)
      ),
      linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.78),
        transparent 45%,
        rgba(0, 0, 0, 0.15)
      );

    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    right: 0;
    bottom: 0;
    left: 24%;

    height: 3px;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 24, 34, 0.7),
      #ff1a25
    );

    box-shadow: 0 0 18px rgba(230, 0, 10, 0.82);
  }

  @media (max-width: 760px) {
    order: -1;
    min-height: 210px;
  }

  @media (max-width: 480px) {
    min-height: 180px;
  }
`;

const TechImage = styled.img`
  width: 100%;
  height: 100%;

  position: absolute;
  inset: 0;

  display: block;
  object-fit: cover;

  filter: contrast(1.08) saturate(0.82);
  transition: transform 0.55s ease;

  ${TechDetailRow}:hover & {
    transform: scale(1.045);
  }
`;

const TechInfoCard = styled.div`
  position: relative;
  min-height: clamp(158px, 13vw, 218px);
  overflow: hidden;

  padding: clamp(18px, 2vw, 30px) clamp(20px, 2.5vw, 38px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;

  background:
    radial-gradient(
      circle at 100% 100%,
      rgba(181, 0, 0, 0.11),
      transparent 30%
    ),
    linear-gradient(135deg, rgba(21, 21, 21, 0.96), rgba(5, 5, 5, 0.98));

  box-shadow:
    inset 0 0 35px rgba(255, 255, 255, 0.012),
    0 14px 34px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 80px;
    height: 1px;

    background: linear-gradient(
      90deg,
      rgba(228, 24, 31, 0.78),
      transparent
    );
  }
`;

const TechNumber = styled.span`
  margin-bottom: 7px;

  color: #f0212c;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
`;

const TechCardTitle = styled.h2`
  margin: 0;

  color: #ffffff;
  font-size: clamp(19px, 1.55vw, 29px);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.04em;
`;

const TechCardText = styled.p`
  max-width: 850px;
  margin: 12px 0 0;

  color: rgba(255, 255, 255, 0.66);
  font-size: clamp(11px, 0.74vw, 13px);
  line-height: 1.5;
`;

const TechFeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;

  margin-top: 15px;
`;

const TechFeature = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  color: rgba(255, 255, 255, 0.76);
  font-size: clamp(9px, 0.64vw, 11px);
  font-weight: 600;
  white-space: nowrap;

  svg {
    color: #ef1d28;
    font-size: 12px;
  }
`;

function TechInfo({ item }) {
  return (
    <TechInfoCard>
      <TechNumber>{item.number}</TechNumber>

      <TechCardTitle>{item.title}</TechCardTitle>

      <TechCardText>{item.description}</TechCardText>

      <TechFeatureList>
        {item.features.map((feature) => (
          <TechFeature key={feature}>
            <FiCheckCircle />
            {feature}
          </TechFeature>
        ))}
      </TechFeatureList>
    </TechInfoCard>
  );
}

function TechVisual({ item }) {
  return (
    <TechImageCard>
      <TechImage src={item.image} alt={item.alt} />
    </TechImageCard>
  );
}

function TechPrecisionGrid() {
  return (
    <TechPrecisionSection id="macchinari">
      <TechPrecisionInner>
        {techItems.map((item) => (
          <TechDetailRow key={item.number} $reverse={item.reverse}>
            {item.reverse ? (
              <>
                <TechInfo item={item} />
                <TechVisual item={item} />
              </>
            ) : (
              <>
                <TechVisual item={item} />
                <TechInfo item={item} />
              </>
            )}
          </TechDetailRow>
        ))}
      </TechPrecisionInner>
    </TechPrecisionSection>
  );
}

export default TechPrecisionGrid;