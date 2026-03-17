import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 5.5rem 0 0.75rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 4.5rem 0 0.75rem;
  }
`;

export const Content = styled("p")`
    padding: 0.5rem 0 0.5rem;
    text-align: center;
    color: #ffffff;
    max-width: 560px;
    margin: 0 auto;
    font-size: 1.05rem;
    line-height: 1.55;
`;

export const ContentWrapper = styled("div")`
    max-width: 680px;
    text-align: center;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LogoWrap = styled("div")`
  display: flex;
  justify-content: center;
  transform: translateX(24px);

  @media only screen and (max-width: 768px) {
    transform: none;
  }
`;

export const Title = styled("h1")`
  margin: 0.15rem auto 0.15rem;
  max-width: 500px;
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.3;

  @media only screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TrustList = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin: 0.7rem auto 0.9rem;
  max-width: 620px;
`;

export const TrustItem = styled("span")`
  padding: 0.4rem 0.7rem;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: #ffffff;
  font-size: 0.78rem;
  letter-spacing: 0.02em;
  backdrop-filter: blur(8px);
`;

export const ProofBar = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  max-width: 560px;
  margin: 0 auto 1rem;
  padding: 0.85rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 18px;
  background: rgba(12, 12, 12, 0.28);
  backdrop-filter: blur(10px);

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }
`;

export const ProofCopy = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.45rem;
  }
`;

export const Stars = styled("div")`
  display: flex;
  gap: 0.2rem;
  color: #f9c74f;
  font-size: 0.9rem;
`;

export const ProofLabel = styled("div")`
  color: #ffffff;
  font-family: "Motiva Sans Bold", serif;
  font-size: 0.92rem;
`;

export const ProofText = styled("div")`
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.82rem;
  line-height: 1.45;
`;

export const ProofAction = styled("button")`
  border: 0;
  background: transparent;
  color: #ffffff;
  font-family: "Motiva Sans Bold", serif;
  font-size: 0.88rem;
  cursor: pointer;
  white-space: nowrap;
  padding: 0.25rem 0;

  &:hover,
  &:focus {
    opacity: 0.85;
  }
`;
