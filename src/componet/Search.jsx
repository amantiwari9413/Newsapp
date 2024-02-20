import React from 'react'
import {  useParams } from 'react-router-dom'
import App from '../App';
export default function Search() {
  const allparams=useParams();
  console.log(allparams.query)
  return (
    <>
       <App newstype={"everything"} squery={allparams.query}/>
    </>
  )
}
