import { Model } from "../abstract/abstract-model/model";
import { ProfileFeature } from "./profile-feature";

export class Profile extends Model{
    name!: string;
    feature!: Array<ProfileFeature>;
}
