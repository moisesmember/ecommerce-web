import { Model } from "../abstract/abstract-model/model";
import { UserProfile } from "./user-profile";

export class User extends Model{
    name!: string;
    username!: string;
    password!: string;
    token!: string;
    profiles!: Array<UserProfile>;
}
