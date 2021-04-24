import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/setting";


@EntityRepository(Setting)
class SettingRepo extends Repository<Setting> {

}

export { SettingRepo }