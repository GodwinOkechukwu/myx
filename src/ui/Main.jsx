import { Home, User } from "lucide-react";
import img1 from "../assets/myx1.png";
import img2 from "../assets/myx2.png";
import img3 from "../assets/myx3.png";

const Main = () => {
  return (
    <main className="p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          Welcome, Ahmed
        </h1>
      </div>

      {/* Sales + Listings */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Sales Overview
              </h2>
              <p className="text-gray-500 text-sm">
                Showing overview Jan 2022 - Sep 2022
              </p>
            </div>
            <div className="flex flex-col md:items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-full text-gray-900">
                View Transactions
              </button>
              <div className="flex space-x-2">
                <FilterButton label="1 Week" />
                <FilterButton label="1 Month" />
                <FilterButton label="1 Year" active />
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="overflow-x-auto flex flex-col md:flex-row">
            <div className="flex items-end space-x-3 h-64 px-4 min-w-[600px]">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
              ].map((month) => (
                <div key={month} className="flex flex-col items-center">
                  <div className="flex items-end space-x-1 mb-2">
                    <div className="bg-blue-500 w-2 h-20 rounded-t-sm"></div>
                    <div className="bg-green-500 w-2 h-16 rounded-t-sm"></div>
                    <div className="bg-teal-500 w-2 h-24 rounded-t-sm"></div>
                    <div className="bg-red-500 w-2 h-8 rounded-t-sm"></div>
                  </div>
                  <span className="text-xs text-gray-600">{month}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <StatCard
                value="₦120,000"
                label="Total Inflow"
                color="blue"
                change="2.5%"
              />
              <StatCard
                value="₦50,000"
                label="MRR"
                color="green"
                change="2.5%"
              />
              <StatCard
                value="₦200,000"
                label="Commission Revenue"
                color="teal"
                change="6.5%"
              />
              <StatCard
                value="₦100,000"
                label="GMV"
                color="red"
                change="0.5%"
                down
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <OverviewCard
            title="Listings Overview"
            icon={<Home />}
            stats={[
              { label: "Total", value: "1.8k" },
              { label: "Active", value: "80" },
              { label: "Archived", value: "1k" },
            ]}
          />
          <OverviewCard
            title="Users Overview"
            icon={<User />}
            stats={[
              { label: "Total", value: "20.7k" },
              { label: "Riders", value: "8.5k" },
              { label: "Subscribers", value: "7.5k" },
            ]}
          />
        </div>
      </div>

      {/* Property Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
        <div className="rounded-xl h-40 sm:h-48">
          <img className="w-full" src={img1} alt="img1" />
        </div>
        <div className="rounded-xl h-40 sm:h-48">
          <img className="w-full" src={img2} alt="img2" />
        </div>
        <div className="rounded-xl h-40 sm:h-48">
          <img className="w-full" src={img3} alt="img3" />
        </div>
      </div>
    </main>
  );
};

export default Main;

/* Helper Components */

const FilterButton = ({ label, active }) => (
  <button
    className={`px-3 py-1 text-sm rounded ${
      active ? "bg-gray-100 text-gray-900" : "text-gray-600"
    }`}>
    {label}
  </button>
);

const StatCard = ({ value, label, color, change, down }) => (
  <div className="shadow-md rounded-lg p-4">
    <div className={`text-2xl font-bold text-${color}-600`}>{value}</div>
    <div className="text-sm text-gray-500 flex items-center mt-1">
      <div className={`w-2 h-2 bg-${color}-500 rounded-full mr-2`}></div>
      {label}
      <span
        className={`ml-2 text-xs ${down ? "text-red-600" : "text-green-600"}`}>
        {change}
      </span>
    </div>
  </div>
);

const OverviewCard = ({ title, stats, icon }) => (
  <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 mb-8">
    <div className="flex items-center justify-between mb-6">
      {icon}
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <a href="#" className="text-blue-600 text-sm font-medium">
        View all
      </a>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
        </div>
      ))}
    </div>
  </div>
);
