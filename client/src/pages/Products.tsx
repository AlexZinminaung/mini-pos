
const Product = () => {

    return (
        <section className="text-sm p-4 h-full flex flex-col gap-4 pb-20">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-2xl">Product Management</span>
                    <span className="text-gray-400">Add, edit and manage your product catalog</span>
                </div>
                <button className=" rounded-md bg-teal-500 text-black p-2 text-nowrap">+ Add Product</button>
            </div>

            {/* Product container */}
            <div className="h-full overflow-x-auto flex flex-col gap-4">
                <div className="flex justify-between">
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

                <div className=" component rounded-md min-h-full min-w-150">
                    <div className="flex text-gray-400">
                        <span className="p-2 flex-1">PRODUCT</span>
                        <span className="p-2 flex-1">CATEGORY</span>
                        <span className="p-2 flex-1">PRICE</span>
                        <span className="p-2 flex-1">COST</span>
                        <span className="p-2 flex-1">STOCK</span>
                        <span className="p-2 flex-1">STATUS</span>
                        <span className="p-2 flex-1">ACTIONS</span>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-black dark:hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                    <div className="flex items-center">
                        <span className="p-2 flex-1">Coca-Cola 330 ml</span>
                        <span className="p-2 flex-1">Beverages</span>
                        <span className="p-2 flex-1">$25.00</span>
                        <span className="p-2 flex-1">$15.00</span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">50</span></span>
                        <span className="p-2 flex-1"><span className="bg-teal-400 px-2 text-black rounded-md">In Stock</span></span>
                        <button className="p-2 flex-1"><span className='mini-component border flex items-center gap-2 w-fit rounded-md px-2 text-gray-400 hover:text-white'>Edit</span></button>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Product;