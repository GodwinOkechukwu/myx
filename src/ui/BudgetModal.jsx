import { X, Calculator } from "lucide-react";

const BudgetModal = ({ onClick }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-[90%] p-6 relative ">
        {/* Close button */}
        <button
          onClick={onClick}
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
            Allocate funds across income and expense lines with full visibility.
          </p>

          <h3 className="text-lg font-semibold mb-2">
            Track actuals vs budget in real time
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            See how your community is performing against plan, month by month.
          </p>

          <h3 className="text-lg font-semibold mb-2">
            Adjust figures and forecast with ease
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Edit amounts, apply percentage changes, or roll forward last year’s
            data—all in one place.
          </p>
        </article>
        <button className="bg-black text-white px-6 py-3 flex justify-center !m-auto w-[200px] rounded-full font-medium hover:bg-gray-800">
          Create Budget
        </button>
      </div>
    </div>
  );
};

export default BudgetModal;
