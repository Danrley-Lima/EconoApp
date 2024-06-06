import { useState } from "react"

type TabButtonItem = {
    text: string,
    onClick: (pressed: number) => void
}

interface TabButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    selected: number,
    items: Array<TabButtonItem>
}

function TabButton({selected, items, className}: TabButtonProps) {

    return (
        <nav
            className={`
                flex
                justify-between
                ${className}
            `}
        >
            {items.map((el, index) => <button 
            
            className={`
                flex-1
                ${index != selected && 'border-2'} 
                border-[#dbdbdb]
                border-x-[1px]
                ${index == selected && 'text-white'} 
                ${index == selected && 'font-medium'} 
                ${index == 0 && 'rounded-l-[10px]'}
                ${index == items.length - 1 && 'rounded-r-[10px]'}
                ${index == 0 && index != selected && 'border-l-2'}
                ${index == items.length - 1 && index != selected && 'border-r-2'}
                py-[6px]
                px-[10px]
                ${selected == index && 'bg-verde'}
            `}
            disabled={index == selected}
            onClick={(event) => {
                event.preventDefault();
                el.onClick(index);
            }}>
                {el.text}
            </button>)}
        </nav>
    )
}

export default TabButton;