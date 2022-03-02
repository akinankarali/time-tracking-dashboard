import React, { useContext } from 'react';
import '../styles/variables.css';
import '../styles/components/widget.css';
import Dots from '../../images/icon-ellipsis.svg';
import WorkSvg from '../../images/icon-work.svg'
import PlaySvg from '../../images/icon-play.svg'
import StudySvg from '../../images/icon-study.svg'
import SocialSvg from '../../images/icon-social.svg'
import SelfcareSvg from '../../images/icon-self-care.svg'
import ExerciseSvg from '../../images/icon-exercise.svg'
import { ButtonContext } from '../contexts/ButtonClickContext';


function Widget({ title }) {
    /**
     * clicked Id: 0 = Daily, 1 = Weekly, 2 = Monthly
     */

    const buttonContext = useContext(ButtonContext);
    const style = {
        fontFamily: '"Rubik", sans-serif',
        fontWeight: 400,
        fontSize: "1.5rem",
        margin: "0",
    }
    let backgroundColor;
    let image;
    let current;
    let previous;
    // TODO: Fix this code repetition
    switch (title) {
        case "Work":
            image = WorkSvg;
            if (buttonContext.clickedId === 0) {
                current = buttonContext?.data[0]?.timeframes?.daily?.current;
                previous = buttonContext?.data[0]?.timeframes?.daily?.previous;
            }
            if (buttonContext.clickedId === 1) {
                current = buttonContext?.data[0]?.timeframes?.weekly?.current;
                previous = buttonContext?.data[0]?.timeframes?.weekly?.previous;
            }
            if (buttonContext.clickedId === 2) {
                current = buttonContext?.data[0]?.timeframes?.monthly?.current;
                previous = buttonContext?.data[0]?.timeframes?.monthly?.previous;
            }
            break;
        case "Play":
            image = PlaySvg;
            backgroundColor = "var(--softBlue)"
            if (buttonContext.clickedId === 0) {
                current = buttonContext?.data[1]?.timeframes?.daily?.current;
                previous = buttonContext?.data[1]?.timeframes?.daily?.previous;
            }
            if (buttonContext.clickedId === 1) {
                current = buttonContext?.data[1]?.timeframes?.weekly?.current;
                previous = buttonContext?.data[1]?.timeframes?.weekly?.previous;
            }
            if (buttonContext.clickedId === 2) {
                current = buttonContext?.data[1]?.timeframes?.monthly?.current;
                previous = buttonContext?.data[1]?.timeframes?.monthly?.previous;
            }
            break;
        case "Study":
            image = StudySvg;
            backgroundColor = "var(--lightRedStudy)"
            if (buttonContext.clickedId === 0) {
                current = buttonContext?.data[2]?.timeframes?.daily?.current;
                previous = buttonContext?.data[2]?.timeframes?.daily?.previous;
            }
            if (buttonContext.clickedId === 1) {
                current = buttonContext?.data[2]?.timeframes?.weekly?.current;
                previous = buttonContext?.data[2]?.timeframes?.weekly?.previous;
            }
            if (buttonContext.clickedId === 2) {
                current = buttonContext?.data[2]?.timeframes?.monthly?.current;
                previous = buttonContext?.data[2]?.timeframes?.monthly?.previous;
            }
            break;
        case "Exercise":
            image = ExerciseSvg;
            backgroundColor = "var(--limeGreen)"
            if (buttonContext.clickedId === 0) {
                current = buttonContext?.data[3]?.timeframes?.daily?.current;
                previous = buttonContext?.data[3]?.timeframes?.daily?.previous;
            }
            if (buttonContext.clickedId === 1) {
                current = buttonContext?.data[3]?.timeframes?.weekly?.current;
                previous = buttonContext?.data[3]?.timeframes?.weekly?.previous;
            }
            if (buttonContext.clickedId === 2) {
                current = buttonContext?.data[3]?.timeframes?.monthly?.current;
                previous = buttonContext?.data[3]?.timeframes?.monthly?.previous;
            }
            break;
        case "Social":
            image = SocialSvg;
            backgroundColor = "var(--violet)"
            if (buttonContext.clickedId === 0) {
                current = buttonContext?.data[4]?.timeframes?.daily?.current;
                previous = buttonContext?.data[4]?.timeframes?.daily?.previous;
            }
            if (buttonContext.clickedId === 1) {
                current = buttonContext?.data[4]?.timeframes?.weekly?.current;
                previous = buttonContext?.data[4]?.timeframes?.weekly?.previous;
            }
            if (buttonContext.clickedId === 2) {
                current = buttonContext?.data[4]?.timeframes?.monthly?.current;
                previous = buttonContext?.data[4]?.timeframes?.monthly?.previous;
            }
            break;
        case "Self Care":
            image = SelfcareSvg;
            backgroundColor = "var(--softOrange)"
            if (buttonContext.clickedId === 0) {
                current = buttonContext?.data[5]?.timeframes?.daily?.current;
                previous = buttonContext?.data[5]?.timeframes?.daily?.previous;
            }
            if (buttonContext.clickedId === 1) {
                current = buttonContext?.data[5]?.timeframes?.weekly?.current;
                previous = buttonContext?.data[5]?.timeframes?.weekly?.previous;
            }
            if (buttonContext.clickedId === 2) {
                current = buttonContext?.data[5]?.timeframes?.monthly?.current;
                previous = buttonContext?.data[5]?.timeframes?.monthly?.previous;
            }
            break;
    }
    const backgroundColorStyle = {
        backgroundColor: backgroundColor,
    }
    return (
        <div className='widget'>
            <section className='icon-part' style={backgroundColorStyle}>
                <img src={image} alt="widget-image" />
            </section>
            <section className='info'>
                <div className="title">
                    <h2 style={style}>{title}</h2>
                    <img src={Dots} alt="" />
                </div>
                <div className="timeframes">
                    <div className="current">
                        <p>{current}hrs</p>
                    </div>
                    <div className="previous">
                        <p>Last week - {previous}hrs</p>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Widget
