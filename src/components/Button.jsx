import PropTypes from 'prop-types';

function Button({ label, backgroundColor = "red", size = "md", onClick, color = "white" }) {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
        color,
    }
    return (
        <button style={style} onClick={onClick}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onClick: PropTypes.func,
    color: PropTypes.string,
}

export default Button
