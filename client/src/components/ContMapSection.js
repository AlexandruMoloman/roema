import styled from "styled-components";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const COMPANY_ADDRESS = "Via Ca' Fittavoli, 20-21, 24030 Barzana BG, Italia";

const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  COMPANY_ADDRESS
)}`;

const googleMapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
  COMPANY_ADDRESS
)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const MapSection = styled.section`
  width: min(100%, 1400px);
  margin: 0 auto;
  padding: 0 clamp(18px, 4vw, 76px) clamp(42px, 6vw, 90px);
`;

const MapShell = styled.div`
  position: relative;
  isolation: isolate;
  overflow: hidden;

  min-height: clamp(310px, 34vw, 480px);

  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: clamp(16px, 1.45vw, 24px);

  background: #0c0c0c;

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    0 20px 58px rgba(0, 0, 0, 0.32);

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;

    min-height: 520px;
  }
`;

const MapFrame = styled.iframe`
  position: absolute;
  z-index: -2;
  inset: 0;

  width: 100%;
  height: 100%;

  border: 0;

  filter: grayscale(1) contrast(1.18) brightness(0.46);
`;

const MapOverlay = styled.div`
  position: absolute;
  z-index: -1;
  inset: 0;

  pointer-events: none;

  background:
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.72) 0%,
      rgba(0, 0, 0, 0.26) 42%,
      rgba(0, 0, 0, 0.08) 100%
    ),
    radial-gradient(
      circle at 72% 50%,
      rgba(214, 39, 26, 0.16) 0%,
      transparent 32%
    );

  @media (max-width: 640px) {
    background:
      linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.26) 46%,
        rgba(0, 0, 0, 0.14) 100%
      ),
      radial-gradient(
        circle at 72% 70%,
        rgba(214, 39, 26, 0.17) 0%,
        transparent 33%
      );
  }
`;

const MapCard = styled.article`
  position: relative;
  z-index: 1;

  width: min(100% - 36px, 315px);
  margin: clamp(19px, 2.2vw, 34px);
  padding: 21px 20px;

  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 13px;

  color: #ffffff;

  background:
    linear-gradient(
      145deg,
      rgba(20, 20, 20, 0.94) 0%,
      rgba(5, 5, 5, 0.95) 100%
    );

  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.35);

  @media (max-width: 640px) {
    margin: 18px 18px 0;
  }
`;

const SmallTitle = styled.p`
  margin: 0 0 9px;

  color: rgba(255, 255, 255, 0.56);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.09em;
  line-height: 1.2;
  text-transform: uppercase;
`;

const CompanyName = styled.h2`
  margin: 0;

  color: #ffffff;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.15;
`;

const CompanyType = styled.p`
  margin: 4px 0 0;

  color: rgba(255, 255, 255, 0.74);
  font-size: 12px;
  line-height: 1.45;
`;

const Address = styled.p`
  display: flex;
  gap: 7px;
  align-items: flex-start;

  margin: 17px 0 0;

  color: rgba(255, 255, 255, 0.67);
  font-size: 12px;
  line-height: 1.55;

  svg {
    flex: 0 0 auto;
    margin-top: 2px;
    color: #ff4034;
  }
`;

const MapsLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  margin-top: 17px;

  color: #ff4538;
  text-decoration: none;

  font-size: 10px;
  font-weight: 850;
  letter-spacing: 0.06em;
  line-height: 1.2;
  text-transform: uppercase;

  transition: color 180ms ease;

  &:hover {
    color: #ffffff;
  }

  svg {
    font-size: 14px;
  }
`;

function ContMapSection() {
  return (
    <MapSection>
      <MapShell>
        <MapFrame
          title="Mappa Officine RO.E.MA."
          src={googleMapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <MapOverlay />

        <MapCard>
          <SmallTitle>La nostra sede</SmallTitle>

          <CompanyName>Officine RO.E.MA.</CompanyName>

          <CompanyType>Meccanica di Precisione</CompanyType>

          <Address>
            <FiMapPin />
            <span>{COMPANY_ADDRESS}</span>
          </Address>

          <MapsLink
            href={googleMapsLink}
            target="_blank"
            rel="noreferrer"
          >
            Visualizza su Google Maps
            <FiArrowUpRight />
          </MapsLink>
        </MapCard>
      </MapShell>
    </MapSection>
  );
}

export default ContMapSection;