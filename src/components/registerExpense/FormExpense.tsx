import { useState } from "react";
import Input from "../Input";
import TabButton from "../TabButton";

function FormExpense() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

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
      <Input labelText="Valor" type="number" />
    </form>
  );
}

export default FormExpense;
