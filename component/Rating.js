import React from 'react'

const Rating=({value='',onChange=()=>{}}) =>{
    return (
       <div className="filter-name">
            <input className="filter-text"
             type="text"
             value={value} 
             onChange={(event)=>{
                onChange(event.target.value)}} 
            />
       </div>
    )
 }
export default Rating