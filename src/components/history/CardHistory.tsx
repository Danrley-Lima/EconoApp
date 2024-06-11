import { useFinancesStore } from "../../context/FinancesStore";
import CardAccount from "./CardAccount";

function CardHistory() {
  const { accounts } = useFinancesStore();

  return (
    <section
      className="
            pb-[65px]
        "
    >
      <h3
        className="
                mx-6	
                mb-4
                mt-9 
                text-[22px]
                font-bold
            "
      >
        Histórico
      </h3>
      <div
        className="
                flex
                flex-col
                divide-y
            "
      >
        {accounts.map((acc) => (
          <CardAccount account={acc} key={acc.id} />
        ))}
      </div>
    </section>
  );
}

export default CardHistory;
