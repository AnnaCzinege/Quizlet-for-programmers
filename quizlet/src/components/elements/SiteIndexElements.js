import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTitle = styled.h1`
  text-align: center;
  margin-top: 150px;
  font-size: 32px;
  font-weight: bold;
  font-family: "Raleway-Medium";
  color: #66fcf1;
`;

export const StyledTopicLink = styled(Link)`
  align-items: center;
  z-index: 2;
  display: inline-block;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font: inherit;
  margin: 1.5rem 0.6rem 0;
  outline: none;
  justify-content: flex-start;
  box-sizing: inherit;
  text-decoration: none;
  font-family: "Raleway-Medium";
  font-weight: bold;
  font-size: 20px;
  color: #008080;
  vertical-align: center;
`;

export const CardTitle = styled.h4`
  font-family: "Raleway-Medium";
  font-weight: bold;
  font-size: 20px;
  padding-top: 30px;
  color: #45a29e;
  &:hover {
    color: #1f2833;
  }
`;

export const CardImg = styled.div`
  background-image: ur();
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 50%;
  width: 50%;
  align-self: center;
  background-position: center;
`;

export const Card = styled.div`
  background-color: whitesmoke;
  align-items: center;
  vertical-align: center;
  text-align: center;
  border-radius: 0.25rem;
  height: 10rem;
  margin: 1.5rem 0.6rem 0;
  width: 20rem;
  box-shadow: 0 0 0.4rem 0 rgba(0, 0, 0, 0.25);
  transition: all 0.12s;
  justify-content: flex-start;
  box-sizing: inherit;
  border: 5px solid #45a29e;
  &:hover {
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
    border: 5px solid whitesmoke;
  }
`;

export const CardContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  box-sizing: inherit;
`;

export const CardSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 3rem;
  padding-right: 3rem;
  box-sizing: inherit;
`;

export const StyledSection = styled.div`
  display: block;
`;
