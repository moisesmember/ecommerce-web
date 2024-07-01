import { Model } from "../abstract/abstract-model/model";
import { Category } from "./category";
import { ProductStatusEnum } from "./enum/ProductStatusEnum";

export class Product extends Model{
    description!: string;
    price!: number;
    amount!: number;
    status!: ProductStatusEnum;
    img!: string;
    category!: Category;
}
