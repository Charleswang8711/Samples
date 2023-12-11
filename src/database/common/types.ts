
export interface IBase {
  id: string;
  name: string;
}


// a outline to define the public methods
/**
 *  define the outline of the database table, it only includes the member methods to access the data
 * the data is meant to be private and only accessible through the member methods 
 */
export interface ICommon<T extends IBase> {

  /** @returns a list of all items */
  getAll(): Array<T>;

  getById(id: string): T | undefined;

  getByName(name: string): T | undefined;

  add(id: string, item: T): T | undefined;

  update(id: string, item: T): T | undefined;

  removeById(id: string): T | undefined;
}