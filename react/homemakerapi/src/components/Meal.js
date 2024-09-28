import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";
const Meal = () => {
    const [search,setSearch]=useState();
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
   
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     const searchRecipe=(evt)=>{
         setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }


    // const handleItemClick = (item) => {
    //     if (item.videoUrl) {
    //         window.open(item.videoUrl, 'google.com','_blank');
    //     } else if (item.description) {
    //         alert('hello');
    //     }
    // }

    

return (
    <>
        <div className="main">
            <div className="heading">
                <h1>Search Your Food Recipe</h1>
                <h4>First, we eat.Then, we do everything else</h4>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" onChange={e=> setSearch(e.target.value)} onKeyPress={searchRecipe}/>
            </div>
            <div className="container">
                {
                    show ?<MealItem data={item} onClick={(item)
                        
                    } /> :"Not Found"
                
                }
            </div>
            <div className="indexContainer">
                 <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>
            
        </div>
    </>
)
}
export default Meal;

// import React, { useState, useEffect } from "react";
// import MealItem from "./MealItem";
// import ReacipeIndex from "./RecipeIndex";

// const Meal = () => {
//   const [search, setSearch] = useState("");
//   const [show, setShow] = useState(false);
//   const [item, setItem] = useState([]);
//   const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setItem(data.meals);
//         setShow(true);
//       });
//   }, [url]);

//   const searchRecipe = (evt) => {
//     setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
//   };

//   const setIndex = (alpha) => {
//     setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
//   };

//   const handleItemClick = (itemData) => {
//     if (itemData.strYoutube) {
//       window.open(`https://www.youtube.com/watch?v=${itemData.strYoutube}`, '_blank');
//     } else if (itemData.strInstructions) {
//       alert(itemData.strInstructions);
//     }
//   };

//   return (
//     <>
//       <div className="main">
//         <div className="heading">
//           <h1>Search Your Food Recipe</h1>
//           <h4>First, we eat.Then, we do everything else</h4>
//         </div>
//         <div className="searchBox">
//           <input
//             type="search"
//             className="search-bar"
//             onChange={(e) => setSearch(e.target.value)}
//             onKeyPress={searchRecipe}
//           />
//         </div>
//         <div className="container">
//           {show ? (
//             item.map((itemData) => (
//               <MealItem key={itemData.idMeal} data={itemData} onClick={() => handleItemClick(itemData)} />
//             ))
//           ) : (
//             "Not Found"
//           )}
//         </div>
//         <div className="indexContainer">
//           <ReacipeIndex alphaIndex={(alpha) => setIndex(alpha)} />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Meal;