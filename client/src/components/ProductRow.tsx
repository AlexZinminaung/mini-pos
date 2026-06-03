import { useState } from "react";
import type { ProductType } from "../types/ProductType";

type Props = {
    data: ProductType
}



const ProductRow = ({data}: Props) => {
    const [isEdit, setEdit] = useState(false);
    const [formData, setFormData] = useState(data);
    const status = formData.stock < 15 ? "Low Stock" : "In Stock"

    //  handler functions
    const changeFormData = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        // only for numeric fields
        if (name === "stock" || name === "price") {

            // allow empty
            if (value === "") {
                setFormData(prev => ({
                    ...prev,
                    [name]: ""
                }));
                return;
            }

            // only positive integers
            if (!/^[1-9]\d*$/.test(value)) {
                return;
            }
        }
            
         setFormData(prev => {
            return {...prev, [name]: value}
         })
    }

    return (
            <div className="grid grid-cols-7 w-full items-center gap-2 p-2 text-nowrap text-xs">
                {isEdit ? <input type="text" name="name" value={formData.name} onChange={changeFormData} className="outline-none mini-component border p-1 w-24"/> : <div>{formData.name}</div>}
                <div>
                    {isEdit ? 
                        <select name="category" value={formData.category} onChange={changeFormData}  className="outline-none mini-component border p-1 w-24">
                            <option>All Categories</option>
                            <option>Beverages</option>
                            <option>Snacks</option>
                            <option>Food</option>
                            <option>Dairy</option>
                            <option>Personal Care</option>
                            <option>Cleaning</option>
                        </select>
                        : 
                        <span className="bg-blue-400/20 text-blue-400 p-1 rounded-full">{formData.category}</span>}
                </div>
                {isEdit ? <input type="number" name="price" value={formData.price} onChange={changeFormData}  className="outline-none mini-component border p-1 w-24"/> : <div> ${formData.price}</div>}
                {isEdit ? <input type="number" name="cost" value={formData.cost} onChange={changeFormData}  className="outline-none mini-component border p-1 w-24"/> :<div>$ {formData.cost}</div>}
                <div>
                    {isEdit ? <input type="number" name="stock" value={formData.stock} onChange={changeFormData}  className="outline-none mini-component border p-1 w-24"/> : <span className="bg-teal-400/20 text-teal-400 p-1 rounded-full">{formData.stock}</span>}
                </div>
                <div>
                    <span className={`px-1 rounded-full ${status == "Low Stock" ? "bg-red-400/20 text-red-400" : "bg-teal-400/20 text-teal-400"}`}>{status}</span>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => { setEdit(prev => !prev )}} className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">{isEdit ? "Save" : "Edit"}</button>
                    {isEdit && <button className=" mini-component border px-4 rounded-md bg-red-400/20 text-red-400">Delete</button>}
                </div>
            </div>
    )
}

export default ProductRow;