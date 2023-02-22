import { useEffect } from "react";

const Fenix = () => {

    console.log('Fenix function');

    useEffect(() => {
        console.log('Fenix is alive');
        return () => {
            console.log('Fenix is dead');
        }
    }, []);

  return (
    <>
        <h2>Fenix</h2>
    </>
  )
}

export default Fenix;