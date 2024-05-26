import DonutChart from "./DonutChart";

function CategoryExpensesCard() {
  return (
    <div className="h-3/12 mx-6 mt-9">
      <div className="border-1 rounded-xl border px-7 py-4 shadow-lg">
        <div className="flex justify-between">
          <div className="w-40">
            <p className="whitespace-nowrap text-center font-bold">
              Gastos por categoria
            </p>
            <DonutChart data={[100, 50, 200]} />
          </div>
          <div className="mb-3 flex flex-col justify-end gap-2 text-sm">
            <p>
              <span className="mr-2 inline-block h-3 w-3 border border-gray-500 bg-amber-700"></span>
              Moradia
            </p>
            <p>
              <span className="mr-2 inline-block h-3 w-3 border border-gray-500 bg-yellow-300"></span>
              Alimentação
            </p>
            <p>
              <span className="mr-2 inline-block h-3 w-3 border border-gray-500 bg-cyan-300"></span>
              Lazer
            </p>
            <p>
              <span className="mr-2 inline-block h-3 w-3 border border-gray-500 bg-gray-400"></span>
              Transporte
            </p>
            <p>
              <span className="mr-2 inline-block h-3 w-3 border border-gray-500 bg-violet-400"></span>
              Vestuário
            </p>
          </div>
        </div>
        <p className="text-right text-xs text-gray-400">Listar todos...</p>
      </div>
    </div>
  );
}

export default CategoryExpensesCard;
