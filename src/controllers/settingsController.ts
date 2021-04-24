import { Request, Response } from "express"
import { getCustomRepository } from "typeorm";
import { SettingRepo } from "../repositories/settingRepo";

export class SettingsController {

    async create(request: Request, response: Response) {
        const { chat, username } = request.body;

        const settingsRepo = getCustomRepository(SettingRepo);

        const setting = settingsRepo.create({
            chat,
            username
        })

        await settingsRepo.save(setting);

        return response.json(setting)
    }
}