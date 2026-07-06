import { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      type="button"
      onClick={scrollToTop}
      $isVisible={isVisible}
      aria-label="Torna in alto"
    >
      ↑
    </Button>
  );
};

export default ScrollToTopButton;

const Button = styled.button`
  position: fixed;
  right: clamp(16px, 2vw, 36px);
  bottom: clamp(16px, 2vw, 36px);
  z-index: 999;

  width: 48px;
  height: 48px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;

  background: linear-gradient(135deg, #eb252d, #940308);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);

  color: white;
  cursor: pointer;
  font-size: 26px;
  font-weight: 700;
  line-height: 1;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateY(0)" : "translateY(20px)"};

  transition: opacity 0.25s ease, transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    box-shadow: 0 15px 35px rgba(223, 20, 28, 0.5);
    transform: translateY(-4px);
  }

  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
    font-size: 22px;
  }
`;