import DelButton from "./Buttons/DelButton";
import CloneButton from "./Buttons/CloneButton";
import SpinButton from "./Buttons/SpinButton";

function Sq({s, setSq}) {

    return (

        <div className={'sq' + (s.spin ? ' spin' : '')} style={{
            backgroundColor: s.color + '70',
            borderColor: s.color,
            // transform: i % 2 ? 'rotate(2deg)' : 'rotate(-2deg)'
            }}>
                <div className={s.spin ? 'spin-back' : ''}>
                <DelButton classes="red small" sq={s} setSq={setSq} />
                <CloneButton classes="small" sq={s} setSq={setSq} />
                <SpinButton classes="small" sq={s} setSq={setSq} />
                {s.number}
                </div>
        </div>
    )
}

export default Sq;