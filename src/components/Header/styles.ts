import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #6e6e71;
  }
`;

export const NotHidden = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const NavGroup = styled("div")`
  display: flex;
  align-items: center;
  min-height: 46px;
`;

export const ActionGroup = styled("div")`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    margin-top: 0;
    min-height: 46px;
    padding: 0 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 890px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
    font-size: 1.2rem;
    color: #000000;
    transition: color 0.2s ease-in;
    margin: 0.5rem 1.5rem;

    @media only screen and (max-width: 768px) {
        margin: 1.25rem 2rem;
    }
`;

export const ActionLink = styled("a")`
  display: inline-flex;
  text-decoration: none;

  button {
    min-width: 150px;
  }

  @media only screen and (max-width: 890px) {
    width: 100%;

    button {
      max-width: none;
      width: 100%;
    }
  }
`;

export const SecondaryAction = styled("a")`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  min-height: 46px;
  padding: 0 1rem;
  border: 1px solid rgba(17, 17, 17, 0.2);
  border-radius: 4px;
  color: #111111;
  font-family: "Motiva Sans Bold", serif;
  font-size: 0.95rem;
  line-height: 1;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    border-color: rgb(15, 0, 223);
    color: rgb(15, 0, 223);
    background: #ffffff;
  }

  @media only screen and (max-width: 890px) {
    width: 100%;
    min-width: 0;
  }
`;

export const Label = styled("span")`
    font-weight: 500;
    color: #000000;
    text-align: right;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover,
    &:active,
    &:focus {
        color: rgb(15, 0, 223);
    }
`;
