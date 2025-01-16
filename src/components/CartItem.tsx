import { CartContextProps, ProductItem } from "../libs/types";
import closeImg from "../../public/assets/images/icon-remove-item.svg";
import { useContext } from "react";
import CartContext from "../CartContext";

interface ProductItemProps {
    product: ProductItem;
}
const CartItem = ({ product }: ProductItemProps) => {

    const TotalPricePerProduct = product.price * product.quantity!
    const { removeFromCart } = useContext(CartContext) as CartContextProps;
    return (
        <div className="flex items-center justify-between">
            <div>
                <h4 className="font-bold text-base "> {product.name} </h4>

                <div className="flex items-center gap-4">
                    <span className="text-base text-primary-Red"> {product.quantity}x </span>
                    <div className="flex gap-2">
                        <p className="text-base text-rose-400"> @
                            {product.price.toLocaleString("en-us", {
                                style: "currency",
                                currency: "usd",
                            })} </p>
                        <p className="text-base text-rose-500">
                            {TotalPricePerProduct.toLocaleString("en-us", {
                                style: "currency",
                                currency: "usd",
                            })} </p>
                    </div>
                </div>
            </div>
            <button onClick={()=> removeFromCart(product.id)} className="size-[20px] border border-rose-400 rounded-full flex items-center justify-center ">
                <img className="size-[10px]" src={closeImg} alt="close" />
            </button>
        </div>
    )
}

export default CartItem