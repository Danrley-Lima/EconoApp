import { GoHome, GoPlusCircle, GoPerson } from "react-icons/go";

interface BottomBarProps {
  selected: number;
}

function BottomBar({ selected }: BottomBarProps) {
  return (
    <nav
      className="
            fixed
            bottom-0
            flex
            h-[65px]
            w-[100%]
            items-center
            justify-between
            border-t-2
            bg-[#fafafc]
        "
    >
      <a
        className="
                flex
                flex-1
                cursor-pointer
                flex-col
                items-center
                justify-center
            "
        href="/home"
      >
        <GoHome
          className={`
                    mb-[2px]
                    ${selected == 0 && "text-verde"}
                `}
          size={20}
        />
        <span
          className={`
                    text-[12px]
                    ${selected == 0 && "font-bold text-verde"}
                `}
        >
          Home
        </span>
      </a>
      <a
        className="
                flex
                flex-1
                cursor-pointer
                flex-col
                items-center
                justify-center
            "
        href="/registerExpense"
      >
        <GoPlusCircle
          className={`
                    mb-[2px]
                    ${selected == 1 && "text-verde"}
                `}
          size={20}
        />
        <span
          className={`
                    text-[12px]
                    ${selected == 1 && "font-bold text-verde"}
                `}
        >
          Cadastrar
        </span>
      </a>
      <a
        className="
                flex
                flex-1
                cursor-pointer
                flex-col
                items-center
                justify-center
            "
      >
        <GoPerson
          className={`
                    mb-[2px]
                    ${selected == 2 && "text-verde"}
                `}
          size={20}
        />
        <span
          className={`
                    text-[12px]
                    ${selected == 2 && "font-bold text-verde"}
                `}
        >
          Conta
        </span>
      </a>
    </nav>
  );
}

export default BottomBar;
