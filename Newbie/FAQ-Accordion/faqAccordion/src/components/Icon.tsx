function Icon() {
    return(
        <>
            <div className="w-3/5 h-3/5 absolute left-[20%] bottom-[44%]">
                <div className="relative h-full w-full flex justify-center items-center">
                    <div className="z-10 h-60 w-60 absolute">
                        <img src="./assets/icons/illustration-woman-online-mobile.svg" />
                    </div>
                    <div className="z-0 h-60 w-60 absolute top-[48%]">
                        <img src="./assets/icons/bg-pattern-mobile.svg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Icon;