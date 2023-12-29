import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";

import { useState,useEffect } from "react";

const Body  =()=>{
  const [listofrestaurant,setlistofrestaurant]=useState([]);
  const[filteredrestaurant,setfilteredrestaurant]=useState([])
  const [searchtext,setsearchtext]=useState([""]);

  useEffect(()=>{
    fetchdata();
  },[]);

  const fetchdata=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );

    const json=await data.json();
    console.log("use effect");
    setlistofrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

    return listofrestaurant.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input name="search-txt" value={searchtext} onChange={(e)=>{
              setsearchtext(e.target.value);
            }}></input>
            <button name="search-btn" onClick={()=>{
              const filteredlist=listofrestaurant.filter((reslist)=> reslist.info.name.toLowerCase().includes(searchtext.toLowerCase()));
              setfilteredrestaurant(filteredlist);

            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={()=>{
            const filterlist=listofrestaurant.filter(
              (resList)=>resList.info.avgRating>4
            );
            setfilteredrestaurant(filterlist);

          }}>
            top rated restaurant
          </button>
        </div>
        <div className="res-container">
         {filteredrestaurant.map((restaurt,index)=>(<RestaurantCard key={index} resData={restaurt} ></RestaurantCard>))}
          
        </div>
  
      </div>
  
    );
  
  }

  

  export default Body;