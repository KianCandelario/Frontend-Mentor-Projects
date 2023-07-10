type Rating = {
    rating: number;
}

function Submitted(props: Rating) {
    return(
        <>
            <div>
                <div>
                    <img src="../assets/icons/illustration-thank-you.svg" />
                </div>
                <div>
                    <p>You selected {props.rating} out of 5</p>
                </div>
                <div>
                    <h1>Thank You!</h1>
                    <p>
                        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                    </p>
                </div>
            </div>
        </>
    );
}

export default Submitted;