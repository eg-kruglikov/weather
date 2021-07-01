import { useWetherContext } from "../../../contexts/wetherContext"
import '../../../App.css'

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

                        <button onClick={submitHandlerOk} type="button" className="buttons btn btn-light d-flex flex-column align-items-center buttonWeather">
                            <div className='dayWeek'>
                                {
                                    daysWeek.day1 ?
                                        daysWeek.day3
                                        : 'nothing'
                                }
                            </div>
                            <div>
                                {
                                    weth[0] ?
                                        <img alt='123' className='icon' src={
                                            `http://openweathermap.org/img/wn/${weth[0].list[20].weather[0].icon}@2x.png`}></img>
                                        : 'nothing'
                                }
                            </div>
                            <div className='tempButton'>
                                {
                                    weth[0] ?
                                        <p>{Math.floor(dayWeater[2][4].main.temp  - 273)}&deg;</p>
                                        : ''

                                }
                                {
                                    weth[0] ?
                                        <p>{Math.floor(dayWeater[2][7].main.temp  - 273)}&deg;</p>
                                        : ''
                                }

                            </div>


                        </button>

                    </>
                    : <p>пусто</p>
            }
        </div >
    )
}

export default Wednesday