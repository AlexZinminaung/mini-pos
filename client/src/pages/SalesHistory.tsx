
const SalesHistory = () => {

    return (
        <section className="h-full overflow-y-auto pb-16">
            <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Sales History</span>
                        <span className="text-sm text-gray-400">See All transactions</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <input type="date" />
                        <input type="button" value={"clear"} className="text-sm mini-component border rounded-md px-2"/>
                    </div>
                </div>

                {/* Data overview */}
                <div className="flex gap-4 flex-wrap">
                    <div className="component p-4 flex-1 rounded-md flex flex-col">
                        <span className="text-sm text-gray-400">Transactions</span>
                        <span className="text-2xl font-bold">158</span>
                    </div>

                    <div className="component p-4 flex-1 rounded-md flex flex-col">
                        <span className="text-sm text-gray-400">Revenue</span>
                        <span className="text-2xl text-teal-500 font-bold">$36,662.48</span>
                    </div>

                    <div className="component p-4 flex-1 rounded-md flex flex-col">
                        <span className="text-sm text-gray-400">Items Sold</span>
                        <span className="text-2xl font-bold">763</span>
                    </div>

                    <div className="component p-4 flex-1 rounded-md flex flex-col">
                        <span className="text-sm text-gray-400">Avg. Sale</span>
                        <span className="text-2xl font-bold">$ 232.04</span>
                    </div>
                </div>

                {/* Record / History */}
                <div className="overflow-auto">
                    <div className="p-2 text-sm component rounded-md flex flex-col  min-w-150 min-h-screen">
                        
                        <div className="flex justify-between">
                            <div className=" font-bold">Transactions</div>
                            <button className=" mini-component border rounded-md px-2">Print Report</button>
                        </div>

                        <div className="grid grid-cols-9 w-full gap-2 text-gray-400 p-2 text-nowrap">
                            <div>RECEIPT #</div>
                            <div>DATE/TIME</div>
                            <div>ITEMS</div>
                            <div>SUBTOTAL</div>
                            <div>TAX</div>
                            <div>DISCOUNT</div>
                            <div>TOTAL</div>
                            <div>STAFF</div>
                            <div>ACTIONS</div>
                        </div>

                        <div className="grid grid-cols-9 w-full gap-2 p-2 text-nowrap">
                            <div>24300264</div>
                            <div>19 Apr 20:56</div>
                            <div>1 items</div>
                            <div>฿20.00</div>
                            <div>฿1.40</div>
                            <div>-</div>
                            <div>฿21.40</div>
                            <div>admin</div>
                            <div>View</div>
                        </div>

                        <div className="grid grid-cols-9 w-full gap-2 p-2 text-nowrap">
                            <div>24300264</div>
                            <div>19 Apr 20:56</div>
                            <div>1 items</div>
                            <div>฿20.00</div>
                            <div>฿1.40</div>
                            <div>-</div>
                            <div>฿21.40</div>
                            <div>admin</div>
                            <div>View</div>
                        </div>

                        <div className="grid grid-cols-9 w-full gap-2 p-2 text-nowrap">
                            <div>24300264</div>
                            <div>19 Apr 20:56</div>
                            <div>1 items</div>
                            <div>฿20.00</div>
                            <div>฿1.40</div>
                            <div>-</div>
                            <div>฿21.40</div>
                            <div>admin</div>
                            <div>View</div>
                        </div>

                        <div className="grid grid-cols-9 w-full gap-2 p-2 text-nowrap">
                            <div>24300264</div>
                            <div>19 Apr 20:56</div>
                            <div>1 items</div>
                            <div>฿20.00</div>
                            <div>฿1.40</div>
                            <div>-</div>
                            <div>฿21.40</div>
                            <div>admin</div>
                            <div>View</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SalesHistory