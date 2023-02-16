import randColor from "../../../Functions/randColor";

function ColorButton({classes, sq, setSq}) {

    const clickHandler = () => {
        setSq(s => s.map(s => ({...s, color: randColor()})));
    }

    return (
        <button className={classes} onClick={clickHandler}>re-color</button>
    )
}

export default ColorButton;