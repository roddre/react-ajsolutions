import { lazy } from "react";
import { useTranslation } from "react-i18next";
import PromoPopup from "../../common/PromoPopup";


import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import TestimonialsContent from "../../content/TestimonialsContent.json";
import InstallationsContent from "../../content/InstallationsContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Testimonials = lazy(() => import("../../components/Testimonials"));
const Installations = lazy(() => import("../../components/Installations"));

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ScrollToTop />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        icon="Main.png"
        proofLabel={MiddleBlockContent.proofLabel}
        proofText={MiddleBlockContent.proofText}
        proofButton={MiddleBlockContent.proofButton}
        trustItems={MiddleBlockContent.trustItems}
      />
      <PromoPopup
        eyebrowText={t("Current Offer")}
        title={t("Save 10% on Select Installations")}
        message={
          <>
            {t("Book by Sunday and save 10% on TV mounting, home audio, and Wi-Fi upgrades.")}
            {" "}
            {t("Use code")} {t("when you request your quote.")}
          </>
        }
        ctaText={t("Claim My Discount")}
        dismissText={t("Dismiss offer")}
        onCta={() => {
          const el = document.getElementById("contact");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
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
      <Testimonials
        title={TestimonialsContent.title}
        buttonText={TestimonialsContent.buttonText}
        buttonLink={TestimonialsContent.buttonLink}
        items={TestimonialsContent.items}
      />
      <Installations
        title={InstallationsContent.title}
        text={InstallationsContent.text}
        buttonText={InstallationsContent.buttonText}
        buttonLink={InstallationsContent.buttonLink}
        items={InstallationsContent.items}
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
