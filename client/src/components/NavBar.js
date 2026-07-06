import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import LogoImg from "../assets/logo/logo.png";



const Header = styled.header`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1200;

  transition: 0.3s ease;

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
  }
`;

const HeaderInner = styled.div`
  min-height: 82px;
  padding: 0 28px;

  display: flex;
  align-items: center;
  gap: 16px;

  border-radius: 22px;
 

  transition: 0.3s ease;

  @media (max-width: 768px) {
    min-height: 68px;
    padding: 0 14px;
    border-radius: 0;
    border-right: 0;
    border-left: 0;
  }
`;

const LogoLink = styled(NavLink)`
  width: 120px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
`;

const LogoImage = styled.img`
  width: 100%;
  max-height: 50px;

  display: block;
  object-fit: contain;

  filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.45));
`;

const BurgerButton = styled.button`
  position: relative;
  z-index: 1400;

  width: 46px;
  height: 46px;
  padding: 0;

  display: none;
  place-items: center;

  border: 1px solid
    ${({ $open }) =>
      $open ? "rgba(236, 30, 40, 0.95)" : "rgba(255,255,255,0.20)"};

  border-radius: 10px;

  background:
    linear-gradient(135deg, rgba(220, 18, 28, 0.18), transparent 60%),
    rgba(8, 8, 8, 0.95);

  cursor: pointer;
  transition: 0.25s ease;

  &::before {
    position: absolute;
    inset: 5px;

    border: 1px solid rgba(239, 35, 45, 0.28);
    content: "";

    opacity: ${({ $open }) => ($open ? 1 : 0.3)};
    transform: ${({ $open }) => ($open ? "rotate(45deg)" : "rotate(0)")};

    transition: 0.3s ease;
  }

  &:hover {
    border-color: #e9232c;
    transform: translateY(-2px);
  }

  @media (max-width: 980px) {
  margin-left:auto;
    display: grid;
  }

  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
  }
`;

const BurgerLines = styled.span`
  position: relative;
  z-index: 2;

  width: 20px;
  height: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    width: 100%;
    height: 2px;

    display: block;

    background: #ffffff;
    border-radius: 10px;

    transform-origin: center;
    transition: 0.3s ease;
  }

  ${BurgerButton}[aria-expanded="true"] & {
    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
      transform: scaleX(0);
    }

    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(22px, 2.5vw, 42px);
  margin-left: 0;

  @media (max-width: 980px) {
    display: none;
  }
`;

const DesktopLink = styled(NavLink)`
  position: relative;
  padding: 8px 0;

  color: #ffffff;
  font-size: 13px;
  font-weight: 800;

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 0;
    height: 2px;

    background: #e7212a;
    content: "";
    transition: width 0.25s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const QuoteButton = styled(NavLink)`
  margin-left: auto;
  padding: 13px 22px;

  border-radius: 6px;
  background: linear-gradient(135deg, #f02b34, #9f050a);
  box-shadow: 0 10px 25px rgba(210, 12, 20, 0.3);

  color: #ffffff;
  font-size: 10px;
  font-weight: 900;
  text-transform: uppercase;
  white-space: nowrap;

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 32px rgba(225, 20, 30, 0.45);
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

const MenuBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1100;

  background: rgba(0, 0, 0, 0.62);
  backdrop-filter: blur(4px);

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

  transition: opacity 0.35s ease;

  @media (min-width: 981px) {
    display: none;
  }
`;

const SideMenu = styled.aside`
  position: fixed;
  top: 32px;
  bottom: 32px;
  left: 32px;
  z-index: 1200;

  width: min(580px, calc(100vw - 64px));
  overflow: hidden;

  padding: 125px 52px 42px;

  display: flex;
  flex-direction: column;

  border: 1px solid rgba(236, 31, 41, 0.38);
  border-radius: 28px 0 0 28px;

  background:
    radial-gradient(circle at 8% 10%, rgba(233, 24, 35, 0.62), transparent 24%),
    radial-gradient(circle at 95% 80%, rgba(162, 0, 8, 0.45), transparent 30%),
    #070707;

  clip-path: polygon(
    0 0,
    93% 0,
    100% 6%,
    93% 16%,
    100% 28%,
    93% 40%,
    100% 52%,
    93% 64%,
    100% 76%,
    93% 88%,
    100% 100%,
    0 100%
  );

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};

  transform: ${({ $open }) =>
    $open ? "translateX(0)" : "translateX(-110%)"};

  transition:
    transform 0.65s cubic-bezier(0.76, 0, 0.24, 1),
    opacity 0.25s ease;

  @media (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;

    width: min(100%, 580px);
    padding: 108px 28px 30px;

    border-radius: 0;

    clip-path: polygon(
      0 0,
      94% 0,
      100% 7%,
      94% 18%,
      100% 30%,
      94% 43%,
      100% 57%,
      94% 70%,
      100% 84%,
      94% 100%,
      0 100%
    );
  }

  @media (max-width: 430px) {
    padding: 96px 22px 24px;
  }
`;

const MenuGrid = styled.div`
  position: absolute;
  inset: 0;

  opacity: 0.14;

  background-image:
    linear-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.14) 1px, transparent 1px);

  background-size: 36px 36px;
  pointer-events: none;
`;

const MenuFlange = styled.div`
  position: absolute;
  right: -220px;
  bottom: -220px;

  width: 470px;
  aspect-ratio: 1;

  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;

  background:
    radial-gradient(circle, transparent 0 31%, rgba(231, 30, 40, 0.12) 32% 34%, transparent 35%),
    repeating-conic-gradient(
      rgba(238, 32, 42, 0.18) 0deg 5deg,
      transparent 5deg 28deg
    );

  box-shadow:
    0 0 0 28px rgba(255, 255, 255, 0.025),
    0 0 0 56px rgba(255, 255, 255, 0.02),
    0 0 0 84px rgba(255, 255, 255, 0.015);

  pointer-events: none;
