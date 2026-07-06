import { useState } from "react";
import styled from "styled-components";
import {
  FiArrowRight,
  FiCalendar,
  FiChevronDown,
  FiSearch,
} from "react-icons/fi";

import FresaImg from "../assets/png/fresa.png";

const ARTICLES_PER_PAGE = 6;

const articles = [
  {
    id: 1,
    category: "Tecnologia",
    date: "08 Maggio 2024",
    title: "5 assi simultanei: precisione ed efficienza senza compromessi",
    text: "Le lavorazioni 5 assi ci permettono di realizzare geometrie complesse con tolleranze molto strette e tempi ottimizzati.",
    image: FresaImg,
  },
  {
    id: 2,
    category: "Qualità",
    date: "30 Aprile 2024",
    title: "Controllo qualità: la nostra filosofia, il vostro vantaggio",
    text: "Dalla materia prima al prodotto finito, ogni componente è sottoposto a rigorosi controlli.",
    image: FresaImg,
  },
  {
    id: 3,
    category: "Azienda",
    date: "18 Aprile 2024",
    title: "Nuovo reparto produttivo: più spazio, più innovazione",
    text: "Abbiamo ampliato il nostro stabilimento con nuovi macchinari e soluzioni produttive.",
    image: FresaImg,
  },
  {
    id: 4,
    category: "Produzione",
    date: "05 Aprile 2024",
    title: "Lavorazioni di precisione per il settore oleodinamico",
    text: "Componenti ad alta precisione realizzati con materiali certificati e tolleranze al millesimo.",
    image: FresaImg,
  },
  {
    id: 5,
    category: "Tecnologia",
    date: "28 Marzo 2024",
    title: "Automazione e digitalizzazione: il futuro della produzione",
    text: "Automazione, controllo e tracciabilità per processi produttivi sempre più efficienti.",
    image: FresaImg,
  },
  {
    id: 6,
    category: "Azienda",
    date: "15 Marzo 2024",
    title: "ROEMA al Mecspe 2024: grazie a chi ci ha visitato",
    text: "Un'edizione ricca di incontri, nuove opportunità e collaborazioni importanti.",
    image: FresaImg,
  },
  {
    id: 7,
    category: "Produzione",
    date: "01 Marzo 2024",
    title: "Materiali e trattamenti: come migliorare le prestazioni",
    text: "Materiali selezionati e trattamenti specifici per componenti affidabili nel tempo.",
    image: FresaImg,
  },
  {
    id: 8,
    category: "Qualità",
    date: "20 Febbraio 2024",
    title: "Manutenzione preventiva: meno fermi, più produttività",
    text: "La manutenzione programmata riduce gli imprevisti e tutela la qualità produttiva.",
    image: FresaImg,
  },
  {
    id: 9,
    category: "Tecnologia",
    date: "08 Febbraio 2024",
    title: "Formazione continua: il valore delle persone",
    text: "Competenza, aggiornamento e attenzione al dettaglio in ogni fase di lavorazione.",
    image: FresaImg,
  },
];

const latestArticles = articles.slice(3, 7);

const categories = [
  "Tutte",
  "Azienda",
  "Tecnologia",
  "Produzione",
  "Qualità",
  "Aggiornamenti",
];

const NotContentSection = styled.section`
  width: 100%;
  min-width: 0;

  padding: clamp(22px, 3vw, 44px) 0 clamp(54px, 6vw, 90px);

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(120, 0, 5, 0.11),
      transparent 30%
    ),
    // #030303;
`;

const NotContentContainer = styled.div`
  width: min(100% - clamp(32px, 9vw, 146px), 1440px);
  margin: 0 auto;
`;

