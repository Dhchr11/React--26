import React, { useState } from 'react'

function State() {
    const [name,setname]=useState("Dhruvil Dave");
    const [age,setage]=useState("21");
    const [location,setlocation]=useState("Ahmedabad")
  return (

<div>
  <div className="card" style={{width: '15rem', height:'2rem'}}>
    <img src="ttps://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni8xMCAgMzAuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00394804-ujrgqmlwjv-portrait.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <p className="card-title"> name:{name}</p>
      <p className="card-text">Age:{age}</p>
      <p >Location:{location}</p>
    </div>
  </div>
</div>
  )
}

export default State
;