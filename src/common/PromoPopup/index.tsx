import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import Container from "../Container";
import {
  PromoSection,
  PromoCard,
  PromoClose,
  PromoCopy,
  PromoEyebrow,
  PromoTitle,
  PromoText,
  PromoCode,
  PromoAction,
} from "./styles";

type PromoPopupProps = {
  eyebrowText?: string;
  title?: string;
  message?: React.ReactNode;
  ctaText?: string;
  onCta?: () => void;
  dismissText?: string;
  localStorageKey?: string;
  cooldownHours?: number;
};

const DEFAULT_KEY = "promo_banner_last_dismissed_at";

const PromoPopup: React.FC<PromoPopupProps> = ({
  eyebrowText = "Current Offer",
  title = "Limited-time discount",
  message = (
    <>
      Book this week and get <strong>10% off</strong> installation.
      <br />
      Mention code <code style={{ fontWeight: 700 }}>AJ10</code> at checkout.
    </>
  ),
  ctaText = "Claim Discount",
  onCta,
  dismissText = "Dismiss offer",
  localStorageKey = DEFAULT_KEY,
  cooldownHours = 24,
}) => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const lastTs = Number(localStorage.getItem(localStorageKey) || 0);
    const now = Date.now();
    const ms = cooldownHours * 60 * 60 * 1000;

    if (lastTs && now - lastTs < ms) {
      setHidden(true);
    }
  }, [cooldownHours, localStorageKey]);

  const dismiss = () => {
    localStorage.setItem(localStorageKey, String(Date.now()));
    setHidden(true);
  };

  if (hidden) {
    return null;
  }

  return (
    <PromoSection>
      <Container>
        <PromoCard>
          <PromoClose type="button" onClick={dismiss} aria-label={dismissText}>
            ×
          </PromoClose>
          <PromoCopy>
            <PromoEyebrow>{eyebrowText}</PromoEyebrow>
            <PromoTitle>{title}</PromoTitle>
            <PromoText>{message}</PromoText>
            <PromoCode>AJ10</PromoCode>
          </PromoCopy>
          <PromoAction>
            <Button onClick={onCta}>{ctaText}</Button>
          </PromoAction>
        </PromoCard>
      </Container>
    </PromoSection>
  );
};

export default PromoPopup;
