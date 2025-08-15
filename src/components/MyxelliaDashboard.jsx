import { useState } from "react";
import Navbar from "../ui/Navbar";
import Main from "../ui/Main";
import BudgetModal from "../ui/BudgetModal";

export default function MyxelliaDashboard() {
  const [budgetOpen, setBudgetOpen] = useState(false); // modal state

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <Navbar onClick={() => setBudgetOpen(true)} />
      {/* Main Content */}
      <Main />
      {/* Budget Modal */}
      {budgetOpen && <BudgetModal onClick={() => setBudgetOpen(false)} />}
    </div>
  );
}
