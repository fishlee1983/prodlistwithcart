import { ProductItem } from "../libs/types";

interface ProductItemProps {
    product: ProductItem;
}


const OrderItem = ({product}: ProductItemProps) => {
    const TotalPricePerProduct = product.price * product.quantity!
   
  return (
    <div className="flex items-center gap-4">
        <img src={product.image} alt="Dessert" className="h-10 w-10 p-0"/>
        
    <div>
        <h4 className="font-bold text-base "> {product.name} </h4>

        <div className="flex items-center gap-2">
            <span className="text-base text-primary-Red"> {product.quantity}x </span>
            <div className="flex gap-2">
                <p className="text-base text-rose-400"> @
                    {product.price.toLocaleString("en-us", {
                        style: "currency",
                        currency: "usd",
                    })} </p>
                <p className="text-base text-black pl-14">
                    {TotalPricePerProduct.toLocaleString("en-us", {
                        style: "currency",
                        currency: "usd",
                    })} </p>
            </div>
        </div>
    </div>
    
</div>
  )
}

export default OrderItem