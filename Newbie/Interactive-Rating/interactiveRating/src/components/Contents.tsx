import Rating from './Rating.tsx';

function Contents() {
    return(
        <>
            <div className='px-6 font-overpass flex flex-col gap-4'>
                <div>
                    <div className="bg-medium-grey/10 p-2 w-11 h-11 rounded-full flex justify-center items-center">
                        <img src="../../public/assets/icons/icon-star.svg" />
                    </div>
                </div>
                <div className="">
                    <div className="font-bold text-2xl text-white mb-2">
                        <h1>How did we do?</h1>
                    </div>
                    <div className="text-medium-grey text-sm">
                        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    </div>
                </div>
                <Rating />
                <button className='w-full py-3 bg-orange text-white text-sm rounded-full tracking-widest'>SUBMIT</button>
            </div>
        </>
    );
}

export default Contents;