const FeaturedArticle = styled.article`
  display: grid;
  grid-template-columns: minmax(280px, 0.95fr) minmax(0, 1.15fr);
  gap: clamp(20px, 3vw, 46px);

  padding: clamp(14px, 1.5vw, 22px);

  background: linear-gradient(135deg, #151515, #090909);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 9px;

  @media (max-width: 760px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const FeaturedImageBox = styled.div`
  position: relative;
  overflow: hidden;

  aspect-ratio: 1.35 / 1;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 5px;
  background: #090909;

  &::after {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
      135deg,
      rgba(160, 0, 8, 0.18),
      transparent 45%,
      rgba(0, 0, 0, 0.26)
    );

    pointer-events: none;
  }

  @media (max-width: 760px) {
    aspect-ratio: 16 / 9;
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center;

  filter: contrast(1.12) brightness(0.86) saturate(0.9);
`;

const FeaturedInfo = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const FeaturedLabel = styled.p`
  margin: 0 0 16px;

  color: #df090d;

  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;

  margin-bottom: 17px;

  color: rgba(255, 255, 255, 0.68);

  font-size: 10px;
`;

const MetaDate = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  svg {
    font-size: 12px;
  }
`;

const FeaturedTitle = styled.h2`
  max-width: 660px;
  margin: 0;

  color: #f5f5f5;

  font-size: clamp(23px, 2vw, 33px);
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1.02;
`;

const FeaturedText = styled.p`
  max-width: 650px;
  margin: 17px 0 0;

  color: rgba(255, 255, 255, 0.7);

  font-size: clamp(11px, 0.88vw, 13px);
  line-height: 1.6;
`;

const ReadButton = styled.button`
  min-height: 38px;

  display: inline-flex;
  align-items: center;
  gap: 14px;

  margin-top: 21px;
  padding: 0 14px;

  color: #ffffff;
  background: transparent;
  border: 1px solid #d5090d;
  border-radius: 4px;

  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;

  svg {
    font-size: 15px;
  }

  &:hover {
    background: #b7070b;
  }
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(245px, 0.36fr);
  gap: clamp(22px, 2.7vw, 40px);

  margin-top: clamp(22px, 2.8vw, 38px);

  @media (max-width: 1080px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ArticlesArea = styled.div`
  min-width: 0;
`;

const Toolbar = styled.div`
  display: grid;
  grid-template-columns: minmax(190px, 220px) minmax(0, 1fr);
  gap: 14px;

  margin-bottom: 16px;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const SearchBox = styled.label`
  min-height: 37px;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 0 12px;

  color: rgba(255, 255, 255, 0.52);
  background: #090909;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 4px;

  svg {
    flex-shrink: 0;
    font-size: 15px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  min-width: 0;

  color: #ffffff;
  background: transparent;
  border: 0;
  outline: none;

  font-size: 10px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 8px;

  overflow-x: auto;
  padding-bottom: 2px;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryButton = styled.button`
  flex: 0 0 auto;
  min-height: 34px;

  padding: 0 15px;

  color: ${({ $active }) =>
    $active ? "#ffffff" : "rgba(255, 255, 255, 0.82)"};
  background: ${({ $active }) =>
    $active ? "linear-gradient(135deg, #d6090d, #980005)" : "#090909"};

  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(229, 17, 21, 0.88)" : "rgba(255, 255, 255, 0.15)"};
  border-radius: 4px;

  font-size: 9px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(12px, 1.3vw, 19px);

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ArticleCard = styled.article`
  min-width: 0;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  background: linear-gradient(160deg, #101010, #090909);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 5px;

  &:hover {
    border-color: rgba(213, 9, 14, 0.68);
  }
`;

const CardImageBox = styled.div`
  position: relative;
  overflow: hidden;

  aspect-ratio: 16 / 9;

  background: #080808;

  &::after {
    content: "";
    position: absolute;
    inset: 0;

    background: linear-gradient(
      180deg,
      transparent 45%,
      rgba(0, 0, 0, 0.48)
    );

    pointer-events: none;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center;

  filter: contrast(1.15) brightness(0.82) saturate(0.85);
`;

const CardContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 13px;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  margin-bottom: 11px;

  font-size: 9px;
`;

const CardCategory = styled.span`
  color: #df090d;
  font-weight: 800;
`;

const CardDate = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  color: rgba(255, 255, 255, 0.58);
  white-space: nowrap;

  svg {
    font-size: 10px;
  }
`;

const CardTitle = styled.h3`
  margin: 0;

  color: #f2f2f2;

  font-size: clamp(15px, 1.16vw, 18px);
  font-weight: 500;
  letter-spacing: -0.03em;
  line-height: 1.1;
`;

const CardText = styled.p`
  margin: 12px 0 0;

  color: rgba(255, 255, 255, 0.65);

  font-size: 10px;
  line-height: 1.55;
`;

const CardButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  align-self: flex-start;

  margin-top: auto;
  padding: 17px 0 0;

  color: #e10a0e;
  background: transparent;
  border: 0;

  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;

  svg {
    font-size: 13px;
  }
`;

const LoadMoreBox = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 22px;
`;

const LoadMoreButton = styled.button`
  min-width: min(100%, 286px);
  min-height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 13px;

  padding: 0 18px;

  color: rgba(255, 255, 255, 0.9);
  background: #080808;
  border: 1px solid rgba(255, 255, 255, 0.23);
  border-radius: 4px;

  font-size: 9px;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;

  svg {
    font-size: 15px;
  }

  &:hover {
    border-color: rgba(218, 8, 13, 0.75);
  }

  @media (max-width: 560px) {
    width: 100%;
  }
`;

const Sidebar = styled.aside`
  min-width: 0;

  display: grid;
  align-content: start;
  gap: 16px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const SidebarBlock = styled.section`
  overflow: hidden;

  background: linear-gradient(160deg, #111111, #090909);
  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 5px;
`;

const SidebarTitle = styled.h3`
  margin: 0;
  padding: 15px 16px 12px;

  color: #ffffff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const LatestList = styled.div`
  padding: 2px 14px;
`;

const LatestItem = styled.article`
  display: grid;
  grid-template-columns: 62px minmax(0, 1fr);
  gap: 10px;

  padding: 12px 0;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: 0;
  }
`;

const LatestImageBox = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;

  border-radius: 3px;
  background: #080808;
`;

const LatestImage = styled.img`
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  filter: contrast(1.15) brightness(0.82);
`;

const LatestInfo = styled.div`
  min-width: 0;
`;

const LatestTitle = styled.h4`
  margin: 0;

  color: rgba(255, 255, 255, 0.9);

  font-size: 10px;
  font-weight: 500;
  line-height: 1.35;
`;

const LatestDate = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;

  margin: 7px 0 0;

  color: rgba(255, 255, 255, 0.52);

  font-size: 9px;

  svg {
    font-size: 10px;
  }
`;

const Newsletter = styled.section`
  position: relative;
  overflow: hidden;

  padding: 20px 17px;

  background: linear-gradient(135deg, #2f0305, #0e0203);
  border: 1px solid rgba(217, 8, 13, 0.72);
  border-radius: 5px;

  &::after {
    content: "";
    position: absolute;
    top: -58px;
    right: -52px;

    width: 180px;
    height: 180px;

    border: 1px solid rgba(228, 10, 15, 0.18);
    border-radius: 50%;

    box-shadow:
      0 0 0 28px rgba(228, 10, 15, 0.045),
      0 0 0 56px rgba(228, 10, 15, 0.03);

    pointer-events: none;
  }
`;

const NewsletterContent = styled.div`
  position: relative;
  z-index: 1;
`;

const NewsletterLabel = styled.p`
  margin: 0;

  color: #e00b0f;

  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const NewsletterTitle = styled.h3`
  margin: 12px 0 0;

  color: #ffffff;

  font-size: 23px;
  font-weight: 500;
  letter-spacing: -0.04em;
  line-height: 1;
`;

const NewsletterText = styled.p`
  margin: 12px 0 0;

  color: rgba(255, 255, 255, 0.7);

  font-size: 10px;
  line-height: 1.5;
`;

const NewsletterForm = styled.form`
  margin-top: 15px;
`;

const EmailBox = styled.div`
  min-height: 40px;

  display: flex;
  align-items: center;

  overflow: hidden;

  background: #ffffff;
  border-radius: 4px;
`;

const EmailInput = styled.input`
  width: 100%;
  min-width: 0;
  height: 40px;

  padding: 0 11px;

  color: #1b1b1b;
  background: transparent;
  border: 0;
  outline: none;

  font-size: 10px;
`;

const SubmitButton = styled.button`
  width: 41px;
  height: 40px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: #181818;
  background: #ffffff;
  border: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.16);
  cursor: pointer;

  svg {
    font-size: 18px;
  }
`;

const Consent = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 8px;

  margin-top: 12px;

  color: rgba(255, 255, 255, 0.67);

  font-size: 8px;
  line-height: 1.45;

  input {
    width: 12px;
    height: 12px;

    flex: 0 0 12px;

    margin: 0;
    accent-color: #d5080d;
  }
`;

function NotContent() {
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  const visibleArticles = articles.slice(0, visibleCount);

  const showLoadMore =
    visibleCount >= ARTICLES_PER_PAGE && visibleCount < articles.length;

  const handleLoadMore = () => {
    setVisibleCount((currentCount) =>
      Math.min(currentCount + ARTICLES_PER_PAGE, articles.length)
    );
  };

  return (
    <NotContentSection>
      <NotContentContainer>
        <FeaturedArticle>
          <FeaturedImageBox>
            <FeaturedImage
              src={FresaImg}
              alt="Lavorazione CNC di alta precisione"
            />
          </FeaturedImageBox>

          <FeaturedInfo>
            <FeaturedLabel>In evidenza</FeaturedLabel>

            <Meta>
              <MetaDate>
                <FiCalendar />
                20 Maggio 2024
              </MetaDate>

              <span>→</span>
              <span>Tecnologia</span>
            </Meta>

            <FeaturedTitle>
              Nuova generazione di lavorazioni CNC ad alta precisione
            </FeaturedTitle>

            <FeaturedText>
              Investiamo in tecnologie avanzate e competenze specialistiche per
              offrire lavorazioni sempre più precise, rapide e affidabili.
              Scopri le novità che migliorano qualità e performance dei nostri
              processi produttivi.
            </FeaturedText>

            <ReadButton type="button">
              Leggi l&apos;articolo
              <FiArrowRight />
            </ReadButton>
          </FeaturedInfo>
        </FeaturedArticle>

        <ContentLayout>
          <ArticlesArea>
            <Toolbar>
              <SearchBox>
                <SearchInput
                  type="search"
                  placeholder="Cerca notizie..."
                  aria-label="Cerca notizie"
                />
                <FiSearch />
              </SearchBox>

              <Categories>
                {categories.map((category) => (
                  <CategoryButton
                    key={category}
                    type="button"
                    $active={category === "Tutte"}
                  >
                    {category}
                  </CategoryButton>
                ))}
              </Categories>
            </Toolbar>

            <CardsGrid>
              {visibleArticles.map((article) => (
                <ArticleCard key={article.id}>
                  <CardImageBox>
                    <CardImage src={article.image} alt={article.title} />
                  </CardImageBox>

                  <CardContent>
                    <CardMeta>
                      <CardCategory>{article.category}</CardCategory>

                      <CardDate>
                        <FiCalendar />
                        {article.date}
                      </CardDate>
                    </CardMeta>

                    <CardTitle>{article.title}</CardTitle>

                    <CardText>{article.text}</CardText>

                    <CardButton type="button">
                      Leggi l&apos;articolo
                      <FiArrowRight />
                    </CardButton>
                  </CardContent>
                </ArticleCard>
              ))}
            </CardsGrid>

            {showLoadMore && (
              <LoadMoreBox>
                <LoadMoreButton type="button" onClick={handleLoadMore}>
                  Carica altri articoli
                  <FiChevronDown />
                </LoadMoreButton>
              </LoadMoreBox>
            )}
          </ArticlesArea>

          <Sidebar>
            <SidebarBlock>
              <SidebarTitle>Ultime notizie</SidebarTitle>

              <LatestList>
                {latestArticles.map((article) => (
                  <LatestItem key={article.id}>
                    <LatestImageBox>
                      <LatestImage src={article.image} alt="" />
                    </LatestImageBox>

                    <LatestInfo>
                      <LatestTitle>{article.title}</LatestTitle>

                      <LatestDate>
                        <FiCalendar />
                        {article.date}
                      </LatestDate>
                    </LatestInfo>
                  </LatestItem>
                ))}
              </LatestList>
            </SidebarBlock>

            <Newsletter>
              <NewsletterContent>
                <NewsletterLabel>Rimani aggiornato</NewsletterLabel>

                <NewsletterTitle>
                  Iscriviti alla newsletter
                </NewsletterTitle>

                <NewsletterText>
                  Ricevi aggiornamenti su tecnologie, novità aziendali e
                  approfondimenti tecnici.
                </NewsletterText>

                <NewsletterForm onSubmit={(event) => event.preventDefault()}>
                  <EmailBox>
                    <EmailInput
                      type="email"
                      placeholder="La tua email"
                      aria-label="La tua email"
                    />

                    <SubmitButton
                      type="submit"
                      aria-label="Iscriviti alla newsletter"
                    >
                      <FiArrowRight />
                    </SubmitButton>
                  </EmailBox>

                  <Consent>
                    <input type="checkbox" />
                    <span>
                      Ho letto l&apos;informativa sulla privacy e acconsento al
                      trattamento dei miei dati.
                    </span>
                  </Consent>
                </NewsletterForm>
              </NewsletterContent>
            </Newsletter>
          </Sidebar>
        </ContentLayout>
      </NotContentContainer>
    </NotContentSection>
  );
}

export default NotContent;