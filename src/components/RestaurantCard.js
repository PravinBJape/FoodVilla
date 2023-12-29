const RestaurantCard=(props)=>{
    const{resData}=props.resData;
     return(
       <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
         <img className="card-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.resData.info.cloudinaryImageId}></img>
   
         <h3>{props.resData.info.name}</h3>
         <h4><wrap>{props.resData.info.cuisines.join(",")}</wrap></h4>
         <h4>{props.resData.info.avgRating} Stars</h4>
         <h4>${props.resData.info.costForTwo}</h4>
         <h4>{props.resData.info.sla.deliveryTime} minutes</h4>
   
       </div>
     );
   }
   export default RestaurantCard;