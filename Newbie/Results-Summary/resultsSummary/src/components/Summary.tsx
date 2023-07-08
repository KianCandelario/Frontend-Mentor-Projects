import Data from '../data/data.json';

function Summary() {
    const category = Data.map(data => {
        return data.category;
    });
    const score = Data.map(data => {
        return data.score;
    });
    const path = Data.map(data => {
        return data.icon;
    });

    return(
        <>
            <div className="font-bold mt-6 mb-9">
                <div className="flex justify-between items-center mb-4 bg-light-red/5 p-3 text-light-red">
                    <div className="flex">
                        <img className="mr-3" src={path[0]} />
                        <p>{category[0]}</p>
                    </div>
                    <div>
                        <p className="text-dark-gray-blue">{score[0]}  <span className="text-dark-gray-blue/50">/  100</span></p>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4 bg-orangey-yellow/5 p-3 rounded-lg text-orangey-yellow">
                    <div className="flex">
                        <img className="mr-3" src={path[1]} />
                        <p>{category[1]}</p>
                    </div>
                    <div>
                        <p className="text-dark-gray-blue">{score[1]}  <span className="text-dark-gray-blue/50">/  100</span></p>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4 bg-green-teal/5 p-3 rounded-lg text-green-teal">
                    <div className="flex">
                        <img className="mr-3" src={path[2]} />
                        <p>{category[2]}</p>
                    </div>
                    <div>
                        <p className="text-dark-gray-blue">{score[2]}  <span className="text-dark-gray-blue/50">  /100</span></p>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-cobalt-blue/5 p-3 rounded-lg text-cobalt-blue">
                    <div className="flex">
                        <img className="mr-3" src={path[3]} />
                        <p>{category[3]}</p>
                    </div>
                    <div>
                        <p className="text-dark-gray-blue">{score[3]}  <span className="text-dark-gray-blue/50">/  100</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Summary;