const Restaurent = (props) =>{
    const {resData} = props;
   const {cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
    } 
    = resData?.info;
    return(
        <div className="res-body">
          <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
          <h3>{name}</h3>
          <h3>{cuisines.join(", ")}</h3>
          <h3>{avgRating}</h3>
          <h3>{costForTwo}</h3>
        </div>
    );
}

export default Restaurent;