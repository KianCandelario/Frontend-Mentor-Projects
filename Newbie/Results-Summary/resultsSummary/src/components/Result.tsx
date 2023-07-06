import Circle from './Circle.tsx';

function Result() {
    return(
        <>
            <div className="w-1/2 h-full rounded-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue">
                <div>
                    <h2>Your Results</h2>
                </div>
                <Circle />
                <div>
                    <h1>Great</h1>
                </div>
                <div>
                    <h3>You scored higher than 65% of the people who have taken this test.</h3>
                </div>
            </div>
        </>
    );
}

export default Result;