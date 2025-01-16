import CartItem from "./CartItem";
import "../data";
import emptyCartImg from "../../public/assets/images/illustration-empty-cart.svg";
import carbonNeutralImg from "../../public/assets/images/icon-carbon-neutral.svg";
import { useContext, useState } from "react";
import CartContext from "../CartContext";
import { CartContextProps } from "../libs/types";
import { Checkout } from "../Checkout";


const CartList: React.FC = () => {

    const { products } = useContext(CartContext) as CartContextProps;
    const cartNotEmpty = (products.length !== 0);
    const [isConfirm, setIsConfirm] = useState(false);

    const handleIsConfirm = () => {
        setIsConfirm((prevIsConfirm) => !prevIsConfirm);
    }

    const calcTotal = () => {
        let total = 0;
        products.forEach((product) => {
            total += product.price * product.quantity!
        })
        return total;
    }


    return (
        <div className="mt-6 rounded-lg bg-white p-4 lg:h-fit ">
            <h3 className="text-primary-Red font-bold"> Your Cart {products.length} </h3>

            {cartNotEmpty ? (

                products.map((product) =>
                    <div key={product.id} className="border-b border-b-rose-300 py-4">
                        <CartItem product={product} />
                    </div>
                )

            ) :

                (
                    <div>
                        <img src={emptyCartImg} alt="empty cart" className="mx-auto " />
                        <p className="text-md text-center text-rose-500">Your added items will appear here</p>
                    </div>
                )
            }

            {
                cartNotEmpty && (
                    <div className="mt-4">
                        <div className=" flex items-center justify-between">
                            <p className="text-base "> Order Total </p>
                            <span className="text-lg text-rose-900 font-bold" > {calcTotal().toLocaleString("en-us", {
                                style: "currency",
                                currency: "usd"
                            })} </span>
                        </div>
                        <div className="mt-6 flex items-center justify-center border border-rose-100 p-4 rounded bg-rose-100">
                            <img src={carbonNeutralImg} alt="**" />
                            <p className="text-rose-500"> This is <span className="font-bold"> carbon-neutral </span> delivery</p>
                        </div>
                        <button onClick={handleIsConfirm} className="mt-6 bg-primary-Red text-base text-white rounded-full p-2 w-full transition-colors duration-300 hover:bg-rose-900 ">
                            Confirm Order

                        </button>
                        {isConfirm ? <Checkout resetConfirm={setIsConfirm} /> : undefined}
                    </div>
                )
            }
        </div>
    )
}

export default CartList