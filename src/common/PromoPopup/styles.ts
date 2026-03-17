import styled from "styled-components";

export const PromoSection = styled("section")`
  padding: 1.4rem 0 0.2rem;
`;

export const PromoCard = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.15rem 1.35rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 22px;
  background: linear-gradient(135deg, #f7f7f7 0%, #ffffff 45%, #f2f4f8 100%);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.06);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PromoClose = styled("button")`
  position: absolute;
  top: 0.9rem;
  right: 0.9rem;
  border: 0;
  background: transparent;
  color: #6e6e71;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
  padding: 0.2rem;

  &:hover,
  &:focus {
    color: #111111;
  }
`;

export const PromoCopy = styled("div")`
  max-width: 720px;
`;

export const PromoEyebrow = styled("div")`
  margin-bottom: 0.45rem;
  color: #6e6e71;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const PromoTitle = styled("h6")`
  margin: 0 0 0.35rem;
  font-size: 1.35rem;
  line-height: 1.25;
`;

export const PromoText = styled("div")`
  color: #4d4d4d;
  font-size: 1rem;
  line-height: 1.6;
`;

export const PromoCode = styled("div")`
  display: inline-flex;
  margin-top: 0.9rem;
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  background: #111111;
  color: #ffffff;
  font-family: "Motiva Sans Bold", serif;
  font-size: 0.85rem;
  letter-spacing: 0.06em;
`;

export const PromoAction = styled("div")`
  flex-shrink: 0;

  button {
    margin-top: 0;
    min-width: 190px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;

    button {
      max-width: none;
      width: 100%;
    }
  }
`;
