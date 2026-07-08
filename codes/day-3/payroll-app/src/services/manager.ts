export interface Manager<T>{
    add(obj: T): T;
    delete(id: number): T;
    update(id: number, updated: T): T;
    getall(): Readonly<T[]>;
    get(id: number): T;
}