import { useWetherContext } from "../../../contexts/wetherContext"

function Wednesday() {


    const { weth, daysWeek, weatherHandler, dayWeater } = useWetherContext()
    const submitHandlerOk = () => {
        weatherHandler(2)
    }

    return (
        <div className="">
            {
                weth.length ?
                    <>

                        <button onClick={submitHandlerOk} type="button" className="btn btn-light mx-1 d-flex flex-column align-items-center">
                            <div>
                                {
                                    daysWeek.day1 ?
                                        daysWeek.day3
                                        : 'nothing'
                                }
                            </div>
                            <div>
                                {
                                    weth[0] ?
                                        < img height='100px' width='100px' src={
                                            `http://openweathermap.org/img/wn/${weth[0].list[20].weather[0].icon}@2x.png`}></img>
                                        : 'nothing'
                                }
                            </div>
                            <div height='1000px' width='100%' className='d-flex justify-content-between'>
                                {
                                    weth[0] ?
                                        <p>{Math.floor(dayWeater[2][4].main.temp  - 273)}&deg;</p>
                                        : ''

                                }
                                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
                                {
                                    weth[0] ?
                                        <p>{Math.floor(dayWeater[2][7].main.temp  - 273)}&deg;</p>
                                        : ''
                                }

                            </div>


                        </button>

                    </>
                    : <a>пусто</a>
            }
        </div >
    )
}

export default Wednesday