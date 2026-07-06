import styled, { keyframes } from "styled-components";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiChevronRight,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../assets/logo/logo.png";

const footerGlow = keyframes`
  0%,
  100% {
    opacity: 0.35;
    transform: translateX(-12%);
  }

  50% {
    opacity: 0.8;
    transform: translateX(12%);
  }
`;

const FooterShell = styled.footer`
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 75% 20%, rgba(183, 8, 15, 0.2), transparent 24%),
    radial-gradient(circle at 4% 92%, rgba(190, 10, 19, 0.12), transparent 26%),
    #030303;
  color: #ffffff;

  &::after {
    position: absolute;
    right: -1.5%;
    bottom: -7%;
    z-index: 0;

    color: rgba(255, 255, 255, 0.018);
    content: "ROEMA";
    font-size: clamp(110px, 18vw, 330px);
    font-weight: 900;
    letter-spacing: -0.08em;
    line-height: 1;

    pointer-events: none;
  }
`;

const FooterContainer = styled.div`
  position: relative;
  z-index: 2;

  width: min(100% - clamp(40px, 8vw, 160px), 1640px);
  margin: 0 auto;

  @media (max-width: 560px) {
    width: calc(100% - 40px);
  }
`;

const FooterCta = styled.section`
  position: relative;
  overflow: hidden;

  padding: clamp(28px, 3.2vw, 52px) 0;

  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  background:
    linear-gradient(100deg, rgba(123, 0, 7, 0.96), rgba(204, 13, 22, 0.88) 48%, rgba(68, 0, 5, 0.96)),
    #a3080e;

  &::before {
    position: absolute;
    inset: 0;

    background-image:
      linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);

    background-size: 28px 28px;
    content: "";
    opacity: 0.3;
  }

  &::after {
    position: absolute;
    top: -130%;
    left: 0;

    width: 52%;
    height: 360%;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.22),
      transparent
    );

    content: "";
    filter: blur(12px);
    transform: rotate(18deg);
    animation: ${footerGlow} 6s ease-in-out infinite;
  }
`;

const CtaInner = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;

  @media (max-width: 980px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const CtaContent = styled.div`
  max-width: 760px;
`;

const CtaLabel = styled.p`
  margin: 0 0 8px;

  color: rgba(255, 255, 255, 0.74);
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 3px;
`;

const CtaTitle = styled.h2`
  margin: 0;

  color: #ffffff;
  font-size: clamp(25px, 2.8vw, 46px);
  font-weight: 900;
  letter-spacing: -1.5px;
  line-height: 1.08;
`;

const CtaText = styled.p`
  margin: 12px 0 0;

  color: rgba(255, 255, 255, 0.86);
  font-size: clamp(13px, 1vw, 16px);
  line-height: 1.55;
`;

const CtaActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 480px) {
    width: 100%;
    display: grid;
  }
`;

const CtaButton = styled.a`
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 0 20px;

  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 6px;

  background: #ffffff;
  color: #b30810;

  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  white-space: nowrap;

  transition: transform 0.22s ease, box-shadow 0.22s ease;

  &:hover {
    box-shadow: 0 13px 28px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CtaSecondaryButton = styled(CtaButton)`
  background: rgba(0, 0, 0, 0.22);
  color: #ffffff;

  &:hover {
    background: rgba(0, 0, 0, 0.42);
  }
`;

const FooterMain = styled.section`
  position: relative;
  z-index: 2;

  padding: clamp(52px, 6vw, 100px) 0 clamp(34px, 4vw, 60px);
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(230px, 1.15fr) minmax(130px, 0.55fr) minmax(255px, 0.95fr) minmax(240px, 0.95fr);
  gap: clamp(28px, 4vw, 72px);

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const BrandColumn = styled.div`
  max-width: 350px;
`;

const FooterLogo = styled.img`
  width: clamp(145px, 13vw, 215px);
  height: auto;
  display: block;

  filter: drop-shadow(0 12px 22px rgba(0, 0, 0, 0.45));
`;

const BrandText = styled.p`
  margin: 20px 0 0;

  color: rgba(255, 255, 255, 0.66);
  font-size: 13px;
  line-height: 1.7;
`;

const BrandLine = styled.div`
  width: 74px;
  height: 2px;
  margin-top: 22px;

  background: linear-gradient(90deg, #ed2831, transparent);
`;

const FooterColumn = styled.div`
  min-width: 0;
`;

const FooterTitle = styled.h3`
  margin: 0 0 19px;

  color: #ffffff;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const FooterNav = styled.nav`
  display: grid;
  gap: 12px;
`;

const FooterLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  width: fit-content;

  color: rgba(255, 255, 255, 0.66);
  font-size: 13px;
  font-weight: 700;

  transition: color 0.2s ease, transform 0.2s ease;

  svg {
    color: #e5232b;
    font-size: 14px;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #ffffff;
    transform: translateX(4px);
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;

const ContactList = styled.div`
  display: grid;
  gap: 10px;
`;

const ContactItem = styled.a`
  min-height: 67px;
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr) 16px;
  align-items: center;
  gap: 11px;

  padding: 12px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 9px;

  background: rgba(255, 255, 255, 0.025);
  color: #ffffff;

  transition: border-color 0.2s ease, background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: rgba(231, 29, 38, 0.7);
    background: rgba(194, 8, 16, 0.13);
    transform: translateX(4px);
  }
