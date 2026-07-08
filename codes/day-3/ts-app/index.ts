let a: number = 10
//a = 'joydip'
console.log(a);

const numbers = [1, 2, 3, 4, 5]
const evenNumbers: number[] = numbers.filter(function (a) { return a % 2 === 0 })

type BaseType = {
    id: number
}
type Person = {
    name: string,
    salary: number,
    location?: string,
    //print: () => string
} & BaseType


interface BaseEntity {
    id: number;
}

interface PersonEntity extends BaseEntity {
    name: string;
    salary: number;
    location?: string;
    print(): string
}
const anilPerson: Person = {
    id: 1,
    name: 'anil',
    salary: 1000,
    location: 'Bangalore',
    //print: function () { return this.name }
}

const people: Person[] = [
    anilPerson,
    {
        id: 1,
        name: 'anil',
        salary: 1000,
        location: 'Bangalore',
        //print: function () { return this.name }
    }
]

type myType = number | string
function add(a: number, b: number): myType {
    return (a + b).toString()
}

// type of argument of invoke method:
// pass such a function which takes two arguments: both of type number and
// the return type of the function is myType
//type InvokeFnArgType = (a: number, b: number) => myType

interface InvokeFnArgType {
    (a: number, b: number): myType;
}


function invoke(fnRef: InvokeFnArgType, x: number = 1, y: number = 1) {
    console.log(fnRef(x, y))
}
invoke(add, 10, 20)

class Employee {
    //_id; -> JS
    //by default public
    //public id: number;
    private readonly _id: number; //only through ctor and field initializer
    private _name: string;
    basic: number;
    da: number;
    hra: number;
    total: number;

    get id() {
        return this._id
    }

    get name() {
        return this.name
    }
    set name(value: string) {
        this._name = value
    }
    constructor(id: number, name: string, basic: number, da: number, hra: number) {
        this._id = id
        this._name = name
        this.basic = basic
        this.da = da
        this.hra = hra
        this.total = 0
    }

    print() {
        return this.name
    }
}

class PersonInfo {
    // public id: number;
    // name: string;
    // salary: number;
    // location?: string;

    constructor(public id: number, public name: string, public salary: number, public location?: string) {
        // this.id = id
        // this.name = name
        // this.salary = salary
        // this.location = location
    }
    print() {

    }
}

interface Operations<T> {
    //add(a: number, b: number): number;
    add(a: T, b: T): T;
}

class Impl implements Operations<number> {
    add(a: number, b: number): number {
        return a + b
    }
}