import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

export const H1 = styled.h1`
  font-size: 60px;
`;

export const ContainerItems = styled.div``;

export const Select = styled.select`
  width: 400px;
  height: 60px;
  margin-top: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  background-color: #964b00;
  color: #fff;
  padding-left: 20px;
  padding-right: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const Option = styled.option`

  color: #fff;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  h1 {
    font-size: 45px;
  }

  p {
    width: 800px;
    padding-top: 10px;
    font-size: 18px;
    text-align: center;
  }

  img {
    width: 800px;
    height: min-content;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
