import { useState } from "react";
import { numberToCurrency } from "../../utils/numberToCurrency";
import Input from "../Input";
import TabButton from "../TabButton";
import { Account, useFinancesStore } from "../../context/FinancesStore";
import InputAutocomplete from "../InputAutocomplete";
import { useNavigate } from "react-router-dom";

function FormExpense() {
  const navigate = useNavigate();

  const { addAccount } = useFinancesStore();

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [isInstallment, setIsInstallment] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [value, setValue] = useState<number>(0);
  const [date, setDate] = useState<string>("");
  const [installments, setInstallments] = useState<number>(1);

  // const today = new Date();
  // const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const data: Account = {
      local: name,
      type: selectedTab == 0 ? "expense" : "income",
      category: category,
      date: date,
      parcel: isInstallment,
      totalParcels: installments,
      value: value,
      valueParcel: isInstallment ? value / installments : null,
      valueTotal: value,
    };

    addAccount(data, () => navigate("/home"));
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
        labelText={`Local da ${selectedTab == 0 ? "despesa" : "receita"}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputAutocomplete
        key={category.length}
        labelText={"Categoria"}
        onChange={(e) => setCategory(e)}
        suggestions={[
          "Alimentação",
          "Eletrônicos",
          "Farmácia",
          "Logística",
          "Vestimenta",
          "Lazer",
        ]}
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

      <button className="rounded-lg bg-blue-500 px-4 py-3 font-bold text-white hover:bg-blue-700">
        Enviar
      </button>
    </form>
  );
}

export default FormExpense;
