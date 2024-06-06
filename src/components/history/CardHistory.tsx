import { useFinancesStore } from "../../context/FinancesStore";
import CardAccount from "./CardAccount";

function CardHistory() {

    const {accounts} = useFinancesStore();

    return (
        <section className="
            pb-[65px]
        " >
            <h3 className="
                font-bold	
                text-[22px]
                mx-6 
                mt-9
                mb-4
            " >
                Histórico
            </h3>
            <div className="
                flex
                flex-col
                divide-y
            " >
                {accounts.map(( acc ) => <CardAccount account={acc} />)}
            </div>
        </section>
    )
}

export default CardHistory;