import Circle from './Circle.tsx';

function Result() {
    return(
        <>
            <div className="w-3/5 h-full rounded-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue flex flex-col justify-center items-center gap-1 font-HankenGrotesk">
                <div className='font-semibold text-lg text-pale-blue'>
                    <h2>Your Result</h2>
                </div>
                <Circle />
                <div className='font-semibold text-white text-3xl mb-3'>
                    <h1>Great</h1>
                </div>
                <div className='text-center px-12 font-normal text-light-lavender mb-3'>
                    <h3>You scored higher than 65% of the people who have taken these test.</h3>
                </div>
            </div>
        </>
    );
}

export default Result;