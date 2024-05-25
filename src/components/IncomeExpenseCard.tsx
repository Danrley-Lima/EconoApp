import { numberToCurrency } from "../utils/numberToCurrency";
import { MdArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";

interface IncomeExpenseCardProps {
  income: number;
  expense: number;
}

function IncomeExpenseCard(props: IncomeExpenseCardProps) {
  return (
    <div className="h-1/12 mx-6 mt-8">
      <div className="border-1 flex justify-between rounded-xl border px-10 py-3 shadow-lg">
        <div>
          <div className="flex items-center justify-center">
            <MdArrowUpward className="text-xl text-verde" />
            <p className="mx-auto text-sm">Receitas </p>
          </div>

          <div className="font-bold">{numberToCurrency(props.income)}</div>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <p className="mx-auto text-sm">Despesas</p>
            <MdArrowDownward className="text-xl text-vermelho" />
          </div>

          <div className="font-bold">{numberToCurrency(props.expense)}</div>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenseCard;
