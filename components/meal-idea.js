"use client";

import { useState, useEffect } from "react";
import NutritionLabel from "@/components/recipe-label";


async function fetchMealIdeas(ingredient) {
    const APP_ID = '00250296';        
    const APP_KEY = '96dc54581b35cd7894b164cb3670d0db';
    
    try{
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`);
        const data = await response.json();
        return data.hits;
    }
    catch(error){
        console.error("Error", error);
    }
}

export default function MealIdeas({ingredient}) {

    const [expandedId, setExpandedId] = useState(null);
    const [meals, setMeals] = useState(null);

    async function LoadMealIdeas() {
        if (ingredient) { 
            const mealsData = await fetchMealIdeas(ingredient);
            setMeals(mealsData || []); 
        }
    }

// toggles level of detail displayed for each item
function toggleItemDetail(index) {
    setExpandedId(expandedId === index ? null : index); 
}
    

    useEffect(() => {LoadMealIdeas()}, [ingredient]);

    return (
        <div className="flex flex-col min-h-screen overflow-auto m-2">
            <h2 className="flex font-bold text-xl justify-center">Recipe Ideas</h2>
            <div>
                {meals === null ? (
                    <p>Select an ingredient to show meal ideas</p>
                ) : meals.length === 0 ? (
                    <p>No meals found for {ingredient}.</p>
                ) : (
                    <>
                        <p className="p-2">Here are some recipe ideas using {ingredient}:</p>
                        <ul>
                            {meals.map((meal, index) => (
                                <li key={meal.recipe.uri}
                                    className={`border-2 p-2 m-1 ${expandedId === index ? '' : 'border-sky-300 hover:bg-sky-500 cursor-pointer'}`}
                                    onClick={() => toggleItemDetail(index)}
                                >
                                    {meal.recipe.label}
                                    {expandedId === index && (
                                        <div>
                                            <ul>
                                                {meal.recipe.ingredientLines.map((line, idx) => (
                                                    <li key={idx}>{line}</li>
                                                ))}
                                            </ul>
                                            <a className="underline text-sky-400" href={meal.recipe.url} target="_blank" rel="noopener noreferrer">Recipe</a>
                                            {meal.recipe.totalNutrients ? (
                                                <NutritionLabel nutritionData={meal.recipe}/>
                                            ) : (
                                                <p>No nutrition data available.</p>
                                            )}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
}