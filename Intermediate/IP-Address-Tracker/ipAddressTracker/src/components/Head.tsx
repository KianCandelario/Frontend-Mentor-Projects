function Head() {
    return(
        <>
            <div style={{
                backgroundImage: 'url(../../src/assets/images/pattern-bg-mobile.png)'
            }} className="h-full w-full flex flex-col items-center">
                <div className="font-rubik font-bold text-white text-2xl my-7">
                    <h1>IP Address Tracker</h1>
                </div>
                <div className="w-full h-full flex flex-col items-center">
                    <div className="h-11 w-[85%] flex font-rubik">
                        <input className="h-full w-[85%] rounded-l-xl px-5 py-2" type="text" />
                        <button className="flex justify-center items-center h-full w-[15%] rounded-r-xl bg-black px-4 py-2">
                            <img src="../../src/assets/icons/icon-arrow.svg" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Head;