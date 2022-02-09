import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/variables.css';
import '../styles/components/card.css';

function Card({ title, backgroundColor = "blue", textColor = "white", onClick }) {
    const style = {
        color: textColor,
        fontFamily: '"Rubik", sans-serif',
        fontWeight: 300,
        fontSize: "2rem",
        columns: 2,
        marginTop: "0.25rem",

    }
    return (
        <div className='card'>
            <div className="user_info">
                <div className="user_info__avatar">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="avatar" />
                </div>
                <div className="user_info__name">
                    <span>Report for</span>
                    <h2 style={style}>{title}</h2>
                </div>
            </div>
            <div className="times">
                <Button label="Daily" backgroundColor='transparent' color='var(--desaturatedBlue)' size="md" onClick={onClick} />
                <Button label="Weekly" backgroundColor='transparent' size="md" onClick={onClick} />
                <Button label="Monthly" backgroundColor='transparent' color='var(--desaturatedBlue)' size="md" onClick={onClick} />
            </div>
        </div>
    )
}


export default Card
