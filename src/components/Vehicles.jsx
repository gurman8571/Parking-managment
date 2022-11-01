import React from 'react'



export default function Vehicles(props) {

return (
    
  <><div className="flex flex-wrap -m-2">
  {

props.data.map((item)=>{

return(<>
<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={item.image}
        />
        <div className="flex-grow">
          <h2 className=" font-extrabold text-gray-900 title-font font-medium">
           {item.name}
          </h2>
          <p className=" font-bold text-gray-500">Number:{item.number}</p>
          <span className=" font-bold text-gray-500">Owner:{item.owner}</span>
          <br/>
          <span className=" font-bold text-gray-500 float-left">Check In:{item.checkIn}</span>

          <span className=" font-bold text-gray-500 float-right"> Check out:{item.CheckOut}</span>
        </div>
      </div>
    </div>

</>)
})



}
  
   
 
  
   
    
   
    
  </div></>
  )
}