`;

const MenuRail = styled.div`
  position: absolute;
  top: 0;
  right: 13%;
  bottom: 0;

  width: 2px;
  background: linear-gradient(transparent, #ef2530 16%, #ef2530 84%, transparent);

  box-shadow: 0 0 18px rgba(234, 27, 37, 0.9);
  pointer-events: none;
`;

const MenuOverline = styled.p`
  position: relative;
  z-index: 2;

  margin: 0 0 20px;

  color: #ff4a53;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 3.5px;
`;

const MobileLinks = styled.nav`
  position: relative;
  z-index: 2;

  border-top: 1px solid rgba(255, 255, 255, 0.18);
`;

const MobileLinkNumber = styled.span`
  color: rgba(255, 255, 255, 0.38);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1px;
  transition: color 0.2s ease;
`;

const MobileLinkText = styled.span`
  font-size: clamp(25px, 4vw, 39px);
  font-weight: 800;
  letter-spacing: -1px;
`;

const MobileLinkArrow = styled.span`
  color: #ef2831;
  font-size: 24px;

  opacity: 0;
  transform: translateX(-10px);

  transition: 0.22s ease;
`;

const MobileLink = styled(NavLink)`
  min-height: 70px;

  display: grid;
  grid-template-columns: 42px 1fr auto;
  align-items: center;
  gap: 10px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.16);

  color: rgba(255, 255, 255, 0.78);

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  transform: ${({ $open }) =>
    $open ? "translateX(0)" : "translateX(-40px)"};

  transition:
    color 0.22s ease,
    padding-left 0.22s ease,
    opacity 0.42s ease,
    transform 0.42s ease;

  transition-delay: ${({ $open, $index }) =>
    $open ? `${0.14 + $index * 0.08}s` : "0s"};

  &:hover,
  &.active {
    padding-left: 12px;
    color: #ffffff;
  }

  &:hover ${MobileLinkNumber},
  &.active ${MobileLinkNumber} {
    color: #f3323b;
  }

  &:hover ${MobileLinkArrow},
  &.active ${MobileLinkArrow} {
    opacity: 1;
    transform: translateX(0);
  }
`;

const MenuBottom = styled.div`
  position: relative;
  z-index: 2;

  margin-top: auto;
  padding-top: 30px;
`;

const MenuQuestion = styled.p`
  margin: 0 0 12px;

  color: rgba(255, 255, 255, 0.58);
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 1.6px;
`;

const MobileQuote = styled(NavLink)`
  width: fit-content;

  display: inline-flex;
  align-items: center;
  gap: 16px;

  padding: 14px 18px;

  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 5px;

  color: #ffffff;
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;

  transition: 0.25s ease;

  span {
    color: #f12831;
    font-size: 20px;
  }

  &:hover {
    border-color: #f22b34;
    background: #da151e;
  }

  &:hover span {
    color: #ffffff;
  }
`;

const MenuFooter = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  gap: 16px;

  margin-top: 28px;

  color: rgba(255, 255, 255, 0.35);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 1px;
`;

/* =========================
   COMPONENT
========================= */

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { number: "01", label: "Home", to: "/", exact: true },
    { number: "02", label: "Tecnologia", to: "/technologia" },
    { number: "03", label: "Prodotti", to: "/prodotti" },
    { number: "04", label: "Notizie", to: "/notizie" },
    { number: "05", label: "Contatti", to: "/contatti" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <Header>
        <HeaderInner $scrolled={scrolled}>
          <LogoLink exact to="/" onClick={closeMenu}>
            <LogoImage src={LogoImg} alt="Officine ROEMA" />
          </LogoLink>

          <BurgerButton
            type="button"
            $open={menuOpen}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            onClick={() => setMenuOpen((current) => !current)}
          >
            <BurgerLines>
              <span />
              <span />
              <span />
            </BurgerLines>
          </BurgerButton>

          <DesktopNav>
            {navLinks.slice(1).map((link) => (
              <DesktopLink
                key={link.to}
                to={link.to}
                activeClassName="active"
              >
                {link.label}
              </DesktopLink>
            ))}
          </DesktopNav>

          <QuoteButton to="/contatti">
            Preventivo gratuito
          </QuoteButton>
        </HeaderInner>
      </Header>

      <MenuBackdrop $open={menuOpen} onClick={closeMenu} />

      <SideMenu $open={menuOpen}>
        <MenuGrid />
        <MenuFlange />
        <MenuRail />

        <MenuOverline>ROEMA / CNC PRECISION SYSTEM</MenuOverline>

        <MobileLinks>
          {navLinks.map((link, index) => (
            <MobileLink
              key={link.to}
              to={link.to}
              exact={link.exact}
              activeClassName="active"
              $open={menuOpen}
              $index={index}
              onClick={closeMenu}
            >
              <MobileLinkNumber>{link.number}</MobileLinkNumber>
              <MobileLinkText>{link.label}</MobileLinkText>
              <MobileLinkArrow>↗</MobileLinkArrow>
            </MobileLink>
          ))}
        </MobileLinks>

        <MenuBottom>
          <MenuQuestion>HAI UN PROGETTO DA REALIZZARE?</MenuQuestion>

          <MobileQuote to="/contatti" onClick={closeMenu}>
            Richiedi preventivo
            <span>→</span>
          </MobileQuote>
        </MenuBottom>

        <MenuFooter>
          <span>OFFICINE ROEMA</span>
          <span>MECCANICA DI PRECISIONE CNC</span>
        </MenuFooter>
      </SideMenu>
    </>
  );
};

export default NavBar;