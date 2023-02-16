function ClearButton({classes, setSq}) {

    const clickHandler = () => {
        setSq([]);
    }
    
    return (
        <button className={classes} onClick={clickHandler}>clear</button>
    )
}

export default ClearButton;