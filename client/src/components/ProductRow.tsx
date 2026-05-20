import { useState } from "react";
import type { ProductType } from "../types/ProductType";

type Props = {
    data: ProductType
}



const ProductRow = ({data}: Props) => {
    const [isEdit, setEdit] = useState(false);

    const status = data.stock < 15 ? "Low Stock" : "In Stock"


    return (
            <div className="grid grid-cols-7 w-full items-center gap-2 p-2 text-nowrap text-xs">
                {isEdit ? <input type="text" value={data.name} className="outline-none mini-component border p-1 w-24"/> : <div>{data.name}</div>}
                <div>
                    {isEdit ? <input type="text" value={data.category}  className="outline-none mini-component border p-1 w-24"/> : <span className="bg-blue-400/20 text-blue-400 p-1 rounded-full">{data.category}</span>}
                </div>
                {isEdit ? <input type="text" value={data.price}  className="outline-none mini-component border p-1 w-24"/> : <div>$ ${data.price}</div>}
                {isEdit ? <input type="text" value={data.cost}  className="outline-none mini-component border p-1 w-24"/> :<div>$ {data.cost}</div>}
                <div>
                    {isEdit ? <input type="text" value={data.stock}  className="outline-none mini-component border p-1 w-24"/> : <span className="bg-teal-400/20 text-teal-400 p-1 rounded-full">{data.stock}</span>}
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