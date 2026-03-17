import styled from "styled-components";

export const TestimonialsSection = styled("section")`
  padding: 5rem 0 3rem;
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
  max-width: 640px;
`;

export const Action = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  a {
    display: inline-flex;
    justify-content: center;
    text-decoration: none;
  }

  button {
    max-width: none;
    min-width: 220px;
    padding: 13px 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Eyebrow = styled("span")`
  display: inline-block;
  margin-bottom: 0.75rem;
  color: #6e6e71;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const CarouselWrap = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CarouselViewport = styled("div")`
  overflow: hidden;
`;

export const CarouselTrack = styled("div")`
  display: flex;
  transition: transform 0.35s ease;

  > div {
    width: 100%;
    flex: 0 0 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }

  @media only screen and (max-width: 1024px) {
    > div {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media only screen and (max-width: 768px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const ReviewCard = styled("article")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  padding: 2rem 1.75rem;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
`;

export const Quote = styled("p")`
  margin-bottom: 1.5rem;
  color: #2d2d2d;
  font-size: 1.05rem;
  line-height: 1.75;
`;

export const Reviewer = styled("strong")`
  color: #000000;
  font-family: "Motiva Sans Bold", serif;
  font-size: 1rem;
`;

export const CarouselControls = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const CarouselButton = styled("button")`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 999px;
  background: #ffffff;
  color: #111111;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    border-color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const CarouselDots = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CarouselDot = styled("button")<{ active: boolean }>`
  width: ${({ active }) => (active ? "28px" : "10px")};
  height: 10px;
  border: 0;
  border-radius: 999px;
  background: ${({ active }) => (active ? "#111111" : "rgba(0, 0, 0, 0.18)")};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
