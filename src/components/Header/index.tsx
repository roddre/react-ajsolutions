import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  ActionGroup,
  HeaderSection,
  LogoContainer,
  NavGroup,
  SecondaryAction,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <NavGroup>
          <CustomNavLinkSmall onClick={() => scrollTo("about")}>
            <Span>{t("About")}</Span>
          </CustomNavLinkSmall>
        </NavGroup>
        <ActionGroup>
          <CustomNavLinkSmall
            style={{ width: "180px", margin: 0 }}
            onClick={() => scrollTo("contact")}
          >
            <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
        <SecondaryAction
          href="https://wa.me/17864689123"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("Call/Text Now")}
        </SecondaryAction>
      </ActionGroup>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon
              src="MainLogo.png"
              width="101px"
              height="64px"
              alt="AJ Solutions Mia logo"
            />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>{t("Menu")}</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
