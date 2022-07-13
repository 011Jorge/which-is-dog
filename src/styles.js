import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;

export const H1 = styled.h1``;

export const ContainerItems = styled.div``;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  background-color: #964b00;
  color: #fff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;

    p {
        padding-top: 10px;
    }

    img {
        padding-top: 20px;
    }
`;
