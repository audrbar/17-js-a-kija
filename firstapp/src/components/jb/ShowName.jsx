function ShowName({animalName, fontFamily}) {
    
    switch(animalName, fontFamily) {
        case 'Racoon': return (
            <i>R-a-c-o-o-n</i>
        );
        case 'Fox': return (
            <u style={{fontFamily}}>F-O-X</u>
        );
        default: return (
            <b>What?</b>
        )
    }
}
export default ShowName;