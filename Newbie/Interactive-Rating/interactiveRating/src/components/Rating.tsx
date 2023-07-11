import { useState } from 'react';

function Rating() {
    const [activeIndex, setActiveIndex] = useState(0);
    return(
        <>
            <div className="text-medium-grey text-sm flex justify-between items-center my-2 font-bold">
                <button className={`h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white active:bg-orange active:text-white ease-in duration-300 ${activeIndex === 1 ? 'bg-orange text-white' : ''}`} onClick={() => setActiveIndex(1)}>1</button>
                <button className={`h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white active:bg-orange active:text-white ease-in duration-300 ${activeIndex === 2 ? 'bg-orange text-white' : ''}`} onClick={() => setActiveIndex(2)}>2</button>
                <button className={`h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white active:bg-orange active:text-white ease-in duration-300 ${activeIndex === 3 ? 'bg-orange text-white' : ''}`} onClick={() => setActiveIndex(3)}>3</button>
                <button className={`h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white active:bg-orange active:text-white ease-in duration-300 ${activeIndex === 4 ? 'bg-orange text-white' : ''}`} onClick={() => setActiveIndex(4)}>4</button>
                <button className={`h-11 w-11 bg-medium-grey/20 rounded-full hover:bg-light-grey hover:text-white active:bg-orange active:text-white ease-in duration-300 ${activeIndex === 5 ? 'bg-orange text-white' : ''}`} onClick={() => setActiveIndex(5)}>5</button>
            </div>
        </>
    );
}

export default Rating;