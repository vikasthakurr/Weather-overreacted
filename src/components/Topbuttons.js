import React from 'react'

const Topbuttons = () => {
   const cities=[
      {
         id: 1,
         title: 'London'
      },
      {
         id: 1,
         title: 'New Delhi'
      },
      {
         id: 1,
         title: 'New York'
      },
      {
         id: 1,
         title: 'Tokyo'
      },
      {
         id: 1,
         title: 'Sydney'
      },
   ]
  return (
   <div className='flex items-center justify-around my-6'>
   {cities.map((city)=>(
      <button key={city.id} className='text-lg font-medium text-white'>{city.title}</button>
   ))}
   </div>
)
}

export default Topbuttons;