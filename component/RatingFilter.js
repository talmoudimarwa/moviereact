import React from 'react'
import MovieRating from "../component/MovieRating";

const RatingFilter = ({onChange,count}) => (
    <div className="rating-filter">
       <span className="rating">Minumum rating</span>
       <span><MovieRating 
           count={count}
           onChangeRating={(newRating)=>
            {onChange(newRating)}
                          } />
       </span>
    </div>



)
export default RatingFilter