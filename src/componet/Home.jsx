import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Hero from './Hero'
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  );
}

// business
// entertainment
// general
// health
// science
// sports
// technology
