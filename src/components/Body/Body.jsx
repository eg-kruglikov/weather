import Friday from "../week/Day5/Day5";
import Monday from "../week/Day1/Day1";
import Thursday from "../week/Day4/Day4";
import Tuasday from "../week/Day2/Day2";
import Wednesday from "../week/Day3/Day3";



export function Body() {
    return (
        <>
            <div className='containerBody'>
                <Monday />
                <Tuasday />
                <Wednesday />
                <Thursday />
                <Friday />
            </div>
        </>
    )
}

export default Body