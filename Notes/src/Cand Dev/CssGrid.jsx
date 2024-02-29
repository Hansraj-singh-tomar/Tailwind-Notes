import { data } from "./data.js"
const CssGrid = () => {

    const boxStyle = "bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-center "

    return (
        <>
            {/* First layout */}
            <div>
                <h1 className="text-center font-bold text-2xl">First layout</h1>
                <div className="grid md:grid-cols-3 auto-rows-[100px] gap-4 my-5 border-2 p-6">
                    {
                        data.map((item, i) => {
                            return (
                                <div key={i} className={`${boxStyle} ${i === 3 || i === 6 ? "md:col-span-2" : ""}`}>
                                    <h2 className="text-xl text-gray-600">{item.title}</h2>
                                    <p className="font-bold text-2xl">{item.value}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Second layout */}
            <div>
                <h1 className="text-center font-bold text-2xl">Second layout</h1>
                <div className="grid md:grid-cols-4 auto-rows-[100px] gap-4 my-5 border-2 p-6">
                    {
                        data.map((item, i) => {
                            return (
                                <div key={i} className={`${boxStyle} ${i === 0 || i === 4 || i === 5 || i === 6 ? "sm:col-span-2" : ""} ${i === 2 ? "sm:row-span-2" : ""}`}>
                                    <h2 className="text-xl text-gray-600">{item.title}</h2>
                                    <p className="font-bold text-2xl">{item.value}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CssGrid