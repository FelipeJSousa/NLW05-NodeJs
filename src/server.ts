import express, { response } from "express";

import { routes } from "./routes"

import "./database";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(4200, () => console.log("Server is running on port 42000"));