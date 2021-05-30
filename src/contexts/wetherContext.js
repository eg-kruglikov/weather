import { createContext, useState, useEffect, useContext } from "react";


const wetherContext = createContext();

console.log('RENDER WETHER CONTEXT');


const WetherContextProvider = ({ children }) => {

  const [weth, setWeth] = useState([])
  const [data, dataSet] = useState(1)

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Moscow,ru&appid=54ae457ebf8e8c57a9ecb297984ce7a4')
      .then(res => res.json())
      .then(wethFromServer => setWeth(prev => [...prev, wethFromServer]))
  }, [])

  const weatherHandler = (num) => {
    dataSet(num)
  }

  console.log('weatherData ------------------>', weth);


  const addHandler = (text) => {
    setWeth(prev => {
      return [...prev, {
        text,
      }]
    })
  }


  const dayWeater = []


  let date = new Date().getDate()

  let curDate = new Date()



  if (weth[0]) {
    
    
    for (let i = 0; i <= 4; i++) {
      curDate.setDate(curDate.getDate() + i)

      console.log(curDate.getDate());

      dayWeater.push(weth[0]?.list.filter(el => el.dt_txt.split(' ')[0].split('-')[2] == curDate.getDate()))
       curDate.setDate(curDate.getDate() - i)
    }
  }



  console.log(dayWeater);

  let dayTemp = {
    temp: [],
    time: []

  }




  if (weth[0]) {





    for (let index = 0; index < dayWeater[data].length; index++) {


      console.log('dayWeater from for', dayWeater[data][index]);
      dayTemp.time.push(dayWeater[data][index].dt_txt.split(' ')[1].split(':').splice(0, 2).join(':'))

    }


    for (let index = 0; index < dayWeater[data].length; index++) {

      dayTemp.temp.push(Math.floor(dayWeater[data][index].main.temp - 273))

    }

    // console.log(data[0]);
    // console.log('dayTemp ---->', dayTemp)

  }


  console.log('dayTemp---------------------->', dayTemp);


  let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];





  function getClosestDays(limit) {
    let s = new Date();
    s.setDate(s.getDate());
    let a = [];

    for (let i = 0; i < limit; i++) {
      a.push(s.getDay());
      s = new Date(s.setDate(
        s.getDate() + 1
      ))
    }
    return a;
  };





  const daysWeek = {
    day1: days[getClosestDays(5)[0]],
    day2: days[getClosestDays(5)[1]],
    day3: days[getClosestDays(5)[2]],
    day4: days[getClosestDays(5)[3]],
    day5: days[getClosestDays(5)[4]],
  }

  return (
    <wetherContext.Provider value={{
      weth, dayTemp, addHandler, daysWeek,
      weatherHandler, dayWeater, data, getClosestDays, days
    }}>
      {children}
    </wetherContext.Provider>
  )

}

export default WetherContextProvider

const useWetherContext = () => useContext(wetherContext)

export {
  useWetherContext
}