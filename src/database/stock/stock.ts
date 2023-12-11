import { getDatabase } from "../common/common";
import { IStock, IStockItem } from "./types";




  const stockItems: Array<IStockItem> = [
    { id: "1", name: "Apple", amount: 1000 },
    { id: "2", name: "Orange", amount: 1000 },
    { id: "3", name: "Banana", amount: 1000},
];


// add the stock items to the database
function getStock(): IStock {
    
    const stockDatabase = getDatabase<IStockItem>();
    stockItems.forEach((item) => {stockDatabase.add(item.id, item);})

    function getAll() {
        return stockDatabase.getAll();
    }

    function getByName(name:string) {
        return stockDatabase.getByName(name);
    }

    function buy(id: string, amount: number): IStockItem | undefined {
        const item = stockDatabase.getById(id);
        if(item) {
            item.amount += amount;
            return stockDatabase.update(id, item);
        }
    }

    function  sell(id: string, amount: number){
        const item = stockDatabase.getById(id);
        if(item) {
            item.amount += amount;
            return stockDatabase.update(id, item);
        }
        
    }

    return {
        getAll,
        getByName,
        buy,
        sell
    }
}


export const stockDB = getStock();

