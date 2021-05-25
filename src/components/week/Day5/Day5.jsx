import { useWetherContext } from "../../../contexts/wetherContext"

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

                        <button onClick={submitHandlerOk} type="button" className="btn btn-light mx-1 d-flex flex-column align-items-center">
                            <div>
                                {
                                    daysWeek.day1 ?
                                        daysWeek.day5
                                        : 'nothing'
                                }
                            </div>
                            <div>
                                {
                                    weth[0] ?
                                        < img height='100px' width='100px' src={
                                            `http://openweathermap.org/img/wn/${weth[0].list[36].weather[0].icon}@2x.png`}></img>
                                        : 'nothing'
                                }
                            </div>
                            <div height='1000px' width='100%' className='d-flex justify-content-between'>
                                {
                                    dayWeater ?
                                        <p>{Math.floor(dayWeater[4][4].main.temp - 273)}&deg;</p>
                                        : ''

                                }
                                <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>
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