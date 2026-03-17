import { Fade } from "react-awesome-reveal";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  TestimonialsSection,
  Header,
  HeaderContent,
  Action,
  Eyebrow,
  ReviewGrid,
  ReviewCard,
  Quote,
  Reviewer,
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
          <ReviewGrid>
            {items.map((item) => (
              <ReviewCard key={item.name}>
                <Quote>"{t(item.quote)}"</Quote>
                <Reviewer>{item.name}</Reviewer>
              </ReviewCard>
            ))}
          </ReviewGrid>
        </Fade>
      </Container>
    </TestimonialsSection>
  );
};

export default withTranslation()(Testimonials);
