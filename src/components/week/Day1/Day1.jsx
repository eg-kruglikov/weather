import { useWetherContext } from "../../../contexts/wetherContext"

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

                        <button type="button" onClick={submitHandlerOk} className="btn btn-light mx-1 d-flex flex-column align-items-center">
                            <div>
                                {
                                    daysWeek.day1 ?
                                        daysWeek.day1
                                        : 'nothing'
                                }
                            </div>
                            <div>
                                {
                                    weth[0] ?
                                        <img alt="asdfadf" height='100px' width='100px' src={
                                            `http://openweathermap.org/img/wn/${weth[0].list[4].weather[0].icon}@2x.png`}></img>
                                        : 'nothing'
                                }
                            </div>
                            <div height='1000px' width='100%' className='d-flex justify-content-between'>
                                {
                                    weth[0] ?
                                    dayWeater[0][4] ?
                                        <p>{Math.floor(dayWeater[0][4].main.temp - 273)}&deg;</p>
                                        : <p>{Math.floor(dayWeater[0][0].main.temp - 273)}&deg;</p>
                                        : ''

                                }
                                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
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
                    : <a>пусто</a>
            }
        </div >


    )
}

export default Monday