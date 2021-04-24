import { response, Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/settingsController";

import "./database";
import { SettingRepo } from "./repositories/settingRepo";

const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)


export { routes };

