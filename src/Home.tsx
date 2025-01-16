import CartList from "./components/CartList"
import ProductList from "./components/ProductList"
import { products } from "./data"

const Home = () => {
    return (
        <section className="mb-8 pt-8 lg:mb-0">
            <div className="container lg:grid lg:grid-cols-[2.5fr_1fr] lg:gap-4">
                <div className="mb-6">
                    <div>   
                        <h1 className="text-5xl mb-8"> Desserts </h1>
                    </div>
                    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4">
                        { products.map((item) =>  
                            <ProductList key={item.id} product={item}/> )
                        }
                    
                    </div>
                </div>
                 <CartList />
            </div>

        </section>
    )
}

export default Home