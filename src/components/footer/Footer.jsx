import { Line } from 'react-chartjs-2'
import { useWetherContext } from '../../contexts/wetherContext'
import '../../App.css'

//defaults.global.tooltips.enabled = false
//defaults.global.legend.position = 'bottom'

function Footer() {
    console.log('render Footer');
    const { weth, dayTemp, dayWeater, data, getClosestDays, days } = useWetherContext()

    console.log('dayWeater from footer', dayWeater[data][4]);
    const bigData = {
        labels: dayTemp.time,
        datasets: [{
            label: '',
            data: dayTemp.temp,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderWidth: 1
        }]
    }


    return (
        <>
            <div>{days[getClosestDays(5)[data]]}</div>
            <div className="footerStyle" >

                {
                    weth[0] ?
                        dayWeater[data][4] ?
                            <div className="weatherDay">
                                <img alt='asd' style={{ width: '10vh' }} src={`http://openweathermap.org/img/wn/${dayWeater[data][4].weather[0].icon}@2x.png`}></img>
                                <p>влажность {dayWeater[data][4].clouds.all}%</p>
                                <p>температура {Math.floor(dayWeater[data][4].main.temp - 273)}&deg;</p>
                                <p>ветер {dayWeater[data][4].wind.speed}м/с</p>
                            </div>
                            :
                            <div className="weatherDay">
                                <img alt='asd' style={{ width: '10vh' }} src={`http://openweathermap.org/img/wn/${dayWeater[data][dayWeater[data].length - 1].weather[0].icon}@2x.png`}></img>
                                <p>влажность {dayWeater[data][dayWeater[data].length - 1].clouds.all}%</p>
                                <p>температура {Math.floor(dayWeater[data][dayWeater[data].length - 1].main.temp - 273)}&deg;</p>
                                <p>ветер {dayWeater[data][dayWeater[data].length - 1].wind.speed}м/с</p>
                            </div>
                        : <p>пусто</p>
                }


                <div className="d-flex justify-content-center">
                    <div className='charWeather'>
                        <Line data={bigData} options={{ maintainAspectRatio: false }} />
                    </div>
                </div>

            </div>
        </>
    )
}


export default Footer