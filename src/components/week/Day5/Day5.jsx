import { useWetherContext } from "../../../contexts/wetherContext"
import '../../../App.css'

function Friday() {

   const { weth, daysWeek, weatherHandler, dayWeater } = useWetherContext()

    const submitHandlerOk = () => {
        weatherHandler(4)
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
                                        daysWeek.day5
                                        : 'nothing'
                                }
                            </div>
                            <div>
                                {
                                    weth[0] ?
                                        < img alt='hoba!' className='icon' src={
                                            `http://openweathermap.org/img/wn/${weth[0].list[36].weather[0].icon}@2x.png`}></img>
                                        : 'nothing'
                                }
                            </div>
                            <div className='tempButton'>
                                {
                                    dayWeater ?
                                        <p>{Math.floor(dayWeater[4][4].main.temp - 273)}&deg;</p>
                                        : ''

                                }
                                {
                                    dayWeater ?
                                        <p>{Math.floor(dayWeater[4][7].main.temp - 273)}&deg;</p>
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

export default Friday