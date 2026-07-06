import styled, { keyframes } from "styled-components";

import pezzo from "../assets/png/pezzo.png";

const rotateGear = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(360deg);
  }
`;

const DecorationScene = styled.div`
  position: absolute;
  top: clamp(150px, 23%, 260px);
  right: clamp(40px, 7vw, 145px);
  z-index: 3;

  width: clamp(220px, 25vw, 480px);
  aspect-ratio: 1;

  pointer-events: none;

  &::before {
    position: absolute;
    inset: 13%;
    z-index: -1;

    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(237, 26, 37, 0.3),
      rgba(194, 6, 15, 0.1) 48%,
      transparent 72%
    );

    filter: blur(18px);
    content: "";
  }

  @media (max-width: 1180px) {
    top: clamp(145px, 21%, 220px);
    right: clamp(25px, 4vw, 60px);

    width: clamp(205px, 28vw, 370px);
  }

  @media (max-width: 820px) {
    top: 485px;
    right: auto;
    left: 50%;

    width: min(66vw, 315px);

    transform: translateX(-50%);
  }

  @media (max-width: 480px) {
    top: 455px;
    width: min(70vw, 250px);
  }
`;

const Gear = styled.img`
  width: 100%;
  height: 100%;

  display: block;
  object-fit: contain;

  transform-origin: center;
  will-change: transform;

  filter:
    drop-shadow(0 24px 26px rgba(0, 0, 0, 0.85))
    drop-shadow(0 0 26px rgba(229, 12, 23, 0.3));

  animation: ${rotateGear} 15s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const HomeDecoration = () => {
  return (
    <DecorationScene>
      <Gear src={pezzo} alt="Componente meccanico CNC" />
    </DecorationScene>
  );
};

export default HomeDecoration;