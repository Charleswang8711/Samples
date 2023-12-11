import { IBase } from "../common/types";

export interface IStockItem extends IBase{
   amount: number;
}

export interface IStock{
   getAll(): Array<IStockItem>;
   getByName(name:string): IStockItem | undefined;
   buy(id: string, amount: number): void;
   sell(id: string, amount: number): void;
}

