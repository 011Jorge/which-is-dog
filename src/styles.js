import styled from "styled-components";
import Background from './assets/pet.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("${Background}");
  height: 100%;
`;

export const H1 = styled.h1`
  font-size: 60px;
  color: #fff;
`;

export const ContainerItems = styled.div`
  background-color: #964b00;
  border-radius: 20px 20px 0 0;
  height: 100vh;
  margin-top: 10px;
  color: #fff;
`;

export const Nav = styled.div`
  background-color: #964b00;
  width: 100%;
  height: 100px;
  text-align: center;
  padding-top: 10px;
`


export const Button = styled.button`
  width: 250px;
  height: 100px;
  margin-top: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 25px;
  font-weight: 500;
  background-color: #964b00;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  h1 {
    font-size: 50px;
  }

  p {
    width: 800px;
    padding-top: 10px;
    font-size: 22px;
    text-align: center;
  }

  img {
    width: 600px;
    height: min-content;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 3px solid #fff;
  }

  .dogKilograms {
    margin-top: 15px;
  }
`;
