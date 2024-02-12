//Angel Emanuel Mendoza Reyes
//22110083
//Grupo: 5 p
//Fecha: 12/10/2021
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Mascotas");
});

const pets = [
  { id: 1, name: "Dog" },
  { id: 2, name: "Cat" },
];

app.get("/pets", (req, res) => {
  res.send(pets);
});

app.post("/pets", (req, res) => {
  const { body } = req;
  mascotas.push(body);
  res.send("se agrego mascota");
});

app.patch("/pets/:id", (req, res) => {
  const { body } = req;
  const { name } = body;
  const { id } = req.params;
  let mascota = mascotas.find((mascota) => mascota.id == id);
  mascota.name = name;
  res.send({ message: "se actualizo mascota", mascota });
});

app.delete("/pets/:id", (req, res) => {
  const { id } = req.params;
  mascotas = mascotas.filter((mascota) => mascota.id != id);
  res.send({ message: "se elimino mascota" });
});

app.listen(3010);
