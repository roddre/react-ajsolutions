import { lazy } from "react";

import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        icon="Main.png"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon = "Network-01-Large.jpeg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="TV-04-Large.jpg"
        id="Home Media"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="HomeNetworking-01-Large.jpg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
