import { Account } from "../../context/FinancesStore";
import { dateToBRFormart } from "../../utils/dates";

interface CardAccountProps {
    account: Account
}

function CardAccount({account}: CardAccountProps) {
    return (
        <div className="
            mx-6 
            py-2
        ">
            <span className="
                text-[16px]
                font-medium	
            " >
                {account.local}
            </span>
            <div className="
                flex
                flex-row
                justify-between
                text-textAlternative
            ">
                <p className="
                    text-[12px]
                ">
                    {`R$ ${account.value.toFixed(2)}`}
                </p>
                <p className="
                    text-[12px]
                ">
                    {dateToBRFormart(new Date(account.date))}
                </p>
            </div>
        </div>
    )
}

export default CardAccount;