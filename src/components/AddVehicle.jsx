import React from 'react'
import { useState } from 'react'

//import Vehicles from '../Config/Vehicles'

export default function AddVehicle(props) {
    
const [name, setname] = useState("");
const [vname, setvname] = useState("");
const [number, setnumber] = useState("");
const [image, setimage] = useState("https://cars.tatamotors.com/images/performance-new.jpg");    
const [checkout, setcheckout] = useState("")
const submit=(e)=>{
    e.preventDefault(); 
   
    const date = new Date();

 

    var current_time = date.getHours()+":"+date.getMinutes();
    
    //console.log(currentDate); // "17-6-2022"
    let data = { 
         
     name:vname,
     owner:name,
     number:number,
     checkIn:`${current_time}`,
     CheckOut:checkout,
     image:image
    
}
props.data.push(data);
console.log(data);
props.setModal(false)
    }
    return (
        <div>

            <div
                className="relative z-10"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            >
               
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <form className="w-full max-w-lg" onSubmit={submit}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
    Vehicle Name*
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="Jane"
        onChange={(e)=>setvname(e.target.value)}
        required
      />
    
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        Owner Name*
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-last-name"
        type="text"
        placeholder="Doe"
        onChange={(e)=>setname(e.target.value)}
        required
      />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
       Number*
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-password"
        type="text"
        placeholder="XX-AX-1111"
        onChange={(e)=>setnumber(e.target.value)}
        required
      />
    
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
     Check Out*
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-password"
        type="time"
        placeholder="https://www.mercedes-benz.com/en/vehicles"
        onChange={(e)=>setcheckout(e.target.value)}
        required
      />
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-password"
      >
      Image url
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id="grid-password"
        type="text"
        placeholder="https://www.mercedes-benz.com/en/vehicles"
        onChange={(e)=>setimage(e.target.value)}
      />
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     
      
      
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      
    </div>
  </div>
<br />
  <button type="submit" class="btn   bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded">
Add Vehicle
</button>
<button type="button" class="btn   float-right  bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"

onClick={()=>{props.setModal(false)}}
>
Close
</button>
</form>

                            </div>
                        </div>
                    </div>
                </div>
                <div />

</div>
</div>
                )
}
