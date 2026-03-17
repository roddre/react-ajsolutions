import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { FaStar } from "react-icons/fa";
import { Button } from "../../common/Button";
import {
  MiddleBlockSection,
  Content,
  ContentWrapper,
  LogoWrap,
  Title,
  TrustList,
  TrustItem,
  ProofBar,
  ProofCopy,
  ProofLabel,
  ProofText,
  ProofAction,
  Stars,
} from "./styles";
import {SvgIcon} from "../../common/SvgIcon";
import BackgroundSlider from "../../common/BackgroundSlider";


interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  icon: string;
  proofLabel?: string;
  proofText?: string;
  proofButton?: string;
  trustItems?: string[];
  t: TFunction;
}

const MiddleBlock = ({
  title,
  content,
  button,
  icon,
  proofLabel,
  proofText,
  proofButton,
  trustItems,
  t,
}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      <BackgroundSlider
          images={[
              "/img/work/HomeTv.jpeg",
              "/img/work/New Home TV Install.jpeg",
              "/img/work/New Home TV Install with TV Stand install.jpeg",
              "/img/work/Outside TV Install.jpeg",
              "/img/work/Small business Unifi Switch - Sonos.jpeg",
              "/img/work/TV and PS5 Wall Mount.jpeg",
          ]}
          intervalMs={5000} height="78vh">
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={22} md={22} sm={28} xs={30}>
              <LogoWrap>
                <SvgIcon
                  src={icon}
                  width="78%"
                  height="78%"
                  alt="AJ Solutions Mia hero logo"
                />
              </LogoWrap>
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Title>{t(title)}</Title>
              <Content>{t(content)}</Content>
              {trustItems && (
                <TrustList>
                  {trustItems.map((item) => (
                    <TrustItem key={item}>{t(item)}</TrustItem>
                  ))}
                </TrustList>
              )}
              {proofLabel && proofText && proofButton && (
                <ProofBar>
                  <ProofCopy>
                    <Stars aria-hidden="true">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </Stars>
                    <div>
                      <ProofLabel>{t(proofLabel)}</ProofLabel>
                      <ProofText>{t(proofText)}</ProofText>
                    </div>
                  </ProofCopy>
                  <ProofAction type="button" onClick={() => scrollTo("testimonials")}>
                    {t(proofButton)}
                  </ProofAction>
                </ProofBar>
              )}
              {button && (
                <Button name="submit" onClick={() => scrollTo("about")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
      </BackgroundSlider>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
