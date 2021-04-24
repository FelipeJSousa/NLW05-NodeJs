import { response, Router } from "express";
import { getCustomRepository } from "typeorm";

import "./database";
import { SettingRepo } from "./repositories/settingRepo";

const routes = Router();

routes.post("/settings", async (request, response) => {
    const { chat, username } = request.body;

    const settingsRepo = getCustomRepository(SettingRepo);

    const setting = settingsRepo.create({
        chat,
        username
    })

    await settingsRepo.save(setting);

    return response.json(setting)

})


export { routes };

