import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn({name: "Product_id"})
    id: number;

    @Column({name: "Product_name"})
    name: string;

    @Column({name: "Product_price"})
    price: number;
}