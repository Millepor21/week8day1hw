// Q1:
type CTStudent = {
    readonly id: string,
    name: string,
    age: number,
    isTired: boolean,
    projectsCompleted: string[],
    pet?: string
}

let student1: CTStudent = {
    id: '32q5q5-15TEFAWGT3-Q54QTrgsh5576543-tasge67',
    name: 'Porter MillerWright',
    age: 19,
    isTired: true,
    projectsCompleted: ["HTML Portfolio","Fakebook","Weather API"],
    pet: 'dog'
}
let student2: CTStudent = {
    id: '153-636253167-2763174-53',
    name: 'Milad',
    age: 29,
    isTired: true,
    projectsCompleted: ["HTML Portfolio","Fakebook"]
}
let student3: CTStudent = {
    id: 'ASG5W46-AH56W32-SGTW7743',
    name: 'Lyla',
    age: 18,
    isTired: true,
    projectsCompleted: ["HTML Portfolio","Fakebook","Weather API","Black Jack OOP"]
}

// Q2:
type Fruit = {
    color:string,
    shape:string
}

function isEaten(anObject:Fruit|null):string{
    if(anObject instanceof Object && 'color' in anObject && 'shape' in anObject) {
        return anObject.color
    } else {
        return 'You ate my fruit already'
    } 
}

// Q3:
type Book={
    isbn:string,
    title:string,
    author:string
}

type DigitalBook={
    fileType:string,
}

type Ebook = Book & DigitalBook

const firstEbook: Ebook = {
    isbn: '12563456243',
    title: 'Warlock of the Magus World',
    author: 'The Plagarist',
    fileType: 'EPUB'
}

// Q4:
enum items {
    Shi = 'Shirts',
    Sho = 'Shoes',
    Pan = 'Pants',
    Ha = 'Hats'
}

type ShopItem = {
    readonly id: number,
    price: number,
    description: string,
    color?: string,
    itemType: string,
    searchPhrases: string[]
}

const spiderManShirt:ShopItem = {
    id: 1,
    price: 14.99,
    description: 'A Miles Morales Spider Man shirt',
    color: 'Black and Red',
    itemType: items.Shi,
    searchPhrases: ["Spider Man","Miles Morales","Red and Black Shirt"]
}
const ironManShirt:ShopItem = {
    id: 2,
    price: 24.99,
    description: 'An Iron Man shirt',
    color: 'Silver, Black, and Red',
    itemType: items.Shi,
    searchPhrases: ["Iron Man","Tony Stark","Marvel","Super Hero"]
}
const hulkShorts:ShopItem = {
    id: 3,
    price: 4.99,
    description: 'A pair of large purple pants',
    color: 'Purple',
    itemType: items.Pan,
    searchPhrases: ["Hulk's pants","stretchy purple pants","pants","Bruce Banner"]
}