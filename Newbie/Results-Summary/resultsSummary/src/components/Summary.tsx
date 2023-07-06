function Summary() {
    return(
        <>
            <div className="font-bold mt-6 mb-9">
                <div className="flex justify-between items-center mb-4 bg-light-red/5 p-3 rounded-lg text-light-red">
                    <div className="flex">
                        <img className="mr-3" src="../../assets/icons/icon-reaction.svg" />
                        <p>Reaction</p>
                    </div>
                    <div>
                        <p className="text-dark-gray-blue">80  <span className="text-dark-gray-blue/50">/  100</span></p>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4 bg-orangey-yellow/5 p-3 rounded-lg text-orangey-yellow">
                    <div className="flex">
                        <img className="mr-3" src="../../assets/icons/icon-memory.svg" />
                        <p>Memory</p>
                    </div>
                    <div>
                        <p className="text-dark-gray-blue">92  <span className="text-dark-gray-blue/50">/  100</span></p>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4 bg-green-teal/5 p-3 rounded-lg text-green-teal">
                    <div className="flex">
                        <img className="mr-3" src="../../assets/icons/icon-verbal.svg" />
                        <p>Verbal</p>
                    </div>
                    <div>
                        <p className="text-dark-gray-blue">61  <span className="text-dark-gray-blue/50">  /100</span></p>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-cobalt-blue/5 p-3 rounded-lg text-cobalt-blue">
                    <div className="flex">
                        <img className="mr-3" src="../../assets/icons/icon-visual.svg" />
                        <p>Visual</p>
                    </div>
                    <div>
                        <p className="text-dark-gray-blue">72  <span className="text-dark-gray-blue/50">/  100</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Summary;