import { IBase, ICommon } from "./types";


// what is a closure?
// a closure is a function that has access to the parent scope, even after the parent scope has closed
// it is formed when a function is declared within another functions. the inner function has access to the variables in the outer function


// this is a scenario where a closure is applied to create a private data store
// which is called data encapsulation. closure allow you to encapsulate the data and behavior. these data only be accessible through the specific methods
// data encapsulation is also a way to protect the data from being modified by other parts of the code and to minimize the use of the global variables
export function getDatabase<T extends IBase>(): ICommon<T> {
  
  // this is the private data store
  const data: Map<String, T> = new Map<String, T>();

  // these are the public methods to manipulate the data
  function getAll():Array<T> {
   return Array.from(data.values());
  }

  function getById(id: string): T | undefined {
    return data.get(id);
  }

  function getByName(name: string): T | undefined {
    return getAll().find((item) => item.name === name);
  }

  function add(id: string, item: T): T | undefined {
    return data.set(id, item).get(id);
  }

  function update(id: string, item: T): T | undefined {
    if (data.has(id)) {
      data.set(id, item);
      return item;
    }

    return undefined;
  }

  function removeById(id:string): T | undefined {
    if(data.has(id))
    {
      const item = data.get(id);
      data.delete(id);
      return item;
    }

    return undefined;
  } 
    
  return {
    getAll,
    getById,
    getByName,
    add,
    update,
    removeById,
  }
}

