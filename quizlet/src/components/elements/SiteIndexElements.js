import styled from "styled-components";

export const StyledTitle = styled.h1`
  text-align: center;
  margin-top: 150px;
  font-size: 32px;
  font-weight: bold;
  font-family: "Raleway-Medium";
  color: whitesmoke;
`;

export const StyledTopicLink = styled.a`
  align-items: center;
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
  padding-top: 10px;
  color: #008080;
`;

export const CardImg = styled.div`
  background-image: url(https://cdn4.iconfinder.com/data/icons/basic-ui-element-2-3-filled-outline/512/Basic_UI_Elements_-_2.3_-_Filled_Outline_-_44-11-512.png);
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  height: 50%;
  width: 50%;
  align-self: center;
  background-position: center;
`;

export const Card = styled.div`
  background-color: #ffecc2;
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
  &:hover {
    box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.2);
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