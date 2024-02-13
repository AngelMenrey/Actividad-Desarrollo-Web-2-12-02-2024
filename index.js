//Angel Emanuel Mendoza Reyes
//22110083
//Grupo: 5 P
//Fecha: 12/02/2024
const express = require("express");
const app = express();
app.use(express.json());

let pets = [
  { id: 1, name: "dog" },
  { id: 2, name: "cat" },
  { id: 3, name: "fish" },
];

app.get("/pets", (req, res) => {
  res.send(pets);
});

app.get("/pets/:id", (req, res) => {
  const petId = parseInt(req.params.id);
  const pet = pets.find((pet) => pet.id === petId);
  if (!pet) {
    return res.status(404).send("Mascota no encontrada");
  } else {
    return res
      .status(200)
      .send({ message: "Se encontró la mascota", pet: pet });
  }
});

app.post("/pets", (req, res) => {
  const newPet = {
    id: 4,
    name: "bird",
  };
  const existingPet = pets.find((pet) => pet.id === newPet.id);
  if (existingPet) {
    return res.status(400).send("Ya existe esa mascota");
  }
  pets.push(newPet);
  res.send("Se agrego una mascota");
});

app.patch("/pets/:id", (req, res) => {
  const { body } = req;
  const { name } = body;
  const { id } = req.params;

  let pet = pets.find((pet) => pet.id == id);
  if (!pet) {
    return res.status(404).send("Mascota no encontrada");
  }
  pet.name = name;
  res.send({ message: "Se actualizó la mascota", pet });
});

app.delete("/pets/:id", (req, res) => {
  const { id } = req.params;
  const pet = pets.find((pet) => pet.id == id);
  if (!pet) {
    return res.status(404).send("Mascota no encontrada");
  }
  pets = pets.filter((pet) => pet.id != id);
  res.send("Se eliminó la mascota");
});

app.listen(3000);
