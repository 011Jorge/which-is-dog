import React, { useState } from "react";

import axios from "axios";

import { Container, H1, ContainerItems, Dogs } from "./styles";

function App() {
  const [dogs, setDogs] = useState([]);

  async function listDogs() {
    const { data } = await axios.get("https://api.thedogapi.com/v1/breeds");

    console.log(data[50]);

    setDogs([
      {
        name: data[50].name,
        about: data[50].bred_for,
        temperament: data[50].temperament,
        image: data[50].image.url,
      },
    ]);
  }

  return (
    <Container>
      <H1>The Dog Api</H1>
      <button onClick={listDogs}>teste</button>

      <ContainerItems>
        <ul>
          {dogs.map((dog) => {
            return (
              <div key={dog.id}>
                <h1>{dog.name}</h1>
                <h2>{dog.about}</h2>
                <p>{dog.temperament}</p>
                <img src={dog.image} alt="test" />
              </div>
            );
          })}
        </ul>
      </ContainerItems>
    </Container>
  );
}

export default App;
