import { CityModel } from "./CityModel";
import { Model } from "./model";

export type PlayerModelAttributes = {
    fio: string,
    city: string,
}

export class PlayerModel extends Model {
    constructor(public fio: string, public city: CityModel) {
        super();
    }

    get attributes(): PlayerModelAttributes {
        return {
            fio: this.fio,
            city: this.city.title
        }
    }
    get indexAttributes(): PlayerModelAttributes {
        return {
            fio: this.fio,
            city: this.city.title
        }
    }
}