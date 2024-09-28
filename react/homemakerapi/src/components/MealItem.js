import React from "react";
import {useHistory} from "react-router-dom";
const MealItem=({data})=>{
    console.log(data);
    let history =useHistory();  //useNavigate();
    return(
        <>  
            {
                (!data) ?"Not Found": data.map(item=>{
                    return(
                    <div className="card" key={item.idMeal} onClick={()=>history.push(`/${item.idMeal}`)}>
                        <img src={item.strMealThumb} alt="" />
                        <h3>{item.strMeal}</h3>
                    </div>
                    )
                })
            }
            
        </>
    )
}
export default MealItem;