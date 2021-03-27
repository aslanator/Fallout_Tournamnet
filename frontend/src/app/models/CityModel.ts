import { Model } from "./model";

export type CityModelAttributes = {id: number, title: string};

export class CityModel extends Model {
    constructor(public id: number, public title: string) {
        super();
    }

    get attributes(): CityModelAttributes {
        return {
            id: this.id,
            title: this.title,
        }
    }
    get indexAttributes(): CityModelAttributes {
        return this.attributes;
    }
}