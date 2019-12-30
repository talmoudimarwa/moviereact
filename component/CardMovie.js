import React, { Component } from 'react'
import MovieRating from "../component/MovieRating";
const CardMovie =({film})=> {
    return (
      <div className="movie-card">
          <div className="movie-rating"> <MovieRating count={film.rating}/> </div>
          <div className="movie-image"><img className="imgR" src={film.image}/></div>
          <div className="movie-description">{film.title}-{film.year}</div>
      </div>
    )}
export default CardMovie
