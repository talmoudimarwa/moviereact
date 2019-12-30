import React, { Component } from 'react'

const MovieRating = ({count,onChangeRating=()=>{}})=>{
let starHtml=[]
for(let i=0;i<5;i++){
    if(i<count){
        starHtml.push(<span onClick={()=>onChangeRating(i+1)} key={i}>★</span>)
    }
    else{
        starHtml.push(<span onClick={()=>onChangeRating(i+1)} key={i}>☆</span>)
    }
}
return (
    <div>{starHtml}</div>)
}
export default MovieRating