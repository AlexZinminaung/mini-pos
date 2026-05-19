import { ShoppingBag } from 'lucide-react';

const PointOfSale = () => {

    return (
        <section className="flex h-full sm:flex-row flex-col overflow-hidden">
            <div className="flex-1 min-h-0 overflow-y-auto ">
                <form className="flex gap-4 p-4 mini-component">
                    <input className="w-full mini-component border rounded-md p-2" type="text" placeholder="Search Products"/>
                    <select className=" mini-component border rounded-md p-2 px-5">
                        <option>All Catagories</option>
                        <option>Snacks</option>
                        <option>Food</option>
                        <option>Dairy</option>
                        <option>Personal</option>
                        <option>Cleaning</option>
                    </select>
                </form>

                {/* Product Container */}
                <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">

                    <div className="flex flex-col max-w-52 component rounded-md">
                        <div className="block w-full h-full overflow-hidden aspect-video ">
                            <img className="w-full h-full object-cover object-center" src="https://rosepng.com/wp-content/uploads/2024/08/s11728_cold_drink_isolated_on_white_background_5b4036d2-3048-4463-9b77-21d8e91313d0_2-photoroom.png"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <span>Cold Drink</span>
                            <span className="text-teal-500">$30.0</span>
                            <span className="text-gray-400 text-sm">stock : 30</span>
                        </div>
                    </div>

                    <div className="flex flex-col max-w-52 component rounded-md">
                        <div className="block w-full h-full overflow-hidden aspect-video ">
                            <img className="w-full h-full object-cover object-center" src="https://rosepng.com/wp-content/uploads/2024/08/s11728_cold_drink_isolated_on_white_background_5b4036d2-3048-4463-9b77-21d8e91313d0_2-photoroom.png"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <span>Cold Drink</span>
                            <span className="text-teal-500">$30.0</span>
                            <span className="text-gray-400 text-sm">stock : 30</span>
                        </div>
                    </div>

                    <div className="flex flex-col max-w-52 component rounded-md">
                        <div className="block w-full h-full overflow-hidden aspect-video ">
                            <img className="w-full h-full object-cover object-center" src="https://rosepng.com/wp-content/uploads/2024/08/s11728_cold_drink_isolated_on_white_background_5b4036d2-3048-4463-9b77-21d8e91313d0_2-photoroom.png"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <span>Cold Drink</span>
                            <span className="text-teal-500">$30.0</span>
                            <span className="text-gray-400 text-sm">stock : 30</span>
                        </div>
                    </div>

                    <div className="flex flex-col max-w-52 component rounded-md">
                        <div className="block w-full h-full overflow-hidden aspect-video ">
                            <img className="w-full h-full object-cover object-center" src="https://rosepng.com/wp-content/uploads/2024/08/s11728_cold_drink_isolated_on_white_background_5b4036d2-3048-4463-9b77-21d8e91313d0_2-photoroom.png"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <span>Cold Drink</span>
                            <span className="text-teal-500">$30.0</span>
                            <span className="text-gray-400 text-sm">stock : 30</span>
                        </div>
                    </div>

                    <div className="flex flex-col max-w-52 component rounded-md">
                        <div className="block w-full h-full overflow-hidden aspect-video ">
                            <img className="w-full h-full object-cover object-center" src="https://rosepng.com/wp-content/uploads/2024/08/s11728_cold_drink_isolated_on_white_background_5b4036d2-3048-4463-9b77-21d8e91313d0_2-photoroom.png"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <span>Cold Drink</span>
                            <span className="text-teal-500">$30.0</span>
                            <span className="text-gray-400 text-sm">stock : 30</span>
                        </div>
                    </div>

                    <div className="flex flex-col max-w-52 component rounded-md">
                        <div className="block w-full h-full overflow-hidden aspect-video">
                            <img className="w-full h-full object-cover object-center" src="https://rosepng.com/wp-content/uploads/2024/08/s11728_cold_drink_isolated_on_white_background_5b4036d2-3048-4463-9b77-21d8e91313d0_2-photoroom.png"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <span>Cold Drink</span>
                            <span className="text-teal-500">$30.0</span>
                            <span className="text-gray-400 text-sm">stock : 30</span>
                        </div>
                    </div>

                    <div className="flex flex-col max-w-52 component rounded-md">
                        <div className="block w-full h-full overflow-hidden aspect-video ">
                            <img className="w-full h-full object-cover object-center" src="https://rosepng.com/wp-content/uploads/2024/08/s11728_cold_drink_isolated_on_white_background_5b4036d2-3048-4463-9b77-21d8e91313d0_2-photoroom.png"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <span>Cold Drink</span>
                            <span className="text-teal-500">$30.0</span>
                            <span className="text-gray-400 text-sm">stock : 30</span>
                        </div>
                    </div>

                    <div className="flex flex-col max-w-52 component rounded-md">
                        <div className="block w-full h-full overflow-hidden aspect-video ">
                            <img className="w-full h-full object-cover object-center" src="https://rosepng.com/wp-content/uploads/2024/08/s11728_cold_drink_isolated_on_white_background_5b4036d2-3048-4463-9b77-21d8e91313d0_2-photoroom.png"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <span>Cold Drink</span>
                            <span className="text-teal-500">$30.0</span>
                            <span className="text-gray-400 text-sm">stock : 30</span>
                        </div>
                    </div>

                    <div className="flex flex-col max-w-52 component rounded-md">
                        <div className="block w-full h-full overflow-hidden aspect-video ">
                            <img className="w-full h-full object-cover object-center" src="https://rosepng.com/wp-content/uploads/2024/08/s11728_cold_drink_isolated_on_white_background_5b4036d2-3048-4463-9b77-21d8e91313d0_2-photoroom.png"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <span>Cold Drink</span>
                            <span className="text-teal-500">$30.0</span>
                            <span className="text-gray-400 text-sm">stock : 30</span>
                        </div>
                    </div>

                    <div className="flex flex-col max-w-52 component rounded-md">
                        <div className="block w-full h-full overflow-hidden aspect-video ">
                            <img className="w-full h-full object-cover object-center" src="https://rosepng.com/wp-content/uploads/2024/08/s11728_cold_drink_isolated_on_white_background_5b4036d2-3048-4463-9b77-21d8e91313d0_2-photoroom.png"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <span>Cold Drink</span>
                            <span className="text-teal-500">$30.0</span>
                            <span className="text-gray-400 text-sm">stock : 30</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="component sm:h-full w-full sm:w-fit shrink-0 flex flex-col">
                <div className="flex justify-between gap-10 mini-component p-4">
                    <span className="text-nowrap">Current Order</span> 
                    <span className="size-5 aspect-square bg-teal-500 flex justify-center items-center rounded-full">0</span>
                </div>
                <div className='flex-1 flex flex-col p-2 overflow-auto justify-center items-center mini-component text-gray-400'>
                    <ShoppingBag size={30}/>
                    <span>Cart is Empty</span>
                    <span>Tap products to add</span>
                </div>

                <div className='p-4 pb-10 text-sm text-gray-400'>
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-between'>
                            <span>Subtotal</span>
                            <span>$0.0</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>Tax (7%)</span>
                            <span>$0.0</span>
                        </div>
                        <div className='flex justify-between mini-component pb-4'>
                            <span>Discount</span>
                            <span>$0.0</span>
                        </div>

                        <div className='flex justify-between'>
                            <span>Total</span>
                            <span>$0.0</span>
                        </div>
                        <div className='flex justify-between gap-2'>
                            <button className='border mini-component rounded-md w-full text-center'>Clear</button>
                            <span className='border mini-component rounded-md w-full text-center'>Discount</span>
                        </div>
                        <button className='p-2 bg-teal-600 text-black rounded-md w-full'>Check Out</button>
                    </div>                        
                </div>
`
            </div>

        </section>
    );
}

export default PointOfSale;