import express from "express";
import * as url from "url";
import hbs from "hbs";
import 'dotenv/config';

// const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const app = express();
const port = process.env.PORT;

// Habdlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Luis Muñoz",
    titulo: "Curso Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Luis Muñoz",
    titulo: "Curso Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Luis Muñoz",
    titulo: "Curso Node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Escuchando por el puerto ${port}`);
});
