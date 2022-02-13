import PropTypes from 'prop-types';
import '../styles/variables.css';
import '../styles/components/widget.css';
import Dots from '../../images/icon-ellipsis.svg';

function Widget({ title, current, previous, image, backgroundColor }) {
    const style = {
        fontFamily: '"Rubik", sans-serif',
        fontWeight: 400,
        fontSize: "1.5rem",
        margin: "0",
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
                <div className="current">
                    <p>{current}hrs</p>
                </div>
                <div className="previous">
                    <p>Last week - {previous}hrs</p>
                </div>
            </section>
        </div>
    )
}


export default Widget
