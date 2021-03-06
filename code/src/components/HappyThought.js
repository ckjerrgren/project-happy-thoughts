import React from "react"
import moment from "moment";
import "./happyThought.css";

export const HappyThought = props => {
    const {message, hearts, createdAt, _id} = props.thought
    
    const handleClick = () => {
        fetch(`https://happy-thoughts-claudia.herokuapp.com/thoughts/${_id}/heart`, {
            method: "POST",
            body:"",
            headers: { "Content-Type": "application/json"}
        }).then(() => props.onLiked(_id))
    }
    return (
        <article className="happy-thought">
            <h3>{message}</h3>
            <span className="happy-footer">
            <p>
                <button
                    onClick={handleClick}
                    style={{ background: hearts > 0 ? "#affadad": "#f3f1f1" }} >
                    
                    <span role='img' aria-label='Heart'>
                        {"🧡  "}
                    </span>
                </button>
                x {hearts}
            </p>
    <p>{moment(createdAt).fromNow()}</p>
    </span>
        </article>
    )
}