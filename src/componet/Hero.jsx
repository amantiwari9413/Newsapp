import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
export default function Hero() {

const[ctaxt,setctext]=useState({})
const[url,seturl]=useState('https://newsapi.org/v2/top-headlines?country=in&category=general&pagesize=100&apiKey=14484fb93180464aa61cd4b398cd697e')
    function changetext(alldata){
        console.log("i am in the chagetaxt function")
        let i=0;
        setInterval(() => {
            if(i === alldata.length){
                clearInterval();
            }else{
                if(!(alldata[i].urlToImage === null)){}
                    setctext(alldata[i])
                
                i++;
            }
        }, 2000);
    }

useEffect(()=>{
    console.log("i am in the useefect")
    const fetchdata=async()=>{
        let rawdata=await fetch(url);
        rawdata=await rawdata.json();
        changetext(rawdata.articles);
    }
    fetchdata();

},[])
  return (
    <>

<section class="px-3 py-5 bg-neutral-100 lg:py-10">
    <div class="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div class="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p class="text-4xl font-bold md:text-7xl text-orange-600">Tranding News</p>
            <p class="text-4xl font-bold md:text-7xl">{ctaxt.title}</p>
            <a href={ctaxt.url} class="mt-2 text-sm md:text-lg">Read More</a>
            <Link to="/general" class="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">General news</Link>
        </div>
        <div class="order-1 lg:order-2 ">
            <img class="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] rounded-lg ..." src={ctaxt.urlToImage} alt="" />
        </div>
    </div>
</section>


    </>
  )
}
