
interface TopBarProps {
    title: string
}

function TopBar({title}: TopBarProps) {
    return (
        <nav className="
            flex
            items-center
            px-6
            text-[18px]
            font-medium
            text-white
            h-[65px]
            w-full
            bg-verde
        ">
            {title}
        </nav>
    )
}

export default TopBar;