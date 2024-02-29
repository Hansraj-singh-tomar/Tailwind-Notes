// build any layout using tailwind sm, md, lg and grid

export default function Layout() {
    return (

        // For Equal Section
        // <div className="m-4 grid gap-4 sm:grid-cols-3">
        //     <div className="min-h-[100px] rounded-lg shadow bg-orange-500"></div>
        //     <div className="min-h-[100px] rounded-lg shadow bg-teal-500"></div>
        //     <div className="min-h-[100px] rounded-lg shadow bg-red-500"></div>
        // </div>

        // For non equal section
        // <div className="m-4 grid gap-4 grid-cols-2 sm:grid-cols-12">
        //     <div className="min-h-[100px] rounded-lg shadow bg-orange-500 sm:col-span-2"></div>
        //     <div className="min-h-[100px] rounded-lg shadow bg-teal-500 sm:col-span-10"></div>
        // </div>

        // how to hide left and right part like tailwind webside
        <div className="m-4 grid gap-4 sm:grid-cols-12">
            <div className="min-h-[100px] rounded-lg shadow bg-orange-500 sm:col-span-2 sm:block hidden"></div>
            <div className="min-h-[100px] rounded-lg shadow bg-teal-500 sm:col-span-8"></div>
            <div className="min-h-[100px] rounded-lg shadow bg-purple-500 sm:col-span-2 sm:block hidden"></div>
        </div>

    )
}

