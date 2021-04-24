import express, { response } from "express";

import "./database";

const app = express();

app.get("/", (request, response) => {
    return response.send("Olá NLW#05");
})

app.get("/json", (request, response) => {
    return response.json({
        message: "Olá NLW#05"
    })
})

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso!"
    })
})

app.listen(4200, () => console.log("Server is running on port 42000"));