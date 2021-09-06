export interface IProps {
    category: string,
    priceRange: string,

}

export interface IState {
    products: Product[],

}

export interface Product {
    _id: string,
    manufacturer: string;
    title: string;
    rating: number;
    price: number;
    bullet_points: string[];
    description: string;
    image: string;
    category: Category;
}

export interface Category {
    category: "weights" | "running" | "fighting" | "gadgets"
}