import { GoHome, GoPlusCircle, GoPerson } from 'react-icons/go'

interface BottomBarProps {
    selected: number
}

function BottomBar({selected}: BottomBarProps) {
    return (
        <nav className="
            fixed
            bottom-0
            flex
            items-center
            justify-between
            h-[65px]
            w-[100%]
            border-t-2
            bg-[#fafafc]
        " >
            <section className="
                flex
                flex-1
                flex-col
                items-center
                justify-center
            ">
                <GoHome className={`
                    mb-[2px]
                    ${selected == 0 && 'text-verde'}
                `} size={20} />
                <span className={`
                    text-[12px]
                    ${selected == 0 && 'text-verde font-bold'}
                `}>Home</span>
            </section>
            <section className="
                flex
                flex-1
                flex-col
                items-center
                justify-center
            ">
                <GoPlusCircle className={`
                    mb-[2px]
                    ${selected == 1 && 'text-verde'}
                `} size={20} />
                <span className={`
                    text-[12px]
                    ${selected == 1 && 'text-verde font-bold'}
                `}>Cadastrar</span>
            </section>
            <section className="
                flex
                flex-1
                flex-col
                items-center
                justify-center
            ">
                <GoPerson className={`
                    mb-[2px]
                    ${selected == 2 && 'text-verde'}
                `} size={20} />
                <span className={`
                    text-[12px]
                    ${selected == 2 && 'text-verde font-bold'}
                `}>Conta</span>
            </section>
        </nav>
    )
}

export default BottomBar;