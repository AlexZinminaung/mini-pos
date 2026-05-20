
const User = () => {

    return (
        <section className="h-full overflow-y-auto pb-16">
            <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">User Management</span>
                        <span className="text-sm text-gray-400">Manage staff accounts</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="bg-teal-400 text-black rounded-md p-1 text-sm">+ Add Product</button>
                    </div>
                </div>

                {/* Record / History */}
                <div className="overflow-auto">
                    <div className="text-sm component rounded-md flex flex-col gap-2  min-w-150 min-h-screen">
                        <div className="flex justify-between items-center mini-component p-2 border">
                            <span>Stock Overview</span>
                            <input type="text" placeholder="Search products.." className="p-2"/>
                        </div>

                        <div className="grid grid-cols-4 w-full gap-2 p-2 text-gray-400 text-nowrap mini-component">
                            <div>User Name</div>
                            <div>Role</div>
                            <div>Created</div>
                            <div>Action</div>

                        </div>

                        <div className="grid grid-cols-4 w-full gap-2 p-2 text-nowrap">
                            <div>Admin</div>
                            <div><span className="bg-blue-400 text-black p-1 rounded-full">Admin</span></div>
                            <div>18, may, 2026</div>
                            <div><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>
                        <div className="grid grid-cols-4 w-full gap-2 p-2 text-nowrap">
                            <div>Admin</div>
                            <div><span className="bg-blue-400 text-black p-1 rounded-full">Admin</span></div>
                            <div>18, may, 2026</div>
                            <div><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>

                        <div className="grid grid-cols-4 w-full gap-2 p-2 text-nowrap">
                            <div>Admin</div>
                            <div><span className="bg-blue-400 text-black p-1 rounded-full">Admin</span></div>
                            <div>18, may, 2026</div>
                            <div><button className=" mini-component border px-4 rounded-md text-gray-400 hover:text-black dark:hover:text-white">edit</button></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default User;