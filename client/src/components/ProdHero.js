import React from "react";
import styled from "styled-components";
import {
  FiAward,
  FiCheckCircle,
  FiShield,
  FiSliders,
  FiTarget,
} from "react-icons/fi";

import WeldingImg from "../assets/img/Ale.jpg";
import OleodinamicaImg from "../assets/img/pezzo.jpg";
import PneumaticaImg from "../assets/img/pezzo1.png";
import AutomotiveImg from "../assets/img/pezzo2.png";

const ProdHeroSection = styled.section`
  position: relative;
  overflow: hidden;

  padding: clamp(42px, 5vw, 90px) 0 clamp(56px, 7vw, 120px);

  background:
    radial-gradient(
      circle at 18% 12%,
      rgba(189, 0, 0, 0.1),
      transparent 25%
    ),
    #030303;
`;

const ProdHeroContainer = styled.div`
  width: min(100% - clamp(32px, 8vw, 160px), 1380px);
  margin: 0 auto;
`;

const IntroCard = styled.article`
  display: grid;
  grid-template-columns: minmax(280px, 1fr) minmax(380px, 1.08fr);

  overflow: hidden;

  min-height: 420px;

  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: clamp(18px, 1.8vw, 26px);

  background:
    linear-gradient(110deg, rgba(15, 0, 0, 0.98), rgba(5, 5, 5, 0.98)),
    #080808;

  box-shadow: 0 22px 55px rgba(0, 0, 0, 0.35);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const IntroImageBox = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100%;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;

    background:
      linear-gradient(90deg, transparent 55%, rgba(4, 4, 4, 0.98) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.34));
  }

  @media (max-width: 900px) {
    min-height: 310px;

    &::before {
      background:
        linear-gradient(180deg, transparent 45%, rgba(4, 4, 4, 0.95) 100%),
        linear-gradient(90deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.15));
    }
  }

  @media (max-width: 520px) {
    min-height: 245px;
  }
`;

const IntroImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

const IntroContent = styled.div`
  padding: clamp(34px, 4vw, 68px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    padding-top: 28px;
  }

  @media (max-width: 520px) {
    padding: 26px 20px 28px;
  }
`;

const IntroEyebrow = styled.p`
  margin: 0 0 9px;

  color: #ef1c24;
  font-size: clamp(9px, 0.65vw, 12px);
  font-weight: 800;
  letter-spacing: 0.13em;
  line-height: 1.2;
`;

const IntroTitle = styled.h2`
  margin: 0;

  color: #f4f4f4;
  font-size: clamp(30px, 2.3vw, 46px);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.05;
`;

const IntroText = styled.p`
  max-width: 610px;
  margin: clamp(16px, 1.6vw, 24px) 0 0;

  color: rgba(255, 255, 255, 0.76);
  font-size: clamp(14px, 0.9vw, 17px);
  line-height: 1.6;
`;

const IntroBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(18px, 2vw, 30px) clamp(22px, 3vw, 44px);

  margin-top: clamp(28px, 3vw, 44px);

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`;

const IntroBenefit = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const IntroBenefitIcon = styled.span`
  display: grid;
  flex: 0 0 auto;
  place-items: center;

  width: 34px;
  height: 34px;

  color: #ef1c24;
  font-size: 20px;

  border: 1px solid rgba(238, 28, 36, 0.58);
  border-radius: 50%;
`;

const IntroBenefitText = styled.div`
  display: grid;
  gap: 4px;

  strong {
    color: #ffffff;
    font-size: clamp(11px, 0.72vw, 13px);
    font-weight: 700;
    line-height: 1.15;
  }

  span {
    color: rgba(255, 255, 255, 0.64);
    font-size: clamp(11px, 0.68vw, 12px);
    line-height: 1.4;
  }
`;

const ProductStack = styled.div`
  display: grid;
  gap: clamp(16px, 1.5vw, 24px);

  margin-top: clamp(18px, 1.8vw, 30px);
`;

const ProductCard = styled.article`
  display: grid;
  grid-template-columns: minmax(250px, 0.9fr) minmax(270px, 1fr) minmax(
      240px,
      0.8fr
    );
  grid-template-areas: ${({ $reverse }) =>
    $reverse ? '"content features image"' : '"image content features"'};

  overflow: hidden;

  min-height: 220px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: clamp(15px, 1.4vw, 21px);

  background:
    linear-gradient(100deg, rgba(19, 0, 0, 0.96), rgba(5, 5, 5, 0.98)),
    #070707;

  @media (max-width: 1060px) {
    grid-template-columns: minmax(220px, 0.82fr) minmax(245px, 1fr) minmax(
        220px,
        0.75fr
      );
  }

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "content"
      "features";

    min-height: 0;
  }
`;

const ProductImageBox = styled.div`
  position: relative;
  grid-area: image;
  overflow: hidden;

  min-height: 220px;

  background: #080808;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    inset: 0;

    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.14), rgba(4, 4, 4, 0.64)),
      linear-gradient(180deg, transparent 48%, rgba(0, 0, 0, 0.48));
  }

  @media (max-width: 820px) {
    min-height: 260px;
  }

  @media (max-width: 520px) {
    min-height: 215px;
  }
`;

const ProductImage = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
`;

const ProductContent = styled.div`
  grid-area: content;

  padding: clamp(28px, 2.8vw, 48px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 520px) {
    padding: 26px 20px 20px;
  }
`;

