type Rating = {
    rating: number;
}

function Submitted(props: Rating) {
    return(
        <>
            <div className="flex flex-col justify-center items-center font-overpass px-4">
                <div>
                    <img src="../../src/assets/icons/illustration-thank-you.svg" />
                </div>
                <div className="bg-medium-grey/20 text-orange/80 py-2 px-3 my-5 text-xs rounded-full">
                    <p>You selected {props.rating} out of 5</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-2xl mb-3 mt-3 font-bold">Thank You!</h1>
                    <p className="text-center text-sm text-light-grey px-1">
                        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                    </p>
                </div>
            </div>
        </>
    );
}

export default Submitted;