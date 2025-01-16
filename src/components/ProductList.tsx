import { CartContextProps, ProductItem } from "../libs/types";
import cartImg from "../../public/assets/images/icon-add-to-cart.svg";
import plusImg from "../../public/assets/images/icon-increment-quantity.svg";
import minusImg from "../../public/assets/images/icon-decrement-quantity.svg";
import { useContext, useEffect, useState } from "react";
import CartContext from "../CartContext";

interface ProductListProps {
    product: ProductItem;
}

const ProductList = ({ product }: ProductListProps) => {
    const { image, name, category, price, id } = product;
    const { products, addToCart, isItemInCart, reduceItemFromCart , removeFromCart} = useContext(CartContext) as CartContextProps;
    const [quantity, setQuantity] = useState(0);

    useEffect(()=>{
        const cartProduct = products.find((product)=> product.id === id);
        if(cartProduct){
            setQuantity(cartProduct.quantity!);
        }

    },[products,id]);

    const increaseQuantity = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
        addToCart(id, name, price, image);
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) =>prevQuantity - 1);
            reduceItemFromCart(id);
        }
        else{
            removeFromCart(id);
            setQuantity(0);
        }
    }

    return (
        <div className="mb-8" key={id}>
            <div className="relative mb-4">
                <img src={image} alt={name} className={`rounded-lg ${isItemInCart(id) ? 'border-2 border-primary-Red' : ''} `} />
                {!isItemInCart(id) ? (
                    <button
                        onClick={() => addToCart(id, name, price, image) }
                        className="border-text-rose-500 group absolute flex bottom-[-1rem] left-1/2  -translate-x-1/2 items-center gap-2 rounded-full border bg-rose-50  px-4 py-2 transition-colors duration-200 hover:border-primary-Red lg:w-[150px]">
                        <img src={cartImg} alt="Add to cart" />
                        <span className="text-sm text-rose-900 transition-colors duration-200 group-hover:text-primary-Red">Add to cart</span>
                    </button>

                ) : (
                    <div className="absolute bottom-[-1rem] left-1/2 w-1/2 flex items-center justify-between gap-2 rounded-full bg-primary-Red px-4 py-2 text-white  lg:w-[170px] -translate-x-1/2 ">
                        <button onClick={decreaseQuantity} className="flex items-center justify-center size-[20px] rounded-full border transition-colors duration-300 hover:border-rose-100 hover:text-primary-Red">
                            <img src={minusImg} alt="plus" className="" />
                        </button>
                        <p> {quantity} </p>
                        <button onClick={increaseQuantity} className="flex items-center justify-center size-[20px] rounded-full border transition-colors duration-300 hover:border-rose-100 hover:text-primary-Red">
                            <img src={plusImg} alt="plus" className="" />
                        </button>
                    </div>
                )}


            </div>
            <div className="lg:mt-4">
                <p className="text-rose-500  "> {category}</p>
                <p className="font-semibold text-md text-black"> {name}</p>
                <p className="text-primary-Red font-bold"> {price.toLocaleString("en-us", { style: "currency", currency: "usd" })} </p>
            </div>
        </div>
    )
}

export default ProductList