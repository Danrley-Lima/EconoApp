import { useFinancesStore } from "../../context/FinancesStore";
import CardAccount from "./CardAccount";

function CardHistory() {

    const {accounts} = useFinancesStore();

    return (
        <section>
            <h3 className="
                font-bold	
                text-[22px]
                mx-6 
                mt-9
            " >
                Histórico
            </h3>
            {accounts.map(( acc ) => <CardAccount account={acc} />)}
        </section>
    )
}

export default CardHistory;