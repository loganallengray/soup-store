export interface IUser {
    id: number,
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    balance: number
}

export interface ISoup {
    id: number,
    name: string,
    description: string,
    price: number,
    servingSize: string,
    calories: number,
    satFat: number,
    polyFat: number,
    monoFat: number,
    cholesterol: number,
    sodium: number,
    dietaryFiber: number,
    sugars: number,
    protein: number,
    vitaminD: number,
    calcium: number,
    iron: number,
    potassium: number,
    caffeine: number,
    imageUrl: string
}

export interface ICartItem {
    amount: number,
    soup: ISoup
}