import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
    font-size: 22px;
    text-transform: capitalize;
    color: #000000;

    @media screen and (max-width: 414px) {
        padding: 1.5rem 0;
    }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #6e6e71;
  }
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #6e6e71;
  font-size: 14px;
  width: 70%;
`;

export const Large = styled(Link)`
    font-size: 16px;
    color: #000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-transform: capitalize;
    line-height: 24px;
    display: block;
    margin-bottom: 0.625rem;
    transition: all 0.3s ease-in-out;
    max-width: max-content;

    &:hover {
        color: rgb(15, 0, 223);
    }
`;

export const Chat = styled("p")`
    color: #000000;
    max-width: fit-content;
    border-bottom: 1px solid #0f00df;
    cursor: pointer;
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;

    &:hover {
        border-bottom: 1px solid rgb(15, 0, 223);
        color: rgb(15, 0, 223);
    }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
    max-width: 510px;
    width: 100%;
    gap: 15px;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    transition: all 0.1s ease-in-out;

    a {
        &:hover,
        &:active,
        &:focus {
            -webkit-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 769px) {
        width: auto;

        a:not(:last-child) {
            display: none;
        }
    }

    div {
        cursor: pointer;
        margin-right: 15px;
        width: 25px;
        height: 25px;

        &:hover {
            fill: rgb(15, 0, 223);
        }
    }
`;

export const Language = styled("h4")`
    font-size: 22px;
    text-transform: capitalize;
    color: #000000;

    @media screen and (max-width: 414px) {
        padding: 1.5rem 0;
    }
`;

export const Label = styled("label")`
    font-size: 22px;
    text-transform: capitalize;
    color: #000000;
    display: block;
    margin-bottom: 2rem;
    font-family: "Motiva Sans Bold", serif;

    @media screen and (max-width: 414px) {
        padding: 1.5rem 0;
        margin-bottom: 1rem;
    }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
