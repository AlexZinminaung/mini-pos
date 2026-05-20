import BarChart from "../components/BarChart";
import { DoughnutChart } from "../components/DoughnutChart";
import { VerticalLineChart } from "../components/VerticalLineChart";


const Report = () => {

    return (
        <section className="h-full overflow-y-auto pb-16">
            <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold">Reports & Analytics</span>
                        <span className=" text-gray-400">Business insights and performance</span>
                    </div>
                    <button className="text-sm mini-component border rounded-md px-2">Print Report</button>

                </div>

                {/* Data overview */}
                <div className="flex gap-4 flex-wrap">
                    <div className="component p-4 flex-1 rounded-md flex flex-col">
                        <span className="text-sm text-gray-400">All-Time Revenue</span>
                        <span className="text-2xl text-teal-500 font-bold">$36,662.48</span>
                        <span className="text-xs text-gray-500">158 transactions</span>
                    </div>

                    <div className="component p-4 flex-1 rounded-md flex flex-col">
                        <span className="text-sm text-gray-400">Est. Profit</span>
                        <span className="text-2xl font-bold">$14,448.48</span>
                        <span className="text-xs text-gray-500">After cost</span>
                    </div>

                    <div className="component p-4 flex-1 rounded-md flex flex-col">
                        <span className="text-sm text-gray-400">Today</span>
                        <span className="text-2xl font-bold">฿0.00</span>
                    </div>

                    <div className="component p-4 flex-1 rounded-md flex flex-col">
                        <span className="text-sm text-gray-400">This Month</span>
                        <span className="text-2xl font-bold">฿20,678.82</span>
                    </div>
                </div>

                {/* Data analysis container */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="col-span-2 sm:col-span-1 component rounded-md">
                        <span className="mini-component block p-4 w-full">Daily Revenue (Last 7 Days)</span>
                        <VerticalLineChart/>
                    </div>

                    <div className="col-span-2 sm:col-span-1 component rounded-md">
                        <span className="mini-component block p-4 w-full">Top Selling Products</span>
                        <DoughnutChart/>
                    </div>

                    <div className=" col-span-2 component rounded-md">
                        <span className="mini-component block p-4 w-full">Top Selling Products</span>
                        <BarChart/>
                    </div>


                </div>
            </div>
        </section>
    )
}


export default Report;