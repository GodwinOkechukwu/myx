import { useState } from "react";
import img1 from "../assets/myx1.png";
import img2 from "../assets/myx2.png";
import img3 from "../assets/myx3.png";
import {
  Home,
  Building,
  Users,
  FileText,
  Calendar,
  Search,
  Bell,
  User,
  Menu,
  X,
  Star,
  Calculator,
} from "lucide-react";

export default function MyxelliaDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false); // modal state

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <div className="w-full h-[100px] flex justify-between bg-black">
        <div className="text-white flex items-center ml-3">
          <Star size={30} />
          <h2 className="text-4xl ml-2">myxellia</h2>
        </div>
        <div className="flex text-white gap-6 items-center mr-3">
          <Bell size={30} />
          <FileText size={30} />
          {/* Budget button */}
          <button
            onClick={() => setBudgetOpen(true)}
            className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <Calculator size={28} />
          </button>
          <Calendar size={30} />
        </div>
      </div>

      <header className="bg-white border-b border-gray-200">
        <div className="px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-2 rounded-md hover:bg-gray-100"
                onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
              </button>

              <div className="hidden md:flex items-center space-x-10">
                <NavItem icon={<Home />} label="Dashboard" active />
                <NavItem icon={<Calendar />} label="Listings" />
                <NavItem icon={<Users />} label="Users" />
                <NavItem icon={<Building />} label="Request" />
                <NavItem icon={<FileText />} label="Applications" />
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search listings, users here..."
                className="bg-gray-100 text-gray-900 pl-10 pr-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </nav>

          {menuOpen && (
            <div className="mt-4 space-y-2 md:hidden">
              <NavItem icon={<Home />} label="Dashboard" active mobile />
              <NavItem icon={<Calendar />} label="Listings" mobile />
              <NavItem icon={<Users />} label="Users" mobile />
              <NavItem icon={<Building />} label="Request" mobile />
              <NavItem icon={<FileText />} label="Applications" mobile />
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
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

      {/* Budget Modal */}
      {budgetOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-[90%] p-6 relative ">
            {/* Close button */}
            <button
              onClick={() => setBudgetOpen(false)}
              className="absolute top-1 cursor-pointer right-4 text-gray-500 hover:text-gray-700">
              <X />
            </button>

            {/* Icon section */}
            <div className="bg-stone-900 w-full h-32 flex items-center justify-center rounded-md mb-6">
              <Calculator size={40} className="text-white" />
            </div>

            {/* Content */}
            <article className="w-[80%] m-auto">
              <h3 className="text-lg font-semibold mb-2">
                Set up annual budgets by account category
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Allocate funds across income and expense lines with full
                visibility.
              </p>

              <h3 className="text-lg font-semibold mb-2">
                Track actuals vs budget in real time
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                See how your community is performing against plan, month by
                month.
              </p>

              <h3 className="text-lg font-semibold mb-2">
                Adjust figures and forecast with ease
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Edit amounts, apply percentage changes, or roll forward last
                year’s data—all in one place.
              </p>
            </article>
            <button className="bg-black text-white px-6 py-3 flex justify-center !m-auto w-[200px] rounded-full font-medium hover:bg-gray-800">
              Create Budget
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* Helper Components */
const NavItem = ({ icon, label, active, mobile }) => (
  <div
    className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
      active ? "bg-gray-100 text-gray-900" : "text-gray-600"
    } ${mobile ? "w-full" : ""}`}>
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

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
