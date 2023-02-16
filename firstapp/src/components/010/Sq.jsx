import DelButton from "./Buttons/DelButton";
import CloneButton from "./Buttons/CloneButton";

function Sq({s, i, setSq}) {

    return (

        <div className="sq" style={{
            backgroundColor:s.color + '70',
            borderColor: s.color,
            // transform: i % 2 ? 'rotate(2deg)' : 'rotate(-2deg)'
            }}>
                <DelButton classes="red small" sq={s} setSq={setSq} />
                <CloneButton classes="small" sq={s} setSq={setSq} />
                {i}
        </div>
    )
}

export default Sq;