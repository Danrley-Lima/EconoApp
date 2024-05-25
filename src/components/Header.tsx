import { numberToCurrency } from "../utils/numberToCurrency";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscBell } from "react-icons/vsc";

interface HeaderProps {
  name: string;
  balance: number;
}

function Header(props: HeaderProps) {
  return (
    <div className="h-3/12 bg-gradient-to-r from-verde-gradiente-start to-verde-gradiente-end p-6 text-white">
      <div className="flex justify-between">
        <RxHamburgerMenu className="text-2xl" />
        <VscBell className="text-2xl" />
      </div>
      <p className="mt-10 text-3xl font-bold">Bem vindo, {props.name}.</p>
      <p className="mt-2 font-medium">Balanço total:</p>
      <p className="text-xl font-bold">{numberToCurrency(props.balance)}</p>
    </div>
  );
}

export default Header;
