"use client"
import { useState } from "react";

export const NewItem = ({onSubmit}) => {
    
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState("produce") 

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {name, quantity, category}
        console.log(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`)
        onSubmit(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
        
    }
    
    return (
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            <input 
                type="text" 
                value={name} 
                placeholder="Enter item name" 
                required
                onChange={(event) => setName(event.target.value)} 
                className="text-black border-2 border-sky-300 p-1 bg-slate-100"
            />
            <div className="flex flex-row gap-1">
                <input 
                    type="number"
                    value={quantity} 
                    min={1} 
                    max={99}
                    required
                    onChange={(event) => setQuantity(event.target.value)} 
                    className="text-black border-2 border-sky-300 p-1 w-16 bg-slate-100"               
                />
                
                <select 
                    id="dropdown" 
                    value={category}
                    onChange={(event) => setCategory(event.target.value)} 
                    className="text-black border-2 border-sky-300 bg-slate-100 p-1 w-60"

                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button className="bg-sky-500 text-black rounded-lg h-10" type="submit">Add Item</button>
        </form>
      </div>  
    )
}