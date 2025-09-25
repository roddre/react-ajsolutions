import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import {SvgIcon} from "../../common/SvgIcon";
import BackgroundSlider from "../../common/BackgroundSlider";


interface MiddleBlockProps {
  content: string;
  button: string;
  icon: string;
  t: TFunction;
}

const MiddleBlock = ({ content, button, icon, t }: MiddleBlockProps) => {
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
              "/img/svg/HomeNetworking-01-Large.jpg",
              "/img/svg/Network-01-Large.jpeg",
              "/img/svg/TV-04-Large.jpg",
              "/img/work/HomeTv.jpeg",
              "/img/work/New Home TV Install.jpeg",
              "/img/work/New Home TV Install with TV Stand install.jpeg",
              "/img/work/Outside TV Install.jpeg",
              "/img/work/Small business Unifi Switch - Sonos.jpeg",
              "/img/work/TV and PS5 Wall Mount.jpeg",
          ]}
          intervalMs={4000} height="70vh">
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={25} md={25} sm={35} xs={40}>
              <SvgIcon src={icon} width="100%" height="100%" />
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
              <Content>{t(content)}</Content>
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
