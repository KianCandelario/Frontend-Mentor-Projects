function Card() {
    return (
        <>
            <div className="z-10 h-[19rem] w-[85%] bg-white absolute bottom-[-13rem] left-0 right-0 ml-auto mr-auto rounded-xl p-5">
                <div className="flex flex-col items-center">
                    <div className="text-dark-gray font-rubik font-bold tracking-widest text-xs mb-2">
                        <h4>IP ADDRESS</h4>
                    </div>
                    <div className="font-rubik text-vdark-gray font-medium text-lg mb-5">
                        <h2>192.212.174.101</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-dark-gray font-rubik font-bold tracking-widest text-xs mb-2">
                        <h4>LOCATION</h4>
                    </div>
                    <div className="font-rubik text-vdark-gray font-medium text-lg mb-5">
                        <h2>Brooklyn, NY 10001</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-dark-gray font-rubik font-bold tracking-widest text-xs mb-2">
                        <h4>TIMEZONE</h4>
                    </div>
                    <div className="font-rubik text-vdark-gray font-medium text-lg mb-5">
                        <h2>UTC-05:00</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-dark-gray font-rubik font-bold tracking-widest text-xs mb-2">
                        <h4>ISP</h4>
                    </div>
                    <div className="font-rubik text-vdark-gray font-medium text-lg">
                        <h2>SpaceX Starlink</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;