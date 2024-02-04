import React, {useState} from "react";

function Components() {
 const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

 function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
                    document.getElementById("foodInput").value = "";
    setFoods((prevFoods) => [...prevFoods, newFood]);
 }

 function handleRemoveFood(index) {
    setFoods(foods.filter((element, i ) => i !== index ));
 }

 return (<div>
          <h1>List of Foods</h1>
          <ul>
              {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)} >{food}</li>)}
          </ul>

          <input id="foodInput" type="text" placeholder="Enter Food Name"/>
          <button onClick={handleAddFood}>Add Food</button>
        </div>);
}

export default Components;