import { useState } from "react";
import { numberToCurrency } from "../../utils/numberToCurrency";
import Input from "../Input";
import TabButton from "../TabButton";

function FormExpense() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isInstallment, setIsInstallment] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [installments, setInstallments] = useState<number>(1);

  // const today = new Date();
  // const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data = {
      category: selectedTab === 0 ? "despesa" : "receita",
      name,
      value,
      date,
      isInstallment,
      installments,
      installmentsValue: isInstallment ? value / installments : value,
    };

    console.log(data);
  };

  return (
    <form
      className="
            mx-6
            mt-8
            flex
            flex-col
            gap-[20px]
        "
      onSubmit={handleSubmit}
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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        labelText="Data"
        type="date"
        // defaultValue={formattedDate}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

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

      <Input
        labelText="Valor"
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />

      {isInstallment && (
        <>
          <Input
            labelText="Número de parcelas"
            type="number"
            value={installments}
            onChange={(e) => setInstallments(Number(e.target.value))}
          />

          <span className="text-[18px] font-bold">Valor das parcelas: </span>
          <div className="rounded-[9px] bg-[#f5f5f5] px-[18px] pb-[20.25px] pt-[18px] shadow-sm">
            <span className="text-[15px]">
              {numberToCurrency(value / installments)}
            </span>
          </div>
        </>
      )}

      <button
        onClick={() => {}}
        className="rounded-lg bg-blue-500 px-4 py-3 font-bold text-white hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  );
}

export default FormExpense;
