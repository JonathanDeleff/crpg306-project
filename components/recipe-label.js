import React from 'react';

function NutritionLabel({ nutritionData }) {
    return (
        <div 
            className="mx-auto mt-2 p-4 bg-white shadow-lg rounded-lg text-black overflow-hidden"
            style={{ width: "300px" }}
        >
            <h2 className="font-bold text-lg">Nutrition Facts</h2>
            <p>per recipe</p>
            <hr className="my-2" />

            <div className="flex justify-between">
                <strong>Calories:</strong>
                <span>{nutritionData.totalNutrients.ENERC_KCAL.quantity.toFixed(0)} kcal</span>
            </div>
            <hr className="my-2" />

            <div className="flex justify-between">
                <strong>Total Fat:</strong>
                <span>{nutritionData.totalNutrients.FAT.quantity.toFixed(0)}g</span>
            </div>
            <div className="flex justify-between pl-4">
                Saturated Fat:
                <span>{nutritionData.totalNutrients.FASAT.quantity.toFixed(0)}g</span>
            </div>
            <div className="flex justify-between pl-4">
                Monounsaturated Fat:
                <span>{nutritionData.totalNutrients.FAMS.quantity.toFixed(0)}g</span>
            </div>
            <div className="flex justify-between pl-4">
                Polyunsaturated Fat:
                <span>{nutritionData.totalNutrients.FAPU.quantity.toFixed(0)}g</span>
            </div>
            <hr className="my-2" />

            <div className="flex justify-between">
                <strong>Total Carbohydrates:</strong>
                <span>{nutritionData.totalNutrients.CHOCDF.quantity.toFixed(0)}g</span>
            </div>
            <div className="flex justify-between pl-4">
                Dietary Fiber:
                <span>{nutritionData.totalNutrients.FIBTG.quantity.toFixed(1)}g</span>
            </div>
            <div className="flex justify-between pl-4">
                Total Sugars:
                <span>{(nutritionData.totalNutrients.CHOCDF.quantity).toFixed(1)}g</span>
            </div>
            <hr className="my-2" />

            <div className="flex justify-between">
                <strong>Protein:</strong>
                <span>{nutritionData.totalNutrients.PROCNT.quantity.toFixed(0)}g</span>
            </div>
            <hr className="my-2" />

            <div className="flex justify-between">
                <strong>Cholesterol:</strong>
                <span>{nutritionData.totalNutrients.CHOLE.quantity.toFixed(0)}mg</span>
            </div>
            <div className="flex justify-between">
                <strong>Sodium:</strong>
                <span>{nutritionData.totalNutrients.NA.quantity.toFixed(0)}mg</span>
            </div>
            <div className="flex justify-between">
                <strong>Calcium:</strong>
                <span>{nutritionData.totalNutrients.CA.quantity.toFixed(0)}mg</span>
            </div>
            <div className="flex justify-between">
                <strong>Iron:</strong>
                <span>{nutritionData.totalNutrients.FE.quantity.toFixed(0)}mg</span>
            </div>
        </div>
    );
}

export default NutritionLabel;