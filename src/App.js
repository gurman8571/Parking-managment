import React from "react";
import Vehicles from "./components/Vehicles";
import vehicle from "./Config/Vehicles";
import AddVehicle from "./components/AddVehicle";
import { useEffect } from 'react'
import { useState } from 'react'



function App() {
  
  
  const [data, setdata] = useState([]);
  const [Modal, setModal] = useState(false)


  
  const getdata=()=>{
  
      setdata(vehicle);
  }



  useEffect(() => {
    getdata();
  }, [data])



  return (
    <>
{Modal && <AddVehicle setModal={setModal} data={data}/>}
  
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      Parking management system
      </h1>
      <button class="btn  px-4 mx-2 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
      onClick={()=>setModal(true)}
      >
Add New
</button>
<br />
<p>Vehciles Parked: {data.length}</p>
      </div>
      <Vehicles data={data}/>
    </div>
  </section>
    </>
  )  
}

export default App;
