import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import React, { useCallback, useEffect, useState } from 'react'
import WeatherDetails from '@/components/weatherDetails'
import { getCurrentWeatherData } from '@/common/api'
import Link from 'next/link'








function App() {
  const [forcast,setForcast]=useState(null);
   const[city, setCity] = useState("Chandigarh");
   const [changecity,SetChangecity]=useState("");

   

 

 const onHandleClick=useCallback((city)=>{
  fetchData(city)
  setCity(city)
  SetChangecity("")
 },[changecity])
  
  
  
  
  async function fetchData(city){
    const data= await getCurrentWeatherData(city);
    
    
    setForcast(data)
    console.log(data,"line 41");
    
  }
  
  
  
  useEffect(() => {
    fetchData(city)
    
  },[city])

  if(!forcast){
    return 
  }
  
  
  
  
  
  return (
    <>
    {forcast? <> <div className="flex justify-center my-8 ">
        <input
          className="border rounded-sm mx-2 p-1 border-black"
          type="text"
          placeholder="Search City"
          value={changecity}
          onChange={(e)=>{SetChangecity(e.target.value)
          }
}
        />
         <button
          onClick={()=>{onHandleClick(changecity)
          }}
          className="mx-2 border border-black p-1"
        >
          Search
        </button> 
       
      </div>
      <WeatherDetails forcast={forcast}/></>:null}
    
      
     
    
    </>


  





  )
}

export default App;