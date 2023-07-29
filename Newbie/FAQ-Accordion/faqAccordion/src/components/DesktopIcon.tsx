function DesktopIcon() {
    return(
        <>
            <div className='relative h-auto w-[22rem] top-[19%] left-[-18%] xlg:w-[24rem] xlg:top-[14%] axl:w-[25.4rem] axl:top-[12%] xl:w-[30rem] xl:left-[-20%]'>
                <img src="../assets/icons/illustration-woman-online-desktop.svg" />
            </div>
            
            <div className='absolute top-[19rem] left-[5.7rem] w-32 h-auto drop-shadow-xl xlg:left-[5.8rem] xlg:top-[18.5rem] xlg:w-36 axl:left-[6.7rem] axl:top-[18.6rem] xl:top-[20.7rem] xl:left-[8.5rem] xl:w-44'>
                <img src="../assets/icons/illustration-box-desktop.svg" />
            </div>
        </>
    );
}

export default DesktopIcon;