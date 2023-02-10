import rand from "../../Functions/rand";
import ShowName from "./ShowName";

function Animal({color, animalName, h1Class}) {
    const fontFamily = 'monospace';
    return (
        <h1 className={h1Class} style={{
            color,
            backgroundColor: h1Class,
            padding: '8px 30px',
            fontSize: rand(20, 50) + 'px',
            letterSpacing: rand(0, 1) ? '5px' : null,
            fontFamily
          }}><ShowName animalName={animalName} /> No: {
  
            rand(11, 15)
            
        }</h1>
    )
}
export default Animal;