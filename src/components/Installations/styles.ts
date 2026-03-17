import styled from "styled-components";

export const InstallationsSection = styled("section")`
  padding: 3rem 0 4.5rem;
`;

export const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeaderContent = styled("div")`
  max-width: 700px;
`;

export const Eyebrow = styled("span")`
  display: inline-block;
  margin-bottom: 0.75rem;
  color: #6e6e71;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Lead = styled("p")`
  margin-top: 0.85rem;
  color: #5a5a5e;
  font-size: 1rem;
  line-height: 1.7;
`;

export const Action = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transform: translateY(-14px);

  a {
    display: inline-flex;
    justify-content: center;
    text-decoration: none;
  }

  button {
    max-width: none;
    min-width: 220px;
    padding: 13px 1.5rem;
    margin-top: 0;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    transform: none;
  }
`;

export const Cards = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled("a")`
  position: relative;
  min-height: 360px;
  overflow: hidden;
  border-radius: 24px;
  text-decoration: none;
  background: #111111;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover,
  &:focus {
    transform: translateY(-4px);
    box-shadow: 0 24px 40px rgba(0, 0, 0, 0.14);
  }
`;

export const CardImage = styled("div")<{ image: string }>`
  position: absolute;
  inset: 0;
  background-image: ${({ image }) => `url("${image}")`};
  background-size: cover;
  background-position: center;
  transform: scale(1);
  transition: transform 0.4s ease;

  ${Card}:hover &,
  ${Card}:focus & {
    transform: scale(1.04);
  }
`;

export const CardOverlay = styled("div")`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.08) 0%,
    rgba(0, 0, 0, 0.18) 42%,
    rgba(0, 0, 0, 0.72) 100%
  );
`;

export const CardBody = styled("div")`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 360px;
  padding: 1.5rem;
  color: #ffffff;
`;

export const CardTitle = styled("h3")`
  margin-bottom: 0.5rem;
  color: #ffffff;
  font-size: 1.2rem;
`;

export const CardText = styled("p")`
  margin-bottom: 0.9rem;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const CardLink = styled("span")`
  color: #ffffff;
  font-family: "Motiva Sans Bold", serif;
  font-size: 0.9rem;
`;
