import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import Home from "./Pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NavBar from "./components/NavBar";
import SiteFooter from "./components/SiteFooter";
import Technologia from "./Pages/Technologia";
import Prodotti from "./Pages/Prodotti";
import Notizie from "./Pages/Notizie";
import Contatti from "./Pages/Contatti";
const MainCont = styled.div`
  --page-gap: clamp(8px, 1vw, 16px);
  --app-frame-height: calc(100svh - (var(--page-gap) * 2));

  width: calc(100% - (var(--page-gap) * 2));
  min-height: var(--app-frame-height);
  margin: var(--page-gap) auto;

  position: relative;
  isolation: isolate;
  overflow: hidden;

  border-radius: clamp(26px, 3vw, 50px);
  background: #000000;

  @media (max-width: 480px) {
    --page-gap: 8px;
    border-radius: 24px;
  }
`;

const FooterContainer = styled.section`
  position: relative;
  z-index: 2;

  width: 100%;
  overflow: hidden;
  background: #030303;
`;

function App() {
  return (
    <MainCont>
      <NavBar />
      <ScrollToTop />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/technologia" component={Technologia} />
        <Route exact path="/prodotti" component={Prodotti} />
        <Route exact path="/notizie" component={Notizie} />
        <Route exact path="/contatti" component={Contatti} />
      </Switch>
<FooterContainer>
        <SiteFooter />
      </FooterContainer>
      <ScrollToTopButton />

      
    </MainCont>

  );
}

export default App;