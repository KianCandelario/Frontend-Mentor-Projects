function Rating() {
    return(
        <>
            <div className="text-medium-grey text-sm flex justify-between items-center my-2">
                <button className="h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white ease-out duration-300">1</button>
                <button className="h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white ease-out duration-300">2</button>
                <button className="h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white ease-out duration-300">3</button>
                <button className="h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white ease-out duration-300">4</button>
                <button className="h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white ease-out duration-300">5</button>
            </div>
        </>
    );
}

export default Rating;