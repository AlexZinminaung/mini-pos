
const Inventory = () => {

    return (
        <section className="h-full overflow-y-auto pb-16">
            <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Product Management</span>
                        <span className="text-sm text-gray-400">Add, edit and manage your product catalog</span>
                    </div>
                </div>

                {/* Record / History */}
                <div className="overflow-auto">
                    <div className="text-sm component rounded-md flex flex-col gap-2  min-w-150 min-h-screen">
                        <div className="flex justify-between items-center mini-component p-2 border">
                            <span>Stock Overview</span>
                            <input type="text" placeholder="Search products.." className="p-2"/>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-gray-400 text-nowrap mini-component">
                            <div className="flex-1">PRODUCT</div>
                            <div className="flex-1">CATEGORY</div>
                            <div className="flex-1">STOCK</div>
                            <div className="flex-1">MIN STOCK</div>
                            <div className="flex-1">STATUS</div>
                            <div className="flex-1">RESTOCK</div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">50</div>
                            <div className="flex-1">10</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 px-4 rounded-full">OK</span></div>
                            <div className="flex-1"><button className="bg-teal-400 text-black rounded-md p-1 text-sm">+ Restock</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">50</div>
                            <div className="flex-1">10</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 px-4 rounded-full">OK</span></div>
                            <div className="flex-1"><button className="bg-teal-400 text-black rounded-md p-1 text-sm">+ Restock</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">50</div>
                            <div className="flex-1">10</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 px-4 rounded-full">OK</span></div>
                            <div className="flex-1"><button className="bg-teal-400 text-black rounded-md p-1 text-sm">+ Restock</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">50</div>
                            <div className="flex-1">10</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 px-4 rounded-full">OK</span></div>
                            <div className="flex-1"><button className="bg-teal-400 text-black rounded-md p-1 text-sm">+ Restock</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">50</div>
                            <div className="flex-1">10</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 px-4 rounded-full">OK</span></div>
                            <div className="flex-1"><button className="bg-teal-400 text-black rounded-md p-1 text-sm">+ Restock</button></div>
                        </div>

                        <div className="flex w-full gap-2 p-2 text-nowrap">
                            <div className="flex-1">Coca-Cola 330ml</div>
                            <div className="flex-1"><span className="bg-blue-400 text-black p-1 rounded-full">Beverages</span></div>
                            <div className="flex-1">50</div>
                            <div className="flex-1">10</div>
                            <div className="flex-1"><span className="bg-teal-400 text-black p-1 px-4 rounded-full">OK</span></div>
                            <div className="flex-1"><button className="bg-teal-400 text-black rounded-md p-1 text-sm">+ Restock</button></div>
                        </div>                       
                    
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Inventory;