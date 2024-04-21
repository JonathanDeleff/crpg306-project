import { useState, useEffect } from "react";

const APP_ID = '02eab7e1';
const APP_KEY = '6e01e00e10d9b17ee196df5a6e6b0cd5';

async function fetchNutrition(ingredient) {
    try {
        const url = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&nutrition-type=cooking&ingr=100g%20${ingredient}`;
        const response = await fetch(url);
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error("Error fetching nutrition data: ", error);
    }
}

export default function Nutrition({ ingredient }) {
    const [nutritionData, setNutritionData] = useState(null);

    useEffect(() => {
        if (ingredient) {
            fetchNutrition(ingredient).then(setNutritionData);
        }
    }, [ingredient]);

    if (!nutritionData) {
        return <p>Select an ingredient to show nutrition facts.</p>;
    }

    const { calories, totalNutrients } = nutritionData;
    return (
        <div className="mx-auto p-4 bg-white max-w-md shadow-lg rounded-lg text-black overflow-hidden">
            <h2 className="font-bold text-lg">Nutrition Facts</h2>
            <h3 className="font-bold">{ingredient}</h3>
            <hr className="my-2" />
            <div>
                <strong className="block">Amount Per 100g</strong>
            </div>
            <div className="flex justify-between">
                <strong>Calories</strong> {nutritionData.calories}
            </div>
            <hr className="my-2" />
            {nutritionData.totalNutrients.FAT && (
                <div className="flex justify-between">
                    <strong>Total Fat</strong> {nutritionData.totalNutrients.FAT.quantity.toFixed(2)}g
                </div>
            )}
            {nutritionData.totalNutrients.SUGAR && (
                <div className="flex justify-between">
                    <strong>Sugar</strong> {nutritionData.totalNutrients.SUGAR.quantity.toFixed(2)}g
                </div>
            )}
            {nutritionData.totalNutrients.PROCNT && (
                <div className="flex justify-between">
                    <strong>Protein</strong> {nutritionData.totalNutrients.PROCNT.quantity.toFixed(2)}g
                </div>
            )}
        </div>
    );
}
