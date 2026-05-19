
const Product = () => {

    return (
        <section className="h-full overflow-y-auto pb-16">
            <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Product Management</span>
                        <span className="text-sm text-gray-400">Add, edit and manage your product catalog</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="bg-teal-400 text-black rounded-md p-1 text-sm">+ Add Product</button>
                    </div>
                </div>

                {/* Record / History */}
                <div className="overflow-auto">
                    <div className="text-sm component rounded-md flex flex-col gap-2  min-w-150 min-h-screen">
                        <div className="flex justify-between mini-component p-2">
                            <input type="text" placeholder="Search products.." className="p-2"/>
                            <select>
                                <option>All Catagories</option>
                                <option>Beverages</option>
                                <option>Snacks</option>
                                <option>Food</option>
                                <option>Dairy</option>
                                <option>Personal Care</option>
                                <option>Cleaning</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-gray-400 text-nowrap mini-component ">
                            <div className="flex-1">PRODUCT</div>
                            <div className="flex-1">CATEGORY</div>
                            <div className="flex-1">PRICE</div>
                            <div className="flex-1">COST</div>
                            <div className="flex-1">STOCK</div>
                            <div className="flex-1">STATUS</div>
                            <div className="flex-1">ACTIONS</div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>


                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>


                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>


                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-7 w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">$ 25.00</div>
                            <div className="flex-1">$ 15.00</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">50</span></div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 rounded-full">In Stock</span></div>
                            <div className="flex-1"><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>
                    
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Product;