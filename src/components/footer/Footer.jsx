import { Line, defaults } from 'react-chartjs-2'
import { useWetherContext } from '../../contexts/wetherContext'

//defaults.global.tooltips.enabled = false
//defaults.global.legend.position = 'bottom'

function Footer() {
    console.log('render Footer');
    const { weth, dayTemp, dayWeater, data, daysWeek, getClosestDays, days } = useWetherContext()

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
        <div className="d-flex" style={{ marginTop: 20 }}>
            <div className="d-flex flex-column align-items-center" >
                {
                    weth[0]?
                    dayWeater[data][4] ?
                        <>
                            <img height='150px' width='150px' src={`http://openweathermap.org/img/wn/${dayWeater[data][4].weather[0].icon}@2x.png`}></img>
                            <a style={{marginTop: '-2vh'}}>влажность &nbsp;{dayWeater[data][4].clouds.all}%</a>
                            <a style={{marginTop: '-2vh'}}>&nbsp;&nbsp;</a>
                            <a>температура &nbsp;{Math.floor(dayWeater[data][4].main.temp - 273)}&deg;</a>
                            <a>&nbsp;&nbsp;</a>
                        <a style={{marginTop: '-1.7vh'}}>ветер &nbsp;{dayWeater[data][4].wind.speed}&nbsp;м/с</a>
                        </>
                        : 
                        <>
                        <img height='150px' width='150px' src={`http://openweathermap.org/img/wn/${dayWeater[data][dayWeater[data].length - 1].weather[0].icon}@2x.png`}></img>
                        <a style={{marginTop: '-2vh'}}>влажность &nbsp;{dayWeater[data][dayWeater[data].length - 1].clouds.all}%</a>
                        <a style={{marginTop: '-2vh'}}>&nbsp;&nbsp;</a>
                        <a>температура &nbsp;{Math.floor(dayWeater[data][dayWeater[data].length - 1].main.temp - 273)}&deg;</a>
                        <a>&nbsp;&nbsp;</a>
                        <a style={{marginTop: '-1.7vh'}}>ветер &nbsp;{dayWeater[data][dayWeater[data].length - 1].wind.speed}&nbsp;м/с</a>
                    </>
                        : <a>пусто</a>
                }
            </div>

            <div className="d-flex justify-content-center">
                <div style={{ height: 200, width: 550, position: 'relative' }}>
                    <Line data={bigData} height={200} width={50} options={{ maintainAspectRatio: false }} />
                </div>
            </div>

        </div>
        </>
    )
}


export default Footer