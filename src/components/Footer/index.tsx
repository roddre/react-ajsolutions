import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="45px" height="45px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-evenly">
            <Col lg={6} md={6} sm={6} xs={6}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:A.jsolutionsmia@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <Language>{t("Address")}</Language>
              <Para>Serving Miami-Dade & Broward County</Para>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <Title>{t("Company")}</Title>
              <Large to="/">{t("About")}</Large>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                      src="united-states.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                      src="spain.svg"
                      aria-label="homepage"
                      width="30px"
                      height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="MainLogo.png"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/ajsolutionsmia"
                src="instagram.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
