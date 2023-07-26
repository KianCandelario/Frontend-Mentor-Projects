function MobileIcon() {
    return(
        <>
            <div className="w-3/5 h-3/5 absolute left-[20%] bottom-[44%]">
                <div className="relative h-full w-full flex justify-center items-center">
                    <div className="z-10 h-60 w-60">
                        <img src="./assets/icons/illustration-woman-online-mobile.svg" />
                    </div>
                    <div className="z-0 h-56 w-56 absolute top-[46%] sm:h-60 sm:w-60 sm:top-[47%]">
                        <img src="./assets/icons/bg-pattern-mobile.svg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileIcon;