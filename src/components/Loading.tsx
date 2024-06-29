import { ThreeCircles } from "react-loader-spinner";

function Loading() {
    return (
        <main className="
            flex
            items-center
            justify-center
            w-[100%]
            h-[100%]
        ">
            <ThreeCircles
                height={100}
                width={100}
                color="#31A063"
            />
        </main>
    )
}

export default Loading;