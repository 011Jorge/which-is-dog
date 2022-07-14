import React, { useState, useEffect } from "react";

import { FaRulerVertical, FaHeart, FaStopwatch20 } from "react-icons/fa";

import axios from "axios";

import { Container, H1, ContainerItems, Select, Option } from "./styles";

function App() {
  const [dogs, setDogs] = useState([]);
  const [dogValue, setDogValue] = useState([]);

  const [test, setTest] = useState([]);

  useEffect(() => {
    async function listDog() {
      const { data: consumedApi } = await axios.get(
        "https://api.thedogapi.com/v1/breeds"
      );

      setDogs(consumedApi);
      setDogValue(consumedApi[0]);
    }

    listDog();
  }, []);

  async function selectDog() {
    const { data: consumedApi } = await axios.get(
      "https://api.thedogapi.com/v1/breeds"
    );

    console.log(consumedApi)
  } 

  return (
    <Container>
      <H1>Qual é o Dog ?</H1>

      <Select onChange={selectDog}>
        {dogs.map((dog) => (
          <Option key={dog.id} value={dogValue}>
            {dog.name}
          </Option>
        ))}
      </Select>

      <div>
        <h1>Hello</h1>
      </div>
    </Container>
  );
}

export default App;

// async function listDogs() {
//   const { data: consumedApi } = await axios.get(
//     "https://api.thedogapi.com/v1/breeds"
//   );

//   const randomDog = Math.floor(Math.random() * consumedApi.length);
//   const dogData = consumedApi[randomDog];

//   console.log(dogData);

//   setDogs([
//     {
//       image: dogData.image.url,
//       name: dogData.name,
//       temperament: dogData.temperament,
//       kilograms: dogData.weight.imperial,
//       height: dogData.height.imperial,
//       life: dogData.life_span,
//     },
//   ]);
// }
