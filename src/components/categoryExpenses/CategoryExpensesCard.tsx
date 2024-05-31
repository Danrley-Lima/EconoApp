import { useFinancesStore } from "../../context/FinancesStore";
import DonutChart from "./DonutChart";
import { colors } from "./consts";

function CategoryExpensesCard() {

  const {categories} = useFinancesStore();

  return (
    <div className="h-3/12 mx-6 mt-9">
      <div className="border-1 rounded-xl border px-7 py-4 shadow-lg">
        <div className="flex justify-between">
          <div className="w-40">
            <p className="whitespace-nowrap text-center font-bold">
              Gastos por categoria
            </p>
            <DonutChart />
          </div>
          <div className="mb-3 flex flex-col justify-end gap-2 text-sm">
            {categories.map((cg, index) => {
            return <p>
              <span className={`mr-2 inline-block h-3 w-3 border border-gray-500`} 
                style={{
                  backgroundColor: colors[index % colors.length]
                }}></span>
              {cg.name}
            </p>})}
          </div>
        </div>
        <p className="text-right text-xs text-gray-400">Listar todos...</p>
      </div>
    </div>
  );
}

export default CategoryExpensesCard;
