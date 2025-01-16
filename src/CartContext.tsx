import { createContext, ReactNode , useState} from "react";
import { CartContextProps, ProductItem } from "./libs/types";

interface CartProviderProps{
    children: ReactNode;
}
const CartContext = createContext<CartContextProps | undefined>(undefined);


export function CartProvider({children}:CartProviderProps){

    const [products, setProducts] = useState<ProductItem[]>([]);

    //Function to add item to the cart
    const addToCart = (id:number, name:string,price:number,image:string) => {

        const existingProducts = products.find(product => product.id === id);
        if(existingProducts){ // If the item is already present then increase the quantity
            const updateProduct = products.map(product => {
                if(product.id === id){
                    return { ...product, quantity: product.quantity! + 1}
                }
                return product;
            })
            setProducts(updateProduct);
        } else {//add the new item to the cart
            setProducts((prevProduct) => [
                ...prevProduct, {id, name, price, image,quantity: 1}
            ])
        }

    }

    //Function to reduce the quantity of item from cart
    const reduceItemFromCart = (id:number) => {
        const updateProduct = products.map((product)=> {
            if(product.id === id){
                const updateQuantity = product.quantity! -1;

                if(updateQuantity < 1)
                    removeFromCart(id);

                return { ...product, quantity: updateQuantity};
            }

            return(product);
        })
        setProducts(updateProduct);
    }

    //Function to remove the item from cart 
    const removeFromCart = (id:number) => {

        const updateProduct = products.filter((product)=> {
            return product.id !== id
        });

        setProducts(updateProduct);
    }

    //Function to check if the item in the cart
    const isItemInCart = (id:number) => {
        return (products.some((product) => product.id === id));
    }

    //Function to reset the cart
    const resetCart = () => {
        return setProducts([]);
    }
    return (
        <CartContext.Provider value={{products, addToCart,reduceItemFromCart, removeFromCart, isItemInCart, resetCart}}>{children}</CartContext.Provider>
    )
    
}
export default CartContext;