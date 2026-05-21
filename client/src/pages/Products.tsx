import { useState } from "react";
import ProductRow from "../components/ProductRow";
import { useProductStore } from "../stores/ProductStore";

const Product = () => {

    // using State
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState("All Categories");

    // using stores
    const  { products, addProduct }  = useProductStore();
    // filter products by search keywords and category
    const filterProducts = products.filter( item => {

        const matchQuery = item.name.toLowerCase().includes(query.toLowerCase())
        const matchCategory = category === "All Categories" || item.category === category;

        return matchQuery && matchCategory;
    })

    return (
        <section className="flex-1 min-h-0 w-full flex flex-col p-4">
            <div className="flex justify-between items-center ">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold">Product Management</span>
                    <span className="text-sm text-gray-400">Add, edit and manage your product catalog</span>
                </div>
                <button className="bg-teal-400/20 text-teal-400 rounded-md p-1 text-sm">+ Add Product</button>

            </div>

            {/* Record / History */}
            <div className="text-xs component rounded-md flex flex-col gap-2 flex-1 min-h-0">
                <div className="flex justify-between mini-component p-2 ">
                    <input 
                        type="text" 
                        placeholder="Search products.." 
                        onChange={(e) => { setQuery(e.target.value)}}
                        className="p-2 sm:min-w-72 outline-none mini-component border rounded-md"/>
                    <select 
                        value={category} 
                        onChange={(e) => { setCategory(e.target.value) }}
                        className="outline-none mini-component border rounded-md "
                    >
                        <option>All Categories</option>
                        <option>Beverages</option>
                        <option>Snacks</option>
                        <option>Food</option>
                        <option>Dairy</option>
                        <option>Personal Care</option>
                        <option>Cleaning</option>
                    </select>
                </div>
                <div className="overflow-auto">
                    <div className="min-w-250">
                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-gray-400 text-nowrap mini-component ">
                            <div>PRODUCT</div>
                            <div>CATEGORY</div>
                            <div>PRICE</div>
                            <div>COST</div>
                            <div>STOCK</div>
                            <div>STATUS</div>
                            <div>ACTIONS</div>
                        </div>

                        {/* Product items come here */}
                        {
                            filterProducts.map( item => {
                                return <ProductRow key={item.id} data={item}/>;
                            })
                        }
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default Product;