import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";


const Dashboard = () => {

    return (
        <section className="p-5 flex flex-col gap-2">
            <span className="text-2xl font-bold">Dashboard</span>
            <span className=" text-gray-400">Monday, 18 May 2026</span>

            {/* Data overview */}
            <div className="flex gap-4 flex-wrap">
                <div className="component p-4 flex-1 rounded-md flex flex-col">
                    <span className="text-sm text-gray-400">TODAY'S REVENUE</span>
                    <span className="text-2xl text-teal-500 font-bold">$845.39</span>
                    <span className="text-xs text-gray-500">4 transactions</span>
                </div>

                <div className="component p-4 flex-1 rounded-md flex flex-col">
                    <span className="text-sm text-gray-400">Month Revenue</span>
                    <span className="text-2xl font-bold">$20,090.32</span>
                    <span className="text-xs text-gray-500">89 transactions</span>
                </div>

                <div className="component p-4 flex-1 rounded-md flex flex-col">
                    <span className="text-sm text-gray-400">Total Products</span>
                    <span className="text-2xl font-bold">18</span>
                    <span className="text-xs text-gray-500">0 out of stock</span>
                </div>

                <div className="component p-4 flex-1 rounded-md flex flex-col">
                    <span className="text-sm text-gray-400">Low Stock Items</span>
                    <span className="text-2xl text-yellow-400 font-bold">2</span>
                    <span className="text-xs text-gray-500">Need restocking</span>
                </div>
            </div>

            {/* Data analysis container */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className="flex-1 component rounded-md">
                    <span className="mini-component block p-4 w-full">Daily Revenue (Last 7 Days)</span>
                    <LineChart/>
                </div>

                <div className="flex-1 component rounded-md">
                    <span className="mini-component block p-4 w-full">Top Selling Products</span>
                    <BarChart/>
                </div>
            </div>
        </section>
    )
}


export default Dashboard;