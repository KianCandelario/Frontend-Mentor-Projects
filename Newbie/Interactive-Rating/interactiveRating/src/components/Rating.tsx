function Rating() {
    return(
        <>
            <div className="text-medium-grey text-sm flex justify-between items-center my-2">
                <button className="h-11 w-11 bg-medium-grey/20 rounded-full">1</button>
                <button className="h-11 w-11 bg-medium-grey/20 rounded-full">2</button>
                <button className="h-11 w-11 bg-medium-grey/20 rounded-full">3</button>
                <button className="h-11 w-11 bg-medium-grey/20 rounded-full">4</button>
                <button className="h-11 w-11 bg-medium-grey/20 rounded-full">5</button>
            </div>
        </>
    );
}

export default Rating;