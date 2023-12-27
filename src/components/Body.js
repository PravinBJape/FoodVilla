import RestaurantCard from "./RestaurantCard"
import resList from "../resList";

const Body  =()=>{
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
         {resList.map((restaurt,index)=>(<RestaurantCard key={index} resData={restaurt} ></RestaurantCard>))}
          
        </div>
  
      </div>
  
    );
  
  }

  

  export default Body;