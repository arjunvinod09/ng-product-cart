export type Card = {
    image : Image;
    category : string;
    name : string;
    price : number;
}

export type Image = {
    thumbnail : string;
    mobile : string;
    tablet : string;
    desktop : string;
}