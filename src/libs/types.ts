export interface ProductItem {
  image: string;
  name: string;
  category?: string;
  price: number;
  id: number;
  quantity?: number;
}

export interface CartContextProps {
  products: ProductItem[];
  addToCart : (id: number, name: string, price: number,image:string) => void;
  reduceItemFromCart: (id: number) => void;
  removeFromCart: (id:number) => void;
  isItemInCart: (id:number) => boolean;
  resetCart: () => void;
}
