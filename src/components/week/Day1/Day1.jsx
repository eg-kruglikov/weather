import { useWetherContext } from "../../../contexts/wetherContext"
import '../../../App.css'

function Monday() {

    const { weth, daysWeek, weatherHandler, dayWeater } = useWetherContext()

    const submitHandlerOk = () => {
        weatherHandler(0)
    }

    return (

        <div className="">
            {
                weth.length ?
                    <>

                        <button  type="button" onClick={submitHandlerOk} className="buttons btn btn-light  d-flex flex-column align-items-center buttonWeather">
                            <div className='dayWeek'>
                                {
                                    daysWeek.day1 ?
                                        daysWeek.day1
                                        : 'nothing'
                                }
                            </div>
                            <div>
                                {
                                    weth[0] ?
                                        <img alt="asdfadf" className='icon' src={
                                            `http://openweathermap.org/img/wn/${weth[0].list[4].weather[0].icon}@2x.png`}></img>
                                        : 'nothing'
                                }
                            </div>
                            <div className='tempButton'>
                                {
                                    weth[0] ?
                                        dayWeater[0][4] ?
                                            <p>{Math.floor(dayWeater[0][4].main.temp - 273)}&deg;</p>
                                            : <p>{Math.floor(dayWeater[0][0].main.temp - 273)}&deg;</p>
                                        : ''

                                }
                                {
                                    weth[0] ?
                                        dayWeater[0][7] ?
                                            <p>{Math.floor(dayWeater[0][7].main.temp - 273)}&deg;</p>
                                            : <p>{Math.floor(dayWeater[0][dayWeater[0].length - 1].main.temp - 273)}&deg;</p>
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

export default Monday