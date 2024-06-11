import { useState } from "react";
import { numberToCurrency } from "../../utils/numberToCurrency";
import Input from "../Input";
import TabButton from "../TabButton";

function FormExpense() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isInstallment, setIsInstallment] = useState<boolean>(false);

  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  return (
    <form
      className="
            mx-6
            mt-8
            flex
            flex-col
            gap-[20px]
        "
    >
      <TabButton
        items={[
          {
            onClick: setSelectedTab,
            text: "Despesa",
          },
          {
            onClick: setSelectedTab,
            text: "Receita",
          },
        ]}
        selected={selectedTab}
      />
      <Input
        labelText={`Nome da ${selectedTab == 0 ? "despesa" : "receita"}`}
      />
      <Input labelText="Data" type="date" defaultValue={formattedDate} />

      <label
        className="flex items-center text-[18px]
                    font-bold"
      >
        É parcelado?
        <input
          type="checkbox"
          checked={isInstallment}
          onChange={() => setIsInstallment(!isInstallment)}
          className="ml-2 h-5 w-5"
        />
      </label>

      <Input labelText="Valor" type="number" />

      {isInstallment && (
        <>
          <Input labelText="Número de parcelas" type="number" />

          <span className="text-[18px] font-bold">Valor das parcelas: </span>
          <div className="rounded-[9px] bg-[#f5f5f5] px-[18px] pb-[20.25px] pt-[18px] shadow-sm">
            <span className="text-[15px]">{numberToCurrency(200 / 2)}</span>
          </div>
        </>
      )}

      <button
        onClick={() => {
          // Cadastra a receita/despesa
        }}
        className="rounded-lg bg-blue-500 px-4 py-3 font-bold text-white hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
}

export default FormExpense;
