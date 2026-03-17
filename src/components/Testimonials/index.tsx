import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  TestimonialsSection,
  Header,
  HeaderContent,
  Action,
  Eyebrow,
  CarouselWrap,
  CarouselViewport,
  CarouselTrack,
  ReviewCard,
  Quote,
  Reviewer,
  CarouselControls,
  CarouselButton,
  CarouselDots,
  CarouselDot,
} from "./styles";

interface TestimonialItem {
  name: string;
  quote: string;
}

interface TestimonialsProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  items: TestimonialItem[];
  t: TFunction;
}

const Testimonials = ({
  title,
  buttonText,
  buttonLink,
  items,
  t,
}: TestimonialsProps) => {
  const [visibleCards, setVisibleCards] = useState(3);
  const [page, setPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
        return;
      }

      if (window.innerWidth <= 1024) {
        setVisibleCards(2);
        return;
      }

      setVisibleCards(3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalPages = Math.max(1, Math.ceil(items.length / visibleCards));

  useEffect(() => {
    setPage((current) => Math.min(current, totalPages - 1));
  }, [totalPages]);

  useEffect(() => {
    if (totalPages <= 1 || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setPage((current) => (current === totalPages - 1 ? 0 : current + 1));
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isPaused, totalPages]);

  const goPrev = () => {
    setPage((current) => (current === 0 ? totalPages - 1 : current - 1));
  };

  const goNext = () => {
    setPage((current) => (current === totalPages - 1 ? 0 : current + 1));
  };

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <Fade triggerOnce>
          <Header>
            <HeaderContent>
              <Eyebrow>{t("Google Reviews")}</Eyebrow>
              <h2>{t(title)}</h2>
            </HeaderContent>
            <Action>
              <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                <Button>{t(buttonText)}</Button>
              </a>
            </Action>
          </Header>
          <CarouselWrap
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <CarouselViewport>
              <CarouselTrack
                style={{
                  transform: `translateX(-${page * 100}%)`,
                }}
              >
                {Array.from({ length: totalPages }).map((_, pageIndex) => {
                  const start = pageIndex * visibleCards;
                  const pageItems = items.slice(start, start + visibleCards);

                  return (
                    <div key={pageIndex}>
                      {pageItems.map((item) => (
                        <ReviewCard key={item.name}>
                          <Quote>"{t(item.quote)}"</Quote>
                          <Reviewer>{item.name}</Reviewer>
                        </ReviewCard>
                      ))}
                    </div>
                  );
                })}
              </CarouselTrack>
            </CarouselViewport>
            {totalPages > 1 && (
              <CarouselControls>
                <CarouselButton
                  type="button"
                  onClick={goPrev}
                  aria-label={t("Previous testimonials")}
                >
                  <LeftOutlined />
                </CarouselButton>
                <CarouselDots>
                  {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <CarouselDot
                      key={pageIndex}
                      type="button"
                      onClick={() => setPage(pageIndex)}
                      active={pageIndex === page}
                      aria-label={`${t("Testimonial page")} ${pageIndex + 1}`}
                    />
                  ))}
                </CarouselDots>
                <CarouselButton
                  type="button"
                  onClick={goNext}
                  aria-label={t("Next testimonials")}
                >
                  <RightOutlined />
                </CarouselButton>
              </CarouselControls>
            )}
          </CarouselWrap>
        </Fade>
      </Container>
    </TestimonialsSection>
  );
};

export default withTranslation()(Testimonials);
