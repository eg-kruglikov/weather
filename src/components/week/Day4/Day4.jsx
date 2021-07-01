import { useWetherContext } from "../../../contexts/wetherContext"
import '../../../App.css'

function Thursday() {

    const { weth, daysWeek, weatherHandler, dayWeater } = useWetherContext()

    const submitHandlerOk = () => {
        weatherHandler(3)
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
                                        daysWeek.day4
                                        : 'nothing'
                                }
                            </div>
                            <div>
                                {
                                    weth[0] ?
                                        < img alt='123' className='icon' src={
                                            `http://openweathermap.org/img/wn/${weth[0].list[28].weather[0].icon}@2x.png`}></img>
                                        : 'nothing'
                                }
                            </div>
                            <div className='tempButton'>
                                {
                                    weth[0] ?
                                        <p>{Math.floor(dayWeater[3][4].main.temp - 273)}&deg;</p>
                                        : ''

                                }
                            
                                {
                                    weth[0] ?
                                        <p>{Math.floor(dayWeater[3][7].main.temp - 273)}&deg;</p>
                                        : ''
                                }

                            </div>


                        </button>

                    </>
                    : <parent>пусто</parent>
            }
        </div >
    )
}

export default Thursday