import rand from "../../Functions/rand";

function Animal({color, animalName}) {
    const font = 'monospace';
    return (
        <h1 style={{
            color,
            backgroundColor: 'skyblue',
            padding: '8px 30px',
            fontSize: rand(20, 50) + 'px',
            letterSpacing: rand(0, 1) ? '5px' : null,
            fontFamily: font
          }}>{animalName} No: {
  
            rand(11, 15)
            
        }</h1>
    )
}
export default Animal;