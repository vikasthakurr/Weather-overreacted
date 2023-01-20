import React from 'react';
import {
   UilArrowUp,
   UilArrowDown,
   UilTemperature,
   UilTear,
   UilWind,
   UilSun,
   UilSunset
} from '@iconscout/react-unicons';

function TempDetails() {
   return (
      <div>
         <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>Clear</p>
         </div>

         <div className="flex flex-row items-center justify-between py-3 text-white">
            <img src="https://openweathermap.org/img/wn/01d@2x.png" className='w-20' />
            <p className='text-5xl'>34°</p>
            <div className="flex flex-col space-y-2">
               <div className="flex items-center justify-start text-sm font-light">
                  <UilTemperature size={16} className='mr-1' />Real feel:
                  <span className='ml-1 font-medium'>32°</span>
               </div>



               <div className="flex items-center justify-start text-sm font-light">
                  <UilTear size={16} className='mr-1' />Humidity:
                  <span className='ml-1 font-medium'>70%</span>
               </div>



               <div className="flex items-center justify-start text-sm font-light">
                  <UilWind size={16} className='mr-1' />Wind:
                  <span className='ml-1 font-medium'>5 km/h</span>
               </div>

            </div>
         </div>

          <div className="flex flex-row items-center justify-center py-3 space-x-2 text-sm text-white ">
         <UilSun />
         <p className="font-light">
            Rise: <span className='ml-1 font-medium'>06:45 AM</span>
         </p>
         <p className="font-light">|</p>

            <UilSunset />
            <p className="font-light">
               Set: <span className='ml-1 font-medium'>06:17 PM</span>
            </p>
            <p className="font-light">|</p>

            <UilArrowUp />
            <p className="font-light">
               High: <span className='ml-1 font-medium'>38° </span>
            </p>
            <p className="font-light">|</p>

            <UilArrowDown />
            <p className="font-light">
               Low: <span className='ml-1 font-medium'>22°</span>
            </p>
         </div>
      </div>
   )
}

export default TempDetails;