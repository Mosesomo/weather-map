import axios from "axios"
import weather from './assets/weather.mp4'
import { useState } from "react"

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ec49980bfda0a34aaa296b3bcf2138c6`

  const searchLocation = (e) => {
    if (e.key === 'Enter'){
      axios.get(url).then((Response) =>{
        setData(Response.data)
        console.log(Response.data);
      })
      setLocation('')
    }
  }

  return (
    <div className="w-[100]">
      <video className="w-[100%] h-[100vh]  object-cover fixed" src={weather} autoPlay muted></video>
        <div className="absolute top-0 lg:px-40 py-10 bg-black/70  w-[100%] h-[100vh] text-white font-[italic]">
        <div className="text-center">
          <input className="bg-black/30 border-[1px] rounded-md p-1 text-center" type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Enter location" onKeyPress={searchLocation}/>
        </div>
          <div className="w-[100%] mb-3 p-10">
            <div className="w-[100%]">
              <p className="text-2xl font-bold">{data.name}</p>
            </div>
            <div className="w-[100%]">
              {data.main ? <h1 className="text-4xl font-extrabold text-blue-700">{data.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className="w-[100%]">
              {data.weather ? <p className="absolute right-[5%] top-[35%] rotate-[270deg] text-2xl font-semibold">{data.weather[0].main}</p> : null}
            </div>
          </div>
          {data.name != undefined &&
          <div className="w-[100%] justify-center items-center">
            <div className="w-[100%] absolute bottom-4 px-9 mb-11 flex justify-evenly bg-white/40">
              <div className="w-[100%]">
                {data.main ? <h1 className="text-blue-700 text-2xl font-semibold">{data.main.feels_like.toFixed()}°F</h1> : null}
                <p className="text-black">Feels like</p>
              </div>
              <div className="w-[100%]">
                {data.main ? <p className="text-blue-700 text-2xl font-semibold">{data.main.humidity.toFixed()}%</p> : null}
                <p className="text-black">Humidity</p>
              </div>
              <div className="w-[100%]">
                {data.wind ? <p className="text-blue-700 text-2xl font-semibold">{data.wind.speed.toFixed()}MPH</p> : null}
                <p className="text-black">Wind speed</p>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
  )
}

export default App