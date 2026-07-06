import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";

import companyImage from "../assets/img/DJI_0346.jpg";

const CompanySection = styled.section`
  position: relative;
  width: 100%;
  min-height: clamp(420px, 34vw, 580px);
  overflow: hidden;

  display: flex;
  align-items: center;

  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.78) 40%, rgba(0, 0, 0, 0.12) 100%),
    url(${companyImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 760px) {
    min-height: 700px;
    align-items: flex-start;

    background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.72) 58%, rgba(0, 0, 0, 0.2) 100%),
      url(${companyImage});
    background-position: center;
    background-size: cover;
  }
`;

const Content = styled.div`
  width: min(100% - clamp(40px, 9vw, 160px), 740px);
  margin-left: clamp(24px, 6vw, 120px);
  padding: clamp(44px, 5vw, 85px) 0;

  color: #ffffff;

  @media (max-width: 760px) {
    width: calc(100% - 48px);
    margin: 0 auto;
    padding-top: 105px;
  }
`;

const Label = styled.p`
  margin: 0 0 10px;
  color: #e7212a;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 3px;
`;

const Title = styled.h2`
  max-width: 620px;
  margin: 0;

  font-size: clamp(34px, 4vw, 64px);
  font-weight: 900;
  line-height: 1.03;
  letter-spacing: -2px;
`;

const Text = styled.p`
  max-width: 560px;
  margin: 20px 0 0;

  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(14px, 1.1vw, 18px);
  line-height: 1.6;
`;

const ContactsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 34px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.a`
  min-height: 76px;
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 15px 17px;

  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.42);

  color: #ffffff;
  transition: 0.22s ease;

  &:hover {
    border-color: #e41b24;
    background: rgba(211, 12, 20, 0.18);
    transform: translateY(-3px);
  }
`;

const ContactIcon = styled.div`
  width: 38px;
  height: 38px;
  flex: 0 0 auto;

  display: grid;
  place-items: center;

  border-radius: 50%;
  background: rgba(229, 25, 34, 0.16);
  color: #ed2831;
  font-size: 20px;
`;

const ContactInfo = styled.div`
  min-width: 0;

  strong {
    display: block;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
  }

  span {
    display: block;
    margin-top: 5px;

    color: rgba(255, 255, 255, 0.7);
    font-size: 13px;
    font-weight: 600;
  }
`;

const Address = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 11px;

  max-width: 620px;
  margin-top: 22px;

  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  line-height: 1.5;

  svg {
    margin-top: 2px;
    color: #e7212a;
    font-size: 18px;
    flex: 0 0 auto;
  }
`;

const CompanySectionComponent = () => {
  return (
    <CompanySection id="azienda">
      <Content>
        <Label>OFFICINE RO.E.MA.</Label>

        <Title>Meccanica di precisione</Title>

        <Text>
          Contattaci direttamente su WhatsApp per richieste, disegni tecnici,
          lavorazioni CNC e preventivi personalizzati.
        </Text>

        <ContactsGrid>
          <ContactCard
            href="https://wa.me/393288774863"
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon>
              <FaWhatsapp />
            </ContactIcon>

            <ContactInfo>
              <strong>WhatsApp</strong>
              <span>+39 328 877 4863</span>
            </ContactInfo>
          </ContactCard>

          <ContactCard
            href="https://wa.me/393333542745"
            target="_blank"
            rel="noreferrer"
          >
            <ContactIcon>
              <FaWhatsapp />
            </ContactIcon>

            <ContactInfo>
              <strong>WhatsApp</strong>
              <span>+39 333 354 2745</span>
            </ContactInfo>
          </ContactCard>

          <ContactCard href="tel:+390355682454">
            <ContactIcon>
              <FiPhone />
            </ContactIcon>

            <ContactInfo>
              <strong>Telefono azienda</strong>
              <span>+39 035 5682454</span>
            </ContactInfo>
          </ContactCard>
        </ContactsGrid>

        <Address>
          <FiMapPin />
          Via Ca’ Fittavoli, 20-21 — 24030 Barzana (BG), Italia
        </Address>
      </Content>
    </CompanySection>
  );
};

export default CompanySectionComponent;