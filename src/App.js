import React from 'react';
import './App.css';
import Topbuttons from './components/Topbuttons';
import Inputs from './components/Inputs';
import TimeDate from './components/TimeDate';
import TempDetails from './components/TempDetails';
import Forcast from './components/Forcast';
import Weather from './Service/Weather';

function App() {
  const fetchWeather = async() => {
    const data= await Weather("weather",{q: "london"});
    console.log(data);
  }
  fetchWeather();



  
  return (
    <div className="max-w-screen-md px-32 py-5 mx-auto mt-4 shadow-xl bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-gray-400">
      <Topbuttons />
      <Inputs />
      
      <TimeDate />
      <TempDetails />

      <Forcast title="hourly forecast" />
      <Forcast title="daily forecast" />

    </div>
  );
}

export default App;
