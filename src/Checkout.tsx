import { useContext, useState } from "react";
import checkImg from "../public/assets/images/icon-order-confirmed.svg";
import CartContext from "./CartContext";
import { CartContextProps } from "./libs/types";
import OrderItem from "./components/OrderItem";
import Home from "./Home";

type ResetConfirmProps = {
    resetConfirm: React.Dispatch<React.SetStateAction<boolean>>;
  };

export const Checkout:React.FC<ResetConfirmProps> = ({resetConfirm}) => {

    const { products, resetCart } = useContext(CartContext) as CartContextProps;
    const [isNewOrder, setNewOrder] = useState(false);


    const handleNewOrder = () => {
        setNewOrder(true);
        resetCart();
         
        resetConfirm(false);
    }

    const calcTotal = () => {
        let total = 0;
        products.forEach((product) => {
            total += product.price * product.quantity!
        })
        return total;
    }


    return (
        /* fixed inset-0 creates an element that is positioned fixed to cover the entire viewport. 
        This is commonly used for creating overlays, modals, or fullscreen layouts. */
        <aside className="fixed inset-0 h-screen bg-black bg-opacity-50">
            <div className="flex h-full md:items-center md:justify-center">
                <div className="absolute bottom-0 w-full flex flex-col items-start justify-end rounded-lg bg-white p-4 md:relative md:h-fit md:w-fit md:px-8 md:pb-8 ">
                    <div className="mb-6">
                        <img src={checkImg} alt="tick" />
                        <h1 className="text-4xl font-bold text-rose-900">
                            Order Confirmed
                        </h1>
                        <p className="text-sm font-light text-rose-300">
                            We hope you enjoy your food
                        </p>
                    </div>
                    <div className="w-full rounded-lg bg-rose-100 p-4">
                        {products.map((product) =>
                            <div key={product.id} className="border-b border-b-rose-300 py-4 ">
                                <OrderItem product={product} />
                            </div>

                        )}

                        <div className=" mt-2 flex items-center justify-between">
                            <p className="text-base "> Order Total </p>
                            <span className="text-lg text-rose-900 font-bold" > {calcTotal().toLocaleString("en-us", {
                                style: "currency",
                                currency: "usd"
                            })} </span>
                        </div>
                    </div>

                    <button onClick={handleNewOrder} className="mt-6 bg-primary-Red text-base text-white rounded-full p-2 w-full transition-colors duration-300 hover:bg-rose-900 ">
                        Start New Order
                    </button>

                    {isNewOrder ? <Home /> : undefined}


                </div>
            </div>
        </aside>


    )
}
