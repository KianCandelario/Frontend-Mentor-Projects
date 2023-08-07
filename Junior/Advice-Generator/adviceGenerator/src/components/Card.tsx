import Contents from './Contents.tsx';

function Card() {
    return (
        <>
            <div className="w-[90%] h-[48.5%] mb-14 bg-dark-grayish-blue rounded-xl drop-shadow-2xl sm:w-[70%] xmd:w-[60%] xl:w-[35%] xl:h-[43%]">
                <Contents />
            </div>
        </>
    );
}

export default Card;