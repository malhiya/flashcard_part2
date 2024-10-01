import React from "react";

const Card = (props) => {
    const handleTurnCard = () => {
        props.setIsTurned(!props.isTurned);
    }



    return (
        <div className={`card ${props.isTurned ? 'flipped' : ''}`} onClick={handleTurnCard}>
            <div className="front">
                <h3>{props.isTurned ? props.answer: props.question}</h3>
            </div>
            <div className="back">
                <h2>{props.isTurned ? props.question: props.answer}</h2>
            </div>
        </div>

    );
}

export default Card;