import React, { useContext } from 'react';
import Button from './Button';
import { ButtonContext } from '../contexts/ButtonClickContext';
import '../styles/variables.css';
import '../styles/components/card.css';

function Card({ title, textColor = "white", profilePic }) {

    const buttonContext = useContext(ButtonContext);

    const style = {
        color: textColor,
        fontFamily: '"Rubik", sans-serif',
        fontWeight: 300,
        fontSize: "3rem",
        columns: 2,
        marginTop: "0.25rem",
        width: "12rem",

    }

    const ButtonTitles = ['Daily', 'Weekly', 'Monthly'];

    return (
        <div className='card'>
            <div className="user_info">
                <div className="user_info__avatar">
                    <img src={profilePic} alt="avatar" />
                </div>
                <div className="user_info__name">
                    <span>Report for</span>
                    <h2 style={style}>{title}</h2>
                </div>
            </div>
            <div className="times">
                {ButtonTitles.map((button, index) => (
                    <Button
                        key={index}
                        onClick={() => buttonContext.setClickedId(index)}
                        label={button}
                        color={index === buttonContext.clickedId ? "white" : "var(--desaturatedBlue)"}
                    />
                ))}
            </div>
        </div>
    )
}


export default Card
