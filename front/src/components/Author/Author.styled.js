import styled, { css, keyframes } from "styled-components";

import { device } from "./../../styles/breakPoints";
import { colors } from "./../../styles/colorsPalette";

const AuthorContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  /* flex-grow: 1; */
  width: 50%;

  margin-bottom: 15px;
  padding: 25px;

  background-color: ${colors.whiteOpacity01};
`;

const AuthorAvatar = styled.div`
  display: flex;

  width: 100px;
  height: 100px;

  background-image: url(${(props) => props.avatar});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 50%;
`;

const AuthorName = styled.p`
  display: flex;
  justify-content: center;

  padding: 0 10px;

  font-size: 26px;
  line-height: 32px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.whiteOpacity08};
`;

const AuthorButton = styled.button`
  display: flex;

  margin: 0;

  padding: 10px 15px;

  font-size: 20px;
  line-height: 26px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;

  color: ${colors.white};

  background: none;

  border: 1px solid ${colors.whiteOpacity05};

  transition: 0.3s ease;

  &:hover {
    cursor: pointer;

    border-color: ${colors.whiteOpacity08};
    box-shadow: 5px 5px 0px 0px ${colors.whiteOpacity08};

    transition: 0.3s ease;
  }
`;

export { AuthorContainer, AuthorAvatar, AuthorName, AuthorButton };