`;

const ContactIcon = styled.div`
  width: 38px;
  height: 38px;

  display: grid;
  place-items: center;

  border-radius: 50%;
  background: rgba(228, 23, 32, 0.14);
  color: #ed2932;
  font-size: 18px;
`;

const ContactCopy = styled.div`
  min-width: 0;

  small {
    display: block;

    color: rgba(255, 255, 255, 0.52);
    font-size: 9px;
    font-weight: 800;
    letter-spacing: 0.7px;
    text-transform: uppercase;
  }

  strong {
    display: block;
    overflow: hidden;

    margin-top: 4px;

    color: #ffffff;
    font-size: 12px;
    font-weight: 800;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const ContactArrow = styled(FiArrowUpRight)`
  color: rgba(255, 255, 255, 0.45);
  font-size: 15px;
`;

const LocationCard = styled.a`
  position: relative;
  min-height: 218px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  padding: 24px;

  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 13px;

  background:
    linear-gradient(180deg, rgba(5, 5, 5, 0.24), rgba(5, 5, 5, 0.97)),
    repeating-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px,
      transparent 14px
    ),
    #111111;

  color: #ffffff;

  transition: border-color 0.25s ease, transform 0.25s ease;

  &::before {
    position: absolute;
    top: -30%;
    right: -28%;

    width: 220px;
    height: 220px;

    border: 1px solid rgba(234, 25, 35, 0.45);
    border-radius: 50%;

    box-shadow:
      0 0 0 24px rgba(234, 25, 35, 0.06),
      0 0 0 48px rgba(234, 25, 35, 0.04);

    content: "";
  }

  &:hover {
    border-color: rgba(234, 25, 35, 0.72);
    transform: translateY(-5px);
  }
`;

const LocationPin = styled.div`
  position: absolute;
  top: 22px;
  right: 22px;

  color: #ec2630;
  font-size: 30px;
  filter: drop-shadow(0 0 12px rgba(236, 38, 48, 0.5));
`;

const LocationLabel = styled.span`
  color: #ed2630;
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 2px;
`;

const LocationTitle = styled.strong`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 900;
`;

const LocationText = styled.p`
  margin: 8px 0 0;

  color: rgba(255, 255, 255, 0.67);
  font-size: 12px;
  line-height: 1.45;
`;

const LocationAction = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  margin-top: 15px;

  color: #ffffff;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;

  svg {
    color: #ec2630;
    font-size: 15px;
  }
`;

const FooterBottom = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 24px 0 28px;

  border-top: 1px solid rgba(255, 255, 255, 0.09);

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

const Copyright = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.43);
  font-size: 11px;
  font-weight: 600;
`;

const BottomActions = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const LegalLink = styled.a`
  color: rgba(255, 255, 255, 0.54);
  font-size: 11px;
  font-weight: 700;

  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

const BackTop = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  padding: 0;

  border: 0;
  background: transparent;
  color: #ed2a33;

  cursor: pointer;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;

  svg {
    font-size: 15px;
  }
`;

const SiteFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const contacts = [
    {
      label: "WhatsApp commerciale",
      value: "+39 328 877 4863",
      href: "https://wa.me/393288774863",
      icon: FaWhatsapp,
      external: true,
    },
    {
      label: "WhatsApp diretto",
      value: "+39 333 354 2745",
      href: "https://wa.me/393333542745",
      icon: FaWhatsapp,
      external: true,
    },
    {
      label: "Telefono azienda",
      value: "+39 035 5682454",
      href: "tel:+390355682454",
      icon: FiPhone,
      external: false,
    },
    {
      label: "Email",
      value: "info@roema.it",
      href: "mailto:info@roema.it",
      icon: FiMail,
      external: false,
    },
  ];

  return (
    <FooterShell>
      <FooterCta>
        <FooterContainer>
          <CtaInner>
            <CtaContent>
              <CtaLabel>ROEMA / PREVENTIVO PERSONALIZZATO</CtaLabel>

              <CtaTitle>
                Hai un disegno tecnico o un componente da realizzare?
              </CtaTitle>

              <CtaText>
                Inviaci la richiesta: analizzeremo il progetto e risponderemo
                con una soluzione concreta.
              </CtaText>
            </CtaContent>

            <CtaActions>
              <CtaButton
                href="https://wa.me/393288774863?text=Ciao%20ROEMA%2C%20vorrei%20richiedere%20un%20preventivo."
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                Richiedi preventivo
              </CtaButton>

              <CtaSecondaryButton href="tel:+390355682454">
                <FiPhone />
                Chiama l&apos;azienda
              </CtaSecondaryButton>
            </CtaActions>
          </CtaInner>
        </FooterContainer>
      </FooterCta>

      <FooterMain>
        <FooterContainer>
          <FooterGrid>
            <BrandColumn>
              <FooterLogo src={logo} alt="Officine ROEMA" />

              <BrandText>
                Meccanica di precisione CNC su disegno del cliente. Tecnologia,
                esperienza e attenzione ad ogni dettaglio.
              </BrandText>

              <BrandLine />
            </BrandColumn>

            <FooterColumn>
              <FooterTitle>Link rapidi</FooterTitle>

              <FooterNav>
                <FooterLink href="#tecnologia">
                  <FiChevronRight />
                  Tecnologia
                </FooterLink>

                <FooterLink href="#prodotti">
                  <FiChevronRight />
                  Prodotti
                </FooterLink>

                <FooterLink href="#azienda">
                  <FiChevronRight />
                  Azienda
                </FooterLink>

                <FooterLink href="#azienda">
                  <FiChevronRight />
                  Contatti
                </FooterLink>
              </FooterNav>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Contatti diretti</FooterTitle>

              <ContactList>
                {contacts.map((contact) => {
                  const Icon = contact.icon;

                  return (
                    <ContactItem
                      key={contact.label}
                      href={contact.href}
                      target={contact.external ? "_blank" : undefined}
                      rel={contact.external ? "noreferrer" : undefined}
                    >
                      <ContactIcon>
                        <Icon />
                      </ContactIcon>

                      <ContactCopy>
                        <small>{contact.label}</small>
                        <strong>{contact.value}</strong>
                      </ContactCopy>

                      <ContactArrow />
                    </ContactItem>
                  );
                })}
              </ContactList>
            </FooterColumn>

            <FooterColumn>
              <FooterTitle>Dove siamo</FooterTitle>

              <LocationCard
                href="https://www.google.com/maps/search/?api=1&query=Via%20Ca%20Fittavoli%2020-21%2C%2024030%20Barzana%20BG%2C%20Italia"
                target="_blank"
                rel="noreferrer"
              >
                <LocationPin>
                  <FiMapPin />
                </LocationPin>

                <LocationLabel>BARZANA / BG / ITALIA</LocationLabel>

                <LocationTitle>Officine RO.E.MA.</LocationTitle>

                <LocationText>
                  Via Ca&apos; Fittavoli, 20-21
                  <br />
                  24030 Barzana (BG), Italia
                </LocationText>

                <LocationAction>
                  Apri su Maps
                  <FiArrowUpRight />
                </LocationAction>
              </LocationCard>
            </FooterColumn>
          </FooterGrid>

          <FooterBottom>
            <Copyright>
              © {new Date().getFullYear()} Officine RO.E.MA. — Tutti i diritti
              riservati.
            </Copyright>

            <BottomActions>
              <LegalLink href="#privacy">Privacy Policy</LegalLink>
              <LegalLink href="#cookie">Cookie Policy</LegalLink>

              <BackTop type="button" onClick={scrollToTop}>
                Torna su
                <FiArrowUp />
              </BackTop>
            </BottomActions>
          </FooterBottom>
        </FooterContainer>
      </FooterMain>
    </FooterShell>
  );
};

export default SiteFooter;