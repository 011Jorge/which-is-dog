import React, { useState } from "react";

import { FaRulerVertical, FaHeart, FaStopwatch20 } from "react-icons/fa";

import axios from "axios";

import { Container, H1, ContainerItems, Button, About } from "./styles";

function App() {
  const [dogs, setDogs] = useState([]);

  async function listDogs() {
    const { data: consumedApi } = await axios.get(
      "https://api.thedogapi.com/v1/breeds"
    );

    const randomDog = Math.floor(Math.random() * consumedApi.length);
    const dogData = consumedApi[randomDog];

    console.log(dogData);

    setDogs([
      {
        image: dogData.image.url,
        name: dogData.name,
        temperament: dogData.temperament,
        kilograms: dogData.weight.imperial,
        height: dogData.height.imperial,
        life: dogData.life_span,
      },
    ]);
  }

  return (
    <Container>
      <H1>Qual é o Dog ?</H1>
      <Button onClick={listDogs}>Teste</Button>

      <ContainerItems>
        <ul>
          {dogs.map((dog) => {
            return (
              <About key={dog.id}>
                <img src={dog.image} alt="test" />
                <h1>{dog.name}</h1>
                <p>
                  <i>{dog.temperament}</i>
                </p>
                <p>
                  <FaStopwatch20 />
                  <b> {dog.kilograms} kgs</b>
                </p>
                <p>
                  <FaRulerVertical />
                  <b> {dog.height} cm</b> at the withers
                </p>
                <p>
                  <FaHeart />
                  <b> {dog.life}</b>
                  average life span
                </p>
              </About>
            );
          })}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