const ProductNumber = styled.span`
  margin-bottom: 10px;

  color: #ef1c24;
  font-size: clamp(12px, 0.8vw, 15px);
  font-weight: 800;
  letter-spacing: 0.08em;
`;

const ProductTitle = styled.h3`
  margin: 0;

  color: #f6f6f6;
  font-size: clamp(26px, 2vw, 38px);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1;
`;

const ProductDescription = styled.p`
  max-width: 440px;
  margin: 16px 0 0;

  color: rgba(255, 255, 255, 0.68);
  font-size: clamp(13px, 0.8vw, 15px);
  line-height: 1.55;
`;

const ProductFeatures = styled.ul`
  grid-area: features;

  display: grid;
  align-content: center;
  gap: 13px;

  margin: 0;
  padding: clamp(28px, 2.8vw, 48px);

  list-style: none;

  border-left: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 820px) {
    padding-top: 0;

    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-left: 0;
  }

  @media (max-width: 520px) {
    gap: 11px;
    padding: 20px;
  }
`;

const ProductFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(12px, 0.76vw, 14px);
  line-height: 1.35;

  svg {
    flex: 0 0 auto;
    color: #ef1c24;
    font-size: 16px;
  }
`;

const introBenefits = [
  {
    icon: <FiTarget />,
    title: "PRECISIONE",
    text: "Tolleranze ristrette e finiture di altissimo livello.",
  },
  {
    icon: <FiShield />,
    title: "AFFIDABILITÀ",
    text: "Processi controllati e materiali selezionati.",
  },
  {
    icon: <FiSliders />,
    title: "FLESSIBILITÀ",
    text: "Soluzioni personalizzate anche per piccole serie.",
  },
  {
    icon: <FiAward />,
    title: "QUALITÀ TOTALE",
    text: "Controllo qualità in ogni fase della produzione.",
  },
];

const products = [
  {
    number: "01",
    title: "Oleodinamica",
    description:
      "Componenti progettati per resistere a pressioni elevate e condizioni operative estreme, garantendo affidabilità e lunga durata nel tempo.",
    image: OleodinamicaImg,
    imageAlt: "Componente oleodinamico di precisione",
    features: [
      "Resistenza ad alte pressioni",
      "Lavorazioni di precisione",
      "Materiali certificati",
      "Controlli di qualità rigorosi",
    ],
    reverse: false,
  },
  {
    number: "02",
    title: "Pneumatica",
    description:
      "Soluzioni leggere, precise ed efficienti per sistemi pneumatici ad alta prestazione, con focus su efficienza e ripetibilità.",
    image: PneumaticaImg,
    imageAlt: "Componente pneumatico CNC",
    features: [
      "Alta precisione dimensionale",
      "Componenti leggeri e resistenti",
      "Ottime finiture superficiali",
      "Soluzioni su misura",
    ],
    reverse: true,
  },
  {
    number: "03",
    title: "Automotive",
    description:
      "Produciamo componenti critici per il settore automotive, rispettando i più elevati standard di qualità e tracciabilità.",
    image: AutomotiveImg,
    imageAlt: "Componente automotive lavorato CNC",
    features: [
      "Elevati standard qualitativi",
      "Tracciabilità completa",
      "Produzione flessibile",
      "Affidabilità e sicurezza",
    ],
    reverse: false,
  },
];

function ProdHero() {
  return (
    <ProdHeroSection>
      <ProdHeroContainer>
        <IntroCard>
          <IntroImageBox>
            <IntroImage
              src={WeldingImg}
              alt="Lavorazione meccanica di precisione"
            />
          </IntroImageBox>

          <IntroContent>
            <IntroEyebrow>ECCELLENZA IN OGNI DETTAGLIO</IntroEyebrow>

            <IntroTitle>I nostri Prodotti CNC</IntroTitle>

            <IntroText>
              Ogni componente nasce dall’unione di esperienza, tecnologia e
              passione. Lavoriamo con macchinari all’avanguardia e controlli
              rigorosi per garantire risultati affidabili e perfettamente
              conformi alle esigenze dei nostri clienti.
            </IntroText>

            <IntroBenefits>
              {introBenefits.map((item) => (
                <IntroBenefit key={item.title}>
                  <IntroBenefitIcon>{item.icon}</IntroBenefitIcon>

                  <IntroBenefitText>
                    <strong>{item.title}</strong>
                    <span>{item.text}</span>
                  </IntroBenefitText>
                </IntroBenefit>
              ))}
            </IntroBenefits>
          </IntroContent>
        </IntroCard>

        <ProductStack>
          {products.map((product) => (
            <ProductCard key={product.number} $reverse={product.reverse}>
              <ProductImageBox>
                <ProductImage
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                />
              </ProductImageBox>

              <ProductContent>
                <ProductNumber>{product.number}</ProductNumber>
                <ProductTitle>{product.title}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
              </ProductContent>

              <ProductFeatures>
                {product.features.map((feature) => (
                  <ProductFeature key={feature}>
                    <FiCheckCircle aria-hidden="true" />
                    <span>{feature}</span>
                  </ProductFeature>
                ))}
              </ProductFeatures>
            </ProductCard>
          ))}
        </ProductStack>
      </ProdHeroContainer>
    </ProdHeroSection>
  );
}

export default ProdHero;