import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  InstallationsSection,
  Header,
  HeaderContent,
  Eyebrow,
  Lead,
  Action,
  Cards,
  Card,
  CardImage,
  CardOverlay,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "./styles";

interface InstallationItem {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

interface InstallationsProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  items: InstallationItem[];
  t: TFunction;
}

const Installations = ({
  title,
  text,
  buttonText,
  buttonLink,
  items,
  t,
}: InstallationsProps) => {
  return (
    <InstallationsSection id="installations">
      <Container>
        <Header>
          <HeaderContent>
            <Eyebrow>{t("Instagram Highlights")}</Eyebrow>
            <h2>{t(title)}</h2>
            <Lead>{t(text)}</Lead>
          </HeaderContent>
          <Action>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              <Button>{t(buttonText)}</Button>
            </a>
          </Action>
        </Header>
        <Cards>
          {items.map((item) => (
            <Card
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardImage image={item.image} />
              <CardOverlay />
              <CardBody>
                <CardTitle>{t(item.title)}</CardTitle>
                <CardText>{t(item.subtitle)}</CardText>
                <CardLink>{t("Watch on Instagram")}</CardLink>
              </CardBody>
            </Card>
          ))}
        </Cards>
      </Container>
    </InstallationsSection>
  );
};

export default withTranslation()(Installations);
