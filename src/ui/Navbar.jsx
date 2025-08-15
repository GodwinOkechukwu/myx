// import {
//   Home,
//   Building,
//   Users,
//   FileText,
//   Calendar,
//   Search,
//   Bell,
//   Menu,
//   X,
//   Star,
//   Calculator,
// } from "lucide-react";
// import { useState } from "react";

// const Navbar = ({ onClick }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <>
//       {/* top items */}
//       <div className="w-full h-[100px] flex justify-between bg-black">
//         <div className="text-white flex items-center ml-3">
//           <Star size={30} />
//           <h2 className="text-4xl ml-2">myxellia</h2>
//         </div>
//         <div className="flex text-white gap-6 items-center mr-3">
//           <Bell size={30} />
//           <FileText size={30} />
//           {/* Budget button */}
//           <button
//             onClick={onClick}
//             className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
//             <Calculator size={28} />
//           </button>
//           <Calendar size={30} /> calender
//         </div>
//       </div>
//       <header className="bg-white border-b border-gray-200">
//         <div className="px-4 py-4">
//           <nav className="flex items-center justify-between">
//             {/* Left Side */}
//             <div className="flex items-center gap-4">
//               <button
//                 className="md:hidden p-2 rounded-md hover:bg-gray-100"
//                 onClick={() => setMenuOpen(!menuOpen)}>
//                 {menuOpen ? <X /> : <Menu />}
//               </button>

//               <div className="hidden md:flex items-center space-x-10">
//                 <NavItem icon={<Home />} label="Dashboard" active />
//                 <NavItem icon={<Calendar />} label="Listings" />
//                 <NavItem icon={<Users />} label="Users" />
//                 <NavItem icon={<Building />} label="Request" />
//                 <NavItem icon={<FileText />} label="Applications" />
//               </div>
//             </div>

//             {/* Search */}
//             <div className="relative w-full max-w-xs">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
//               <input
//                 type="text"
//                 placeholder="Search listings, users here..."
//                 className="bg-gray-100 text-gray-900 pl-10 pr-4 py-2 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </nav>

//           {menuOpen && (
//             <div className="mt-4 space-y-2 md:hidden">
//               <NavItem icon={<Home />} label="Dashboard" active mobile />
//               <NavItem icon={<Calendar />} label="Listings" mobile />
//               <NavItem icon={<Users />} label="Users" mobile />
//               <NavItem icon={<Building />} label="Request" mobile />
//               <NavItem icon={<FileText />} label="Applications" mobile />
//             </div>
//           )}
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
// // helper component
// const NavItem = ({ icon, label, active, mobile }) => (
//   <div
//     className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
//       active ? "bg-gray-100 text-gray-900" : "text-gray-600"
//     } ${mobile ? "w-full" : ""}`}>
//     {icon}
//     <span className="text-sm font-medium">{label}</span>
//   </div>
// );

import {
  Home,
  Building,
  Users,
  FileText,
  Calendar as CalendarIcon,
  Search,
  Bell,
  Menu,
  X,
  Star,
  Calculator,
} from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar"; // date picker
import "react-calendar/dist/Calendar.css"; // default styling

const Navbar = ({ onClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <>
      {/* Top items */}
      <div className="w-full h-[100px] flex justify-between bg-black relative">
        <div className="text-white flex items-center ml-3">
          <Star size={30} />
          <h2 className="text-4xl ml-2">myxellia</h2>
        </div>
        <div className="flex text-white gap-6 items-center mr-3">
          <Bell size={30} />
          <FileText size={30} />
          {/* Budget button */}
          <button
            onClick={onClick}
            className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
            <Calculator size={28} />
          </button>

          {/* Calendar Button */}
          <div className="relative">
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
              <CalendarIcon size={28} />
            </button>

            {showCalendar && (
              //   <div className="absolute right-0 mt-2 z-50 bg-white shadow-lg rounded-lg p-2">
              //     <Calendar
              //       onChange={setDate}
              //       value={date}
              //       calendarType="gregory"
              //     />
              //   </div>
              <div className="fixed top-0 right-0 h-full w-[320px] bg-black text-white shadow-lg z-50 p-4 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Calendar</h3>
                  <button onClick={() => setShowCalendar(false)}>
                    <X size={24} />
                  </button>
                </div>
                <div className="custom-calendar">
                  <Calendar
                    onChange={setDate}
                    value={date}
                    calendarType="gregory"
                  />
                </div>
              </div>
            )}
          </div>
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
                <NavItem icon={<CalendarIcon />} label="Listings" />
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
              <NavItem icon={<CalendarIcon />} label="Listings" mobile />
              <NavItem icon={<Users />} label="Users" mobile />
              <NavItem icon={<Building />} label="Request" mobile />
              <NavItem icon={<FileText />} label="Applications" mobile />
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;

// helper component
const NavItem = ({ icon, label, active, mobile }) => (
  <div
    className={`flex items-center space-x-2 px-3 py-2 rounded-lg ${
      active ? "bg-gray-100 text-gray-900" : "text-gray-600"
    } ${mobile ? "w-full" : ""}`}>
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);
