function Icon() {
    return(
        <>
            <div className="w-3/5 h-3/5 absolute left-[20%] bottom-[44%] lg:top-[25%]">
                <div className="relative h-full w-full flex justify-center items-center lg:right-[50%]">
                    <div className="z-10 h-60 w-60 absolute">
                        <picture>
                            <source
                                media="(min-width: 1024px)"
                                srcSet="./assets/icons/illustration-woman-online-desktop.svg"
                            />
                            <img src="./assets/icons/illustration-woman-online-mobile.svg" />
                        </picture>
                        <picture>
                            <source 
                                media="(min-width: 1024px)"
                                srcSet="./assets/icons/illustration-box-desktop.svg"
                            />
                            <img src="" />
                        </picture>
                    </div>
                    <div className="z-0 h-60 w-60 absolute top-[48%] lg: ">
                        <picture>
                            <source 
                                media="(min-width: 1024px)"
                                srcSet="./assets/icons/bg-pattern-desktop.svg"
                            />

                            <img src="./assets/icons/bg-pattern-mobile.svg" />
                        </picture>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Icon;