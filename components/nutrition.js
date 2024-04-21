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

    
    return (
        <div 
            className="mx-auto p-4 bg-white shadow-lg rounded-lg text-black overflow-hidden"
            style={{ width: "300px" }}
        >
            <h2 className="font-bold text-lg">Nutrition Facts</h2>
            <h3>per 100g of {ingredient}</h3>
            <hr className="my-2" />
    
            <div className="flex justify-between">
                <strong>Calories:</strong>
                <span>{nutritionData.calories}</span>
            </div>
            <hr className="my-2" />
    
            <div className="flex justify-between">
                <strong>Total Fat:</strong>
                <span>{nutritionData.totalNutrients.FAT.quantity.toFixed(0)}g</span>
            </div>
            {nutritionData.totalNutrients.FASAT && (
                <div className="flex justify-between pl-4">
                    <strong>Saturated Fat:</strong>
                    <span>{nutritionData.totalNutrients.FASAT.quantity.toFixed(0)}g</span>
                </div>
            )}
            {nutritionData.totalNutrients.FATRN && (
                <div className="flex justify-between pl-4">
                    <strong>Trans Fat:</strong>
                    <span>{nutritionData.totalNutrients.FATRN.quantity.toFixed(0)}g</span>
                </div>
            )}
            <hr className="my-2" />
    
            {nutritionData.totalNutrients.CHOCDF && (
                <div className="flex justify-between">
                    <strong>Total Carbohydrates:</strong>
                    <span>{nutritionData.totalNutrients.CHOCDF.quantity.toFixed(0)}g</span>
                </div>
            )}
            {nutritionData.totalNutrients.FIBTG && (
                <div className="flex justify-between pl-4">
                    Dietary Fiber:
                    <span>{nutritionData.totalNutrients.FIBTG.quantity.toFixed(0)}g</span>
                </div>
            )}
            {nutritionData.totalNutrients.SUGAR && (
                <div className="flex justify-between pl-4">
                    Total Sugars:
                    <span>{nutritionData.totalNutrients.SUGAR.quantity.toFixed(0)}g</span>
                </div>
            )}
            <hr className="my-2" />
    
            {nutritionData.totalNutrients.PROCNT && (
                <div className="flex justify-between">
                    <strong>Protein:</strong>
                    <span>{nutritionData.totalNutrients.PROCNT.quantity.toFixed(0)}g</span>
                </div>
            )}
            <hr className="my-2" />
    
            {nutritionData.totalNutrients.CHOLE && (
                <div className="flex justify-between">
                    <strong>Cholesterol:</strong>
                    <span>{nutritionData.totalNutrients.CHOLE.quantity.toFixed(0)}mg</span>
                </div>
            )}
            {nutritionData.totalNutrients.NA && (
                <div className="flex justify-between">
                    <strong>Sodium:</strong>
                    <span>{nutritionData.totalNutrients.NA.quantity.toFixed(0)}mg</span>
                </div>
            )}
            {nutritionData.totalNutrients.FE && (
                <div className="flex justify-between">
                    <strong>Iron:</strong>
                    <span>{nutritionData.totalNutrients.FE.quantity.toFixed(0)}mg</span>
                </div>
            )}
            {nutritionData.totalNutrients.CA && (
                <div className="flex justify-between">
                    <strong>Calcium:</strong>
                    <span>{nutritionData.totalNutrients.CA.quantity.toFixed(0)}mg</span>
                </div>
            )}
        </div>
    );
    
}
